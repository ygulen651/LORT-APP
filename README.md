# LORT APP - Tanıtım Sitesi

LORT APP için modern, hızlı ve SEO-dostu tanıtım sitesi. Uluslararası KOBİ'leri alıcı-satıcı-tedarikçi olarak "akıllı eşleştirme" modeliyle buluşturan platform.

## 🚀 Özellikler

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** ile modern tasarım
- **shadcn/ui** bileşen kütüphanesi
- **Framer Motion** animasyonlar
- **Lucide React** ikonlar
- **Sanity v3** CMS entegrasyonu
- **SEO optimizasyonu** (metadata, sitemap, robots.txt)
- **Dark/Light tema** desteği
- **Çok dilli** hazırlık (TR/EN)
- **Responsive** tasarım
- **Production-ready** kod

## 🛠️ Teknoloji Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **CMS:** Sanity v3
- **Theme:** next-themes
- **Deployment:** Vercel

## 📦 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone <repository-url>
cd lort-app
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Environment Variables

`.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://lort.app
```

### 4. Sanity CMS Kurulumu

```bash
# Sanity CLI'yi global olarak yükleyin
npm install -g @sanity/cli

# Sanity projesini başlatın
sanity init --project <project-id> --dataset production --template clean
```

### 5. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Proje Yapısı

