'use client'

import Link from 'next/link'
import { Shield, FileText, AlertTriangle, Minimize2, Bell, DollarSign, Home } from 'lucide-react'

export default function Overview() {
  const pillars = [
    {
      id: 'legal-institutional',
      name: 'Legal and Institutional Framework',
      description: 'Assessment of legal frameworks and institutional arrangements for DRM',
      icon: FileText,
      color: 'bg-blue-500',
      href: '/pillars/legal-institutional'
    },
    {
      id: 'risk-identification',
      name: 'Risk Identification',
      description: 'Evaluation of risk assessment and hazard identification systems',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
      href: '/pillars/risk-identification'
    },
    {
      id: 'risk-reduction',
      name: 'Risk Reduction',
      description: 'Assessment of risk reduction strategies and implementation',
      icon: Minimize2,
      color: 'bg-green-500',
      href: '/pillars/risk-reduction'
    },
    {
      id: 'emergency-preparedness',
      name: 'Emergency Preparedness',
      description: 'Evaluation of emergency response and preparedness capabilities',
      icon: Bell,
      color: 'bg-red-500',
      href: '/pillars/emergency-preparedness'
    },
    {
      id: 'financial-protection',
      name: 'Financial Protection',
      description: 'Assessment of financial mechanisms and disaster risk financing',
      icon: DollarSign,
      color: 'bg-purple-500',
      href: '/pillars/financial-protection'
    },
    {
      id: 'resilient-reconstruction',
      name: 'Resilient Reconstruction',
      description: 'Evaluation of post-disaster recovery and reconstruction frameworks',
      icon: Home,
      color: 'bg-indigo-500',
      href: '/pillars/resilient-reconstruction'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Cat DDO Roadmap Assessment Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluate your country's institutional setting for Disaster Risk Management 
            across six critical pillars
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Assessment</h2>
          <p className="text-gray-600 mb-4">
            This tool helps evaluate the maturity and effectiveness of disaster risk management 
            frameworks across six key pillars. Each pillar contains specific questions designed 
            to assess institutional capacity, regulatory frameworks, and operational readiness.
          </p>
          <p className="text-gray-600">
            Navigate through each pillar to complete the assessment, then view comprehensive 
            results and recommendations on the Results page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4"
                style={{ borderTopColor: pillar.color.replace('bg-', '#') }}
              >
                <div className={`${pillar.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {pillar.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {pillar.description}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/results"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View Results & Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
