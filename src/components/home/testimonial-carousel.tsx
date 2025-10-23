'use client'

import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    company: 'ABC Tekstil A.Ş.',
    role: 'Genel Müdür',
    content: 'LORT APP sayesinde ihracat süreçlerimizi %300 hızlandırdık. Artık doğru müşterileri bulmak çok kolay.',
    rating: 5,
    avatar: '/images/avatars/ahmet.jpg',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    company: 'Garcia Trading Ltd.',
    role: 'Export Manager',
    content: 'The smart matching algorithm helped us find reliable suppliers in Turkey within days, not months. Game changer!',
    rating: 5,
    avatar: '/images/avatars/maria.jpg',
  },
  {
    id: 3,
    name: 'Mehmet Demir',
    company: 'Demir Gıda San.',
    role: 'Satış Müdürü',
    content: 'Güvenli mesajlaşma ve doğrulanmış profiller sayesinde artık kiminle iş yaptığımızdan eminiz.',
    rating: 5,
    avatar: '/images/avatars/mehmet.jpg',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    company: 'Johnson Imports',
    role: 'Procurement Director',
    content: 'LORT APP transformed our sourcing process. We now have access to verified suppliers across multiple countries.',
    rating: 5,
    avatar: '/images/avatars/sarah.jpg',
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  if (!currentTestimonial) return null

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Müşterilerimiz Ne Diyor?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dünya çapında binlerce KOBİ LORT APP ile iş süreçlerini hızlandırıyor
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div key={currentIndex}>
              <Card className="p-8">
                <CardContent className="text-center">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{currentTestimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
