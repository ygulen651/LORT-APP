'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ModernCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  hover3d?: boolean
}

export function ModernCard({ 
  children, 
  className, 
  glowColor = 'orange',
  hover3d = true 
}: ModernCardProps) {
  const glowColors = {
    orange: 'from-orange-500 to-orange-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600',
  }

  return (
    <div className="group relative perspective-1000">
      {/* Glow effect */}
      <div 
        className={cn(
          `absolute -inset-0.5 bg-gradient-to-r rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`,
          glowColors[glowColor as keyof typeof glowColors] || glowColors.orange
        )}
      ></div>
      
      {/* Card */}
      <div
        className={cn(
          'relative card-glass p-8 h-full transition-all duration-300',
          hover3d && 'group-hover:scale-105 group-hover:-translate-y-2',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