```
lort-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/            # Site sayfaları
│   │   │   ├── page.tsx       # Ana sayfa
│   │   │   ├── ozellikler/    # Özellikler sayfası
│   │   │   ├── gorseller/     # Görseller sayfası
│   │   │   ├── cozumler/      # Çözümler sayfası
│   │   │   ├── fiyatlandirma/ # Fiyatlandırma sayfası
│   │   │   ├── hakkinda/      # Hakkında sayfası
│   │   │   ├── blog/          # Blog sayfaları
│   │   │   ├── guven/         # Güven sayfası
│   │   │   ├── iletisim/      # İletişim sayfası
│   │   │   ├── gizlilik/      # Gizlilik politikası
│   │   │   └── kvkk/          # KVKK aydınlatma metni
│   │   ├── api/               # API routes
│   │   │   └── og/            # OG image generation
│   │   ├── globals.css        # Global stiller
│   │   ├── layout.tsx         # Root layout
│   │   ├── sitemap.ts         # Sitemap
│   │   └── robots.ts          # Robots.txt
│   ├── components/            # React bileşenleri
│   │   ├── ui/                # shadcn/ui bileşenleri
│   │   ├── layout/            # Layout bileşenleri
│   │   ├── home/              # Ana sayfa bileşenleri
│   │   └── providers/         # Context providers
│   └── lib/                   # Utility fonksiyonları
│       ├── utils.ts           # Genel utilities
│       └── sanity/            # Sanity yapılandırması
├── sanity/                    # Sanity CMS
│   ├── schema.ts              # Ana şema
│   └── schemas/               # Şema tanımları
├── public/                    # Statik dosyalar
├── next.config.js             # Next.js yapılandırması
└── tailwind.config.js         # Tailwind yapılandırması
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary:** #2563EB (indigo/blue-600)
- **Accent:** #F59E0B (amber-500)
- **Neutral:** slate 900/700/500/200
- **Background:** zinc-50

### Tipografi

- **Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700

### Bileşenler

- **Cards:** rounded-2xl, yumuşak gölgeler
- **Spacing:** p-6/8 geniş boşluklar
- **Animations:** Framer Motion ile yumuşak geçişler

## 📱 Sayfalar

### Ana Sayfa (/)
- Hero section (telefon mockup)
- Özellikler grid'i
- Nasıl çalışır bölümü
- Müşteri yorumları
- Logo duvarı
- CTA bölümü

### Özellikler (/ozellikler)
- Özellik grid'i
- Detaylı açıklamalar
- Ekran görüntüleri
- Faydalar

### Görseller (/gorseller)
- Kategori filtreleri
- Masonry grid layout
- Modal detay görünümü
- Arama ve filtreleme

### Çözümler (/cozumler)
- Kullanım senaryoları
- Sektör bazlı çözümler
- Zorluklar ve çözümler
- Sonuçlar

### Fiyatlandırma (/fiyatlandirma)
- Plan kartları
- Özellik karşılaştırması
- SSS bölümü
- CTA

### Hakkında (/hakkinda)
- Misyon, vizyon, değerler
- Hikaye
- Timeline
- Ekip
- İstatistikler

### Blog (/blog)
- Blog yazıları listesi
- Kategori filtreleri
- Arama
- Newsletter

### Güven (/guven)
- Güvenlik özellikleri
- Uyumluluk sertifikaları
- Veri koruma
- Raporlama

### İletişim (/iletisim)
- İletişim formu
- İletişim bilgileri
- Destek seçenekleri
- SSS

### Yasal Sayfalar
- **Gizlilik Politikası** (/gizlilik)
- **KVKK Aydınlatma Metni** (/kvkk)

## 🔧 Sanity CMS

### Şema Yapısı

- **siteSettings:** Site ayarları
- **feature:** Özellikler
- **visual:** Bilgi görselleri
- **post:** Blog yazıları
- **author:** Yazarlar
- **category:** Kategoriler
- **useCase:** Kullanım senaryoları
- **listing:** İlanlar (opsiyonel)
- **company:** Şirketler (opsiyonel)

### İçerik Ekleme

1. Sanity Studio'ya giriş yapın
2. İlgili şemayı seçin
3. Yeni içerik ekleyin
4. Yayınlayın

## 🚀 Deployment

### Vercel (Önerilen)

1. GitHub repository'sini Vercel'e bağlayın
2. Environment variables'ları ekleyin
3. Deploy edin

```bash
# Vercel CLI ile
npm install -g vercel
vercel
```

### Diğer Platformlar

- **Netlify:** `npm run build && npm run export`
- **AWS Amplify:** Next.js template kullanın
- **Railway:** GitHub entegrasyonu

## 📊 SEO Optimizasyonu

- **Metadata API** ile dinamik meta tags
- **Sitemap.xml** otomatik oluşturma
- **Robots.txt** yapılandırması
- **OG Image** dinamik oluşturma
- **Canonical URLs** ve **Twitter/OG tags**
- **Structured Data** hazırlığı

## 🎯 Performans

- **ISR** (Incremental Static Regeneration)
- **Image Optimization** (next/image)
- **Lazy Loading** ve **Skeleton** UI
- **Code Splitting** otomatik
- **Lighthouse 90+** hedefi

## ♿ Erişilebilirlik

- **Semantic HTML** yapısı
- **ARIA** etiketleri
- **Focus-visible** stilleri
- **Keyboard navigation** desteği
- **Screen reader** uyumluluğu

## 🌐 Çok Dilli Destek

- **i18n** hazırlığı (TR/EN)
- **CMS'den** çok dilli alanlar
- **URL routing** hazırlığı
- **Language switcher** bileşeni

## 🔒 Güvenlik

- **HTTPS** zorunlu
- **Security headers** yapılandırması
- **CSP** (Content Security Policy) hazırlığı
- **Sanitization** ve **validation**

## 📈 Analytics

- **Google Analytics** hazırlığı
- **Google Tag Manager** entegrasyonu
- **Custom events** tracking
- **Performance monitoring**

## 🧪 Test

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 Geliştirme

### Yeni Sayfa Ekleme

1. `src/app/(site)/` altında klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. Metadata export edin
4. Navigation'a ekleyin

### Yeni Bileşen Ekleme

1. `src/components/` altında uygun klasöre ekleyin
2. TypeScript interface'leri tanımlayın
3. Storybook story'si ekleyin (opsiyonel)

### Sanity Şema Ekleme

1. `sanity/schemas/` altında şema dosyası oluşturun
2. `sanity/schema.ts`'e ekleyin
3. Query'leri `src/lib/sanity/queries.ts`'e ekleyin

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Website:** [https://lort.app](https://lort.app)
- **Email:** info@lort.app
- **Phone:** +90 (212) 123 45 67

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Sanity](https://www.sanity.io/) - Headless CMS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

**LORT APP** - İhracat ve tedarikte akıllı eşleştirme 🚀
#   L O R T - A P P  
 