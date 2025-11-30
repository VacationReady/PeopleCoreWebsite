"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Holidays Act",
    subtitle: "100% Compliant",
    description: "Automatic leave calculations, FBAPS, and public holiday handling. Never worry about compliance again.",
    color: "bg-pastel-mint",
  },
  {
    title: "KiwiSaver",
    subtitle: "Auto-Enrolment",
    description: "Seamless employee enrolment, contribution tracking, and IRD integration. All automated.",
    color: "bg-pastel-cyan",
  },
  {
    title: "Fair Pay",
    subtitle: "Agreements Ready",
    description: "Stay ahead of sector-specific minimums with automatic rate updates and compliance tracking.",
    color: "bg-pastel-lavender",
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
            <span className="text-primary">Built for</span>
            <br />
            New Zealand businesses
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The only HRIS designed from the ground up for NZ employment law. 
            From the Holidays Act to KiwiSaver — we've got you covered.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${feature.color} rounded-3xl p-8 md:p-10`}
            >
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-500 mb-1">{feature.subtitle}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
