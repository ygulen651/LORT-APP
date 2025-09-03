require('dotenv').config()
const mongoose = require('mongoose')

// Content model
const ContentSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'html', 'markdown'],
    default: 'text'
  },
  language: {
    type: String,
    enum: ['tr', 'en'],
    default: 'tr'
  },
  category: {
    type: String,
    enum: ['hero', 'features', 'about', 'contact', 'footer', 'general'],
    default: 'general'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const Content = mongoose.models.Content || mongoose.model('Content', ContentSchema)

const sampleContent = [
  {
    key: 'hero-title',
    title: 'Ana Başlık',
    content: 'LORT APP',
    type: 'text',
    language: 'tr',
    category: 'hero',
    isActive: true
  },
  {
    key: 'hero-subtitle',
    title: 'Alt Başlık',
    content: 'İhracat ve Tedarikte Akıllı Eşleştirme',
    type: 'text',
    language: 'tr',
    category: 'hero',
    isActive: true
  },
  {
    key: 'hero-description',
    title: 'Açıklama',
    content: 'İhracat ve tedarikte akıllı eşleştirme – LORT APP ile doğru partneri dakikalar içinde bulun. Global KOBİ ağında güvenli iş ortaklıkları kurun.',
    type: 'text',
    language: 'tr',
    category: 'hero',
    isActive: true
  },
  {
    key: 'hero-welcome',
    title: 'Hoş Geldiniz Mesajı',
    content: 'Geleceğin İş Ağına Hoş Geldiniz',
    type: 'text',
    language: 'tr',
    category: 'hero',
    isActive: true
  },
  {
    key: 'hero-main-text',
    title: 'Ana Metin',
    content: 'Artık tek dokunuşla dünyanın dört bir yanındaki girişimciler, yatırımcılar, üreticiler ve pazarlamacılarla doğrudan bağlantı kurabilirsiniz.',
    type: 'text',
    language: 'tr',
    category: 'hero',
    isActive: true
  },
  {
    key: 'features-title',
    title: 'Özellikler Başlığı',
    content: 'Geleneksel İş Dünyasını Dönüştürüyoruz',
    type: 'text',
    language: 'tr',
    category: 'features',
    isActive: true
  },
  {
    key: 'features-description',
    title: 'Özellikler Açıklaması',
    content: 'Aracılar, yüksek komisyonlar, yanlış eşleşmeler, zaman kayıpları... Lort App, tüm bu sorunları ortadan kaldırmak için 2024\'te doğdu.',
    type: 'text',
    language: 'tr',
    category: 'features',
    isActive: true
  },
  {
    key: 'target-audience-title',
    title: 'Hedef Kitle Başlığı',
    content: 'Sizi Kimlerle Buluşturuyoruz?',
    type: 'text',
    language: 'tr',
    category: 'about',
    isActive: true
  },
  {
    key: 'target-audience-description',
    title: 'Hedef Kitle Açıklaması',
    content: 'Global iş ağına katılmak isteyen tüm profesyoneller',
    type: 'text',
    language: 'tr',
    category: 'about',
    isActive: true
  },
  {
    key: 'cta-title',
    title: 'CTA Başlığı',
    content: 'Şimdi Katılın, Fark Yaratın',
    type: 'text',
    language: 'tr',
    category: 'general',
    isActive: true
  },
  {
    key: 'cta-description',
    title: 'CTA Açıklaması',
    content: 'Lort App, LinkedIn\'in sunduğundan çok daha fazlasını, TradeAtlas\'ın sağladığından çok daha hızlı ve esnek bir şekilde sunuyor. Burası, iş fırsatlarının buluşma noktası.',
    type: 'text',
    language: 'tr',
    category: 'general',
    isActive: true
  }
]

async function seedContent() {
  try {
    // MongoDB bağlantısı
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB bağlantısı başarılı')

    // Mevcut içerikleri temizle
    await Content.deleteMany({})
    console.log('Mevcut içerikler temizlendi')

    // Yeni içerikleri ekle
    for (const content of sampleContent) {
      const contentDoc = new Content(content)
      await contentDoc.save()
      console.log(`İçerik eklendi: ${content.key}`)
    }

    console.log('Tüm örnek içerikler başarıyla eklendi!')

  } catch (error) {
    console.error('Hata:', error)
  } finally {
    await mongoose.disconnect()
    console.log('MongoDB bağlantısı kapatıldı')
  }
}

seedContent()
