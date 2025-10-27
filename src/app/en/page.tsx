import { Container } from '@/components/layout/container'
import { FadeSlider } from '@/components/ui/fade-slider'
import { Countdown } from '@/components/ui/countdown'
import { getContentLocalized } from '@/lib/content'
import { BarChart3, ChevronRight, Globe, Lock, MessageSquare, Rocket, Target } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LORT APP - Smart Matching in Export & Supply',
  description: 'Find the right partner in minutes with LORT APP’s smart matching for export and supply. Build trusted partnerships across a global SME network.',
  keywords: 'export, supply, SME, smart matching, global trade, B2B',
  openGraph: {
    title: 'LORT APP - Smart Matching in Export & Supply',
    description: 'Find the right partner in minutes with LORT APP’s smart matching.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LORT APP - Smart Matching in Export & Supply',
    description: 'Find the right partner in minutes with LORT APP’s smart matching.',
  },
}

/* const fallbackSlides = [
  { id: 1, title: 'Home Screen', description: 'User-friendly interface with easy navigation', image: '/images/logos/apple.svg', color: 'from-orange-500 to-orange-600' },
  { id: 2, title: 'Smart Matching', description: 'AI-powered partner discovery system', image: '/images/logos/google.svg', color: 'from-orange-400 to-orange-500' },
  { id: 3, title: 'Secure Messaging', description: 'End-to-end encrypted communication', image: '/images/logos/meta.svg', color: 'from-orange-600 to-red-500' },
  { id: 4, title: 'Global Network', description: 'Thousands of SMEs from 50+ countries', image: '/images/logos/microsoft.svg', color: 'from-red-500 to-orange-500' },
  { id: 5, title: 'Analytics Dashboard', description: 'Detailed business analytics & reporting', image: '/images/logos/netflix.svg', color: 'from-orange-500 to-yellow-500' },
  { id: 6, title: 'Mobile App', description: 'Access from anywhere', image: '/images/logos/spotify.svg', color: 'from-yellow-500 to-orange-500' },
] */

/* removed unused slides fetch to satisfy strict TS */
/* async function getSlides() {
  try {
    const connectDB = (await import('@/lib/mongodb')).default
    const { default: Slide } = await import('@/models/Slide')
    await connectDB()
    const slides = await Slide.find({ isActive: true }).sort({ order: 1 })
    if (slides && slides.length > 0) return slides
  } catch (error) {
    console.error('Slides fetch error:', error)
  }
  return fallbackSlides
} */

