'use client'

// import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { name: 'Microsoft', src: '/images/logos/microsoft.svg', alt: 'Microsoft' },
  { name: 'Google', src: '/images/logos/google.svg', alt: 'Google' },
  { name: 'Amazon', src: '/images/logos/amazon.svg', alt: 'Amazon' },
  { name: 'Apple', src: '/images/logos/apple.svg', alt: 'Apple' },
  { name: 'Meta', src: '/images/logos/meta.svg', alt: 'Meta' },
  { name: 'Netflix', src: '/images/logos/netflix.svg', alt: 'Netflix' },
  { name: 'Spotify', src: '/images/logos/spotify.svg', alt: 'Spotify' },
  { name: 'Uber', src: '/images/logos/uber.svg', alt: 'Uber' },
]

export function LogoWall() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
          Güvenilen Global Şirketler
        </h2>
        <p className="text-muted-foreground">
          Dünya çapında binlerce şirket LORT APP ile iş ortaklıkları kuruyor
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex space-x-16 items-center">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
