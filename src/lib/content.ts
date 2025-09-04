import connectDB from './mongodb'
import Content from '@/models/Content'

// Cache for content
let contentCache: { [key: string]: string } = {}
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function getContent(key: string, fallback: string = ''): Promise<string> {
  // Check cache first
  if (Date.now() - cacheTimestamp < CACHE_DURATION && contentCache[key]) {
    return contentCache[key]
  }

  try {
    await connectDB()
    const content = await Content.findOne({ key, isActive: true })
    
    if (content) {
      // Update cache
      contentCache[key] = content.content
      return content.content
    }
  } catch (error) {
    console.error(`Content fetch error for key "${key}":`, error)
  }

  // Return fallback if content not found
  return fallback
}

export async function getAllContent(): Promise<{ [key: string]: string }> {
  // Check cache first
  if (Date.now() - cacheTimestamp < CACHE_DURATION && Object.keys(contentCache).length > 0) {
    return contentCache
  }

  try {
    await connectDB()
    const contents = await Content.find({ isActive: true })
    
    const contentMap: { [key: string]: string } = {}
    contents.forEach(content => {
      contentMap[content.key] = content.content
    })

    // Update cache
    contentCache = contentMap
    cacheTimestamp = Date.now()
    
    return contentMap
  } catch (error) {
    console.error('Content fetch error:', error)
    return {}
  }
}

// Clear cache function (useful for admin operations)
export function clearContentCache() {
  contentCache = {}
  cacheTimestamp = 0
}




