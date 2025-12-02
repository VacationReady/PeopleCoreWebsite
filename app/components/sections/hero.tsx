"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Mail, Play } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useCalendly } from "./calendly-modal"
import { SiteNav } from "@/app/components/navigation/site-nav"


function DemoEmailSection() {
  const [email, setEmail] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return
    
    setIsSubmitting(true)
    // Simulate submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 max-w-xl"
    >
      {/* Video Preview Card */}
      <div 
        className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-900/10 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dashboard Screenshot Background */}
        <div className="relative aspect-[16/9]">
          <Image
            src="/screenshots/dashboard.png"
            alt="PeopleCore Dashboard Preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 540px"
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/30" />
          
          {/* Play Button */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{ 
                  scale: [1, 1.4, 1.4],
                  opacity: [0.5, 0, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Play button */}
              <div className="relative w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-primary ml-1 fill-primary" />
              </div>
            </motion.div>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            5:00
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-1">
              Watch the Product Demo
            </h3>
            <p className="text-white/70 text-sm mb-4">
              See how PeopleCore transforms HR in just 5 minutes
            </p>

            {/* Email Capture Form - Frosted Glass */}
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Check your inbox!</p>
                      <p className="text-white/60 text-xs">Demo link sent to {email}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 flex gap-2"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email to watch"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-transparent text-white placeholder:text-white/50 text-sm focus:outline-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-70 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-4 h-4 border-2 border-gray-900/20 border-t-gray-900 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Get Access
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Screenshot showcase configuration
// Add your screenshots to /public/screenshots/ and list them here
const screenshots = [
  { src: "/screenshots/dashboard.png", alt: "PeopleCore Dashboard" },
  { src: "/screenshots/document-signing.png", alt: "Document Signing Process" },
  { src: "/screenshots/leave-approval.png", alt: "Leave Approval Workflow" },
  { src: "/screenshots/reporting.png", alt: "HR Reporting & Analytics" },
]

// Ken Burns animation variants - subtle zoom with slight pan
const kenBurnsVariants = {
  enter: {
    opacity: 0,
    scale: 1.0,
    x: 0,
    y: 0,
  },
  center: {
    opacity: 1,
    scale: 1.08,
    x: 10,
    y: -5,
    transition: {
      opacity: { duration: 0.8, ease: "easeOut" as const },
      scale: { duration: 5, ease: "linear" as const },
      x: { duration: 5, ease: "linear" as const },
      y: { duration: 5, ease: "linear" as const },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    transition: {
      opacity: { duration: 0.8, ease: "easeIn" as const },
    },
  },
}

function ScreenshotShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  const hasError = imageErrors.has(currentIndex)

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Screenshot container with rounded corners and shadow */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-900/10 bg-white aspect-[16/10]">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 z-10 pointer-events-none" />
        
        {/* Animated screenshots with Ken Burns effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={kenBurnsVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {hasError ? (
              /* Placeholder when image is not found */
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium text-center">{screenshots[currentIndex].alt}</p>
                <p className="text-gray-400 text-sm mt-2 text-center max-w-xs">
                  Add your screenshot to<br />
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                    public{screenshots[currentIndex].src}
                  </code>
                </p>
              </div>
            ) : (
              <Image
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                fill
                className="object-contain"
                priority={currentIndex === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => handleImageError(currentIndex)}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative blur element behind */}
      <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-primary/20 rounded-[2rem] blur-2xl" />
    </motion.div>
  )
}

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const { openCalendly } = useCalendly()

  return (
    <section className="relative bg-white min-h-screen">
      <SiteNav />
      
      {/* Hero Content */}
      <div className="pt-28 pb-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-8">
                <span className="text-primary">HR Software</span>
                <br />
                <span className="text-gray-900">for the modern and</span>
                <br />
                <span className="text-gray-900">mobile workforce</span>
              </h1>
              
              <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                Welcome to PeopleCore - The only HR software that brings Automation, Customisation, and HR excellence together.
              </p>
              
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-7 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Book a demo
                <ArrowUpRight className="w-5 h-5" />
              </button>
              
              {/* Demo email section */}
              <DemoEmailSection />
            </motion.div>
            
            {/* Right Column - Screenshot Showcase */}
            <div className="hidden lg:block">
              <ScreenshotShowcase />
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  )
}
