"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "text" | "rectangular"
  animation?: "pulse" | "shimmer" | "none"
}

function Skeleton({
  className,
  variant = "default",
  animation = "shimmer",
  ...props
}: SkeletonProps) {
  const baseStyles = "bg-muted"
  
  const variantStyles = {
    default: "rounded-lg",
    circular: "rounded-full",
    text: "rounded h-4 w-full",
    rectangular: "rounded-none",
  }
  
  const animationStyles = {
    pulse: "animate-pulse",
    shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
    none: "",
  }
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      {...props}
    />
  )
}

// Pre-built skeleton patterns
function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            "h-4",
            i === lines - 1 && "w-4/5" // Last line is shorter
          )}
        />
      ))}
    </div>
  )
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 space-y-4", className)}>
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" className="h-12 w-12" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonText lines={2} />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  )
}

function SkeletonTable({ rows = 5, columns = 4, className }: { rows?: number; columns?: number; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-muted/50 p-4 grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="p-4 grid gap-4 border-t border-border"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4" />
          ))}
        </div>
      ))}
    </div>
  )
}

function SkeletonAvatar({ size = "default" }: { size?: "sm" | "default" | "lg" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
  }
  
  return <Skeleton variant="circular" className={sizeClasses[size]} />
}

function SkeletonImage({ aspectRatio = "16/9", className }: { aspectRatio?: string; className?: string }) {
  return (
    <Skeleton
      className={cn("w-full rounded-lg", className)}
      style={{ aspectRatio }}
    />
  )
}

export { 
  Skeleton, 
  SkeletonText, 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonAvatar, 
  SkeletonImage 
}







