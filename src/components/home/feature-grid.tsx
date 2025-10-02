// import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain, 
  Shield, 
  Zap, 
  MessageSquare,
  Users,
  Globe,
  TrendingUp,
  Lock
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Akıllı Eşleşme',
    description: 'Yapay zeka destekli algoritma ile ihtiyaçlarınıza en uygun tedarikçi ve alıcıları bulun.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
  },
  {
    icon: Shield,
    title: 'Doğrulanmış Profiller',
    description: 'Tüm şirket profilleri detaylı doğrulama sürecinden geçer, güvenli iş ortaklıkları kurun.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
  },
  {
    icon: Zap,
    title: 'Hızlı RFQ',
    description: 'Teklif taleplerinizi dakikalar içinde gönderin ve hızlı yanıtlar alın.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
  },
  {
    icon: MessageSquare,
    title: 'Güvenli Mesajlaşma',
    description: 'End-to-end şifreli mesajlaşma ile güvenli iletişim kurun.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
  },
  {
    icon: Users,
    title: 'Global Ağ',
    description: 'Dünya çapında 50+ ülkeden binlerce doğrulanmış KOBİ ile bağlantı kurun.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
  },
  {
    icon: Globe,
    title: 'Çok Dilli Destek',
    description: 'Türkçe, İngilizce ve daha fazla dilde hizmet alın.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
  },
  {
    icon: TrendingUp,
    title: 'Analitik Raporlar',
    description: 'İş performansınızı detaylı raporlarla takip edin ve optimize edin.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
  },
  {
    icon: Lock,
    title: 'Veri Güvenliği',
    description: 'KVKK ve GDPR uyumlu veri koruma ile bilgileriniz güvende.',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="animate-fade-in"
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
