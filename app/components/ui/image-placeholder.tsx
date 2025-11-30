"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ImageIcon, Upload, Monitor, Smartphone, Tablet, LayoutGrid } from "lucide-react"
import Image from "next/image"

type AspectRatio = "16/9" | "4/3" | "1/1" | "3/4" | "9/16" | "21/9" | "custom"

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The image source - when provided, displays the image instead of placeholder */
  src?: string | null
  /** Alt text for the image */
  alt?: string
  /** Aspect ratio of the placeholder */
  aspectRatio?: AspectRatio
  /** Custom aspect ratio (only used when aspectRatio is "custom") */
  customAspectRatio?: string
  /** Label to display in the placeholder */
  label?: string
  /** Description text below the label */
  description?: string
  /** Icon to display - defaults to ImageIcon */
  icon?: "image" | "upload" | "desktop" | "mobile" | "tablet" | "grid"
  /** Visual style variant */
  variant?: "default" | "dashed" | "solid" | "gradient" | "glass"
  /** Show device frame around placeholder */
  deviceFrame?: "none" | "browser" | "mobile" | "tablet"
  /** Whether to show the upload hint */
  showUploadHint?: boolean
  /** Unique identifier for mapping uploaded images */
  placeholderId?: string
  /** Callback when an image should be uploaded */
  onUploadRequest?: (placeholderId: string) => void
}

const aspectRatioValues: Record<AspectRatio, string> = {
  "16/9": "16 / 9",
  "4/3": "4 / 3",
  "1/1": "1 / 1",
  "3/4": "3 / 4",
  "9/16": "9 / 16",
  "21/9": "21 / 9",
  "custom": "auto",
}

const iconComponents = {
  image: ImageIcon,
  upload: Upload,
  desktop: Monitor,
  mobile: Smartphone,
  tablet: Tablet,
  grid: LayoutGrid,
}

const variantStyles = {
  default: "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
  dashed: "bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600",
  solid: "bg-slate-200 dark:bg-slate-700",
  gradient: "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700",
  glass: "bg-white/10 backdrop-blur-xl border border-white/20",
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      {/* Browser Chrome */}
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-white dark:bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400">
            app.peoplecore.com
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800 dark:border-slate-200 bg-slate-800 dark:bg-slate-200 p-1">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 dark:bg-slate-200 rounded-full z-10" />
      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 relative">
        {children}
      </div>
    </div>
  )
}

function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 dark:border-slate-300 bg-slate-800 dark:bg-slate-300 p-1.5">
      {/* Screen */}
      <div className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 relative">
        {children}
      </div>
    </div>
  )
}

const ImagePlaceholder = React.forwardRef<HTMLDivElement, ImagePlaceholderProps>(
  (
    {
      className,
      src,
      alt = "Screenshot",
      aspectRatio = "16/9",
      customAspectRatio,
      label = "Screenshot",
      description,
      icon = "image",
      variant = "default",
      deviceFrame = "none",
      showUploadHint = true,
      placeholderId,
      onUploadRequest,
      ...props
    },
    ref
  ) => {
    const IconComponent = iconComponents[icon]
    const computedAspectRatio = aspectRatio === "custom" ? customAspectRatio : aspectRatioValues[aspectRatio]
    
    // If we have an image source, display it
    if (src) {
      const imageContent = (
        <div 
          className={cn("relative w-full overflow-hidden rounded-xl", className)}
          style={{ aspectRatio: computedAspectRatio }}
          ref={ref}
          {...props}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )
      
      if (deviceFrame === "browser") {
        return <BrowserFrame>{imageContent}</BrowserFrame>
      }
      if (deviceFrame === "mobile") {
        return <MobileFrame>{imageContent}</MobileFrame>
      }
      if (deviceFrame === "tablet") {
        return <TabletFrame>{imageContent}</TabletFrame>
      }
      
      return imageContent
    }
    
    // Placeholder content
    const placeholderContent = (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-200",
          variantStyles[variant],
          onUploadRequest && "cursor-pointer hover:border-primary/50 hover:bg-primary/5",
          className
        )}
        style={{ aspectRatio: computedAspectRatio }}
        onClick={() => placeholderId && onUploadRequest?.(placeholderId)}
        role={onUploadRequest ? "button" : undefined}
        tabIndex={onUploadRequest ? 0 : undefined}
        {...props}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </div>
        
        {/* Label */}
        <div className="text-center px-4">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {label}
          </p>
          {description && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              {description}
            </p>
          )}
        </div>
        
        {/* Upload Hint */}
        {showUploadHint && (
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-2">
            <Upload className="w-3 h-3" />
            <span>Drop image or click to upload</span>
          </div>
        )}
        
        {/* Placeholder ID Badge */}
        {placeholderId && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-200/80 dark:bg-slate-700/80 text-[10px] font-mono text-slate-500 dark:text-slate-400">
            {placeholderId}
          </div>
        )}
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%)] bg-[length:16px_16px]" />
        </div>
      </div>
    )
    
    // Wrap in device frame if specified
    if (deviceFrame === "browser") {
      return <BrowserFrame>{placeholderContent}</BrowserFrame>
    }
    if (deviceFrame === "mobile") {
      return <MobileFrame>{placeholderContent}</MobileFrame>
    }
    if (deviceFrame === "tablet") {
      return <TabletFrame>{placeholderContent}</TabletFrame>
    }
    
    return placeholderContent
  }
)
ImagePlaceholder.displayName = "ImagePlaceholder"

// Dashboard Placeholder - a special placeholder for dashboard screenshots
function DashboardPlaceholder({ 
  className,
  src,
  ...props 
}: Omit<ImagePlaceholderProps, "label" | "description" | "icon" | "deviceFrame">) {
  return (
    <ImagePlaceholder
      className={className}
      src={src}
      label="Dashboard Screenshot"
      description="Upload a screenshot of the dashboard"
      icon="desktop"
      deviceFrame="browser"
      aspectRatio="16/9"
      {...props}
    />
  )
}

// Mobile Screenshot Placeholder
function MobileScreenshotPlaceholder({
  className,
  src,
  ...props
}: Omit<ImagePlaceholderProps, "label" | "description" | "icon" | "deviceFrame" | "aspectRatio">) {
  return (
    <ImagePlaceholder
      className={className}
      src={src}
      label="Mobile Screenshot"
      description="Upload a mobile app screenshot"
      icon="mobile"
      deviceFrame="mobile"
      aspectRatio="9/16"
      {...props}
    />
  )
}

// Feature Image Placeholder
function FeatureImagePlaceholder({
  className,
  src,
  featureName = "Feature",
  ...props
}: Omit<ImagePlaceholderProps, "label" | "description" | "icon"> & { featureName?: string }) {
  return (
    <ImagePlaceholder
      className={className}
      src={src}
      label={`${featureName} Screenshot`}
      description={`Showcase ${featureName.toLowerCase()} capabilities`}
      icon="grid"
      variant="gradient"
      aspectRatio="4/3"
      {...props}
    />
  )
}

export { 
  ImagePlaceholder, 
  DashboardPlaceholder, 
  MobileScreenshotPlaceholder, 
  FeatureImagePlaceholder,
  BrowserFrame,
  MobileFrame,
  TabletFrame
}


