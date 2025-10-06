"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Zap, Shield, Puzzle, Lightbulb, Clock } from "lucide-react"

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

        {/* AI + Human Control Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold text-slate-700"
                >
                  +
                </motion.div>
                
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-2xl">👤</span>
                </motion.div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                It's Not <span className="text-red-500">All</span> AI
              </h3>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                While AI handles the automation and intelligence, <strong>you maintain complete control</strong> over every HR function. 
                Beautiful dashboards, comprehensive reporting, and full autonomy over all standard HR operations.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    AI Handles
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Workflow automation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Intelligent routing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Predictive insights
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Natural language processing
                    </li>
                  </ul>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    You Control
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Policy decisions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Approval processes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Data access & privacy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      System configurations
                    </li>
                  </ul>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                See How It Works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
