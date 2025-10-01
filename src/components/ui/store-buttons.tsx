import { Button } from '@/components/ui/button'
import { Apple, Smartphone } from 'lucide-react'

interface StoreButtonsProps {
  appStoreUrl?: string
  googlePlayUrl?: string
  className?: string
}

export function StoreButtons({ 
  appStoreUrl, 
  googlePlayUrl, 
  className = '' 
}: StoreButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {appStoreUrl && (
        <Button
          asChild
          size="lg"
          className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
            <Apple className="mr-2 h-5 w-5" />
            App Store'dan İndir
          </a>
        </Button>
      )}
      
      {googlePlayUrl && (
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2"
        >
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
            <Smartphone className="mr-2 h-5 w-5" />
            Google Play'den İndir
          </a>
        </Button>
      )}
      
      {!appStoreUrl && !googlePlayUrl && (
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            disabled
            className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <Apple className="mr-2 h-5 w-5" />
            App Store'dan İndir
          </Button>
          <Button
            size="lg"
            variant="outline"
            disabled
            className="border-2"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            Google Play'den İndir
          </Button>
        </div>
      )}
    </div>
  )
}
