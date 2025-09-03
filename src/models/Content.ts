import mongoose, { Document, Schema, Model } from 'mongoose'

export interface IContent extends Document {
  key: string // unique key for content
  title: string
  content: string
  type: 'text' | 'html' | 'markdown'
  language: 'tr' | 'en'
  category: 'hero' | 'features' | 'about' | 'contact' | 'footer' | 'general'
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}

const ContentSchema = new Schema<IContent>({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'html', 'markdown'],
    default: 'text'
  },
  language: {
    type: String,
    enum: ['tr', 'en'],
    default: 'tr'
  },
  category: {
    type: String,
    enum: ['hero', 'features', 'about', 'contact', 'footer', 'general'],
    default: 'general'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema)
export default Content
