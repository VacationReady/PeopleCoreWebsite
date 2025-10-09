"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroPricing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-6 sm:mb-8 px-4"
    >
      {/* Mobile-optimized pricing summary */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 max-w-fit mx-auto">
        {/* Price section */}
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium">Starting from</span>
          <span className="text-xl sm:text-2xl font-bold">$12</span>
          <span className="text-xs sm:text-sm">/employee/month</span>
        </div>
        
        {/* Divider - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block w-px h-6 bg-white/30"></div>
        
        {/* Beta badge */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-medium">Free during beta</span>
        </div>
      </div>
      
      {/* Pricing link - larger touch target for mobile */}
      <div className="mt-3 sm:mt-4">
        <a 
          href="/pricing" 
          className="inline-block px-4 py-2 text-white/80 hover:text-white text-sm underline underline-offset-2 transition-colors duration-200 rounded-lg hover:bg-white/10 touch-manipulation"
        >
          View detailed pricing →
        </a>
      </div>
    </motion.div>
  )
}
