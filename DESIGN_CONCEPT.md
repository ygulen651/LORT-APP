# LORT APP - Yeni Tasarım Konsepti

## 🎨 Tasarım Felsefesi

Tamamen yenilenmiş, cesur ve modern bir yaklaşım.

## 📐 Layout Stratejisi

### 1. **Split Screen Hero**
- **Sol Taraf**: İçerik odaklı, vertikal layout
  - Diagonal başlıklar
  - Stats grid (3 kolon)
  - Inline CTA buttons
  
- **Sağ Taraf**: Görsel odaklı
  - Floating cards layout
  - Ana carousel merkezi
  - Mini stat cards (animated)

### 2. **Bento Grid Features**
Modern Pinterest/Apple tarzı bento grid:

```
┌──────────┬────┐
│          │    │
│  Large1  │ S1 │
│          ├────┤
│          │ S2 │
├──────────┼────┤
│  Large2  │ S3 │
│          ├────┤
│          │    │
└──────────┴────┘
```

- **Large Cards**: 2x2 grid (önemli özellikler)
- **Medium Cards**: 1x2 grid (orta özellikler)
- **Small Cards**: 1x1 grid (stats/badges)
- **Wide Cards**: 2x1 grid (horizontal özellikler)

### 3. **Full-Width CTA**
- Gradient background (orange → red → orange)
- Radial overlay
- Trust badges row

## 🎯 Ana Özellikler

### Visual Hierarchy
1. **Hero Title**: 8xl, diagonal yerleşim
2. **Stats**: Grid format, sayısal vurgular
3. **Bento Cards**: Farklı boyutlar, farklı önem seviyeleri
4. **CTA**: Full-width, bold, maksimum görünürlük

### Color Strategy
- **Primary**: Black (#000000)
- **Accent**: Orange-Red gradient (500-600)
- **Secondary**: Gray-900
- **Highlights**: Blue, Purple, Yellow, Green (aksan renkler)

### Card System
- **Glass Effect**: backdrop-blur, border-white/10
- **Hover States**: border-orange-500/30, scale-110
- **Icons**: Gradient backgrounds (farklı renkler)
- **Transitions**: 300ms smooth

### Animation Philosophy
- **Float**: Sürekli yumuşak hareket (6s)
- **Pulse**: Glow effects
- **Scale**: Hover interactions
- **Translate**: Icon movements

## 🔥 Teknik Detaylar

### Grid Breakpoints
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns

### Card Sizes
- **Large**: md:col-span-2 lg:row-span-2
- **Medium**: lg:col-span-1 lg:row-span-2
- **Wide**: md:col-span-2
- **Small**: 1 column default

### Typography Scale
- **Hero**: 6xl → 8xl
- **Section**: 5xl → 6xl
- **Card Title**: 2xl → 3xl
- **Body**: lg → xl

## 🎭 Differences from Old Design

### Old Design
- Centered, symmetric layout
- Single column features
- Uniform card sizes
- Pastel colors

### New Design
- Split screen, asymmetric layout
- Bento grid (mixed sizes)
- Variable card importance
- Bold, saturated colors

## 📱 Responsive Strategy

### Mobile (< 768px)
- Stack split screen vertically
- Single column bento
- Larger touch targets

### Tablet (768-1024px)
- 2 column bento
- Reduced spacing
- Medium card sizes

### Desktop (> 1024px)
- Full split screen
- 3 column bento
- Maximum visual impact

## 🚀 Performance

- **Lazy Loading**: Images below fold
- **Animation Control**: prefers-reduced-motion
- **Optimized Assets**: WebP, AVIF
- **CSS Optimization**: Tailwind purge

## 🎨 Design Tokens

```css
/* Spacing */
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 1.5rem
--space-lg: 2rem
--space-xl: 4rem

/* Border Radius */
--radius-sm: 0.75rem
--radius-md: 1rem
--radius-lg: 1.5rem
--radius-xl: 2rem

/* Shadows */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.1)
--shadow-md: 0 4px 16px rgba(0,0,0,0.15)
--shadow-lg: 0 8px 32px rgba(0,0,0,0.2)
--shadow-glow: 0 0 40px rgba(255,107,53,0.3)
```

## 🎯 UX Principles

1. **Clarity**: Açık hiyerarşi
2. **Consistency**: Tutarlı patterns
3. **Feedback**: Her etkileşimde response
4. **Efficiency**: Minimum click/tap
5. **Delight**: Smooth animations

---

**Tasarım Güncellemesi**: 1 Ocak 2025
**Versiyon**: 2.0.0
**Konsept**: Bento Grid + Split Screen + Bold Colors

