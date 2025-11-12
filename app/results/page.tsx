'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, Home, ArrowLeft, PieChart as PieChartIcon, Activity } from 'lucide-react'
import { pillarsData, getAllQuestions } from '@/lib/pillarsData'
import { useLocalStorage } from '@/lib/useLocalStorage'
import PlanetaryDoughnut from '@/app/components/PlanetaryDoughnut'
import PlanetaryRadar from '@/app/components/PlanetaryRadar'

export default function Results() {
  const [responses, setResponses, isLoaded] = useLocalStorage<Record<string, string>>('drm-responses', {})
  const [chartView, setChartView] = useState<'doughnut' | 'radar'>('doughnut')

  const calculatePillarScore = (pillarId: string) => {
    const pillar = pillarsData.find(p => p.id === pillarId)
    if (!pillar) return { total: 0, answered: 0, yes: 0, percentage: 0 }

    let total = 0
    let answered = 0
    let yesCount = 0

    pillar.subPillars.forEach(subPillar => {
      subPillar.questions.forEach(q => {
        total++
        if (responses[q.code]) {
          answered++
          if (responses[q.code] === 'yes') {
            yesCount++
          }
        }
      })
    })

    return {
      total,
      answered,
      yes: yesCount,
      percentage: total > 0 ? Math.round((yesCount / total) * 100) : 0
    }
  }

  const getMaturityLevel = (percentage: number) => {
    if (percentage >= 75) return { level: 'Advanced', color: 'bg-green-500', textColor: 'text-green-700' }
    if (percentage >= 50) return { level: 'Established', color: 'bg-blue-500', textColor: 'text-blue-700' }
    if (percentage >= 25) return { level: 'Emerging', color: 'bg-yellow-500', textColor: 'text-yellow-700' }
    return { level: 'Nascent', color: 'bg-red-500', textColor: 'text-red-700' }
  }

  const calculateOverallScore = () => {
    const allQuestions = getAllQuestions()
    const answered = allQuestions.filter(q => responses[q.code] !== undefined).length
    const yesCount = allQuestions.filter(q => responses[q.code] === 'yes').length
    
    return {
      total: allQuestions.length,
      answered,
      yes: yesCount,
      percentage: allQuestions.length > 0 ? Math.round((yesCount / allQuestions.length) * 100) : 0,
      completionRate: allQuestions.length > 0 ? Math.round((answered / allQuestions.length) * 100) : 0
    }
  }

  const exportToCSV = () => {
    let csv = 'Pillar,Sub-Pillar,Question Code,Question,Response\n'
    
    pillarsData.forEach(pillar => {
      pillar.subPillars.forEach(subPillar => {
        subPillar.questions.forEach(q => {
          const response = responses[q.code] || 'Not Answered'
          csv += `"${pillar.name}","${subPillar.name}","${q.code}","${q.text}","${response}"\n`
        })
      })
    })

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `drm_assessment_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const exportDetailedReport = () => {
    let report = 'DRM ASSESSMENT DETAILED REPORT\n'
    report += '================================\n\n'
    
    const overall = calculateOverallScore()
    report += `Overall Achievement: ${overall.percentage}%\n`
    report += `Completion Rate: ${overall.completionRate}%\n`
    report += `Questions Answered: ${overall.answered} of ${overall.total}\n`
    report += `Positive Responses: ${overall.yes}\n\n`
    
    pillarsData.forEach(pillar => {
      const score = calculatePillarScore(pillar.id)
      const maturity = getMaturityLevel(score.percentage)
      
      report += `\n${pillar.name}\n`
      report += `${'='.repeat(pillar.name.length)}\n`
      report += `Achievement: ${score.percentage}% | Maturity: ${maturity.level}\n`
      report += `Positive: ${score.yes}/${score.total} | Answered: ${score.answered}/${score.total}\n\n`
      
      pillar.subPillars.forEach(subPillar => {
        report += `  ${subPillar.name}\n`
        report += `  ${'-'.repeat(subPillar.name.length)}\n`
        
        subPillar.questions.forEach(q => {
          const response = responses[q.code] || 'Not Answered'
          report += `  ${q.code}: ${response.toUpperCase()}\n`
          report += `    ${q.text}\n\n`
        })
      })
    })

    const blob = new Blob([report], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `drm_detailed_report_${new Date().toISOString().split('T')[0]}.txt`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  const overall = calculateOverallScore()
  const overallMaturity = getMaturityLevel(overall.percentage)

  // Prepare data for Doughnut chart
  const pillarColors = {
    'legal-institutional': '#3b82f6',
    'risk-identification': '#eab308',
    'risk-reduction': '#22c55e',
    'preparedness': '#ef4444',
    'financial-protection': '#a855f7',
    'resilient-reconstruction': '#6366f1'
  }

  const doughnutData = pillarsData.map(pillar => {
    const score = calculatePillarScore(pillar.id)
    return {
      name: pillar.name,
      value: score.percentage,
      color: pillarColors[pillar.id as keyof typeof pillarColors] || '#6b7280',
      percentage: score.percentage
    }
  })

  // Prepare data for Radar chart
  const radarData = pillarsData.map(pillar => {
    const score = calculatePillarScore(pillar.id)
    // Abbreviate pillar names for better display
    const abbreviations: { [key: string]: string } = {
      'legal-institutional': 'Legal & Inst.',
      'risk-identification': 'Risk ID',
      'risk-reduction': 'Risk Reduction',
      'preparedness': 'Preparedness',
      'financial-protection': 'Financial',
      'resilient-reconstruction': 'Reconstruction'
    }
    return {
      pillar: abbreviations[pillar.id] || pillar.name,
      fullName: pillar.name,
      achievement: score.percentage,
      target: 75 // Target threshold for advanced maturity
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Home size={20} />
              <span>Overview</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Assessment Results</h1>
            <div className="flex gap-2">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
              >
                <Download size={16} />
                CSV
              </button>
              <button
                onClick={exportDetailedReport}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
              >
                <Download size={16} />
                Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{overall.percentage}%</div>
              <div className="text-blue-100">Overall Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{overall.completionRate}%</div>
              <div className="text-blue-100">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{overall.yes}</div>
              <div className="text-blue-100">Positive Responses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{overallMaturity.level}</div>
              <div className="text-blue-100">Overall Maturity</div>
            </div>
          </div>
        </div>

        {/* Planetary Boundaries Style Visualization */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">DRM Assessment Overview</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setChartView('doughnut')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                  chartView === 'doughnut' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <PieChartIcon size={16} />
                Doughnut
              </button>
              <button
                onClick={() => setChartView('radar')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                  chartView === 'radar' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Activity size={16} />
                Radar
              </button>
            </div>
          </div>
          
          <div className="h-96 md:h-[500px]">
            {chartView === 'doughnut' ? (
              <PlanetaryDoughnut 
                data={doughnutData}
                centerText="Overall DRM Achievement"
                centerValue={`${overall.percentage}%`}
              />
            ) : (
              <PlanetaryRadar data={radarData} />
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {pillarsData.map(pillar => (
              <div key={pillar.id} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: pillarColors[pillar.id as keyof typeof pillarColors] }}
                />
                <span className="text-sm text-gray-700">{pillar.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pillarsData.map(pillar => {
            const score = calculatePillarScore(pillar.id)
            const maturity = getMaturityLevel(score.percentage)
            
            return (
              <Link
                key={pillar.id}
                href={`/pillars/${pillar.id}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4"
                style={{ borderLeftColor: maturity.color.replace('bg-', '#') }}
              >
                <h3 className="font-bold text-lg mb-3 text-gray-800">{pillar.name}</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Achievement</span>
                    <span className="font-bold text-gray-800">{score.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${maturity.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${score.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Positive responses:</span>
                    <span className="font-semibold text-gray-800">{score.yes} of {score.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Answered:</span>
                    <span className="font-semibold text-gray-800">{score.answered} of {score.total}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <span className={`font-bold ${maturity.textColor}`}>
                      Maturity: {maturity.level}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Maturity Levels Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
              <div className="w-16 h-6 bg-red-500 rounded flex-shrink-0"></div>
              <div>
                <div className="font-bold text-gray-800">Nascent (0-24%)</div>
                <div className="text-sm text-gray-600">Limited or no framework in place</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
              <div className="w-16 h-6 bg-yellow-500 rounded flex-shrink-0"></div>
              <div>
                <div className="font-bold text-gray-800">Emerging (25-49%)</div>
                <div className="text-sm text-gray-600">Basic framework exists, needs strengthening</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
              <div className="w-16 h-6 bg-blue-500 rounded flex-shrink-0"></div>
              <div>
                <div className="font-bold text-gray-800">Established (50-74%)</div>
                <div className="text-sm text-gray-600">Solid framework with room for improvement</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
              <div className="w-16 h-6 bg-green-500 rounded flex-shrink-0"></div>
              <div>
                <div className="font-bold text-gray-800">Advanced (75-100%)</div>
                <div className="text-sm text-gray-600">Comprehensive and well-implemented framework</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Recommendations</h2>
          <div className="space-y-4">
            {pillarsData.map(pillar => {
              const score = calculatePillarScore(pillar.id)
              const maturity = getMaturityLevel(score.percentage)
              
              if (score.percentage < 50) {
                return (
                  <div key={pillar.id} className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <h3 className="font-bold text-gray-800 mb-2">{pillar.name}</h3>
                    <p className="text-sm text-gray-600">
                      Current maturity: <span className="font-semibold">{maturity.level}</span> ({score.percentage}%)
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Priority area for improvement. Consider strengthening regulatory frameworks, 
                      institutional capacity, and operational procedures in this pillar.
                    </p>
                  </div>
                )
              }
              return null
            })}
            {pillarsData.every(pillar => calculatePillarScore(pillar.id).percentage >= 50) && (
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  All pillars show established or advanced maturity levels. Continue monitoring and 
                  maintaining high standards across all DRM components.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
