"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import Image from "next/image"

interface MobilePhoneFrameProps {
  src?: string
  alt: string
  className?: string
  accentColor: string
  fallbackIcon: LucideIcon
}

export function MobilePhoneFrame({ 
  src, 
  alt, 
  className = "", 
  accentColor,
  fallbackIcon: FallbackIcon
}: MobilePhoneFrameProps) {
  const [hasError, setHasError] = React.useState(false)
  
  // Show placeholder if image doesn't exist yet or there's an error
  if (!src || hasError) {
    return (
      <div className={`relative mx-auto ${className}`} style={{ width: '320px', height: '640px' }}>
        <div className="relative w-full h-full">
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[3rem] bg-gray-900 shadow-2xl border-8 border-gray-800">
            {/* Screen */}
            <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden" style={{ backgroundColor: `${accentColor}10` }}>
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <FallbackIcon className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  {src && <p className="text-xs font-medium px-4" style={{ color: accentColor }}>Add image: {src}</p>}
                </div>
              </div>
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: `${accentColor}50` }}/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
          {/* Phone notch */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative mx-auto ${className}`} style={{ width: '320px', height: '640px' }}>
      <div className="relative w-full h-full">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-gray-900 shadow-2xl border-8 border-gray-800">
          {/* Screen */}
          <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-white">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="320px"
              quality={90}
              priority
              onError={() => setHasError(true)}
            />
          </div>
        </div>
        {/* Phone notch */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  )
}
