import { ThemeProvider } from '@/components/providers/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '../globals.css'

export const metadata = {
  title: {
    default: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
    template: '%s | LORT APP',
  },
  description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.',
  keywords: ['ihracat', 'tedarik', 'KOBİ', 'akıllı eşleştirme', 'global ticaret', 'B2B'],
  authors: [{ name: 'LORT APP Team' }],
  creator: 'LORT APP',
  publisher: 'LORT APP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lort.app'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
    description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.',
    siteName: 'LORT APP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
    description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.',
    creator: '@lortapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col bg-black">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
