import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
  description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun. Global KOBİ ağında güvenli iş ortaklıkları kurun.',
  keywords: 'ihracat, tedarik, KOBİ, akıllı eşleştirme, global ticaret, B2B',
  authors: [{ name: 'LORT APP' }],
  creator: 'LORT APP',
  publisher: 'LORT APP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
