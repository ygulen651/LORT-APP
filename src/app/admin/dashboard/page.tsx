'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LogOut, Image, FileText, Settings } from 'lucide-react'

interface Slide {
  _id: string
  title: string
  description: string
  image: string
  color: string
  order: number
  isActive: boolean
}

interface Content {
  _id: string
  key: string
  title: string
  content: string
  type: string
  language: string
  category: string
  isActive: boolean
}

export default function AdminDashboard() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [contents, setContents] = useState<Content[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [slidesRes, contentsRes] = await Promise.all([
        fetch('/api/slides'),
        fetch('/api/content')
      ])

      const slidesData = await slidesRes.json()
      const contentsData = await contentsRes.json()

      setSlides(slidesData)
      setContents(contentsData)
    } catch (error) {
      console.error('Data fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              LORT APP Admin Panel
            </h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="slides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="slides" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Slides
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              İçerik
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Ayarlar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="slides" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Slides Yönetimi</h2>
              <Button
                onClick={() => router.push('/admin/slides/new?key=admin-secret-key-2024')}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                Yeni Slide Ekle
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.map((slide) => (
                <Card key={slide._id} className="bg-gray-800 border-gray-700">
                  <div className="p-6">
                    <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {slide.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded text-xs ${
                        slide.isActive 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-red-900 text-red-300'
                      }`}>
                        {slide.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => router.push(`/admin/slides/${slide._id}`)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Düzenle
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">İçerik Yönetimi</h2>
              <Button
                onClick={() => router.push('/admin/content/new?key=admin-secret-key-2024')}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                Yeni İçerik Ekle
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contents.map((content) => (
                <Card key={content._id} className="bg-gray-800 border-gray-700">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {content.title}
                      </h3>
                      <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">
                        {content.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      Key: {content.key}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {content.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded text-xs ${
                        content.isActive 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-red-900 text-red-300'
                      }`}>
                        {content.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => router.push(`/admin/content/${content._id}?key=admin-secret-key-2024`)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Düzenle
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Ayarlar</h2>
            <Card className="bg-gray-800 border-gray-700 p-6">
              <p className="text-gray-400">Ayarlar bölümü yakında eklenecek...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
