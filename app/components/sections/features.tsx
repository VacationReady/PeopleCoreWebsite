"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, CheckCircle, BarChart3, Workflow, Bot } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Leave Management",
    description: "Intelligent leave tracking with automated approvals, conflict detection, and seamless calendar integration.",
    color: "from-green-500 to-emerald-600",
    stats: "99% automation rate"
  },
  {
    icon: FileText,
    title: "Documents",
    description: "AI-powered document generation, e-signatures, and smart contract management with compliance tracking.",
    color: "from-blue-500 to-cyan-600",
    stats: "10x faster processing"
  },
  {
    icon: CheckCircle,
    title: "Approvals",
    description: "Smart approval workflows with escalation rules, delegation, and real-time notifications across all processes.",
    color: "from-purple-500 to-pink-600",
    stats: "Zero bottlenecks"
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Executive dashboards with predictive analytics, custom KPIs, and automated insights delivery.",
    color: "from-orange-500 to-red-600",
    stats: "Real-time insights"
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "Visual workflow builder with natural language programming and unlimited automation possibilities.",
    color: "from-indigo-500 to-purple-600",
    stats: "Infinite flexibility"
  },
  {
    icon: Bot,
    title: "AI Copilot",
    description: "Your personal HR assistant that learns your preferences and proactively suggests optimizations.",
    color: "from-pink-500 to-rose-600",
    stats: "24/7 availability"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete HR Suite, Powered by AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every HR function you need, reimagined with conversational AI. 
            From leave requests to executive reporting, everything just works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-2xl p-0.5 transition-opacity duration-300`}>
                    <div className="bg-white rounded-2xl w-full h-full" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-medium`}>
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Everything Connected, Nothing Forgotten
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Unlike traditional HR systems with isolated modules, PeopleCore's AI ensures 
              every feature works together seamlessly. One conversation can trigger actions 
              across multiple systems.
            </p>
            
            {/* Feature connections visualization */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-xs text-slate-300 text-center">
                      {feature.title}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Connecting lines animation */}
            <div className="relative mt-8">
              <svg className="w-full h-8 opacity-30" viewBox="0 0 800 32">
                <motion.path
                  d="M 50 16 Q 200 8 350 16 T 650 16"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
