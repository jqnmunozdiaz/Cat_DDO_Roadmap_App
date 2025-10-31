export interface Question {
  code: string
  text: string
}

export interface SubPillar {
  id: string
  name: string
  description: string
  questions: Question[]
}

export interface Pillar {
  id: string
  name: string
  description: string
  subPillars: SubPillar[]
}

export const pillarsData: Pillar[] = [
  {
    id: 'legal-institutional',
    name: 'Legal and Institutional Framework',
    description: 'Assessment of legal frameworks and institutional arrangements for DRM',
    subPillars: [
      {
        id: 'legal-1',
        name: 'Legal Framework',
        description: 'Evaluation of legal and regulatory frameworks',
        questions: [
          { code: 'LI-1-1', text: 'Is there a comprehensive DRM law in place?' },
          { code: 'LI-1-2', text: 'Does the legal framework define clear institutional responsibilities?' },
          { code: 'LI-1-3', text: 'Are there regulations for inter-agency coordination in DRM?' },
          { code: 'LI-1-4', text: 'Is there legal provision for DRM budget allocation?' },
          { code: 'LI-1-5', text: 'Does the law mandate risk assessments for development projects?' }
        ]
      },
      {
        id: 'legal-2',
        name: 'Institutional Arrangements',
        description: 'Assessment of institutional capacity and coordination',
        questions: [
          { code: 'LI-2-1', text: 'Is there a designated national DRM agency or focal point?' },
          { code: 'LI-2-2', text: 'Are roles and responsibilities clearly defined across agencies?' },
          { code: 'LI-2-3', text: 'Is there a functional inter-ministerial coordination mechanism?' },
          { code: 'LI-2-4', text: 'Are local governments empowered for DRM activities?' },
          { code: 'LI-2-5', text: 'Is there regular training for DRM personnel?' }
        ]
      }
    ]
  },
  {
    id: 'risk-identification',
    name: 'Risk Identification',
    description: 'Evaluation of risk assessment and hazard identification systems',
    subPillars: [
      {
        id: 'risk-id-1',
        name: 'Hazard Assessment',
        description: 'Evaluation of hazard mapping and assessment capabilities',
        questions: [
          { code: 'RI-1-1', text: 'Are comprehensive hazard maps available for major hazards?' },
          { code: 'RI-1-2', text: 'Are hazard assessments regularly updated?' },
          { code: 'RI-1-3', text: 'Is there a multi-hazard risk assessment framework?' },
          { code: 'RI-1-4', text: 'Are climate change projections integrated into hazard assessments?' },
          { code: 'RI-1-5', text: 'Is hazard data publicly accessible?' }
        ]
      },
      {
        id: 'risk-id-2',
        name: 'Vulnerability and Exposure Analysis',
        description: 'Assessment of vulnerability and exposure mapping',
        questions: [
          { code: 'RI-2-1', text: 'Are vulnerability assessments conducted regularly?' },
          { code: 'RI-2-2', text: 'Is exposure data available for critical infrastructure?' },
          { code: 'RI-2-3', text: 'Are socio-economic vulnerabilities systematically assessed?' },
          { code: 'RI-2-4', text: 'Is there a national database of assets at risk?' },
          { code: 'RI-2-5', text: 'Are vulnerability assessments used in planning processes?' }
        ]
      }
    ]
  },
  {
    id: 'risk-reduction',
    name: 'Risk Reduction',
    description: 'Assessment of risk reduction strategies and implementation',
    subPillars: [
      {
        id: 'risk-red-1',
        name: 'Structural Measures',
        description: 'Evaluation of structural risk reduction measures',
        questions: [
          { code: 'RR-1-1', text: 'Are building codes enforced for disaster resilience?' },
          { code: 'RR-1-2', text: 'Is there a program for retrofitting critical infrastructure?' },
          { code: 'RR-1-3', text: 'Are structural flood protection measures in place?' },
          { code: 'RR-1-4', text: 'Is land use planning enforced in high-risk areas?' },
          { code: 'RR-1-5', text: 'Are early warning systems installed and maintained?' }
        ]
      },
      {
        id: 'risk-red-2',
        name: 'Non-Structural Measures',
        description: 'Assessment of non-structural risk reduction approaches',
        questions: [
          { code: 'RR-2-1', text: 'Are public awareness campaigns conducted regularly?' },
          { code: 'RR-2-2', text: 'Is DRM education integrated into school curricula?' },
          { code: 'RR-2-3', text: 'Are community-based DRM programs active?' },
          { code: 'RR-2-4', text: 'Are ecosystem-based approaches used for risk reduction?' },
          { code: 'RR-2-5', text: 'Is there a mechanism for incorporating traditional knowledge?' }
        ]
      }
    ]
  },
  {
    id: 'emergency-preparedness',
    name: 'Emergency Preparedness',
    description: 'Evaluation of emergency response and preparedness capabilities',
    subPillars: [
      {
        id: 'emergency-1',
        name: 'Response Planning',
        description: 'Assessment of emergency response plans and protocols',
        questions: [
          { code: 'EP-1-1', text: 'Are comprehensive emergency response plans in place?' },
          { code: 'EP-1-2', text: 'Are response plans regularly tested through drills?' },
          { code: 'EP-1-3', text: 'Is there a clear command and control structure?' },
          { code: 'EP-1-4', text: 'Are evacuation plans established for high-risk areas?' },
          { code: 'EP-1-5', text: 'Is there coordination with neighboring countries for cross-border disasters?' }
        ]
      },
      {
        id: 'emergency-2',
        name: 'Response Capacity',
        description: 'Evaluation of operational capacity and resources',
        questions: [
          { code: 'EP-2-1', text: 'Are emergency supplies and equipment pre-positioned?' },
          { code: 'EP-2-2', text: 'Is there sufficient trained emergency response personnel?' },
          { code: 'EP-2-3', text: 'Are communication systems resilient and redundant?' },
          { code: 'EP-2-4', text: 'Is there a functional emergency operations center?' },
          { code: 'EP-2-5', text: 'Are search and rescue capabilities adequately equipped?' }
        ]
      }
    ]
  },
  {
    id: 'financial-protection',
    name: 'Financial Protection',
    description: 'Assessment of financial mechanisms and disaster risk financing',
    subPillars: [
      {
        id: 'financial-1',
        name: 'Disaster Risk Financing',
        description: 'Evaluation of financial instruments and mechanisms',
        questions: [
          { code: 'FP-1-1', text: 'Is there a dedicated disaster contingency fund?' },
          { code: 'FP-1-2', text: 'Are sovereign disaster risk insurance mechanisms in place?' },
          { code: 'FP-1-3', text: 'Is there access to contingent credit facilities?' },
          { code: 'FP-1-4', text: 'Are catastrophe bonds or similar instruments utilized?' },
          { code: 'FP-1-5', text: 'Is there a strategy for post-disaster budget reallocation?' }
        ]
      },
      {
        id: 'financial-2',
        name: 'Insurance and Social Protection',
        description: 'Assessment of insurance penetration and social safety nets',
        questions: [
          { code: 'FP-2-1', text: 'Is disaster insurance available and affordable to citizens?' },
          { code: 'FP-2-2', text: 'Are agricultural insurance schemes in place?' },
          { code: 'FP-2-3', text: 'Is there insurance coverage for public assets?' },
          { code: 'FP-2-4', text: 'Are social protection programs shock-responsive?' },
          { code: 'FP-2-5', text: 'Is there financial assistance for uninsured disaster victims?' }
        ]
      }
    ]
  },
  {
    id: 'resilient-reconstruction',
    name: 'Resilient Reconstruction',
    description: 'Evaluation of post-disaster recovery and reconstruction frameworks',
    subPillars: [
      {
        id: 'rc-1a',
        name: 'Recovery Framework Prepared',
        description: 'Frameworks for post-disaster recovery and reconstruction',
        questions: [
          { code: 'RC-1A-1', text: 'Are there regulations on post-disaster recovery that define the state\'s responsibility for this process?' },
          { code: 'RC-1A-2', text: 'Are there regulations that establish the recovery of livelihoods as a purpose of post-disaster recovery?' },
          { code: 'RC-1A-3', text: 'Are there regulations that establish institutional schemes for the coordination of post-disaster reconstruction?' },
          { code: 'RC-1A-4', text: 'Are there regulations that establish studies on the causes of disasters in order to guide a recovery that prevents the return of the pre-existing risk conditions?' },
          { code: 'RC-1A-5', text: 'Are there regulations mandating the formulation of post-disaster recovery plans that explicitly seek to reduce pre-existing vulnerability?' },
          { code: 'RC-1A-6', text: 'Are there regulations mandating the ex-ante formulation of post-disaster recovery plans?' },
          { code: 'RC-1A-7', text: 'Are there regulations that state that post-disaster recovery plans should define the duration of the phase that will support the restoration of livelihoods?' },
          { code: 'RC-1A-8', text: 'Are there regulations that state that post-disaster recovery plans must define the length of time in which affected homes must be repaired or rebuilt?' }
        ]
      },
      {
        id: 'rc-1b',
        name: 'Sectoral Recovery Responsibilities',
        description: 'Guidelines and policies for damage and needs assessments',
        questions: [
          { code: 'RC-1B-1', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the environmental sector regulations?' },
          { code: 'RC-1B-2', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the agriculture sector regulations?' },
          { code: 'RC-1B-3', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the health sector regulations?' },
          { code: 'RC-1B-4', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the housing sector regulations?' },
          { code: 'RC-1B-5', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the education sector regulations?' },
          { code: 'RC-1B-6', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the tourism sector regulations?' },
          { code: 'RC-1B-7', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the transport sector regulations?' },
          { code: 'RC-1B-8', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the water and sanitation sector regulations?' },
          { code: 'RC-1B-9', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the telecommunication sector regulations?' },
          { code: 'RC-1B-10', text: 'Are the responsibilities for carrying out post-disaster recovery preparation activities defined under the energy sector regulations?' }
        ]
      },
      {
        id: 'rc-1c',
        name: 'Development and Land Use Planning',
        description: 'Post-disaster planning adjustments',
        questions: [
          { code: 'RC-1C-1', text: 'Are there regulations governing the evaluation, revision or updating of development plans after a disaster has occurred?' },
          { code: 'RC-1C-2', text: 'Are there regulations governing the evaluation, revision or updating of land use plans after a disaster has occurred?' }
        ]
      },
      {
        id: 'rc-2',
        name: 'Sectoral Recovery Plans',
        description: 'Ex-ante recovery planning by sector',
        questions: [
          { code: 'RC-2-1', text: 'Does the Ministry of Environment have an ex-ante post-disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-2', text: 'Does the Ministry of Agriculture have an ex-ante disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-3', text: 'Does the Ministry of Health have an ex-ante post-disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-4', text: 'Does the Ministry of Housing have an ex-ante post-disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-5', text: 'Does the Ministry of Education have an ex-ante disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-6', text: 'Does the Ministry of Tourism have an ex-ante disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-7', text: 'Does the Ministry of Transport have an ex-ante disaster recovery plan for the sector that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-8', text: 'Does the water and sanitation sector have an ex-ante post-disaster recovery plan that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-9', text: 'Does the telecommunications sector have an ex-ante disaster recovery plan that has been formally approved at least within the last 5 years?' },
          { code: 'RC-2-10', text: 'Does the energy sector have an ex-ante post disaster recovery plan that has been formally approved at least within the last 5 years?' }
        ]
      },
      {
        id: 'rc-3',
        name: 'Building Back Better Principles',
        description: 'Integration of resilience and risk reduction in reconstruction',
        questions: [
          { code: 'RC-3-1', text: 'Are there regulations that establish mechanisms for the participation of civil society or social and non-governmental organizations in post-disaster recovery?' },
          { code: 'RC-3-2', text: 'Has any national controlling entity carried out at least one assessment on how the government managed the recovery process in at least one of the last 5 major disasters?' },
          { code: 'RC-3-3', text: 'In at least one of the last 5 nationally declared disaster situations, has any mechanism been activated to inform the affected population about the recovery?' },
          { code: 'RC-3-4', text: 'In at least one of the last 5 nationally declared disasters, has any community participation mechanism been activated for recovery?' }
        ]
      }
    ]
  }
]

export function getPillarById(id: string): Pillar | undefined {
  return pillarsData.find(p => p.id === id)
}

export function getAllQuestions(): Question[] {
  const questions: Question[] = []
  pillarsData.forEach(pillar => {
    pillar.subPillars.forEach(subPillar => {
      questions.push(...subPillar.questions)
    })
  })
  return questions
}
