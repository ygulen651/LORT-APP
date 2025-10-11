'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownProps {
  targetDate: Date
  title?: string
  labels?: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
}

export function Countdown({ 
  targetDate, 
  title = "Lansmanına",
  labels = {
    days: 'Gün',
    hours: 'Saat',
    minutes: 'Dakika',
    seconds: 'Saniye'
  }
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ]

  return (
    <div className="w-full">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
          🚀 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-orange-500/30 group-hover:border-orange-500/60 p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-1 sm:space-y-2">
                {/* Number */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-br from-white via-orange-100 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
                  {String(unit.value).padStart(2, '0')}
                </div>
                
                {/* Label */}
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-orange-400/80 uppercase tracking-wider">
                  {unit.label}
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-orange-500/50 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-orange-500/50 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-orange-500/50 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-orange-500/50 rounded-br-xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Separator Line */}
      <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      </div>
    </div>
  )
}

