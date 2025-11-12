export interface Question {
  code: string
  text: string
  category?: 'minimum' | 'implementation' | 'output' | 'enabler'
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
    name: '1. Legal and Institutional DRM Framework',
    description: 'Assessment of legal frameworks and institutional arrangements for DRM',
    subPillars: [
      {
        id: 'drm-policies-institutions',
        name: '1.1. DRM policies and institutions',
        description: 'Legal framework, funding, and policy instruments for DRM',
        questions: [
          { 
            code: 'LI-1.1-MIN', 
            text: 'Is there a legal framework (e.g., DRM law or others) defining distinct mandates for disaster risk reduction on the one hand, and for emergency management, on the other?',
            category: 'minimum'
          },
          { 
            code: 'LI-1.1-IMP', 
            text: 'Did the institution responsible for coordinating or leading DRM activities receive dedicated funding for these functions in the last fiscal year?',
            category: 'implementation'
          },
          { 
            code: 'LI-1.1-OUT-1', 
            text: 'Since the adoption of the DRM legal framework: have DRM policy instruments (e.g., DRM strategies or policies) been officially approved?',
            category: 'output'
          },
          { 
            code: 'LI-1.1-OUT-2', 
            text: 'Since the adoption of the DRM legal framework: have DRM-related regulations (e.g., rules on the structure or functions of the DRM agency) been officially approved?',
            category: 'output'
          },
          { 
            code: 'LI-1.1-EN-1', 
            text: 'Are gender-specific considerations included in DRM legal frameworks?',
            category: 'enabler'
          },
          { 
            code: 'LI-1.1-EN-2', 
            text: 'Is climate change and its potential impact on disaster risk included in DRM legal frameworks?',
            category: 'enabler'
          },
          { 
            code: 'LI-1.1-EN-3', 
            text: 'When they exist, do climate change laws and regulations (such as climate laws or climate adaptation policy/strategies) contain disaster risk management as a target, aim, mean or result?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'mainstreaming-drm',
        name: '1.2. Mainstreaming DRM into national and sectoral development plans',
        description: 'Integration of DRM into development strategies and sectoral plans',
        questions: [
          { 
            code: 'LI-1.2-MIN', 
            text: 'Does the National Development Strategy (or equivalent national planning instrument) contain objectives, targets or indicators related to DRM and/or CCA?',
            category: 'minimum'
          },
          { 
            code: 'LI-1.2-IMP', 
            text: 'Is there a reporting or monitoring mechanism to track progress toward DRM and/or CCA targets included in the National Development Strategies?',
            category: 'implementation'
          },
          { 
            code: 'LI-1.2-OUT', 
            text: 'Since the adoption of the National Development Strategy, have at least 50% of essential government entities* included explicit DRM and/or CCA targets and indicators in their strategic planning documents?',
            category: 'output'
          },
          { 
            code: 'LI-1.2-EN', 
            text: 'Is the integration of DRM considerations into sectoral planning documents coordinated at the central level and guided by norms and clear standards?',
            category: 'enabler'
          }
        ]
      }
    ]
  },
  {
    id: 'risk-identification',
    name: '2. Risk Identification',
    description: 'Evaluation of risk assessment and hazard identification systems',
    subPillars: [
      {
        id: 'risk-info',
        name: 'Risk Information Management',
        description: 'Institutional responsibilities and availability of risk information',
        questions: [
          { 
            code: 'RI-MIN', 
            text: 'Do laws and regulations clearly define institutional responsibilities and mandates for producing, acquiring, and managing risk information (e.g., hazard information, vulnerability assessments, risk profiles, historical disaster databases)?',
            category: 'minimum'
          },
          { 
            code: 'RI-IMP-1', 
            text: 'Is the existing risk information available to government institutions (e.g., through a set of MoUs)?',
            category: 'implementation'
          },
          { 
            code: 'RI-IMP-2', 
            text: 'Is it openly available to the general public through an online platform?',
            category: 'implementation'
          },
          { 
            code: 'RI-OUT', 
            text: 'Do at least half of the essential government entities use existing risk information to inform their sectoral planning processes?',
            category: 'output'
          },
          { 
            code: 'RI-EN', 
            text: 'Do available national risk assessments or disaster risk profiles account for the potential impacts of climate change?',
            category: 'enabler'
          }
        ]
      }
    ]
  },
  {
    id: 'risk-reduction',
    name: '3. Risk Reduction',
    description: 'Assessment of risk reduction strategies and implementation',
    subPillars: [
      {
        id: 'territorial-urban-planning',
        name: '3.1. Territorial and urban planning',
        description: 'Risk-informed planning and high-risk area management',
        questions: [
          { 
            code: 'RR-3.1-MIN', 
            text: 'Do laws and regulations mandate the use of risk information (e.g., hazard maps, risk assessments...) to develop territorial, spatial, land use or urban planning instruments?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.1-IMP', 
            text: 'Do official methodologies to guide the development of risk-informed territorial, spatial, land use or urban planning instruments exist?',
            category: 'implementation'
          },
          { 
            code: 'RR-3.1-OUT', 
            text: 'Have at least 50% of the instruments (territorial, spatial, land use or urban planning) approved in the last 5 years used risk information (e.g., hazard maps, risk assessments)?',
            category: 'output'
          },
          { 
            code: 'RR-3.1-EN-1', 
            text: 'Are there specific regulations governing the identification and zoning process of high-risk areas?',
            category: 'enabler'
          },
          { 
            code: 'RR-3.1-EN-2', 
            text: 'Do guidelines or procedures for managing housing located in high-risk areas exist?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'public-investment',
        name: '3.2. Public investment at the central level',
        description: 'Risk screening and appraisal of public investments',
        questions: [
          { 
            code: 'RR-3.2-MIN', 
            text: 'Do laws and regulations mandate disaster and climate risk screening as part of the appraisal of new public investment projects?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.2-IMP', 
            text: 'Do official guidelines defining disaster and climate risk screening methodologies for new public investment projects exist?',
            category: 'implementation'
          },
          { 
            code: 'RR-3.2-OUT', 
            text: 'Are risk mitigation measures in place for new projects that have been appraised as high-risk (or equivalent) through the disaster and climate screening process?',
            category: 'output'
          },
          { 
            code: 'RR-3.2-EN-1', 
            text: 'Do the appraisal process of new public investment projects include an estimation of the resilience benefits brought about by said project?',
            category: 'enabler'
          },
          { 
            code: 'RR-3.2-EN-2', 
            text: 'Do the regulations governing environmental impact assessments (or equivalent process) include specific provisions for disaster risk analysis?',
            category: 'enabler'
          },
          { 
            code: 'RR-3.2-EN-3', 
            text: 'Are Public-Private Partnership projects also included in climate and disaster risk screening?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'sector-specific-measures',
        name: '3.3. Sector-specific risk reduction measures',
        description: 'Standards, building codes, and infrastructure resilience',
        questions: [
          { 
            code: 'RR-3.3-MIN-1', 
            text: 'Are there standards or technical guidelines for the disaster-resilient design and construction of critical infrastructure in transport (roads)?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.3-MIN-2', 
            text: 'Are there standards or technical guidelines for the disaster-resilient design and construction of critical infrastructure in education (schools)?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.3-MIN-3', 
            text: 'Are there standards or technical guidelines for the disaster-resilient design and construction of critical infrastructure in health (hospitals)?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.3-MIN-4', 
            text: 'Are there standards or technical guidelines for the disaster-resilient design and construction of critical infrastructure in energy infrastructure?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.3-IMP', 
            text: 'Is there at least one legally mandatory building code or standard that requires earthquake-resistant or other hazard-resistant (e.g., wind, flood) design for buildings?',
            category: 'implementation'
          },
          { 
            code: 'RR-3.3-OUT', 
            text: 'Over the last 5 years, is there at least one public project/program that has received a budget allocation for retrofitting works based on vulnerability assessments and resilient standards?',
            category: 'output'
          },
          { 
            code: 'RR-3.3-EN', 
            text: 'Is there an asset management system for public infrastructure that includes disaster risk analysis?',
            category: 'enabler'
          },
          { 
            code: 'RR-3.3-WATER-1', 
            text: 'Is the legal framework and institutional arrangements for water supply and sanitation in urban areas considering flood risk?',
            category: 'minimum'
          },
          { 
            code: 'RR-3.3-WATER-2', 
            text: 'Is there a legal and institutional framework that promotes integrated water resources management (IWRM) and explicitly incorporates flood and drought risk considerations?',
            category: 'implementation'
          },
          { 
            code: 'RR-3.3-WATER-3A', 
            text: 'Over the last three years: have any watershed basins undergone improvements in water management?',
            category: 'output'
          },
          { 
            code: 'RR-3.3-WATER-3B', 
            text: 'Over the last three years: has the percentage of urban residents with access to sewage services increased?',
            category: 'output'
          },
          { 
            code: 'RR-3.3-WATER-4', 
            text: 'Are water governance policy documents considering changes to rainfall patterns under different climate scenarios?',
            category: 'enabler'
          }
        ]
      }
    ]
  },
  {
    id: 'preparedness',
    name: '4. Preparedness',
    description: 'Evaluation of emergency response and preparedness capabilities',
    subPillars: [
      {
        id: 'early-warning',
        name: '4.1. Early Warning Systems (EWS)',
        description: 'Institutional arrangements and functionality of early warning systems',
        questions: [
          { 
            code: 'PREP-4.1-MIN', 
            text: 'Do laws clearly and coherently define the institutions responsible for Early Warning Systems, avoiding fragmentation?',
            category: 'minimum'
          },
          { 
            code: 'PREP-4.1-IMP', 
            text: 'Do institutions involved in EWS—data producers, decision-makers, and implementers of preparedness and response—operate under an established, functional coordination mechanism, evidenced by formal arrangements such as MoUs or regular coordination platform meetings?',
            category: 'implementation'
          },
          { 
            code: 'PREP-4.1-OUT', 
            text: 'Over the most recent major disaster, was the population promptly alerted (e.g., via SMS or other tailored communication channels)?',
            category: 'output'
          },
          { 
            code: 'PREP-4.1-EN', 
            text: 'Over the past three years, has there been a budget allocation for the expansion, maintenance, or operation of the hydrometeorological network?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'emergency-preparedness-response',
        name: '4.2. Emergency Preparedness and Response (EP&R)',
        description: 'Institutional roles, contingency planning, and emergency protocols',
        questions: [
          { 
            code: 'PREP-4.2-MIN', 
            text: 'Do laws clearly define the roles and responsibilities of institutions involved in EP&R?',
            category: 'minimum'
          },
          { 
            code: 'PREP-4.2-IMP', 
            text: 'Have at least 75% of the subnational EP&R entities mandated by law been officially established?',
            category: 'implementation'
          },
          { 
            code: 'PREP-4.2-OUT-1', 
            text: 'Does at least 75% of essential government entities have an emergency response protocol / operational continuity plan?',
            category: 'output'
          },
          { 
            code: 'PREP-4.2-OUT-2', 
            text: 'Does at least 75% of subnational EP&R entities have an approved contingency plan / emergency response protocol?',
            category: 'output'
          },
          { 
            code: 'PREP-4.2-EN', 
            text: 'Do emergency preparedness plans incorporate gender-sensitive measures, such as gender-based violence prevention, safe shelters, and women\'s specific needs during evacuation and displacement?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'adaptive-social-protection',
        name: '4.3. Adaptive Social Protection (ASP)',
        description: 'Social protection mechanisms for disaster and climate shocks',
        questions: [
          { 
            code: 'PREP-4.3-MIN', 
            text: 'Is there a legal and institutional framework for ASP that defines the roles and responsibilities of institutions involved in ASP (e.g., social protection, finance, DRM)?',
            category: 'minimum'
          },
          { 
            code: 'PREP-4.3-IMP', 
            text: 'Is there a unified social registry incorporating exposure and vulnerability data to facilitate the targeting of population potentially affected in case of disaster or climate-related shocks?',
            category: 'implementation'
          },
          { 
            code: 'PREP-4.3-OUT', 
            text: 'During the most recent disaster or climate-related shocks, was support promptly provided to the population through social‐protection programs (e.g., cash transfers in the case of drought)?',
            category: 'output'
          },
          { 
            code: 'PREP-4.3-EN', 
            text: 'Are there pre-arranged financing mechanisms that can be specifically used to support timely scaling-up of regular SP programs?',
            category: 'enabler'
          }
        ]
      }
    ]
  },
  {
    id: 'financial-protection',
    name: '5. Financial Protection',
    description: 'Assessment of financial mechanisms and disaster risk financing',
    subPillars: [
      {
        id: 'fiscal-risk-management',
        name: '5.1. Fiscal risk management',
        description: 'Management of contingent liabilities and fiscal risks from disasters',
        questions: [
          { 
            code: 'FP-5.1-MIN', 
            text: 'Has the Ministry of Finance created or explicitly tasked an existing institutional structure (department, unit) to manage contingent liabilities and/or fiscal risks including those associated with disasters?',
            category: 'minimum'
          },
          { 
            code: 'FP-5.1-IMP', 
            text: 'Are contingent liabilities associated with disasters quantified through an established methodology for the major hazards?',
            category: 'implementation'
          },
          { 
            code: 'FP-5.1-OUT', 
            text: 'Do key fiscal policy documents (e.g., the medium-term fiscal framework or fiscal risk statements) include quantified assessments of disaster risks?',
            category: 'output'
          },
          { 
            code: 'FP-5.1-EN', 
            text: 'Does the government conduct stress tests of public debt that include disaster or climate-related scenarios?',
            category: 'enabler'
          }
        ]
      },
      {
        id: 'disaster-risk-financing',
        name: '5.2. Disaster Risk Financing (DRF) strategies and instruments',
        description: 'Financial instruments for managing disaster and climate shocks',
        questions: [
          { 
            code: 'FP-5.2-MIN', 
            text: 'Are there sovereign risk financing instruments (i.e., disaster or emergency funds, contingent loans, insurance or other risk transfer mechanisms) in place to manage the financial impact of disasters and climate-related shocks?',
            category: 'minimum'
          },
          { 
            code: 'FP-5.2-IMP-1', 
            text: 'Is the disaster fund (or equivalent mechanism) receiving a budget allocation?',
            category: 'implementation'
          },
          { 
            code: 'FP-5.2-IMP-2', 
            text: 'Are there regulations that define standards for catastrophe insurance coverage of public or private assets?',
            category: 'implementation'
          },
          { 
            code: 'FP-5.2-OUT', 
            text: 'Over the past 5 years, has the $ amount of financing that can be mobilized through sovereign risk financing instruments increased?',
            category: 'output'
          },
          { 
            code: 'FP-5.2-EN', 
            text: 'Is there a legal or policy framework that outlines a layered Disaster Risk Financing (DRF) strategy combining risk retention and risk transfer instruments?',
            category: 'enabler'
          }
        ]
      }
    ]
  },
  {
    id: 'resilient-reconstruction',
    name: '6. Resilient Reconstruction',
    description: 'Evaluation of post-disaster recovery and reconstruction frameworks',
    subPillars: [
      {
        id: 'reconstruction-framework',
        name: 'Post-Disaster Recovery and Reconstruction',
        description: 'Institutional coordination and sector-specific reconstruction guidelines',
        questions: [
          { 
            code: 'RC-MIN', 
            text: 'Are there laws or regulations that establish the institutions responsible for coordinating post-disaster recovery and reconstruction?',
            category: 'minimum'
          },
          { 
            code: 'RC-IMP', 
            text: 'Have at least 50% of the essential government entities approved ex-ante sector-specific reconstruction guidelines?',
            category: 'implementation'
          },
          { 
            code: 'RC-OUT', 
            text: 'For the most recent major disaster, have the land use or territorial planning instruments in the affected areas been reviewed to enable resilient reconstruction?',
            category: 'output'
          },
          { 
            code: 'RC-EN', 
            text: 'Have guidelines or regulations to conduct post-disaster damage and needs assessments been developed and approved?',
            category: 'enabler'
          }
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
