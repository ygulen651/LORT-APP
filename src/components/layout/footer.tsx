import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { Container } from './container'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/LORT LOGO1.png" 
                  alt="LORT APP Logo" 
                  width={200} 
                  height={200}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-white">LORT APP</span>
              </Link>
              <p className="text-gray-300 mb-6">
                İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.
              </p>
              {/* Sosyal Medya */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-white mb-3">Sosyal Medya</h4>
                <div className="flex space-x-4">
                  <Link 
                    href="https://www.facebook.com/lortapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">Facebook</span>
                  </Link>
                  <Link 
                    href="https://www.instagram.com/lort.app?igsh=MXVmZG9veHVueTF0Zw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-orange-500" />
                    <span className="text-sm">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Essential Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Hızlı Erişim</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">İletişim</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Gizlilik Politikası</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Kullanım Şartları</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 LORT APP. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">
                Türkiye'de geliştirildi 🇹🇷
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
