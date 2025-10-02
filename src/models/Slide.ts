import mongoose, { Document, Schema, Model } from 'mongoose'

export interface ISlide extends Document {
  title: string
  description: string
  image: string // Vercel Blob URL
  color: string // Tailwind gradient class
  order: number
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}

const SlideSchema = new Schema<ISlide>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
    default: 'from-orange-600 to-orange-500'
  },
  order: {
    type: Number,
    required: true,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const Slide: Model<ISlide> = mongoose.models.Slide || mongoose.model<ISlide>('Slide', SlideSchema)
export default Slide
