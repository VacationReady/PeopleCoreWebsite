"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { WaitlistModal } from "@/app/components/sections/waitlist-modal"
import { HeroPricing } from "@/app/components/sections/hero-pricing"
import { ArrowRight, Sparkles } from "lucide-react"
// Navigation component
function Navigation() {

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            </div>
            <span className="text-white font-semibold text-lg">PeopleCore</span>
          </div>

          <div className="flex items-center justify-center">
            <a 
              href="/pricing"
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Hero() {
  const [isThinking, setIsThinking] = useState(true)
  const [thinkingText, setThinkingText] = useState("PeopleCore is thinking")
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  // Thinking animation effect
  useEffect(() => {
    const thinkingMessages = [
      "PeopleCore is thinking",
      "Analysing your HR needs",
      "Optimising workflows", 
      "Preparing your dashboard",
      "Almost ready"
    ]
    
    let messageIndex = 0
    let dotCount = 0
    
    const thinkingInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4
      const dots = ".".repeat(dotCount)
      setThinkingText(thinkingMessages[messageIndex] + dots)
      
      if (dotCount === 0) {
        messageIndex = (messageIndex + 1) % thinkingMessages.length
      }
    }, 500)

    // Stop thinking after 4 seconds
    const stopThinking = setTimeout(() => {
      setIsThinking(false)
      clearInterval(thinkingInterval)
    }, 4000)

    return () => {
      clearInterval(thinkingInterval)
      clearTimeout(stopThinking)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      {/* Floating capability words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { text: "Workflows", x: "10%", y: "20%", duration: 20, delay: 0 },
          { text: "Performance", x: "85%", y: "25%", duration: 25, delay: 2 },
          { text: "Custom Forms", x: "15%", y: "70%", duration: 22, delay: 4 },
          { text: "Onboarding", x: "80%", y: "65%", duration: 23, delay: 1 },
          { text: "Reporting", x: "5%", y: "45%", duration: 21, delay: 3 },
          { text: "Absence Management", x: "90%", y: "50%", duration: 24, delay: 5 },
          { text: "Offboarding", x: "12%", y: "85%", duration: 26, delay: 2.5 },
          { text: "High Security", x: "88%", y: "80%", duration: 22, delay: 4.5 },
        ].map((word, index) => (
          <motion.div
            key={word.text}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isThinking ? 0 : [0.3, 0.6, 0.3],
              scale: isThinking ? 0 : 1,
              y: isThinking ? 0 : [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: word.duration, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              delay: isThinking ? 0 : 4 + word.delay,
              scale: { duration: 0.5, delay: isThinking ? 0 : 4 + word.delay }
            }}
            className="absolute text-white/40 font-medium text-sm md:text-base whitespace-nowrap backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            style={{ left: word.x, top: word.y }}
          >
            {word.text}
          </motion.div>
        ))}
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* AI Thinking Banner - Simulating AI Response */}
      <AnimatePresence>
        {isThinking && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 max-w-md mx-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </motion.div>
              
              <div className="flex-1">
                <motion.div
                  key={thinkingText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-semibold text-slate-900 text-sm"
                >
                  {thinkingText}
                </motion.div>
                <p className="text-xs text-slate-600">
                  Analysing your HR query...
                </p>
              </div>

              {/* Floating dots */}
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isThinking ? 0 : 1, y: isThinking ? 20 : 0 }}
          transition={{ duration: 0.8, delay: isThinking ? 0 : 4.2 }}
          className="space-y-8"
        >
          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isThinking ? 0 : 1, y: isThinking ? 20 : 0 }}
            transition={{ duration: 0.8, delay: isThinking ? 0 : 4.0 }}
            className="mb-12"
          >
            <HeroPricing />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isThinking ? 0 : 1, scale: isThinking ? 0.8 : 1 }}
            transition={{ duration: 0.8, delay: isThinking ? 0 : 4.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Introducing the GPT of HR</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform your HR with extensive capabilities, powered with AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            The world's most advanced AI-native HRIS. Automate complex workflows through natural language. 
            Talk naturally, AI handles the complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="gradient" 
              size="xl"
              className="group"
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Watch 4 Minute Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-white/80"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">10x</div>
              <div className="text-sm">Faster Automation</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">Zero</div>
              <div className="text-sm">Learning Curve</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">Enterprise Grade</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Waitlist Modal */}
      <WaitlistModal 
        open={isWaitlistModalOpen} 
        onOpenChange={setIsWaitlistModalOpen} 
      />
    </section>
  )
}
