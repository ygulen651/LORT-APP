import { ThemeProvider } from '@/components/providers/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '../globals.css'

export const metadata = {
  title: {
    default: 'LORT APP - Smart Matching in Export & Supply',
    template: '%s | LORT APP',
  },
  description: 'Find the right partner in minutes with LORT APP’s smart matching for export and supply.',
  keywords: ['export', 'supply', 'SME', 'smart matching', 'global trade', 'B2B'],
  alternates: {
    canonical: '/en',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/en',
    title: 'LORT APP - Smart Matching in Export & Supply',
    description: 'Find the right partner in minutes with LORT APP’s smart matching.',
    siteName: 'LORT APP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LORT APP - Smart Matching in Export & Supply',
    description: 'Find the right partner in minutes with LORT APP’s smart matching.',
    creator: '@lortapp',
  },
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}


