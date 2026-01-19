"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Download, Shield, Zap } from "lucide-react"
import { MobileShowcase } from "./mobile-showcase"

// Mobile app screenshots - add your screenshots to /public/screenshots/
// Required files:
//   - mobile-app-1.png (375x812 or similar mobile aspect ratio)
//   - mobile-app-2.png (375x812 or similar mobile aspect ratio)
//   - mobile-app-3.png (375x812 or similar mobile aspect ratio)

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Lightning Fast",
    description: "Native performance with instant sync across all your devices"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Secure & Compliant",
    description: "Bank-level encryption with full NZ privacy compliance"
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Offline Ready",
    description: "Access your HR data anywhere, even without internet"
  }
]

export function MobileAppSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-primary">Mobile App</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Take your HR management anywhere with our beautiful, modern mobile app designed for today's workforce
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                HR Management in Your Pocket
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our stunning mobile app brings the full power of PeopleCore to your fingertips. Request leave, approve timesheets, and manage your team from anywhere with an interface that's both beautiful and intuitive.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Download for iOS
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Download for Android
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div className="text-sm text-gray-500">
                10K+ downloads
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mobile Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl" />
            
            {/* Mobile Showcase Component */}
            <MobileShowcase />
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "24/7", label: "Access" },
            { number: "100%", label: "Sync" },
            { number: "iOS+", label: "Compatible" },
            { number: "5★", label: "Rated" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
