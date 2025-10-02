'use client'

// import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone } from 'lucide-react'

interface HeroPhoneMockupProps {
  screenshots?: Array<{
    src: string
    alt: string
  }>
}

export function HeroPhoneMockup({ screenshots = [] }: HeroPhoneMockupProps) {
  // Varsayılan olarak resim göstermeyelim; içerik yoksa fallback UI gelsin.
  const defaultScreenshots: Array<{ src: string; alt: string }> = []

  const images = screenshots.length > 0 ? screenshots : defaultScreenshots

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative mx-auto w-72 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
        {/* Screen */}
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-[2.5rem] flex items-center justify-between px-6 text-xs font-medium text-white z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
              </div>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="pt-12 h-full">
            {images.length > 0 && images[0] ? (
              <div className="h-full">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">LORT APP</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Akıllı Eşleştirme</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    <div className="w-28 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  )
}
