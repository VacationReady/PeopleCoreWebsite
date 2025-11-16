"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Zap, Shield, Puzzle, Lightbulb, Clock, ArrowRight } from "lucide-react"

const valueProps = [
  {
    icon: Shield,
    title: "100% Holidays Act Compliance",
    subtitle: "Never worry about leave calculations again",
    description: "Automatically calculates annual leave, sick leave, bereavement leave, and public holidays in full compliance with NZ employment law. Handles complex scenarios like FBAPS calculations and leave accrual during parental leave.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "KiwiSaver Auto-Enrolment",
    subtitle: "Seamless retirement savings management",
    description: "Automatically enrols eligible employees, manages opt-outs, calculates employer contributions (3-10%), and integrates with all major KiwiSaver providers. Full IRD compliance built-in.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Puzzle,
    title: "Fair Pay Agreements Ready", 
    subtitle: "Stay ahead of employment law changes",
    description: "Built to support Fair Pay Agreements across industries. Automatically applies sector-specific minimums, manages collective bargaining requirements, and ensures pay equity compliance.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Auckland Data Residency",
    subtitle: "Your data stays in Aotearoa",
    description: "All employee data hosted in our Auckland data centre with full sovereignty. ISO 27001 certified, SOC 2 compliant, and built with kaitiakitanga—guardianship and protection of your people's information.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Sector-Specific Solutions",
    subtitle: "Tailored for NZ industries",
    description: "Pre-configured for agribusiness, healthcare, public sector, hospitality, and construction. Handles seasonal workers, shift patterns, and industry-specific awards with zero manual configuration.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "Te Reo Māori Support",
    subtitle: "Bilingual platform honouring Te Tiriti",
    description: "Full te reo Māori interface option, culturally appropriate workflows for tangihanga leave, and support for iwi-specific employment practices. Built in partnership with Māori HR practitioners.",
    gradient: "from-green-500 to-emerald-500"
  }
]

export function ValueProps() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built for New Zealand Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The only HRIS designed from the ground up for NZ employment law. 
            From the Holidays Act to KiwiSaver, from Fair Pay Agreements to te reo Māori—we've got you covered.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md border-2 border-slate-200 hover:shadow-lg hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] bg-white rounded-2xl" />
                </div>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-lg font-medium text-slate-700 mb-4">
                    {prop.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {prop.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Placeholder illustration */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${prop.gradient.replace('from-', '').replace('to-', ',')})` }} />

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-br ${prop.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${prop.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
