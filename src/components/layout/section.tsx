import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "muted" | "accent"
}

export function Section({ children, className, background = "default" }: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted",
    accent: "bg-accent",
  }

  return (
    <section className={cn("py-16", backgroundClasses[background], className)}>
      {children}
    </section>
  )
}