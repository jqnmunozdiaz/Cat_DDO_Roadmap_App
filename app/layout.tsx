import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cat DDO Roadmap Assessment Tool',
  description: 'Evaluate country institutional setting for Disaster Risk Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
