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
                  href="https://www.facebook.com/lortapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </Link>
                <Link 
                  href="https://www.instagram.com/lort.app?igsh=MXVmZG9veHVueTF0Zw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-dark hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Mobile Optimized */}
          <div className="pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
            <div className="text-center px-4">
              <p className="text-xs sm:text-sm text-gray-400">
                {isEn ? '© 2025 LORT APP. All rights reserved.' : '© 2025 LORT APP. Tüm hakları saklıdır.'}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </footer>
  )
}
