"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroPricing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      {/* Simple pricing summary */}
      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Starting from</span>
          <span className="text-2xl font-bold">$12</span>
          <span className="text-sm">/employee/month</span>
        </div>
        <div className="w-px h-6 bg-white/30"></div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Free during beta</span>
        </div>
      </div>
      
      {/* Pricing link */}
      <div className="mt-4">
        <a 
          href="/pricing" 
          className="text-white/80 hover:text-white text-sm underline underline-offset-2 transition-colors duration-200"
        >
          View detailed pricing →
        </a>
      </div>
    </motion.div>
  )
}
