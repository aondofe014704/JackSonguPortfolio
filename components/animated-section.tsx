"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-right" | "fade-left" | "scale-up" | "none"
  delay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: AnimatedSectionProps) {
  const [isIntersecting, ref] = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const getAnimationClass = () => {
    if (animation === "none") return ""

    const baseClass = "transition-all duration-700"
    const delayClass = delay ? `delay-[${delay}ms]` : ""

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-10 ${delayClass}`
        case "fade-in":
          return `${baseClass} opacity-0 ${delayClass}`
        case "fade-right":
          return `${baseClass} opacity-0 -translate-x-10 ${delayClass}`
        case "fade-left":
          return `${baseClass} opacity-0 translate-x-10 ${delayClass}`
        case "scale-up":
          return `${baseClass} opacity-0 scale-95 ${delayClass}`
        default:
          return ""
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 ${delayClass}`
  }

  return (
    <div ref={ref} className={cn(getAnimationClass(), className)}>
      {children}
    </div>
  )
}
