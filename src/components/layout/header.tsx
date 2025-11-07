'use client'

import { LangSwitcher } from '@/components/ui/lang-switcher'
import { Menu, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './container'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Ultra Modern Glassmorphism */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-black/80 via-black/60 to-transparent border-b border-white/10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 animate-pulse pointer-events-none"></div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
      
      <Container>
        <div className="relative flex h-24 items-center justify-between">
          {/* Logo Only */}
          <Link href="/" className="group flex items-center hover:scale-105 transition-all duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative">
                <Image 
                  src="/LORT LOGO1.png" 
                  alt="LORT APP Logo" 
                  width={250} 
                  height={250}
                  className="h-16 w-auto drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(255,107,53,0.5)]"
                />
              </div>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="p-2 rounded-full bg-white/5 hover:bg-orange-500/20 transition-colors duration-300">
              <LangSwitcher />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-3">
            <div className="p-2 rounded-full bg-white/5 hover:bg-orange-500/20 transition-colors duration-300">
              <LangSwitcher />
            </div>
            <button className="p-3 rounded-2xl glass-dark hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </Container>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
    </header>
  )
}
