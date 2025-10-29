"use client"
import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from './container'

export function Footer() {
  const pathname = usePathname()
  const isEn = pathname?.startsWith('/en')
  return (
    <footer className="relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
      
      <Container>
        <div className="relative py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
            {/* Brand Section - Mobile Optimized */}
            <div className="w-full">
              <Link href="/" className="group inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                  <Image 
                    src="/LORT LOGO1.png" 
                    alt="LORT APP Logo" 
                    width={400} 
                    height={400}
                    className="relative h-16 w-auto sm:h-20 md:h-24 drop-shadow-2xl"
                  />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    LORT APP
                  </span>
                </div>
              </Link>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4">
                {isEn
                  ? 'Smart matching in export and supply — find the right partner in minutes with LORT APP.'
                  : 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.'}
              </p>
              

              {/* Social Media with Modern Cards - Mobile Optimized */}
              <div className="flex gap-2 sm:gap-3 justify-center">
                <Link 
                  href="https://www.youtube.com/@LORTAPP-m4n" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://www.linkedin.com/in/lort-app-4392b5389/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://x.com/lort_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-gray-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://www.tiktok.com/@lortbusiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-gray-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://www.facebook.com/lortapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </Link>
                
                <Link 
                  href="https://www.instagram.com/lort.app?igsh=MXVmZG9veHVueTF0Zw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Mobile Optimized */}
          <div className="pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 px-4">
              <p className="text-xs sm:text-sm text-gray-400">
                {isEn ? '© 2025 LORT APP. All rights reserved.' : '© 2025 LORT APP. Tüm hakları saklıdır.'}
              </p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Link 
                  href="/privacy" 
                  className="text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 whitespace-nowrap"
                >
                  {isEn ? 'Privacy Policy' : 'Gizlilik Politikası'}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link 
                  href="/mesafeli-satis-sozlesmesi" 
                  className="text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 whitespace-nowrap"
                >
                  {isEn ? 'Distance Sales Agreement' : 'Mesafeli Satış Sözleşmesi'}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link 
                  href="/premium-abonelik-ve-iade-politikasi" 
                  className="text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 whitespace-nowrap"
                >
                  {isEn ? 'Return Policy' : 'İade Politikası'}
                </Link>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link 
                  href="/contact" 
                  className="text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 whitespace-nowrap"
                >
                  {isEn ? 'Contact' : 'İletişim'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </footer>
  )
}
