"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { WaitlistModal } from "@/app/components/sections/waitlist-modal"
import { ArrowRight, Sparkles } from "lucide-react"

const springPreset = {
  type: "spring" as const,
  duration: 0.5,
  damping: 20,
}

function CapabilityTicker() {
  const capabilities = [
    "Holidays Act Compliance",
    "KiwiSaver Auto-Enrolment",
    "Fair Pay Agreements",
    "Auckland Data Residency",
    "Leave Management",
    "Payroll Automation",
    "Māori Cultural Values",
    "Employment Law Updates",
  ]
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="overflow-hidden py-3 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={prefersReducedMotion ? {} : { x: [0, -1400] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...capabilities, ...capabilities, ...capabilities].map((capability, index) => (
          <span key={index} className="text-white/60 text-sm font-medium">
            {capability}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Main content - Two column layout */}
      <div className="relative z-10 flex-1 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : springPreset}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={prefersReducedMotion ? { duration: 0 } : springPreset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass text-white/90 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>🇳🇿 New Zealand's Most Advanced HRIS</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0, delay: 0 } : { ...springPreset, delay: 0.1 }}
                className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  100% Holidays Act Compliant.
                  <br />Built for Aotearoa.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0, delay: 0 } : { ...springPreset, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed"
              >
                AI-native HRIS designed for New Zealand employment law. Master the Holidays Act, automate KiwiSaver, and ensure Fair Pay Agreement compliance—all with kaitiakitanga at our core.
              </motion.p>

              {/* NZ Value Props */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0, delay: 0 } : { ...springPreset, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 text-white/90 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Holidays Act Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Auckland Data Residency</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0, delay: 0 } : { ...springPreset, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  variant="gradient" 
                  size="xl"
                  className="group"
                  asChild
                >
                  <a 
                    href="https://calendly.com/peoplecore-nz/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Book a local demo with PeopleCore"
                  >
                    Book a Local Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="glass-strong text-white hover:bg-white/20"
                  onClick={() => setIsWaitlistModalOpen(true)}
                  aria-label="Join the waitlist"
                >
                  Join the Waitlist
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Mock Area */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { ...springPreset, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl glass-strong overflow-hidden">
                {/* Gradient placeholder with loading skeleton effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                  
                  {/* Loading skeleton animation */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-white/20 rounded animate-pulse w-3/4" />
                          <div className="h-2 bg-white/10 rounded animate-pulse w-1/2" />
                        </div>
                      </div>
                      <div className="space-y-3 pt-4">
                        <div className="h-16 bg-white/10 rounded-xl animate-pulse" />
                        <div className="h-16 bg-white/10 rounded-xl animate-pulse" />
                        <div className="h-16 bg-white/10 rounded-xl animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400"
                  animate={prefersReducedMotion ? {} : { 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-400"
                  animate={prefersReducedMotion ? {} : { 
                    y: [0, 10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Capability Ticker */}
      <div className="relative z-10 mt-auto">
        <CapabilityTicker />
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal 
        open={isWaitlistModalOpen} 
        onOpenChange={setIsWaitlistModalOpen} 
      />
    </section>
  )
}
