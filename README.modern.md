# LORT APP - Modern Next.js 15 Application

Modern, performanslı ve güvenli bir ihracat ve tedarik eşleştirme platformu.

## Teknoloji Stack

### Core
- **Next.js 15.5.2** - React Framework (App Router)
- **React 19.1.0** - UI Library
- **TypeScript 5** - Type Safety (Strict Mode)
- **Tailwind CSS 3.4** - Styling
- **MongoDB** - Database
- **Mongoose** - ODM

### UI & Animations
- **Radix UI** - Headless Components
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - Component Library

### Development
- **ESLint** - Code Linting
- **Prettier** - Code Formatting
- **TypeScript Strict Mode** - Enhanced Type Safety

## Modern Özellikler

### Performance
- ✅ Next.js Turbopack
- ✅ Image Optimization (AVIF, WebP)
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ ISR (Incremental Static Regeneration)

### Security
- ✅ Strict Security Headers
- ✅ CSP Ready
- ✅ XSS Protection
- ✅ HSTS Enabled
- ✅ Frame Options

### Developer Experience
- ✅ TypeScript Strict Mode
- ✅ ESLint + Prettier
- ✅ VS Code Settings
- ✅ EditorConfig
- ✅ Type-safe API Routes

### UI/UX
- ✅ Dark Mode Support
- ✅ Responsive Design
- ✅ Smooth Animations
- ✅ Accessibility (a11y)
- ✅ Modern Component Library

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Environment Variables

`.env.local` dosyası oluşturun:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

## Scripts

```bash
# Development
npm run dev              # Geliştirme sunucusu (Turbopack)

# Build
npm run build            # Production build
npm run start            # Production sunucu

# Code Quality
npm run lint             # ESLint kontrolü
npm run lint:fix         # ESLint otomatik düzeltme
npm run format           # Prettier formatting
npm run format:check     # Prettier kontrol
npm run type-check       # TypeScript kontrolü

# Other
npm run clean            # Cache temizleme
npm run seed-content     # Örnek içerik yükleme
```

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Ana site route group
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   └── en/                # English route
├── components/            # React components
│   ├── home/             # Ana sayfa components
│   ├── layout/           # Layout components
│   ├── providers/        # Context providers
│   └── ui/               # UI components (shadcn)
├── lib/                   # Utility functions
│   ├── cloudinary.ts     # Cloudinary config
│   ├── content.ts        # Content helpers
│   ├── mongodb.ts        # MongoDB connection
│   └── utils.ts          # Helper functions
└── models/                # Mongoose models
```

## TypeScript Configuration

Modern ve strict TypeScript ayarları:

- ✅ Strict Mode Enabled
- ✅ ES2022 Target
- ✅ Bundler Module Resolution
- ✅ No Unused Locals/Parameters
- ✅ No Unchecked Indexed Access
- ✅ No Fallthrough Cases

## Tailwind CSS

Modern Tailwind yapılandırması:

- ✅ Class-based Dark Mode
- ✅ Custom Animations
- ✅ HSL Color System
- ✅ Future Flags
- ✅ Typography Plugin Ready

## ESLint & Prettier

Tutarlı kod kalitesi için:

- ✅ Next.js Recommended Rules
- ✅ TypeScript Integration
- ✅ Automatic Formatting
- ✅ Import Sorting
- ✅ Tailwind Class Sorting

## VS Code Extensions

Önerilen uzantılar (`.vscode/extensions.json`):

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript
- Auto Rename Tag
- Error Lens

## Performance Metrics

Hedef metrikler:

- Lighthouse Score: 90+
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

## Security Headers

Otomatik eklenen güvenlik header'ları:

- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security
- Referrer-Policy
- Permissions-Policy

## Browser Support

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## License

MIT

## İletişim

- Website: https://lort.app
- Email: info@lort.app

---

**LORT APP** - İhracat ve tedarikte akıllı eşleştirme

