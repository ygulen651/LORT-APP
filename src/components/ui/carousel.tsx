'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  autoPlay?: boolean
  interval?: number
  showNavigation?: boolean
}

export function Carousel({ children, className, autoPlay = true, interval = 3000, showNavigation = true }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(autoPlay)

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }, [children.length])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }, [children.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [isPlaying, nextSlide, interval])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Ultra Modern Carousel Container */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>

        {/* Ultra Modern Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-125 backdrop-blur-md border border-white/30 dark:border-gray-700/60 group"
            >
              <ChevronLeft className="h-7 w-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-125 backdrop-blur-md border border-white/30 dark:border-gray-700/60 group"
            >
              <ChevronRight className="h-7 w-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
            </button>

            {/* Ultra Modern Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-8 right-8 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 rounded-full p-4 shadow-2xl transition-all duration-500 backdrop-blur-md border border-white/30 dark:border-gray-700/60 group"
            >
              {isPlaying ? (
                <div className="w-6 h-6 flex space-x-1">
                  <div className="w-1 bg-gray-600 rounded-full animate-pulse group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <div className="w-1 bg-gray-600 rounded-full animate-pulse group-hover:bg-blue-600 transition-colors duration-300" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 bg-gray-600 rounded-full animate-pulse group-hover:bg-blue-600 transition-colors duration-300" style={{ animationDelay: '0.4s' }}></div>
                </div>
              ) : (
                <div className="w-0 h-0 border-l-[10px] border-l-gray-600 border-y-[8px] border-y-transparent ml-1 group-hover:border-l-blue-600 transition-colors duration-300"></div>
              )}
            </button>
          </>
        )}
      </div>

      {/* Ultra Modern Dots Indicator */}
      {showNavigation && (
        <div className="flex justify-center space-x-4 mt-12">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-5 h-5 rounded-full transition-all duration-500 shadow-xl transform",
                index === currentIndex 
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 scale-150 shadow-blue-500/60 ring-4 ring-blue-500/20" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-125 hover:shadow-lg"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
