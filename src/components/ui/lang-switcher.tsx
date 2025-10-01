'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LangSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const initialLang = React.useMemo(() => {
    if (!pathname) return 'tr'
    return pathname.startsWith('/en') ? 'en' : 'tr'
  }, [pathname])
  const [currentLang, setCurrentLang] = React.useState(initialLang)

  React.useEffect(() => {
    setCurrentLang(initialLang)
  }, [initialLang])

  function switchLocale(next: 'tr' | 'en') {
    if (!pathname) return
    const isEn = pathname.startsWith('/en')
    let target = pathname
    if (next === 'en') {
      target = isEn ? pathname : `/en${pathname === '/' ? '' : pathname}`
    } else {
      // tr: strip /en prefix
      target = isEn ? pathname.replace(/^\/en(\/|$)/, '/') : pathname
    }
    setCurrentLang(next)
    try {
      // Tercihi cookie olarak sakla
      if (typeof document !== 'undefined') {
        const expires = new Date(Date.now() + 365*24*60*60*1000).toUTCString()
        document.cookie = `lang=${next}; path=/; expires=${expires}`
      }
      router.push(target)
      // Fallback: push başarısızsa tam sayfa yönlendirme
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.location.pathname !== target) {
          window.location.href = target
        }
      }, 50)
    } catch {
      if (typeof window !== 'undefined') {
        window.location.href = target
      }
    }
  }

  const nextLang = currentLang === 'tr' ? 'en' : 'tr'
  const href = (() => {
    if (!pathname) return '/'
    const isEn = pathname.startsWith('/en')
    if (nextLang === 'en') return isEn ? pathname : `/en${pathname === '/' ? '' : pathname}`
    return isEn ? pathname.replace(/^\/en(\/|$)/, '/') : pathname
  })()

  return (
    <Button asChild variant="ghost" size="icon" aria-label="Dil değiştir" title={currentLang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}>
      <Link href={href} prefetch={false} onClick={(e) => {
        e.stopPropagation()
        switchLocale(nextLang)
      }}>
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dil değiştir</span>
      </Link>
    </Button>
  )
}
