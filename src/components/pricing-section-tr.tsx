import React from 'react';
import Link from 'next/link';

const PricingSectionTR = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl">LORT Planları</h2>
          <p className="mt-4 text-xl text-gray-400">İhracatta görünürlük ve güven için iki net seçenek</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Normal Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                Normal
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white">Normal Üyelik</h3>
            <p className="mt-2 text-gray-400">Giriş ve büyüme odaklı KOBİ'ler için</p>
            
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-white">
                $7 <span className="text-xl font-medium text-gray-400">/ay</span>
              </p>
              <p className="mt-2 text-gray-400">veya yıllık $69</p>
            </div>
            
            <ul className="mt-8 space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Reklamsız kullanım</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Sınırsız mesajlaşma</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300"><strong>10 aktif ilan</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Gelişmiş arama & filtreler (ülke, kategori, üretici/toptancı, MOQ, sertifika, teslimat süresi vb.)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Temel istatistikler (ürün & profil görüntülenmeleri)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Favori listesi</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Çoklu dil vitrini (otomatik çeviri)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Çevrimiçi durum görünümü</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Firma rozeti: <span className="font-medium">Professional Seller</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">AI önerilerinde <span className="font-medium">+%20 öncelik</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Destek: E-posta</span>
              </li>
            </ul>
            
            <Link href="/odeme?plan=normal" className="mt-8 block w-full">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Satın Al
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white">
                Önerilen • Premium
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white">Premium Üyelik</h3>
            <p className="mt-2 text-white/90">Maksimum görünürlük isteyen ihracatçılar için</p>
            
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-white">
                $99 <span className="text-xl font-medium text-white/90">/yıl</span>
              </p>
              <p className="mt-2 text-white/90">Yıllık tek ödeme</p>
            </div>
            
            <div className="text-sm text-white/80 mb-4 font-medium">Normal'deki tüm özelliklere ek</div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Doğrulanmış Üye Rozeti (<span className="font-medium">✅ Verified Business</span>)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Aramalarda <span className="font-medium">üst sıralar</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">Sınırsız ilan</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Anlık mesaj çevirisi (TR ↔ EN ↔ AR vb.)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">LORT Verified Gold Badge</span> (profil vitrini)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">AI önerilerinde <span className="font-medium">%100 öncelik</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Destek: E-posta</span>
              </li>
            </ul>
            
            <Link href="/odeme?plan=premium" className="mt-8 block w-full">
              <button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Satın Al
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSectionTR;
