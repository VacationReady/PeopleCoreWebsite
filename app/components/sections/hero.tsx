"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { WaitlistModal } from "@/app/components/sections/waitlist-modal"
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
            <span className="ml-2 text-xs text-white/60 hidden sm:inline">🇳🇿 Built for Aotearoa</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#product" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Product</a>
            <a href="#use-cases" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Use Cases</a>
            <a href="#compliance" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Compliance</a>
            <a href="#resources" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Resources</a>
            <a href="/pricing" className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium">Pricing</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Hero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

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
      
      {/* Floating capability words - NZ focused */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { text: "Holidays Act", x: "10%", y: "20%", duration: 20, delay: 0 },
          { text: "KiwiSaver", x: "85%", y: "25%", duration: 25, delay: 2 },
          { text: "Fair Pay Agreements", x: "15%", y: "70%", duration: 22, delay: 4 },
          { text: "Auckland Data Centre", x: "80%", y: "65%", duration: 23, delay: 1 },
          { text: "NZ Compliance", x: "5%", y: "45%", duration: 21, delay: 3 },
          { text: "Leave Management", x: "90%", y: "50%", duration: 24, delay: 5 },
          { text: "Payroll Accuracy", x: "12%", y: "85%", duration: 26, delay: 2.5 },
          { text: "Māori Values", x: "88%", y: "80%", duration: 22, delay: 4.5 },
        ].map((word, index) => (
          <motion.div
            key={word.text}
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: word.duration, repeat: Infinity, ease: "easeInOut" },
              delay: word.delay,
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


      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>🇳🇿 New Zealand's Most Advanced HRIS</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
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
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            AI-native HRIS designed for New Zealand employment law. Master the Holidays Act, automate KiwiSaver, and ensure Fair Pay Agreement compliance—all with kaitiakitanga at our core.
          </motion.p>

          {/* NZ Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90 text-sm max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Holidays Act Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Data Hosted in Auckland</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>KiwiSaver Auto-Enrolment</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="gradient" 
              size="xl"
              className="group"
              asChild
            >
              <a href="https://calendly.com/peoplecore-nz/demo" target="_blank" rel="noopener noreferrer">
                Book a Local Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a href="/pricing">View Pricing</a>
            </Button>
          </motion.div>

          {/* Stats - NZ Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-white/80"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">Holidays Act Compliant</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">Auckland</div>
              <div className="text-sm">Data Residency</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">Zero</div>
              <div className="text-sm">Learning Curve</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
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
