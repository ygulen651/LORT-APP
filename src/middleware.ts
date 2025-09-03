import { NextRequest, NextResponse } from 'next/server'

const ADMIN_SECURE_URL = process.env.ADMIN_SECURE_URL || 'admin-secret-key-2024'

export function middleware(request: NextRequest) {
  // Admin paneli rotaları
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // API endpoint'leri için güvenli key kontrolü yapma
    if (request.nextUrl.pathname.startsWith('/admin/api/') || 
        request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.next()
    }
    
    // Güvenli URL kontrolü
    const secureKey = request.nextUrl.searchParams.get('key')
    
    if (secureKey === ADMIN_SECURE_URL) {
      // Güvenli URL doğru, erişime izin ver
      return NextResponse.next()
    }
    
    // Güvenli URL yoksa veya yanlışsa erişimi reddet
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
