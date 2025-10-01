import { Container } from '@/components/layout/container'
import { FadeSlider } from '@/components/ui/fade-slider'
import { getContent } from '@/lib/content'
import {
    BarChart3,
    ChevronRight,
    Globe,
    Lock,
    MessageSquare,
    Rocket,
    Sparkles,
    Target
} from 'lucide-react'
import { Metadata } from 'next'
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

export default async function HomePage() {
  const heroMainText = await getContent('hero-main-text', 'Artık tek dokunuşla dünyanın dört bir yanındaki girişimciler, yatırımcılar, üreticiler ve pazarlamacılarla doğrudan bağlantı kurabilirsiniz.')
  const featuresDescription = await getContent('features-description', 'Aracılar, yüksek komisyonlar, yanlış eşleşmeler, zaman kayıpları... Lort App, tüm bu sorunları ortadan kaldırmak için 2024\'te doğdu.')
  const heroMapUrl = await getContent('hero-map-url', '')
  const heroPhoneUrl = await getContent('hero-phone-url', '')
  const mapUrl = heroMapUrl || '/images/logos/cdebe2yzftpndhpbouui.jpg'
  const phoneUrl = heroPhoneUrl || '/images/logos/xrrkbtgvkw7ihvjafohb.jpg'

  return (
    <main className="relative bg-black">
      {/* HERO - Modern Layered Design */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,white_49%,white_51%,transparent_52%)] bg-[length:100px_100px]"></div>
        </div>
        
        <Container>
          <div className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
            {/* Content Grid - Asymmetric */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* LEFT - Content (7 columns) */}
              <div className="lg:col-span-7 space-y-10">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark border border-orange-500/30 backdrop-blur-xl group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    AI Destekli Platform
                  </span>
                  <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Epic Title with Staggered Animation */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                    <span className="block text-white animate-slide-up">
                      İhracatta ve
                    </span>
                    <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.1s' }}>
                      Tedarikte
                    </span>
                    <span className="block mt-2 text-white/80 text-5xl lg:text-6xl xl:text-7xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      Akıllı Çözüm
                      </span>
                    </h1>
                </div>
                
                {/* Description with Icon */}
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {heroMainText}
            </p>
              </div>

              {/* RIGHT - Visual (5 columns) */}
              <div className="lg:col-span-5 relative">
                {/* Main Visual Card */}
                <div className="relative animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  {/* Multi-layer Glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-red-600 rounded-[2.5rem] blur-2xl opacity-30"></div>
                  
                  {/* Card Container */}
                  <div className="relative card-glass rounded-[2rem] p-6 border-2 border-white/20 overflow-hidden backdrop-blur-2xl">
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                    
                    {/* LORT Logo Display */}
                    <div className="h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
                      {/* Animated Background Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.15),transparent_60%)] animate-pulse"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,107,53,0.1),transparent_50%)]"></div>
                      
                      {/* Dot Pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,107,53,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                      
                      {/* Center Logo Container */}
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative animate-float">
                          {/* Subtle Glow */}
                          <div className="absolute -inset-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
                          
                          {/* Logo */}
                    <Image 
                            src="/LORT LOGO1.png" 
                            alt="LORT APP" 
                            width={400}
                            height={400}
                            className="relative z-10 w-full h-auto drop-shadow-[0_20px_80px_rgba(255,107,53,0.4)]"
                      priority
                    />
                  </div>
                </div>
                      
                      {/* Corner Accent Lines */}
                      <div className="absolute top-0 left-0 w-32 h-32">
                        <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-orange-400/40 rounded-tl-3xl"></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-32 h-32">
                        <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-orange-400/40 rounded-br-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
          </div>
        </Container>
      </section>

      {/* VISUALS SECTION - uses defaults in public/ or Mongo/Cloudinary URLs if provided */}
      <section className="relative px-4 py-16 overflow-hidden">
        <Container>
          <div className="relative rounded-[2rem] border border-white/10 overflow-hidden bg-black min-h-[620px]">
            <div className="absolute inset-0 opacity-70">
              <FadeSlider images={[{ src: mapUrl, alt: 'map-1' }, { src: phoneUrl, alt: 'map-2' }]} intervalMs={4500} />
            </div>
            {/* foreground phone visual removed */}
          </div>
        </Container>
      </section>


      {/* FEATURES - Ultra Modern 3D Grid */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        
        <Container>
          <div className="relative z-10">
            {/* Epic Section Header */}
            <div className="text-center mb-24 space-y-8">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-orange-500/30 backdrop-blur-2xl group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
                  <Sparkles className="w-4 h-4 text-orange-400 relative z-10" />
                </div>
                <span className="text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Premium Features
                </span>
            </div>
              
              {/* Title with Animation */}
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="block text-white mb-2">Güçlü</span>
                  <span className="block text-gradient-modern">Özellikler</span>
              </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {featuresDescription}
            </p>
          </div>

            {/* Diagonal Staggered Layout */}
            <div className="relative max-w-7xl mx-auto">
              {/* Diagonal Line Decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="url(#gradient)" strokeWidth="0.5" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="space-y-8">
                {/* ROW 1 - Alternating Pattern */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* LEFT - Featured Card */}
                <div className="lg:translate-y-12">
                  <div className="group relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[2rem] border-2 border-white/10 p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-40"></div>
                            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                              <Rocket className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <div className="px-4 py-2 rounded-full glass-dark border border-orange-500/30">
                            <span className="text-xs font-bold text-orange-400">FEATURED</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-4xl font-black mb-4">
                            <span className="text-gradient-modern">AI Eşleştirme</span>
                          </h3>
                          <p className="text-lg text-gray-400 leading-relaxed">
                            Gelişmiş yapay zeka algoritmalarımız, iş geçmişinizi, hedeflerinizi ve tercihlerinizi analiz ederek size en uygun iş ortaklarını saniyeler içinde bulur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* RIGHT - Compact Cards Stack */}
                <div className="space-y-6">
                  {/* Global Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-black text-white mb-1">Global Ağ</h4>
                          <p className="text-sm text-gray-400">Dünya çapında erişim</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Messaging Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-black text-white mb-1">Mesajlaşma</h4>
                          <p className="text-sm text-gray-400">Anında iletişim</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ROW 2 - Reversed Pattern */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* LEFT - Two Stacked Cards */}
                <div className="space-y-6 lg:order-2 lg:translate-y-12">
                  {/* Security Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Lock className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-black text-white mb-1">Güvenli</h4>
                          <p className="text-sm text-gray-400">Şifreli iletişim</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Target Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-red-500/40 transition-all duration-300 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-black text-white mb-1">Hedefli Eşleşme</h4>
                          <p className="text-sm text-gray-400">AI destekli</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>

                {/* RIGHT - Featured Analytics */}
                <div className="lg:order-1">
                  <div className="group relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[2rem] border-2 border-white/10 p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-start justify-between">
            <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-40"></div>
                            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                              <BarChart3 className="w-12 h-12 text-white" />
                </div>
                  </div>
                          <div className="px-4 py-2 rounded-full glass-dark border border-green-500/30">
                            <span className="text-xs font-bold text-green-400">ANALYTICS</span>
              </div>
            </div>
                
                        <div>
                          <h3 className="text-4xl font-black mb-4 text-white">
                            Detaylı Analitik
                  </h3>
                          <p className="text-lg text-gray-400 leading-relaxed">
                            Gerçek zamanlı veriler ile iş performansınızı detaylı şekilde analiz edin ve stratejilerinizi optimize edin.
                          </p>
                        </div>
                        
                        {/* Live Chart Visualization */}
                        <div className="pt-6">
                          <div className="flex items-end gap-2 h-32 justify-center">
                            {[35, 55, 40, 75, 50, 85, 60, 70, 45, 90].map((height, i) => (
                              <div 
                                key={i} 
                                className="w-8 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-xl hover:from-green-400 hover:to-emerald-300 transition-all duration-300 cursor-pointer shadow-lg"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-center mt-4 text-sm text-gray-500">Aylık Performans Trendi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}

