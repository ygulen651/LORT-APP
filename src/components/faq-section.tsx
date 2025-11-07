'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'LortApp nedir?',
    answer: 'LortApp, üreticiler ile alıcıları bir araya getiren yapay zekâ destekli bir B2B ticaret platformudur. Ürünlerinize, hedef pazarınıza ve kapasitenize göre en uygun potansiyel iş ortaklarını saniyeler içinde bulmanızı sağlar.'
  },
  {
    question: 'LortApp nasıl çalışır?',
    answer: 'Profilinizi ve ürün bilgilerinizi girersiniz → LortApp, verileri analiz eder → Sizin için en yüksek uyumluluk oranına sahip tedarikçi/alıcı eşleşmelerini önerir. Süreçte aracı yoktur, direkt iletişim kurarsınız.'
  },
  {
    question: 'Üyelik ücretli mi?',
    answer: 'LortApp\'ın temel eşleştirme sistemi ücretsiz kullanılabilir. Daha gelişmiş özellikler (detaylı alıcı listeleri, premium filtreler, sektör raporları vb.) için Premium planlar mevcuttur.'
  },
  {
    question: 'Eşleşmelerin doğruluğu nasıl sağlanıyor?',
    answer: 'LortApp; ürün türü, üretim kapasitesi, ülke, hedef pazar, sertifikasyonlar ve sektör talep trendleri gibi birçok parametreyi analiz eder. Yapay zekâ, sadece gerçekten uygun olabilecek firmaları eşleştirir. Böylece "rastgele alıcı listesi" yerine nitelikli bağlantılar sunulur.'
  },
  {
    question: 'LortApp hangi sektörler için uygundur?',
    answer: 'Gıda, tekstil, makine, ambalaj, inşaat malzemeleri, tarım, hijyen ürünleri ve daha birçok sektörde kullanılabilir. Üreten, satan veya ithalat-ihracat yapan herkes için uygundur.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            LortApp hakkında en çok merak edilen sorular ve yanıtları
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-800 last:border-0"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div 
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
              >
                <p className="text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
