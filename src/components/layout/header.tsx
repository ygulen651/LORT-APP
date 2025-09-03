'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { Container } from './container'



export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-md supports-[backdrop-filter]:bg-black/80">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          {/* Modern Logo Section */}
          <Link href="/" className="group flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Image 
                src="/LORT LOGO1.png" 
                alt="LORT APP Logo" 
                width={250} 
                height={250}
                className="h-16 w-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                LORT
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent -mt-1">
                APP
              </span>
            </div>
          </Link>



          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
