"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

type FadeSliderProps = {
  images: { src: string; alt?: string; position?: string }[]
  intervalMs?: number
}

export function FadeSlider({ images, intervalMs = 4000 }: FadeSliderProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  return (
    <div className="relative w-full h-full bg-black">
      {images.map((img, i) => (
        <div
          key={img.src + i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Edge-to-edge cover visual */}
          <Image src={img.src} alt={img.alt || 'slide'} fill className={`object-cover ${img.position ? `object-[${img.position}]` : 'object-center'}`} priority={i === index} />
          {/* Subtle vignette for readability */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
        </div>
      ))}
    </div>
  )
}


