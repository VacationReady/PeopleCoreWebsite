"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { LucideIcon, ArrowRight, CheckCircle, Sparkles, Play } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ImagePlaceholder } from "@/app/components/ui/image-placeholder"
import { SectionContainer } from "@/app/components/layout/section-container"
import { PageHeader } from "@/app/components/layout/page-header"
import { Footer } from "@/app/components/sections/footer"

// Types
interface FeatureHighlight {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureDetail {
  title: string
  description: string
  benefits: string[]
  placeholderId: string
  imagePosition?: "left" | "right"
}

interface HowItWorksStep {
  step: number
  title: string
  description: string
}

interface FeaturePageProps {
  // Header
  icon: LucideIcon
  iconGradient?: string
  headerGradient?: string
  badge?: string
  title: string
  description: string
  
  // Main content
  highlights: FeatureHighlight[]
  featureDetails: FeatureDetail[]
  howItWorks: HowItWorksStep[]
  
  // CTA
  ctaTitle: string
  ctaDescription: string
  
  // Customization
  accentColor?: string
}

function FeatureHighlights({ 
  highlights, 
  accentColor = "from-blue-500 to-purple-600" 
}: { 
  highlights: FeatureHighlight[]
  accentColor?: string 
}) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <SectionContainer background="default" padding="default">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon
          return (
            <motion.div
              key={highlight.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card variant="feature" padding="lg" className="h-full">
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] bg-white rounded-xl" />
                </div>
                
                <CardContent className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentColor} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

function FeatureDetailSection({
  detail,
  index,
  accentColor = "from-blue-500 to-purple-600"
}: {
  detail: FeatureDetail
  index: number
  accentColor?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const isReversed = detail.imagePosition === "left" || (index % 2 === 1 && !detail.imagePosition)
  
  return (
    <SectionContainer 
      background={index % 2 === 0 ? "default" : "subtle"} 
      padding="default"
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
        {/* Content */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}
        >
          <Badge variant="secondary" className="mb-2">
            Feature {index + 1}
          </Badge>
          <h3 className="text-3xl font-bold text-slate-900">
            {detail.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {detail.description}
          </p>
          
          <ul className="space-y-3">
            {detail.benefits.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* Image Placeholder */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: isReversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={isReversed ? "lg:order-1" : ""}
        >
          <ImagePlaceholder
            placeholderId={detail.placeholderId}
            label={detail.title}
            description="Upload feature screenshot"
            aspectRatio="4/3"
            deviceFrame="browser"
            variant="gradient"
          />
        </motion.div>
      </div>
    </SectionContainer>
  )
}

function HowItWorksSection({
  steps,
  accentColor = "from-blue-500 to-purple-600"
}: {
  steps: HowItWorksStep[]
  accentColor?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <SectionContainer background="subtle" padding="lg">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          How It Works
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Simple, Powerful, Automated
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Get started in minutes with our intuitive workflow
        </p>
      </div>
      
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg relative z-10`}>
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

function FeatureCTA({
  title,
  description,
  accentColor = "from-blue-600 to-purple-600"
}: {
  title: string
  description: string
  accentColor?: string
}) {
  return (
    <SectionContainer padding="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${accentColor} p-8 md:p-12 lg:p-16`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-white/80" />
            <span className="text-white/80 font-medium">Ready to Transform?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-white text-slate-900 hover:bg-white/90 shadow-xl"
              asChild
            >
              <a
                href="https://calendly.com/peoplecore-nz/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Video
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

export function FeaturePageTemplate({
  icon,
  iconGradient = "from-white/20 to-white/10",
  headerGradient = "from-blue-600 to-purple-600",
  badge,
  title,
  description,
  highlights,
  featureDetails,
  howItWorks,
  ctaTitle,
  ctaDescription,
  accentColor = "from-blue-500 to-purple-600"
}: FeaturePageProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <PageHeader
        icon={icon}
        iconGradient={iconGradient}
        title={title}
        description={description}
        badge={badge}
        background="custom"
        customBackground={`bg-gradient-to-r ${headerGradient}`}
        ctaLabel="Get Started"
        ctaHref="https://calendly.com/peoplecore-nz/demo"
        secondaryCtaLabel="Learn More"
        size="lg"
      />
      
      {/* Feature Highlights */}
      <FeatureHighlights highlights={highlights} accentColor={accentColor} />
      
      {/* Feature Details */}
      {featureDetails.map((detail, index) => (
        <FeatureDetailSection
          key={detail.title}
          detail={detail}
          index={index}
          accentColor={accentColor}
        />
      ))}
      
      {/* How It Works */}
      <HowItWorksSection steps={howItWorks} accentColor={accentColor} />
      
      {/* CTA Section */}
      <FeatureCTA
        title={ctaTitle}
        description={ctaDescription}
        accentColor={accentColor}
      />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

// Re-export individual components for custom compositions
export { FeatureHighlights, FeatureDetailSection, HowItWorksSection, FeatureCTA }

