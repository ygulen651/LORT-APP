'use client'

import { cn } from '@/lib/utils'

interface FloatingOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'orange' | 'blue' | 'purple' | 'red'
  position?: string
  delay?: number
}

export function FloatingOrb({ 
  size = 'md', 
  color = 'orange', 
  position = 'top-20 left-10',
  delay = 0 
}: FloatingOrbProps) {
  const sizes = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]',
  }

  const colors = {
    orange: 'bg-orange-500/20',
    blue: 'bg-blue-500/20',
    purple: 'bg-purple-500/20',
    red: 'bg-red-500/20',
  }

  return (
    <div 
      className={cn(
        'absolute rounded-full blur-3xl animate-float pointer-events-none',
        sizes[size],
        colors[color],
        position
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

