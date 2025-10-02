import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Content from '@/models/Content'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params
    const content = await Content.findById(id).exec()
    
    if (!content) {
      return NextResponse.json(
        { error: 'İçerik bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json(
      { error: 'İçerik yüklenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { key, title, content, type, language, category, isActive } = await request.json()

    await connectDB()
    const { id } = await params

    const contentDoc = await Content.findByIdAndUpdate(
      id,
      { key, title, content, type, language, category, isActive },
      { new: true, runValidators: true }
    ).exec()

    if (!contentDoc) {
      return NextResponse.json(
        { error: 'İçerik bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json(contentDoc)
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json(
      { error: 'İçerik güncellenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    const content = await Content.findByIdAndDelete(id).exec()

    if (!content) {
      return NextResponse.json(
        { error: 'İçerik bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'İçerik silindi' })
  } catch (error) {
    console.error('Content delete error:', error)
    return NextResponse.json(
      { error: 'İçerik silinirken hata oluştu' },
      { status: 500 }
    )
  }
}
