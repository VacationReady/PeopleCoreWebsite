"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon, ArrowUpRight, Check } from "lucide-react"
import Image from "next/image"
import { Footer } from "./footer"
import { useCalendly } from "./calendly-modal"
import { SiteNav } from "@/app/components/navigation/site-nav"

interface FeatureHighlight {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureDetail {
  title: string
  description: string
  benefits: string[]
  color: string
  image?: string
}

interface HowItWorksStep {
  step: number
  title: string
  description: string
}

interface FeaturePageProps {
  icon: LucideIcon
  accentColor: string
  badge: string
  title: string
  description: string
  highlights: FeatureHighlight[]
  featureDetails: FeatureDetail[]
  howItWorks: HowItWorksStep[]
  ctaTitle: string
  ctaDescription: string
}

function ScreenshotImage({ 
  src, 
  alt, 
  className = "", 
  accentColor,
  fallbackIcon: FallbackIcon
}: { 
  src?: string
  alt: string
  className?: string
  accentColor: string
  fallbackIcon: LucideIcon
}) {
  const [hasError, setHasError] = React.useState(false)
  
  // Show placeholder if image doesn't exist yet or there's an error
  if (!src || hasError) {
    return (
      <div className={`relative rounded-2xl overflow-hidden border border-gray-200/50 ${className}`} style={{ backgroundColor: `${accentColor}10` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <FallbackIcon className="w-8 h-8" style={{ color: accentColor }} />
            </div>
            {src && <p className="text-sm font-medium" style={{ color: accentColor }}>Add image: {src}</p>}
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: `${accentColor}50` }}/>
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

export function FeaturePageTemplate({
  icon: Icon,
  accentColor,
  badge,
  title,
  description,
  highlights,
  featureDetails,
  howItWorks,
  ctaTitle,
  ctaDescription,
}: FeaturePageProps) {
  const { openCalendly } = useCalendly()
  
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
            <Icon className="w-4 h-4" />
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span style={{ color: accentColor }}>{title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
          >
            {description}
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

      {/* Feature Details - Alternating 2-column layout */}
      {featureDetails.map((detail, index) => {
        const isEven = index % 2 === 0
        const bgColor = isEven ? '#ffffff' : detail.color
        
        return (
          <section
            key={detail.title}
            className="section-padding"
            style={{ backgroundColor: bgColor }}
          >
            <div className="container-tight">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? "" : "order-1 lg:order-2"}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                    {detail.title}
                  </h2>
                  <p className="text-lg text-gray-500 mb-8">{detail.description}</p>

                  <div className="space-y-4">
                    {detail.benefits.map((benefit) => (
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

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={isEven ? "" : "order-2 lg:order-1"}
                >
                  <ScreenshotImage 
                    src={detail.image} 
                    alt={detail.title} 
                    className="aspect-[4/3] w-full"
                    accentColor={accentColor}
                    fallbackIcon={Icon}
                  />
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

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
              {ctaTitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              {ctaDescription}
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
