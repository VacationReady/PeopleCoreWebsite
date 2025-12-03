"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, CalendarDays, FileText, CheckCircle2, BarChart3, Workflow, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Leave Management",
    description: "Smart leave tracking with AI-powered approvals and team coverage insights.",
    href: "/leave",
    icon: CalendarDays,
  },
  {
    title: "Documents",
    description: "Generate contracts, policies, and letters with AI. E-signatures included.",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Approvals",
    description: "One-click approvals from anywhere. Smart routing and delegation built-in.",
    href: "/approvals",
    icon: CheckCircle2,
  },
  {
    title: "Reporting",
    description: "Real-time dashboards and custom reports. Export to Excel, PDF, or share online.",
    href: "/reporting",
    icon: BarChart3,
  },
  {
    title: "Workflows",
    description: "Build any HR automation without code. 78+ templates ready to use.",
    href: "/workflows",
    icon: Workflow,
  },
  {
    title: "AI Copilot",
    description: "Your personal HR assistant. Trained on NZ employment law. Available 24/7.",
    href: "/ai-copilot",
    icon: Sparkles,
  },
]

export function Features() {
  return (
    <section className="section-padding bg-gray-50">
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
            Everything you need
            <br />
            <span className="text-primary">in one place</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A complete HR platform that handles the complexity so you can focus on your people.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link 
                  href={feature.href}
                  className="group relative block overflow-hidden bg-white/70 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 h-full shadow-lg shadow-primary/5 transition-all duration-300"
                >
                  {/* Top gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Gradient orb decoration */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:from-primary/25" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header row with icon, title, and arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
