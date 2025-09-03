import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Slide from '@/models/Slide'

export async function GET() {
  try {
    await connectDB()
    const slides = await Slide.find({ isActive: true }).sort({ order: 1 }).exec()
    return NextResponse.json(slides)
  } catch (error) {
    console.error('Slides fetch error:', error)
    return NextResponse.json(
      { error: 'Slides yüklenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, image, color, order } = await request.json()

    if (!title || !description || !image) {
      return NextResponse.json(
        { error: 'Başlık, açıklama ve görsel gerekli' },
        { status: 400 }
      )
    }

    await connectDB()

    const slide = new Slide({
      title,
      description,
      image,
      color: color || 'from-orange-600 to-orange-500',
      order: order || 0
    })

    await slide.save()

    return NextResponse.json(slide, { status: 201 })
  } catch (error) {
    console.error('Slide create error:', error)
    return NextResponse.json(
      { error: 'Slide oluşturulurken hata oluştu' },
      { status: 500 }
    )
  }
}
