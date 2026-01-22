"use client"

import { motion } from "framer-motion"

// Integration icons as SVG components for crisp rendering
const MicrosoftIcon = () => (
  <svg viewBox="0 0 23 23" className="w-full h-full">
    <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
    <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
    <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
    <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const XeroIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <circle cx="32" cy="32" r="30" fill="#13B5EA"/>
    <path d="M20 32l-8-11h5l5.5 7.5L28 21h5l-8 11 8 11h-5l-5.5-7.5L17 43h-5l8-11z" fill="white" fontWeight="bold"/>
    <path d="M36 26c0-2.2 1.8-4 4-4s4 1.8 4 4v1h-8v-1zm8 3v1c0 3.3-2.7 6-6 6s-6-2.7-6-6v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v3zm-6-7c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-1h-6v-2h6v-1c0-2.2-1.8-4-4-4z" fill="white"/>
    <path d="M46 22h2v14h-2V22zm4 3c0-1.1.9-2 2-2h2v2h-2v11h-2V25z" fill="white"/>
  </svg>
)

const OutlookIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path d="M6 10h22v44H6c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4z" fill="#0078D4"/>
    <ellipse cx="17" cy="32" rx="8" ry="11" fill="white"/>
    <path d="M17 24c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="#0078D4"/>
    <path d="M30 10h28c2.2 0 4 1.8 4 4v6L30 28V10z" fill="#0078D4"/>
    <path d="M30 36l32 10v6c0 2.2-1.8 4-4 4H30V36z" fill="#50D9FF"/>
    <rect x="30" y="28" width="32" height="8" fill="#0078D4"/>
  </svg>
)

const TeamsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="6" y="14" width="38" height="38" rx="2" fill="#5059C9"/>
    <path d="M14 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="white"/>
    <rect x="14" y="26" width="12" height="18" rx="1" fill="white"/>
    <rect x="28" y="26" width="10" height="18" rx="1" fill="white" opacity="0.5"/>
    <circle cx="48" cy="18" r="10" fill="#7B83EB"/>
    <path d="M42 18h12M48 12v12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const integrations = [
  { name: "Microsoft", icon: MicrosoftIcon, delay: 0 },
  { name: "Google", icon: GoogleIcon, delay: 0.1 },
  { name: "Xero", icon: XeroIcon, delay: 0.2 },
  { name: "Outlook", icon: OutlookIcon, delay: 0.3 },
  { name: "Teams", icon: TeamsIcon, delay: 0.4 },
]

// Floating animation variants for each icon
const createFloatingVariants = (index: number) => ({
  animate: {
    y: [0, -12, 0],
    rotate: [0, index % 2 === 0 ? 3 : -3, 0],
    transition: {
      y: {
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      rotate: {
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
})

export function Integrations() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-primary">Integrate</span> with your
            <br />
            current systems
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            PeopleCore connects seamlessly with the tools you already use, making adoption effortless.
          </p>
        </motion.div>

        {/* Floating Icons Container */}
        <div className="relative py-8">
          {/* Background gradient orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-full blur-3xl" />
          
          {/* Icons Grid */}
          <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: integration.delay,
                    type: "spring",
                    stiffness: 200,
                  }}
                  variants={createFloatingVariants(index)}
                  animate="animate"
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                  
                  {/* Icon container */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-4 md:p-5 lg:p-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:border-primary/20">
                    <Icon />
                  </div>
                  
                  {/* Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: integration.delay + 0.3 }}
                    className="text-center mt-3"
                  >
                    <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                      {integration.name}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Decorative connecting lines (subtle) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          And many more integrations coming soon...
        </motion.p>
      </div>
    </section>
  )
}
