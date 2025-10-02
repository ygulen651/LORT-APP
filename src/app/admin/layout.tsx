import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel - LORT APP',
  description: 'LORT APP Admin Panel',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      {children}
    </div>
  )
}
