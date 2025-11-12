'use client'

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface RadarDataPoint {
  pillar: string
  achievement: number
  target: number
  fullName: string
}

interface PlanetaryRadarProps {
  data: RadarDataPoint[]
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded shadow-lg border border-gray-200">
        <p className="font-bold text-gray-800">{payload[0].payload.fullName}</p>
        <p className="text-sm text-gray-600">
          Achievement: <span className="font-semibold text-blue-600">{payload[0].value}%</span>
        </p>
        {payload[1] && (
          <p className="text-sm text-gray-600">
            Target: <span className="font-semibold text-green-600">{payload[1].value}%</span>
          </p>
        )}
      </div>
    )
  }
  return null
}

export default function PlanetaryRadar({ data }: PlanetaryRadarProps) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis 
            dataKey="pillar" 
            tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fill: '#64748b', fontSize: 10 }}
          />
          <Radar
            name="Achievement"
            dataKey="achievement"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.5}
            strokeWidth={2}
          />
          <Radar
            name="Target (75%)"
            dataKey="target"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.1}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
