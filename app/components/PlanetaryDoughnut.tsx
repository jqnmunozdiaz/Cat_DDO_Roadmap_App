'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface PillarScore {
  name: string
  value: number
  color: string
  percentage: number
  [key: string]: string | number // Index signature for recharts compatibility
}

interface PlanetaryDoughnutProps {
  data: PillarScore[]
  centerText?: string
  centerValue?: string
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded shadow-lg border border-gray-200">
        <p className="font-bold text-gray-800">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          Achievement: <span className="font-semibold">{payload[0].value}%</span>
        </p>
      </div>
    )
  }
  return null
}

const renderCustomLabel = (entry: any) => {
  return `${entry.percentage}%`
}

export default function PlanetaryDoughnut({ 
  data, 
  centerText = "Overall",
  centerValue = "0%"
}: PlanetaryDoughnutProps) {
  return (
    <div className="w-full h-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="85%"
            paddingAngle={2}
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center text overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-800">{centerValue}</div>
          <div className="text-sm text-gray-600 mt-1">{centerText}</div>
        </div>
      </div>
    </div>
  )
}
