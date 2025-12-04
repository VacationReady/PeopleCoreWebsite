"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { LucideIcon, ArrowRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon displayed in the header */
  icon?: LucideIcon
  /** Icon gradient colors */
  iconGradient?: string
  /** Main title */
  title: string
  /** Description text */
  description?: string
  /** Badge text */
  badge?: string
  /** Background color/gradient */
  background?: "primary" | "secondary" | "gradient" | "dark" | "custom"
  /** Custom background class (when background is "custom") */
  customBackground?: string
  /** Primary CTA button text */
  ctaLabel?: string
  /** Primary CTA callback */
  onCtaClick?: () => void
  /** CTA link (alternative to callback) */
  ctaHref?: string
  /** Secondary CTA label */
  secondaryCtaLabel?: string
  /** Secondary CTA callback */
  onSecondaryCtaClick?: () => void
  /** Secondary CTA link */
  secondaryCtaHref?: string
  /** Size variant */
  size?: "default" | "lg"
}

const backgroundClasses = {
  primary: "bg-gradient-to-r from-primary to-primary/80",
  secondary: "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900",
  gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
  dark: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  custom: "",
}

const textColorClasses = {
  primary: "text-primary-foreground",
  secondary: "text-foreground",
  gradient: "text-white",
  dark: "text-white",
  custom: "",
}

function PageHeader({
  className,
  icon: Icon,
  iconGradient = "from-white/20 to-white/10",
  title,
  description,
  badge,
  background = "gradient",
  customBackground,
  ctaLabel,
  onCtaClick,
  ctaHref,
  secondaryCtaLabel,
  onSecondaryCtaClick,
  secondaryCtaHref,
  size = "default",
  children,
  ...props
}: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const bgClass = background === "custom" ? customBackground : backgroundClasses[background]
  const textClass = background === "custom" ? "" : textColorClasses[background]
  const isLight = background === "secondary"
  
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        bgClass,
        size === "lg" ? "py-20 md:py-28" : "py-14 md:py-20",
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid" />
      </div>
      
      {/* Decorative Elements */}
      {!isLight && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          {/* Badge */}
          {badge && (
            <Badge 
              variant={isLight ? "secondary" : "glass"} 
              size="lg"
            >
              {badge}
            </Badge>
          )}
          
          {/* Icon + Title Row */}
          <div className="flex items-center gap-4">
            {Icon && (
              <motion.div
                initial={prefersReducedMotion ? {} : { scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={cn(
                  "p-3 rounded-xl bg-gradient-to-br",
                  iconGradient
                )}
              >
                <Icon className={cn("w-8 h-8 md:w-10 md:h-10", textClass)} />
              </motion.div>
            )}
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
              textClass
            )}>
              {title}
            </h1>
          </div>
          
          {/* Description */}
          {description && (
            <p className={cn(
              "text-lg md:text-xl max-w-3xl leading-relaxed",
              isLight ? "text-muted-foreground" : "text-white/80"
            )}>
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          {(ctaLabel || secondaryCtaLabel) && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              {ctaLabel && (
                <Button
                  variant={isLight ? "gradient" : "default"}
                  size="lg"
                  className={!isLight ? "bg-white text-slate-900 hover:bg-white/90" : ""}
                  onClick={onCtaClick}
                  asChild={!!ctaHref}
                >
                  {ctaHref ? (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                      {ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <>
                      {ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
              {secondaryCtaLabel && (
                <Button
                  variant="outline"
                  size="lg"
                  className={!isLight ? "border-white/30 text-white hover:bg-white/10" : ""}
                  onClick={onSecondaryCtaClick}
                  asChild={!!secondaryCtaHref}
                >
                  {secondaryCtaHref ? (
                    <a href={secondaryCtaHref}>
                      {secondaryCtaLabel}
                    </a>
                  ) : (
                    secondaryCtaLabel
                  )}
                </Button>
              )}
            </motion.div>
          )}
          
          {/* Additional Content */}
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export { PageHeader }








