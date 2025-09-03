import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Carousel } from '@/components/ui/carousel'
import { getContent } from '@/lib/content'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
  description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun. Global KOBİ ağında güvenli iş ortaklıkları kurun.',
  keywords: 'ihracat, tedarik, KOBİ, akıllı eşleştirme, global ticaret, B2B',
  openGraph: {
    title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
    description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LORT APP - İhracat ve Tedarikte Akıllı Eşleştirme',
    description: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun.',
  },
}

// Slides data
const fallbackSlides = [
  {
    id: 1,
    title: "Ana Ekran",
    description: "Kullanıcı dostu arayüz ile kolay navigasyon",
    image: "/images/logos/apple.svg",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 2,
    title: "Akıllı Eşleştirme",
    description: "AI destekli partner bulma sistemi",
    image: "/images/logos/google.svg",
    color: "from-orange-400 to-orange-500"
  },
  {
    id: 3,
    title: "Güvenli Mesajlaşma",
    description: "End-to-end şifreli iletişim",
    image: "/images/logos/meta.svg",
    color: "from-orange-600 to-red-500"
  },
  {
    id: 4,
    title: "Global Ağ",
    description: "50+ ülkeden binlerce KOBİ",
    image: "/images/logos/microsoft.svg",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 5,
    title: "Analitik Dashboard",
    description: "Detaylı iş analizi ve raporlama",
    image: "/images/logos/netflix.svg",
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 6,
    title: "Mobil Uygulama",
    description: "Her yerden erişim imkanı",
    image: "/images/logos/spotify.svg",
    color: "from-yellow-500 to-orange-500"
  }
]

// MongoDB'den slides çek
async function getSlides() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/slides`, {
      cache: 'no-store'
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Slides fetch error:', error)
  }
  return fallbackSlides
}

export default async function HomePage() {
  // MongoDB'den slides çek
  const slides = await getSlides()

  // Admin panelinden içerikleri çek
  const heroTitle = await getContent('hero-title', 'LORT APP')
  const heroSubtitle = await getContent('hero-subtitle', 'İhracat ve Tedarikte Akıllı Eşleştirme')
  const heroDescription = await getContent('hero-description', 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun. Global KOBİ ağında güvenli iş ortaklıkları kurun.')
  const heroWelcome = await getContent('hero-welcome', 'Geleceğin İş Ağına Hoş Geldiniz')
  const heroMainText = await getContent('hero-main-text', 'Artık tek dokunuşla dünyanın dört bir yanındaki girişimciler, yatırımcılar, üreticiler ve pazarlamacılarla doğrudan bağlantı kurabilirsiniz.')
  const featuresTitle = await getContent('features-title', 'Geleneksel İş Dünyasını Dönüştürüyoruz')
  const featuresDescription = await getContent('features-description', 'Aracılar, yüksek komisyonlar, yanlış eşleşmeler, zaman kayıpları... Lort App, tüm bu sorunları ortadan kaldırmak için 2024\'te doğdu.')
  const targetAudienceTitle = await getContent('target-audience-title', 'Sizi Kimlerle Buluşturuyoruz?')
  const targetAudienceDescription = await getContent('target-audience-description', 'Global iş ağına katılmak isteyen tüm profesyoneller')
  const ctaTitle = await getContent('cta-title', 'Şimdi Katılın, Fark Yaratın')
  const ctaDescription = await getContent('cta-description', 'Lort App, LinkedIn\'in sunduğundan çok daha fazlasını, TradeAtlas\'ın sağladığından çok daha hızlı ve esnek bir şekilde sunuyor. Burası, iş fırsatlarının buluşma noktası.')

  return (
    <main>
      {/* Ultra Modern Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Ultra Modern Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,rgba(255,107,53,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(255,107,53,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,107,53,0.05)_60deg,transparent_120deg)]"></div>
        
        <Container>
          <div className="text-center mb-24">
            {/* Ultra Modern Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500/90 backdrop-blur-md border border-orange-400/30 text-base font-semibold text-black mb-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 animate-pulse shadow-lg"></div>
              🌍 İş Dünyasının Yeni Buluşma Noktası
                </div>
                
            {/* Ultra Modern Typography */}
                                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none">
                      <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                        {heroTitle}
                      </span>
                    </h1>
                
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-semibold">
              {heroWelcome}
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-6xl mx-auto leading-relaxed font-light mb-8">
              {heroMainText}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Global.</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Hızlı.</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Aracısız.</span>
            </div>
              </div>

          {/* Ultra Modern Large Carousel */}
          <div className="max-w-7xl mx-auto">
            <Carousel className="h-screen" showNavigation={false}>
              {slides.map((slide) => (
                <div key={slide.id} className="h-full flex items-center justify-center bg-black">
                  {/* Full Size Image Container */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image 
                      src={slide.image} 
                      alt={slide.title}
                      width={1920}
                      height={1080}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* Modern Info Section */}
      <section className="relative py-24 bg-gray-900">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,53,0.02)_50%,transparent_75%)]"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6">
                🚀 Neyi Değiştiriyoruz?
            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{featuresTitle}</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {featuresDescription}
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: "❌➡️✅",
                  title: "Aracılar & Komisyonlar",
                  description: "Doğrudan Bağlantılar - Aracı olmadan iş yapın",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: "💰",
                  title: "Yüksek Aidatlar",
                  description: "Düşük Maliyetli Üyelikler - Uygun fiyatlı çözümler",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: "🌐",
                  title: "Dil Engelleri",
                  description: "Çok Dilli, 7/24 Erişim - Her dilde iletişim",
                  color: "from-orange-400 to-yellow-500"
                },
                {
                  icon: "🎯",
                  title: "Yanlış Eşleşmeler",
                  description: "Yapay Zeka Destekli Doğru Eşleşme - AI ile doğru partner",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: "⚡",
                  title: "Gecikmiş İletişim",
                  description: "Gerçek Zamanlı Sohbet & Canlı Bağlantılar - Anında iletişim",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: "🚀",
                  title: "Teknoloji Avantajı",
                  description: "Gerçek zamanlı eşleşme sistemi ve akıllı öneriler",
                  color: "from-red-500 to-yellow-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{feature.title}</h3>
                    <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

            {/* Modern Stats */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl"></div>
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{targetAudienceTitle}</h3>
                  <p className="text-lg bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{targetAudienceDescription}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12">
                  <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">🏢</div>
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">KOBİ'ler ve Girişimciler</h4>
                    <p className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Küçük ve orta ölçekli işletmeler</p>
                  </div>
                  <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">İhracat ve İthalat</h4>
                    <p className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Üreticiler ve tedarikçiler</p>
                  </div>
                  <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">💼</div>
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Yatırımcılar</h4>
                    <p className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Pazarlamacılar ve akademisyenler</p>
              </div>
            </div>
                
                {/* CTA Section */}
              <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">{ctaTitle}</span>
                  </h3>
                  <p className="text-xl mb-8 max-w-3xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {ctaDescription}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
