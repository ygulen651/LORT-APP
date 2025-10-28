import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.</h3>
            <p className="text-gray-300">Alavardı Mahallesi Söke Sokak</p>
            <p className="text-gray-300">Uçan Balonlar Kreş ve Bakım Evi No:18/1</p>
            <p className="text-gray-300">Meram / KONYA</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <p className="text-gray-300">
              <a href="tel:+905325094599" className="hover:text-white transition-colors">
                Tel: 0532 509 45 99
              </a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:lortapp01@gmail.com" className="hover:text-white transition-colors">
                lortapp01@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <p className="text-gray-300">Mevlana V.D. 465 134 4090</p>
              </li>
              <li>
                <p className="text-gray-300">Tic. Sic. 63953</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
