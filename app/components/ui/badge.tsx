"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        destructive: "bg-destructive/10 text-destructive",
        info: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        outline: "border border-border bg-transparent text-foreground",
        gradient: "bg-gradient-to-r from-primary to-accent text-white",
        glass: "bg-white/20 backdrop-blur-sm text-white border border-white/30",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded-md",
        default: "px-2.5 py-1 text-xs rounded-lg",
        lg: "px-3 py-1.5 text-sm rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: LucideIcon
  dot?: boolean
  dotColor?: "default" | "success" | "warning" | "destructive" | "info"
}

const dotColors = {
  default: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  destructive: "bg-destructive",
  info: "bg-blue-500",
}

function Badge({ 
  className, 
  variant, 
  size, 
  icon: Icon, 
  dot, 
  dotColor = "default",
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[dotColor])} />
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }






