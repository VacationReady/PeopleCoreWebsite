"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge text shown above the title */
  badge?: string
  /** Badge icon */
  badgeIcon?: LucideIcon
  /** Main title */
  title: string | React.ReactNode
  /** Subtitle or description */
  description?: string | React.ReactNode
  /** Text alignment */
  align?: "left" | "center" | "right"
  /** Whether to animate the header */
  animated?: boolean
  /** Max width for the description */
  descriptionMaxWidth?: "sm" | "md" | "lg" | "xl" | "full"
}

const maxWidthClasses = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
  full: "max-w-full",
}

const alignClasses = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
  right: "text-right items-end ml-auto",
}

function SectionHeader({
  className,
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  align = "center",
  animated = true,
  descriptionMaxWidth = "lg",
  ...props
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const content = (
    <div 
      className={cn(
        "flex flex-col gap-4 mb-12 md:mb-16",
        alignClasses[align],
        className
      )}
      {...props}
    >
      {/* Badge */}
      {badge && (
        <Badge variant="secondary" size="lg" icon={BadgeIcon}>
          {badge}
        </Badge>
      )}
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      
      {/* Description */}
      {description && (
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground leading-relaxed",
          maxWidthClasses[descriptionMaxWidth]
        )}>
          {description}
        </p>
      )}
    </div>
  )
  
  if (!animated || prefersReducedMotion) {
    return content
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  )
}

export { SectionHeader }

