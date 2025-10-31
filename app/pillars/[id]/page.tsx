'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Home } from 'lucide-react'
import { getPillarById, pillarsData } from '@/lib/pillarsData'
import { useLocalStorage } from '@/lib/useLocalStorage'

export default function PillarPage() {
  const params = useParams()
  const pillarId = params.id as string
  const pillar = getPillarById(pillarId)
  const [responses, setResponses, isLoaded] = useLocalStorage<Record<string, string>>('drm-responses', {})

  if (!pillar) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Pillar not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Overview
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = pillarsData.findIndex(p => p.id === pillarId)
  const previousPillar = currentIndex > 0 ? pillarsData[currentIndex - 1] : null
  const nextPillar = currentIndex < pillarsData.length - 1 ? pillarsData[currentIndex + 1] : null

  const handleResponse = (code: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [code]: value
    }))
  }

  const calculateProgress = () => {
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
      yesCount,
      percentage: total > 0 ? Math.round((yesCount / total) * 100) : 0
    }
  }

  const progress = calculateProgress()

  const ResponseButton = ({ code, value }: { code: string; value: string }) => {
    const isSelected = responses[code] === value
    const bgColor = value === 'yes' ? 'bg-green-500' : 'bg-red-500'
    
    return (
      <button
        onClick={() => handleResponse(code, value)}
        className={`px-4 py-2 rounded transition-colors ${
          isSelected 
            ? `${bgColor} text-white` 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {value === 'yes' ? (
          <CheckCircle2 className="inline mr-1" size={16} />
        ) : (
          <XCircle className="inline mr-1" size={16} />
        )}
        {value.toUpperCase()}
      </button>
    )
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Home size={20} />
              <span>Overview</span>
            </Link>
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{pillar.name}</h1>
              <p className="text-sm text-gray-600">{pillar.description}</p>
            </div>
            <Link href="/results" className="text-blue-600 hover:text-blue-700 font-medium">
              Results
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Progress</h2>
              <p className="text-gray-600">
                {progress.answered} of {progress.total} questions answered • {progress.yesCount} Yes responses
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{progress.percentage}%</div>
              <div className="text-sm text-gray-600">Achievement</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(progress.answered / progress.total) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-8">
          {pillar.subPillars.map(subPillar => (
            <div key={subPillar.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{subPillar.name}</h2>
              <p className="text-gray-600 mb-6">{subPillar.description}</p>

              <div className="space-y-4">
                {subPillar.questions.map((question) => (
                  <div key={question.code} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-sm text-blue-600 font-semibold mt-1">
                            {question.code}
                          </span>
                          <p className="text-gray-800">{question.text}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <ResponseButton code={question.code} value="yes" />
                        <ResponseButton code={question.code} value="no" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <div>
            {previousPillar ? (
              <Link
                href={`/pillars/${previousPillar.id}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft size={20} />
                <span>Previous: {previousPillar.name}</span>
              </Link>
            ) : (
              <div className="text-gray-400">No previous pillar</div>
            )}
          </div>
          <div>
            {nextPillar ? (
              <Link
                href={`/pillars/${nextPillar.id}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <span>Next: {nextPillar.name}</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <Link
                href="/results"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                <span>View Results</span>
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
