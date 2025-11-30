"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Play, ChevronDown } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

// Company logos for trust bar
const trustedLogos = [
  { name: "WHITEBRIDGE", style: "font-bold tracking-wider" },
  { name: "ABSOLUTEWORKS", style: "font-medium tracking-wide" },
  { name: "SureHR", style: "font-serif italic" },
  { name: "HR@force", style: "font-medium" },
]

// Navigation items
const navItems = [
  { 
    label: "Presence", 
    href: "#presence",
    hasDropdown: true 
  },
  { 
    label: "Automate", 
    href: "#automate",
    hasDropdown: true 
  },
  { 
    label: "HR", 
    href: "#hr",
    hasDropdown: true 
  },
  { 
    label: "How we do it", 
    href: "#how",
    hasDropdown: true 
  },
  { 
    label: "Pricing", 
    href: "/pricing",
    hasDropdown: false 
  },
]

function Navigation() {
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
          <a
            href="https://calendly.com/peoplecore-nz/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Book Demo
          </a>
        </div>
      </div>
    </nav>
  )
}

function TrustBar() {
  return (
    <div className="flex items-center gap-8 mt-10">
      {trustedLogos.map((logo, i) => (
        <span 
          key={i} 
          className={`text-gray-300 text-sm ${logo.style}`}
        >
          {logo.name}
        </span>
      ))}
    </div>
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

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Main yellow card */}
      <div className="bg-[#f5d08a] rounded-[2.5rem] p-8 min-h-[520px] relative overflow-hidden">
        {/* Header label */}
        <div className="mb-8">
          <span className="text-[#c4a056] text-xl font-medium">Next Work</span>
          <span className="text-[#d4b36a] text-xl font-light ml-2">Shift</span>
        </div>
        
        {/* Dashboard preview content */}
        <div className="space-y-4">
          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/40 backdrop-blur rounded-xl p-4">
              <div className="text-xs text-[#a08040] mb-1">Active Team</div>
              <div className="text-2xl font-bold text-[#6b5020]">24</div>
            </div>
            <div className="bg-white/40 backdrop-blur rounded-xl p-4">
              <div className="text-xs text-[#a08040] mb-1">On Leave</div>
              <div className="text-2xl font-bold text-[#6b5020]">3</div>
            </div>
          </div>
          
          {/* Schedule preview */}
          <div className="bg-white/30 backdrop-blur rounded-xl p-4">
            <div className="text-xs text-[#a08040] mb-3">Today's Schedule</div>
            <div className="space-y-2">
              {["Sarah M. — 9:00 AM", "James K. — 10:30 AM", "Lisa T. — 2:00 PM"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#6b5020]">
                  <div className="w-2 h-2 rounded-full bg-[#a08040]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick action */}
          <div className="bg-white/50 backdrop-blur rounded-xl p-4 flex items-center justify-between">
            <span className="text-sm font-medium text-[#6b5020]">View full roster</span>
            <ArrowUpRight className="w-4 h-4 text-[#a08040]" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

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
              
              <a
                href="https://calendly.com/peoplecore-nz/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Book a demo
                <ArrowUpRight className="w-5 h-5" />
              </a>
              
              {/* Trust logos */}
              <TrustBar />
              
              {/* Demo email section */}
              <DemoEmailSection />
            </motion.div>
            
            {/* Right Column - Dashboard Card */}
            <div className="hidden lg:block">
              <DashboardCard />
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  )
}
