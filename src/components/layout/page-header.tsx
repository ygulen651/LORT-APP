import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ 
  title, 
  description, 
  className,
  children 
}: PageHeaderProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
