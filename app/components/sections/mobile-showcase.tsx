"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

// Mobile app screenshots - add your screenshots to /public/screenshots/
// Required files:
//   - mobile-app-1.png (375x812 or similar mobile aspect ratio)
//   - mobile-app-2.png (375x812 or similar mobile aspect ratio)
//   - mobile-app-3.png (375x812 or similar mobile aspect ratio)
const mobileScreenshots = [
  { src: "/screenshots/mobile-app-1.png", alt: "PeopleCore Mobile - Dashboard" },
  { src: "/screenshots/mobile-app-2.png", alt: "PeopleCore Mobile - Leave Request" },
  { src: "/screenshots/mobile-app-3.png", alt: "PeopleCore Mobile - Approvals" },
]

interface PhoneFrameProps {
  screenshot: { src: string; alt: string }
  rotation: number
  translateX: number
  translateY: number
  zIndex: number
  delay: number
}

function PhoneFrame({ screenshot, rotation, translateX, translateY, zIndex, delay }: PhoneFrameProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotate: rotation,
        x: translateX,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom spring-like easing
      }}
      whileHover={{ 
        y: translateY - 12,
        rotate: rotation * 0.5,
        scale: 1.02,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      style={{ zIndex }}
      className="absolute cursor-pointer"
    >
      {/* Phone Device Frame */}
      <div className="relative w-[160px] h-[340px] md:w-[180px] md:h:[380px]">
        {/* Phone outer shell with premium gradient */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-2xl shadow-black/40">
          {/* Subtle metallic edge highlight */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
          
          {/* Side buttons - volume */}
          <div className="absolute -left-[2px] top-20 w-[3px] h-6 bg-gray-700 rounded-l-sm" />
          <div className="absolute -left-[2px] top-28 w-[3px] h-6 bg-gray-700 rounded-l-sm" />
          
          {/* Side button - power */}
          <div className="absolute -right-[2px] top-24 w-[3px] h-10 bg-gray-700 rounded-r-sm" />
        </div>
        
        {/* Screen bezel */}
        <div className="absolute inset-[3px] rounded-[2.3rem] bg-black">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-800" />
            <div className="w-10 h-3 rounded-full bg-gray-800" />
          </div>
          
          {/* Screen content area */}
          <div className="absolute inset-[3px] rounded-[2.1rem] overflow-hidden bg-gradient-to-br from-primary/20 to-gray-100">
            {imageError ? (
              /* Placeholder when image is not found */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-white to-gray-50">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-[10px] text-center font-medium">{screenshot.alt}</p>
                <p className="text-gray-400 text-[8px] mt-1 text-center">
                  Add screenshot to<br />
                  <code className="text-[7px] bg-gray-200 px-1 py-0.5 rounded">
                    public{screenshot.src}
                  </code>
                </p>
              </div>
            ) : (
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover object-top"
                sizes="200px"
                onError={() => setImageError(true)}
              />
            )}
            
            {/* Screen glare effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Bottom home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
      </div>
    </motion.div>
  )
}

export function MobileShowcase() {
  // Phone configurations for the "hand of cards" fan effect
  const phones = [
    { 
      screenshot: mobileScreenshots[0], 
      rotation: -12, 
      translateX: -45, 
      translateY: 120,
      zIndex: 10, 
      delay: 0.5 
    },
    { 
      screenshot: mobileScreenshots[1], 
      rotation: 0, 
      translateX: 0, 
      translateY: 105,
      zIndex: 20, 
      delay: 0.6 
    },
    { 
      screenshot: mobileScreenshots[2], 
      rotation: 12, 
      translateX: 45, 
      translateY: 120,
      zIndex: 10, 
      delay: 0.7 
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Now on Mobile
        </span>
      </motion.div>

      {/* Phones container */}
      <div className="relative h-[360px] md:h-[400px] flex items-center justify-center mt-8">
        {/* Ambient glow behind phones */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[160px] h-[160px] bg-purple-400/20 rounded-full blur-2xl" />
        
        {/* Phone frames */}
        <div className="relative flex items-end justify-center">
          {phones.map((phone, index) => (
            <PhoneFrame key={index} {...phone} />
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute -top-2 right-0 md:right-8"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-lg shadow-gray-900/10 border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-gray-700">iOS & Android</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute bottom-16 -left-4 md:left-0"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-lg shadow-gray-900/10 border border-gray-100">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xs font-medium text-gray-700">Full Sync</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
