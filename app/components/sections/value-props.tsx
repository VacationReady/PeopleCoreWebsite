"use client"

import { motion } from "framer-motion"
import { Rocket, CalendarDays, FolderOpen } from "lucide-react"

const features = [
  {
    title: "Onboarding",
    subtitle: "Seamless & Automated",
    description: "Get new hires up to speed in no time. Automated workflows, digital forms, and personalised welcome experiences that make day one memorable.",
    icon: Rocket,
  },
  {
    title: "Leave Management",
    subtitle: "Effortless Booking",
    description: "Intuitive holiday booking with real-time availability, manager approvals, and automatic balance tracking. No more spreadsheet chaos.",
    icon: CalendarDays,
  },
  {
    title: "Documents",
    subtitle: "Centralised & Secure",
    description: "Store, organise, and access all your people documents in one place. Have staff sign or acknowledge important policies and take back control of record keeping.",
    icon: FolderOpen,
  },
]

export function ValueProps() {
  return (
    <section className="section-padding bg-white">
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
            <span className="text-primary">Your people,</span>
            <br />
            one platform
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            PeopleCore provides kiwi businesses with a one stop shop solution for all things people. 
            With a beautiful and intuitive design coupled with robust functionality that scales, 
            PeopleCore is adopted seamlessly from the top down.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5 transition-all duration-300"
              >
                {/* Gradient orb decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:from-primary/30" />
                
                {/* Secondary orb for depth */}
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-primary/70 mb-1">{feature.subtitle}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
