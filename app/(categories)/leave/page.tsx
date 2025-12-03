"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Shield, ArrowUpRight, Check } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/app/components/sections/footer"
import { useCalendly } from "@/app/components/sections/calendly-modal"
import { SiteNav } from "@/app/components/navigation/site-nav"

const accentColor = "#6366F1"

// ==============================================
// 📸 UPDATE THESE PATHS TO YOUR SCREENSHOT FILES
// ==============================================
// Place your images in the "public" folder, then update these paths:
const SMART_WORKFLOWS_IMAGE = "/leave-workflows.png"      // e.g., public/leave-workflows.png
const SELF_SERVICE_IMAGE = "/leave-self-service.png"      // e.g., public/leave-self-service.png
// ==============================================

function ScreenshotImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [hasError, setHasError] = React.useState(false)
  
  // Show placeholder if image doesn't exist yet
  if (hasError) {
    return (
      <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200/50 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <Calendar className="w-8 h-8" style={{ color: accentColor }} />
            </div>
            <p className="text-sm font-medium text-indigo-400">Add image: {src}</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-300"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

export default function LeavePage() {
  const { openCalendly } = useCalendly()
  
  const highlights = [
    {
      icon: Shield,
      title: "Simple, modern leave tracking",
      description: "Leave tracking made simple. Manage and monitor all types of leave paid or unpaid leave. Review leave requests from any device and report across any timeframes."
    },
    {
      icon: Clock,
      title: "Intelligent Approvals",
      description: "Smart and intuitive dashboard-display leave approvals. See who's off, current balances and much more within one window, ensuring requests have had all the necessary due diligence before being approved"
    },
    {
      icon: Users,
      title: "Powerful Calendars",
      description: "Highly configurable, beautiful calendars views for all employees. Blackout days, amend bookings and AI powered insights"
    }
  ]

  const howItWorks = [
    { step: 1, title: "Request", description: "Employee submits leave from mobile or desktop" },
    { step: 2, title: "Check", description: "AI validates policy compliance and team coverage" },
    { step: 3, title: "Approve", description: "Manager approves with one click" },
    { step: 4, title: "Track", description: "Payroll syncs automatically" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-8"
          >
            <Calendar className="w-4 h-4" />
            Leave Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span style={{ color: accentColor }}>Leave made simple</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Smart leave tracking allows for employers to configure highly customised leave processes, while allowing employees full autonomy over their leave
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              See it in action
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const HighlightIcon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <HighlightIcon className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Smart Leave Workflows - Content Left, Image Right */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                Smart leave workflows
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Our system handles every edge case in the way your staff book leave, ensuring full configuration to the way your business operates
              </p>

              <div className="space-y-4">
                {[
                  "Multi stage and custom approvals for complex teams",
                  "Event rules to configure non negotiable policies",
                  "Custom events to manage company specific days off",
                  "Full reporting across all paid and unpaid leave"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ScreenshotImage 
                src={SMART_WORKFLOWS_IMAGE} 
                alt="Smart leave workflows dashboard" 
                className="aspect-[4/3] w-full" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Self-service for Employees - Image Left, Content Right */}
      <section className="section-padding" style={{ backgroundColor: "#EEF2FF" }}>
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <ScreenshotImage 
                src={SELF_SERVICE_IMAGE} 
                alt="Employee self-service leave portal" 
                className="aspect-[4/3] w-full" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                Self-service for employees
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Empower your team to manage their own leave. Mobile-first design means requests from anywhere.
              </p>

              <div className="space-y-4">
                {[
                  "Check balances in real-time",
                  "Request leave in 3 taps",
                  "See team calendar before booking",
                  "Automatic manager notifications"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How it works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                  style={{ backgroundColor: accentColor }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to simplify leave?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Join 200+ NZ businesses using PeopleCore for compliant, effortless leave management.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              Book a demo
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
