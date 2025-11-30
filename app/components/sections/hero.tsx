"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

const trustedLogos = [
  "Fonterra", "Air NZ", "Xero", "TradeMe", "Spark", 
  "ANZ", "Kiwibank", "Fisher & Paykel", "Fletcher Building", "Zespri"
]

function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-8 border-y border-gray-100">
      <div className="marquee">
        <div className="marquee-content">
          {[...trustedLogos, ...trustedLogos].map((logo, i) => (
            <span 
              key={i} 
              className="text-gray-300 font-semibold text-lg whitespace-nowrap tracking-wide"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <section className="relative bg-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container-tight flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold tracking-tight text-foreground">
            peoplecore
          </a>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-tight text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            <span className="text-primary">HR Software</span>
            <br />
            <span className="text-foreground">for Aotearoa's modern</span>
            <br />
            <span className="text-foreground">workforce</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Welcome to PeopleCore — the only HRIS built for New Zealand. 
            <span className="font-medium text-foreground"> Holidays Act compliance, KiwiSaver automation, </span>
            and <span className="font-medium text-foreground">Fair Pay Agreements</span> handled — 
            so you know your people are looked after.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://calendly.com/peoplecore-nz/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Book a demo
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Product Screenshot Section */}
      <div className="py-16 md:py-24">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] bg-pastel-cyan overflow-hidden p-8 md:p-12"
          >
            {/* Dashboard Preview Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
              {/* Mock Browser Bar */}
              <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400">app.peoplecore.co.nz</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold">
                      PC
                    </div>
                    {["📊", "👥", "📅", "📄", "⚡"].map((icon, i) => (
                      <div 
                        key={i} 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${i === 0 ? 'bg-primary/10' : 'bg-white'}`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-10 space-y-4">
                    {/* Header */}
                    <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white text-sm font-semibold">
                          JK
                        </div>
                        <div>
                          <div className="font-semibold text-sm">John Kowalski</div>
                          <div className="text-xs text-gray-400">HR Manager</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          All systems operational
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-xs text-gray-400 mb-1">Active Employees</div>
                        <div className="text-2xl font-bold text-foreground">147</div>
                        <div className="text-xs text-green-600">+12 this month</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-xs text-gray-400 mb-1">Leave Balance</div>
                        <div className="text-2xl font-bold text-primary">15 days</div>
                        <div className="text-xs text-gray-400">Annual leave</div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-xs text-gray-400 mb-1">Pending Actions</div>
                        <div className="text-2xl font-bold text-foreground">3</div>
                        <div className="text-xs text-amber-600">Needs attention</div>
                      </div>
                    </div>
                    
                    {/* Action Items */}
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-sm font-semibold mb-3">Action Items</div>
                      <div className="space-y-2">
                        {[
                          { title: "Approve timesheet", subtitle: "Alex Johnson — Week ending 24 Nov", color: "bg-green-500" },
                          { title: "Review leave request", subtitle: "Sarah Chen — 3 days annual leave", color: "bg-amber-500" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="text-sm font-medium">{item.title}</div>
                              <div className="text-xs text-gray-400">{item.subtitle}</div>
                            </div>
                            <button className={`px-3 py-1.5 ${item.color} text-white rounded-lg text-xs font-medium`}>
                              Approve
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  )
}
