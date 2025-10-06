"use client"

import { motion } from "framer-motion"
import { Rocket, Brain, Building2, RefreshCw, Lightbulb } from "lucide-react"

const valueProps = [
  {
    icon: Rocket,
    title: "10x Faster",
    subtitle: "Complex automations through natural conversation",
    description: "Transform weeks of manual setup into minutes of conversation. Our AI understands your intent and builds sophisticated workflows instantly.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Brain,
    title: "Zero Learning Curve", 
    subtitle: "Talk naturally, AI handles complexity",
    description: "No training required. Speak in plain English about your HR needs, and watch as PeopleCore translates your words into powerful automation.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Enterprise Grade",
    subtitle: "CEO reporting, compliance, audit trails",
    description: "Built for the C-suite with enterprise security, comprehensive audit logs, and executive-level reporting that scales with your organization.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: RefreshCw,
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
  }
]

export function ValueProps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why PeopleCore Changes Everything
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Five revolutionary advantages that make PeopleCore the most advanced HR platform ever created.
          </p>
        </motion.div>

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
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-lg font-medium text-slate-700 mb-4">
                    {prop.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${prop.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <span className="text-slate-700 font-medium">Ready to experience the future of HR?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-600"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
