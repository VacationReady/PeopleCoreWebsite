"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Mail, Play, ChevronDown } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"
import { useCalendly } from "./calendly-modal"

// Navigation items
const navItems = [
  { 
    label: "Product", 
    href: "#product",
    hasDropdown: true 
  },
  { 
    label: "Pricing", 
    href: "/pricing",
    hasDropdown: false 
  },
]

function Navigation() {
  const { openCalendly } = useCalendly()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'system-ui' }}>
          peoplecore
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
            </Link>
          ))}
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
            <Play className="w-4 h-4" />
            Watch video
          </button>
          <button
            onClick={openCalendly}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  )
}


function DemoEmailSection() {
  const [email, setEmail] = useState("")
  
  return (
    <div className="mt-12 bg-gray-50 rounded-2xl p-6 max-w-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Watch the demo (5 min)
          </h3>
          <div className="flex items-center gap-2 mt-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-amber-300 to-orange-400"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">
            Take the video tour of our system. Just enter your email, and we'll send you a link to our video overview, plus some other helpful links.
          </p>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
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
      opacity: { duration: 0.8, ease: "easeOut" },
      scale: { duration: 5, ease: "linear" },
      x: { duration: 5, ease: "linear" },
      y: { duration: 5, ease: "linear" },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    transition: {
      opacity: { duration: 0.8, ease: "easeIn" },
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
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-900/10 bg-gradient-to-br from-gray-100 to-gray-200 min-h-[520px]">
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
                className="object-cover object-center"
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
      <Navigation />
      
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
                Welcome to PeopleCore - the only HR software that brings{" "}
                <span className="font-semibold text-gray-700">Presence, Automation, AI and HR excellence</span>{" "}
                together — so you always know who's working, where, and what needs attention.
              </p>
              
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-7 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
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
