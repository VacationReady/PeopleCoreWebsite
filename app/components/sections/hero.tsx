"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { ImagePlaceholder, BrowserFrame } from "@/app/components/ui/image-placeholder"
import { WaitlistModal } from "@/app/components/sections/waitlist-modal"
import { ArrowRight, Sparkles, CheckCircle, Play, Shield, MapPin, Zap } from "lucide-react"

const springPreset = {
  type: "spring" as const,
  duration: 0.6,
  damping: 20,
}

const trustBadges = [
  { icon: Shield, text: "100% Holidays Act Compliant" },
  { icon: MapPin, text: "Auckland Data Residency" },
  { icon: Zap, text: "AI-Powered Automation" },
]

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
    "Smart Approvals",
    "Document Generation",
  ]
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="overflow-hidden py-4 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={prefersReducedMotion ? {} : { x: [0, -1600] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...capabilities, ...capabilities, ...capabilities].map((capability, index) => (
          <span key={index} className="flex items-center gap-2 text-white/70 text-sm font-medium">
            <span className="w-1 h-1 rounded-full bg-white/40" />
            {capability}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function DashboardMockup() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60" />
      
      <BrowserFrame>
        <div className="relative bg-slate-50 overflow-hidden" style={{ aspectRatio: "16/10" }}>
          {/* Mini Dashboard UI */}
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-14 bg-white border-r border-slate-200 flex flex-col items-center py-3 gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mb-2">
                PC
              </div>
              {["📊", "✅", "👥", "📅", "📄", "🤖"].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs cursor-pointer transition-colors
                    ${i === 0 ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:bg-slate-100'}`}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1 p-4">
              {/* Header */}
              <motion.div 
                initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                    SB
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Susan Bentley</div>
                    <div className="text-xs text-slate-500">HR Administrator</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-xs font-medium">
                    🤖 AI Copilot
                  </div>
                </div>
              </motion.div>
              
              {/* Dashboard Grid */}
              <div className="grid grid-cols-3 gap-3">
                {/* Leave Balance Card */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm"
                >
                  <div className="text-xs font-medium text-slate-500 mb-1">Annual Leave</div>
                  <div className="text-2xl font-bold text-blue-600">15 days</div>
                  <div className="text-xs text-slate-400">Remaining of 25</div>
                </motion.div>
                
                {/* Quick Actions Card */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm"
                >
                  <div className="text-xs font-medium text-slate-500 mb-2">Quick Actions</div>
                  <div className="space-y-1">
                    <div className="text-xs bg-slate-50 rounded px-2 py-1">📰 Post News</div>
                    <div className="text-xs bg-slate-50 rounded px-2 py-1">👥 Add Employee</div>
                  </div>
                </motion.div>
                
                {/* Metrics Card */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm"
                >
                  <div className="text-xs font-medium text-slate-500 mb-1">Active Employees</div>
                  <div className="text-2xl font-bold text-green-600">147</div>
                  <div className="text-xs text-green-500">+12 this month</div>
                </motion.div>
                
                {/* Action Items Card - Spanning 2 columns */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="col-span-2 bg-white rounded-xl p-3 border border-slate-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-medium text-slate-500">Action Items</div>
                    <Badge variant="success" size="sm">3 pending</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-50 rounded-lg px-3 py-2">
                      <div>
                        <div className="text-xs font-medium text-slate-900">Approve Timesheet</div>
                        <div className="text-[10px] text-slate-500">Alex Johnson — Week ending 24 Nov</div>
                      </div>
                      <div className="px-2 py-1 bg-green-500 text-white rounded text-[10px] font-medium">
                        Approve
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-amber-50 rounded-lg px-3 py-2">
                      <div>
                        <div className="text-xs font-medium text-slate-900">Review Leave Request</div>
                        <div className="text-[10px] text-slate-500">Sarah Chen — 3 days annual leave</div>
                      </div>
                      <div className="px-2 py-1 bg-amber-500 text-white rounded text-[10px] font-medium">
                        Review
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Calendar Mini */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-3 text-white"
                >
                  <div className="text-xs font-medium opacity-90 mb-1">Today</div>
                  <div className="text-lg font-bold">Nov 30</div>
                  <div className="text-[10px] opacity-75 mt-1">3 events scheduled</div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Floating AI Copilot Tooltip */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 right-4 bg-white rounded-xl shadow-xl border border-slate-200 p-3 max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-slate-900">AI Suggestion</span>
            </div>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Alex's timesheet is compliant. Click to auto-approve with one click.
            </p>
          </motion.div>
        </div>
      </BrowserFrame>
    </div>
  )
}

export function Hero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -inset-10 opacity-40">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px]"
            animate={prefersReducedMotion ? {} : { 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px]"
            animate={prefersReducedMotion ? {} : { 
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-[80px]"
            animate={prefersReducedMotion ? {} : { 
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={springPreset}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPreset, delay: 0.1 }}
              >
                <Badge variant="glass" size="lg" icon={Sparkles}>
                  🇳🇿 New Zealand's Most Advanced HRIS
                </Badge>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPreset, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-white">
                  100% Holidays Act
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Compliant.
                </span>
                <br />
                <span className="text-white">
                  Built for Aotearoa.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPreset, delay: 0.3 }}
                className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl"
              >
                AI-native HRIS designed for New Zealand employment law. Master the Holidays Act, 
                automate KiwiSaver, and ensure Fair Pay Agreement compliance—all with kaitiakitanga at our core.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPreset, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {trustBadges.map((badge, i) => (
                  <div 
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springPreset, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  variant="gradient" 
                  size="xl"
                  className="group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                  asChild
                >
                  <a 
                    href="https://calendly.com/peoplecore-nz/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book a Local Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo Video
                </Button>
              </motion.div>
              
              {/* Social Proof */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...springPreset, delay: 0.6 }}
                className="flex items-center gap-4 text-sm text-white/60 pt-4"
              >
                <div className="flex -space-x-2">
                  {["JC", "MK", "SP", "DL"].map((initials, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-medium"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span>
                  <strong className="text-white">200+</strong> NZ businesses on the waitlist
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Dashboard Mockup */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springPreset, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <DashboardMockup />
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
