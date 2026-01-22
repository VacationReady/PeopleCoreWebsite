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
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <circle cx="24" cy="24" r="22" fill="#13B5EA"/>
    <path d="M17 16l5.5 8L17 32h3.5l3.5-5 3.5 5H31l-5.5-8 5.5-8h-3.5l-3.5 5-3.5-5H17z" fill="white"/>
  </svg>
)

const OutlookIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <path d="M4 8h18v32H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2z" fill="#0078D4"/>
    <ellipse cx="13" cy="24" rx="6" ry="8" fill="white"/>
    <path d="M13 18c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#0078D4"/>
    <path d="M24 8h20c1.1 0 2 .9 2 2v4L24 22V8z" fill="#0078D4"/>
    <path d="M24 26l22 8v4c0 1.1-.9 2-2 2H24V26z" fill="#28A8EA"/>
    <rect x="24" y="22" width="22" height="4" fill="#0078D4"/>
  </svg>
)

const TeamsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect x="4" y="12" width="28" height="28" rx="2" fill="#5059C9"/>
    <rect x="10" y="20" width="9" height="12" fill="white"/>
    <rect x="20" y="20" width="7" height="12" fill="white" opacity="0.5"/>
    <circle cx="14.5" cy="15" r="2.5" fill="white"/>
    <circle cx="37" cy="14" r="7" fill="#7B83EB"/>
    <path d="M34 9v10M29 14h10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
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
