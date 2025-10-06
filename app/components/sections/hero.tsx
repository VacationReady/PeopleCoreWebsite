"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

// Navigation component
function Navigation() {
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)

  const capabilities = [
    { name: "Absence Management", icon: "🏖️", description: "Smart leave tracking & approvals" },
    { name: "Customisation", icon: "⚙️", description: "Tailor to your needs" },
    { name: "Self Service", icon: "🔧", description: "Employee empowerment" },
    { name: "Surveys", icon: "📊", description: "Pulse & engagement surveys" },
    { name: "Workflows", icon: "🔄", description: "Automated processes" },
    { name: "Performance", icon: "📈", description: "Reviews & goal tracking" },
    { name: "Document Management", icon: "📄", description: "Digital document hub" },
    { name: "Org Chart", icon: "🏢", description: "Visual organization structure" },
    { name: "Reporting", icon: "📋", description: "Analytics & insights" }
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PC</span>
            </div>
            <span className="text-white font-semibold text-lg">PeopleCore</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-1"
              >
                Capabilities
                <motion.div
                  animate={{ rotate: isCapabilitiesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.div>
              </button>

              <AnimatePresence>
                {isCapabilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                      <h3 className="font-semibold text-slate-900 mb-1">HR Capabilities</h3>
                      <p className="text-sm text-slate-600">Everything you need for modern HR</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {capabilities.map((capability, index) => (
                        <motion.div
                          key={capability.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span className="text-xl">{capability.icon}</span>
                          <div>
                            <div className="font-medium text-slate-900">{capability.name}</div>
                            <div className="text-xs text-slate-500">{capability.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="text-white hover:text-blue-200 transition-colors duration-200">
              Pricing
            </button>
            <button className="text-white hover:text-blue-200 transition-colors duration-200">
              About Us
            </button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Hero() {
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)
  const [isThinking, setIsThinking] = useState(true)
  const [thinkingText, setThinkingText] = useState("PeopleCore is thinking")

  // Thinking animation effect
  useEffect(() => {
    const thinkingMessages = [
      "PeopleCore is thinking",
      "Analyzing your HR needs",
      "Optimizing workflows", 
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
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Thinking Overlay */}
      <AnimatePresence>
        {isThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
                />
              </motion.div>
              
              <motion.h2
                key={thinkingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-semibold text-white mb-2"
              >
                {thinkingText}
              </motion.h2>
              
              <p className="text-white/70">
                Preparing your personalized HR experience...
              </p>

              {/* Floating particles around thinking animation */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `calc(50% + ${Math.cos(i * Math.PI / 4) * 100}px)`,
                    top: `calc(50% + ${Math.sin(i * Math.PI / 4) * 100}px)`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isThinking ? 0 : 1, scale: isThinking ? 0.8 : 1 }}
            transition={{ duration: 0.8, delay: isThinking ? 0 : 4.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
            Transform HR with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conversational AI
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
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Explore Capabilities
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
    </section>
  )
}
