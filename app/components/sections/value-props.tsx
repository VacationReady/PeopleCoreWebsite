"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Onboarding",
    subtitle: "Seamless & Automated",
    description: "Get new hires up to speed in no time. Automated workflows, digital forms, and personalised welcome experiences that make day one memorable.",
    color: "bg-pastel-mint",
  },
  {
    title: "Leave Management",
    subtitle: "Effortless Booking",
    description: "Intuitive holiday booking with real-time availability, manager approvals, and automatic balance tracking. No more spreadsheet chaos.",
    color: "bg-pastel-cyan",
  },
  {
    title: "Documents",
    subtitle: "Centralised & Secure",
    description: "Store, organise, and access all your people documents in one place. Contracts, policies, and certifications—always at your fingertips.",
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
