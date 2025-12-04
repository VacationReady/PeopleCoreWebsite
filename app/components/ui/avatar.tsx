"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-xs",
        default: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string | null
  alt?: string
  fallback?: string
  fallbackClassName?: string
}

// Generate a consistent color based on the fallback string
function stringToColor(str: string): string {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-teal-500 to-green-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-orange-500",
  ]
  
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  return colors[Math.abs(hash) % colors.length]
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt, fallback, fallbackClassName, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false)
    const showFallback = !src || hasError
    
    const initials = fallback ? getInitials(fallback) : "?"
    const gradientColor = stringToColor(fallback || "default")
    
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt || fallback || "Avatar"}
            className="aspect-square h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br font-semibold text-white",
              gradientColor,
              fallbackClassName
            )}
          >
            {initials}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

// Avatar Group Component
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
  size?: VariantProps<typeof avatarVariants>["size"]
}

function AvatarGroup({ children, max = 4, size = "default", className, ...props }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children)
  const visibleAvatars = childrenArray.slice(0, max)
  const remainingCount = childrenArray.length - max
  
  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {visibleAvatars.map((child, index) => (
        <div key={index} className="ring-2 ring-background rounded-full">
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, { size })
            : child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={cn(
          avatarVariants({ size }),
          "ring-2 ring-background flex items-center justify-center bg-muted text-muted-foreground font-medium"
        )}>
          +{remainingCount}
        </div>
      )}
    </div>
  )
}

export { Avatar, AvatarGroup, avatarVariants }








