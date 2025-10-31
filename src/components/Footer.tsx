import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
          <Link href="/gizlilik" className="text-gray-300 hover:text-white transition-colors">
            Gizlilik
          </Link>
          <Link href="/mesafeli-satis" className="text-gray-300 hover:text-white transition-colors">
            Mesafeli Satış
          </Link>
          <Link href="/iade" className="text-gray-300 hover:text-white transition-colors">
            İade
          </Link>
          <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
            İletişim
          </Link>
        </div>
        
        {/* Company Info */}
        <div className="text-center text-gray-400 mb-8">
          <p className="mb-1">IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.</p>
          <p className="text-sm">Mevlana V.D. 465 134 4090 | Tic. Sic. 63953</p>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300 mb-8">
          <a href="tel:+905325094599" className="hover:text-white transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0532 509 45 99
          </a>
          <a href="mailto:info@lortapp.com.tr" className="hover:text-white transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@lortapp.com.tr
          </a>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
