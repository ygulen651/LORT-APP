import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Content from '@/models/Content'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const language = searchParams.get('language') || 'tr'

    await connectDB()

    let query: any = { isActive: true, language }
    if (category) {
      query.category = category
    }

    const contents = await Content.find(query).sort({ key: 1 }).exec()
    return NextResponse.json(contents)
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json(
      { error: 'İçerik yüklenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { key, title, content, type, language, category } = await request.json()

    if (!key || !title || !content) {
      return NextResponse.json(
        { error: 'Key, başlık ve içerik gerekli' },
        { status: 400 }
      )
    }

    await connectDB()

    const contentDoc = new Content({
      key,
      title,
      content,
      type: type || 'text',
      language: language || 'tr',
      category: category || 'general'
    })

    await contentDoc.save()

    return NextResponse.json(contentDoc, { status: 201 })
  } catch (error) {
    console.error('Content create error:', error)
    return NextResponse.json(
      { error: 'İçerik oluşturulurken hata oluştu' },
      { status: 500 }
    )
  }
}
