"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Puzzle, Lightbulb, Clock } from "lucide-react"

const valueProps = [
  {
    icon: Clock,
    title: "10x Faster",
    subtitle: "Complete HR tasks in seconds, not hours",
    description: "Automate repetitive workflows and eliminate manual data entry. What used to take hours now happens instantly with AI-powered automation.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Zero Learning Curve",
    subtitle: "Natural conversation, no training required",
    description: "Simply tell PeopleCore what you need in plain English. No complex interfaces, no training manuals—just natural conversation that gets things done.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "100% Customisable Platform", 
    subtitle: "Unlimited flexibility and complete control",
    description: "Fully customisable to your needs with unlimited flexibility, complete control over workflows, and the ability to adapt to any business requirement.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Puzzle,
    title: "Fully Integrated",
    subtitle: "All HR functions work together seamlessly",
    description: "One unified platform where payroll, benefits, performance, and compliance work in perfect harmony. No more data silos or integration headaches.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Revolutionary UX",
    subtitle: "Most advanced conversational HR AI ever built",
    description: "Experience the future of HR technology. Our conversational interface feels natural while delivering unprecedented power and flexibility.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Complete Autonomy",
    subtitle: "Unmatched autonomous functionality - do everything yourself",
    description: "Full control over every aspect of your HR operations. Comprehensive tools, unlimited customisation, and complete data ownership - all included.",
    gradient: "from-indigo-500 to-purple-500"
  }
]

export function ValueProps() {
  return (
    <section className="py-24 bg-white">
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
            Why Choose PeopleCore?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the perfect balance of AI automation and human control. 
            Revolutionary technology that enhances rather than replaces your HR expertise.
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
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
                  <p className="text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

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
