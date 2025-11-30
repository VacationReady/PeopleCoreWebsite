"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const sectionContainerVariants = cva(
  "relative w-full",
  {
    variants: {
      background: {
        default: "bg-background",
        muted: "bg-muted/30",
        card: "bg-card",
        gradient: "bg-gradient-to-b from-muted/50 to-background",
        gradientReverse: "bg-gradient-to-b from-background to-muted/50",
        dark: "bg-slate-900 text-white",
        hero: "bg-hero-gradient text-white",
        subtle: "bg-slate-50 dark:bg-slate-900/50",
        primary: "bg-primary/5",
        accent: "bg-accent/5",
      },
      padding: {
        none: "",
        sm: "py-12 md:py-16",
        default: "py-16 md:py-24",
        lg: "py-24 md:py-32",
        xl: "py-32 md:py-40",
      },
      container: {
        none: "",
        default: "[&>.section-content]:max-w-7xl [&>.section-content]:mx-auto [&>.section-content]:px-4 [&>.section-content]:sm:px-6 [&>.section-content]:lg:px-8",
        tight: "[&>.section-content]:max-w-5xl [&>.section-content]:mx-auto [&>.section-content]:px-4 [&>.section-content]:sm:px-6 [&>.section-content]:lg:px-8",
        wide: "[&>.section-content]:max-w-screen-2xl [&>.section-content]:mx-auto [&>.section-content]:px-4 [&>.section-content]:sm:px-6 [&>.section-content]:lg:px-8",
        full: "[&>.section-content]:px-4 [&>.section-content]:sm:px-6 [&>.section-content]:lg:px-8",
      },
    },
    defaultVariants: {
      background: "default",
      padding: "default",
      container: "default",
    },
  }
)

interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionContainerVariants> {
  as?: "section" | "div" | "article" | "aside"
  /** Show a decorative background pattern */
  pattern?: "none" | "dots" | "grid"
  /** Show decorative gradient blobs */
  blobs?: boolean
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ 
    className, 
    background, 
    padding, 
    container,
    as: Component = "section",
    pattern = "none",
    blobs = false,
    children,
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={cn(sectionContainerVariants({ background, padding, container }), className)}
        {...props}
      >
        {/* Background Pattern */}
        {pattern !== "none" && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className={cn(
              "absolute inset-0",
              pattern === "dots" && "bg-dots",
              pattern === "grid" && "bg-grid"
            )} />
          </div>
        )}
        
        {/* Decorative Blobs */}
        {blobs && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>
        )}
        
        {/* Content */}
        <div className="section-content relative z-10">
          {children}
        </div>
      </Component>
    )
  }
)
SectionContainer.displayName = "SectionContainer"

export { SectionContainer, sectionContainerVariants }

