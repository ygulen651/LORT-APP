import { Container } from '@/components/layout/container'
import { FadeSlider } from '@/components/ui/fade-slider'
import { getContentLocalized } from '@/lib/content'
import { BarChart3, Globe, Lock, MessageSquare, Rocket, Target } from 'lucide-react'
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
    <main>
      {/* HERO - Modern Layered Design (EN) */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container>
          <div className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* LEFT - Content */}
              <div className="lg:col-span-7 space-y-10">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark border border-orange-500/30 backdrop-blur-xl">
                  <span className="text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">AI Powered Platform</span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                    <span className="block text-white">In Export and</span>
                    <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Supply</span>
                    <span className="block mt-2 text-white/80 text-5xl lg:text-6xl xl:text-7xl">Smart Solution</span>
                  </h1>
                </div>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                  {heroMainText}
                </p>
              </div>

              {/* RIGHT - Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-red-600 rounded-[2.5rem] blur-2xl opacity-30"></div>
                  <div className="relative card-glass rounded-[2rem] p-6 border-2 border-white/20 overflow-hidden backdrop-blur-2xl">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                    <div className="h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.15),transparent_60%)] animate-pulse"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,107,53,0.1),transparent_50%)]"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,107,53,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative">
                          <div className="absolute -inset-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
                          <Image src="/LORT LOGO1.png" alt="LORT APP" width={400} height={400} className="relative z-10 w-full h-auto drop-shadow-[0_20px_80px_rgba(255,107,53,0.4)]" />
                        </div>
                      </div>
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

      {/* VISUALS SECTION - same as TR page */}
      <section className="relative px-4 py-16 overflow-hidden">
        <Container>
          <div className="relative rounded-[2rem] border border-white/10 overflow-hidden bg-black min-h-[620px]">
            <div className="absolute inset-0 opacity-70">
              <FadeSlider images={[{ src: mapUrl, alt: 'map-1' }, { src: phoneUrl, alt: 'map-2' }]} intervalMs={4500} />
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES - Ultra Modern 3D Grid (same design as TR) */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <Container>
          <div className="relative z-10">
            <div className="text-center mb-24 space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-orange-500/30 backdrop-blur-2xl group hover:scale-105 transition-all duration-300">
                <span className="text-sm font-bold text-orange-400">Premium Features</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="block text-white mb-2">Powerful</span>
                  <span className="block text-gradient-modern">Features</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{featuresDescription}</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
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
                {/* ROW 1 */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Featured AI Matching */}
                  <div className="lg:translate-y-12">
                    <div className="group relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[2rem] border-2 border-white/10 p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="relative">
                              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-40"></div>
                              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl">
                                <Rocket className="w-12 h-12 text-white" />
                              </div>
                            </div>
                            <div className="px-4 py-2 rounded-full glass-dark border border-orange-500/30">
                              <span className="text-xs font-bold text-orange-400">FEATURED</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-4xl font-black mb-4"><span className="text-gradient-modern">AI Matching</span></h3>
                            <p className="text-lg text-gray-400 leading-relaxed">Advanced algorithms analyze your profile and preferences to find the best business partners in seconds.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Cards */}
                  <div className="space-y-6">
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-black text-white mb-1">Global Network</h4>
                            <p className="text-sm text-gray-400">Worldwide reach</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-xl">
                            <MessageSquare className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-black text-white mb-1">Messaging</h4>
                            <p className="text-sm text-gray-400">Instant communication</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6 lg:order-2 lg:translate-y-12">
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                            <Lock className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-black text-white mb-1">Secure</h4>
                            <p className="text-sm text-gray-400">Encrypted communication</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group-hover:border-red-500/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-xl">
                            <Target className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-black text-white mb-1">Targeted Match</h4>
                            <p className="text-sm text-gray-400">AI-assisted</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:order-1">
                    <div className="group relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-[2rem] border-2 border-white/10 p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="relative">
                              <div className="absolute -inset-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-40"></div>
                              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl">
                                <BarChart3 className="w-12 h-12 text-white" />
                              </div>
                            </div>
                            <div className="px-4 py-2 rounded-full glass-dark border border-green-500/30">
                              <span className="text-xs font-bold text-green-400">ANALYTICS</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-4xl font-black mb-4 text-white">Detailed Analytics</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">Analyze performance in detail with real-time data and optimize your strategies.</p>
                          </div>
                          <div className="pt-6">
                            <div className="flex items-end gap-2 h-32 justify-center">
                              {[35, 55, 40, 75, 50, 85, 60, 70, 45, 90].map((height, i) => (
                                <div key={i} className="w-8 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-xl hover:from-green-400 hover:to-emerald-300 transition-all duration-300 cursor-pointer shadow-lg" style={{ height: `${height}%` }}></div>
                              ))}
                            </div>
                            <div className="text-center mt-4 text-sm text-gray-500">Monthly Performance Trend</div>
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


