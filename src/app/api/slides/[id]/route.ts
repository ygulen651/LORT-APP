import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Slide from '@/models/Slide'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params
    const slide = await Slide.findById(id).exec()
    
    if (!slide) {
      return NextResponse.json(
        { error: 'Slide bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json(slide)
  } catch (error) {
    console.error('Slide fetch error:', error)
    return NextResponse.json(
      { error: 'Slide yüklenirken hata oluştu' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { title, description, image, color, order, isActive } = await request.json()

    await connectDB()
    const { id } = await params

    const slide = await Slide.findByIdAndUpdate(
      id,
      { title, description, image, color, order, isActive },
      { new: true, runValidators: true }
    ).exec()

    if (!slide) {
      return NextResponse.json(
        { error: 'Slide bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json(slide)
  } catch (error) {
    console.error('Slide update error:', error)
    return NextResponse.json(
      { error: 'Slide güncellenirken hata oluştu' },
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

    const slide = await Slide.findByIdAndDelete(id).exec()

    if (!slide) {
      return NextResponse.json(
        { error: 'Slide bulunamadı' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Slide silindi' })
  } catch (error) {
    console.error('Slide delete error:', error)
    return NextResponse.json(
      { error: 'Slide silinirken hata oluştu' },
      { status: 500 }
    )
  }
}