export default async function HomePageEN() {

  const heroMainText = await getContentLocalized('hero-main-text', 'en', {
    en: 'Connect directly with entrepreneurs, investors, manufacturers and marketers around the world—at the touch of a button.',
  })
  await getContentLocalized('features-title', 'en', { en: 'We Transform Traditional Business' })
  const featuresDescription = await getContentLocalized('features-description', 'en', {
    en: 'Middlemen, high commissions, mismatches, wasted time... Lort App was born in 2024 to eliminate these problems.',
  })
  await getContentLocalized('target-audience-title', 'en', { en: 'Who Do We Connect You With?' })
  await getContentLocalized('target-audience-description', 'en', { en: 'All professionals seeking to join the global business network' })
  await getContentLocalized('cta-title', 'en', { en: 'Join Now, Make an Impact' })
  await getContentLocalized('cta-description', 'en', {
    en: 'Lort App provides a comprehensive and flexible solution for business networking. This is where business opportunities meet.',
  })
  const heroMapUrl = await getContentLocalized('hero-map-url', 'en', { en: '' })
  const heroPhoneUrl = await getContentLocalized('hero-phone-url', 'en', { en: '' })
  const mapUrl = (heroMapUrl as string) || '/images/logos/cdebe2yzftpndhpbouui.jpg'
  const phoneUrl = (heroPhoneUrl as string) || '/images/logos/xrrkbtgvkw7ihvjafohb.jpg'

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
          <div className="relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 xl:pt-40 xl:pb-32">
            {/* Content Grid - Fully Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* LEFT - Content (Mobile First) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1">
                {/* Animated Badge - Responsive */}
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 rounded-full glass-dark border border-orange-500/30 backdrop-blur-xl group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    AI Powered Platform
                  </span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Epic Title - Fully Responsive */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] sm:leading-[0.95] tracking-tight">
                    <span className="block text-white animate-slide-up">
                      In Export and
                    </span>
                    <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.1s' }}>
                      Supply
                    </span>
                    <span className="block mt-1 sm:mt-2 text-white/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      Smart Solution
                    </span>
                  </h1>
                </div>
                
                {/* Description - Responsive */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-full lg:max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {heroMainText}
                </p>
              </div>

              {/* RIGHT - Visual (Mobile First) */}
              <div className="lg:col-span-5 relative order-1 lg:order-2 mt-20 lg:mt-24">
                {/* Main Visual Card - Responsive */}
                <div className="relative animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  
                   {/* LORT Logo - Responsive */}
                   <div className="flex items-center justify-center relative">
                     {/* Turuncu Işık Efekti - Responsive */}
                     <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 lg:-inset-20 xl:-inset-24 2xl:-inset-28 bg-gradient-to-r from-orange-500/20 via-red-500/15 to-orange-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
                     <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 lg:-inset-16 xl:-inset-20 2xl:-inset-24 bg-gradient-to-r from-orange-400/15 via-red-400/10 to-orange-400/15 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                     <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-12 xl:-inset-16 2xl:-inset-20 bg-gradient-to-r from-orange-300/10 via-red-300/8 to-orange-300/10 rounded-full blur-lg sm:blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                     
                     {/* Logo */}
                     <div className="relative z-10 animate-float">
                       <Image 
                         src="/images/logos/Adsız tasarımd.png" 
                         alt="LORT APP Logo" 
                         width={200}
                         height={200}
                         className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-contain"
                         priority
                       />
                     </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Countdown Section */}
            <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
              <Countdown 
                targetDate={new Date('2025-10-30T23:59:59')} 
                title="Coming Soon"
                labels={{
                  days: 'Days',
                  hours: 'Hours',
                  minutes: 'Minutes',
                  seconds: 'Seconds'
                }}
              />
            </div>
            
            {/* Store Buttons Section - Ultra Modern Design - Complete */}
            <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
              {/* Apple Store Button */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <button className="relative w-56 sm:w-64 md:w-72 h-20 sm:h-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-green-500/30 hover:border-green-400/60 text-white font-bold text-sm sm:text-base rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-4 overflow-hidden group">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Image 
                      src="/images/logos/pngwing.com.png" 
                      alt="App Store" 
                      width={40} 
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div className="relative z-10 text-left">
                    <div className="text-xs sm:text-sm opacity-80 font-medium">Download on the</div>
                    <div className="text-base sm:text-lg font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">App Store</div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>
              
              {/* Google Play Store Button */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <button className="relative w-56 sm:w-64 md:w-72 h-20 sm:h-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-blue-500/30 hover:border-blue-400/60 text-white font-bold text-sm sm:text-base rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-4 overflow-hidden group">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Image 
                      src="/images/logos/gogle.png" 
                      alt="Google Play" 
                      width={40} 
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div className="relative z-10 text-left">
                    <div className="text-xs sm:text-sm opacity-80 font-medium">GET IT ON</div>
                    <div className="text-base sm:text-lg font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Google Play</div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* VISUALS SECTION - Container Image Display */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black h-[200px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
            {/* Image in container */}
            <div className="w-full h-full">
              <FadeSlider 
                images={[
                  { 
                    src: mapUrl, 
                    alt: 'Global Business Network Map'
                  }, 
                  { 
                    src: phoneUrl, 
                    alt: 'Mobile App Interface'
                  }
                ]} 
                intervalMs={4500} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - Ultra Modern 3D Grid - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <Container>
          <div className="relative z-10">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full glass-dark border border-orange-500/30 backdrop-blur-2xl group hover:scale-105 transition-all duration-300">
                <span className="text-xs sm:text-sm font-bold text-orange-400">Premium Features</span>
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none">
                  <span className="block text-white mb-1 sm:mb-2">Powerful</span>
                  <span className="block text-gradient-modern">Features</span>
                </h2>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4">{featuresDescription}</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 sm:opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="url(#gradient)" strokeWidth="0.25" className="sm:stroke-[0.5]" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* ROW 1 - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  {/* Featured AI Matching - Responsive */}
                  <div className="lg:translate-y-6 xl:translate-y-12">
                    <div className="group relative">
                      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] blur-2xl sm:blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] border border-white/10 sm:border-2 p-6 sm:p-8 md:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-4 sm:space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="relative">
                              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-40"></div>
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl sm:shadow-2xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500">
                                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                              </div>
                            </div>
                            <div className="px-2 py-1 sm:px-4 sm:py-2 rounded-full glass-dark border border-orange-500/30">
                              <span className="text-xs font-bold text-orange-400">FEATURED</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4"><span className="text-gradient-modern">AI Matching</span></h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">Advanced algorithms analyze your profile and preferences to find the best business partners in seconds.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Cards - Responsive */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 group-hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg sm:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-6 transition-all duration-300">
                            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">Global Network</h4>
                            <p className="text-xs sm:text-sm text-gray-400">Worldwide reach</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg sm:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-6 transition-all duration-300">
                            <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">Messaging</h4>
                            <p className="text-xs sm:text-sm text-gray-400">Instant communication</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROW 2 - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <div className="space-y-4 sm:space-y-6 lg:order-2 lg:translate-y-6 xl:translate-y-12">
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 group-hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg sm:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-6 transition-all duration-300">
                            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">Secure</h4>
                            <p className="text-xs sm:text-sm text-gray-400">Encrypted communication</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 group-hover:border-red-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg sm:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-6 transition-all duration-300">
                            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">Targeted Match</h4>
                            <p className="text-xs sm:text-sm text-gray-400">AI-assisted</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:order-1">
                    <div className="group relative">
                      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] blur-2xl sm:blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] border border-white/10 sm:border-2 p-6 sm:p-8 md:p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-4 sm:space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="relative">
                              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-40"></div>
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl sm:shadow-2xl group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500">
                                <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                              </div>
                            </div>
                            <div className="px-2 py-1 sm:px-4 sm:py-2 rounded-full glass-dark border border-green-500/30">
                              <span className="text-xs font-bold text-green-400">ANALYTICS</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4 text-white">Detailed Analytics</h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">Analyze performance in detail with real-time data and optimize your strategies.</p>
                          </div>
                          <div className="pt-4 sm:pt-6">
                            <div className="flex items-end gap-1 sm:gap-2 h-20 sm:h-24 md:h-32 justify-center">
                              {[35, 55, 40, 75, 50, 85, 60, 70, 45, 90].map((height, i) => (
                                <div key={i} className="w-4 sm:w-6 md:w-8 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg sm:rounded-t-xl hover:from-green-400 hover:to-emerald-300 transition-all duration-300 cursor-pointer shadow-md sm:shadow-lg" style={{ height: `${height}%` }}></div>
                              ))}
                            </div>
                            <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500">Monthly Performance Trend</div>
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


