"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Leave Management",
    description: "Smart leave tracking with AI-powered approvals and team coverage insights.",
    href: "/leave",
    color: "bg-pastel-mint",
  },
  {
    title: "Documents",
    description: "Generate contracts, policies, and letters with AI. E-signatures included.",
    href: "/documents",
    color: "bg-pastel-cyan",
  },
  {
    title: "Approvals",
    description: "One-click approvals from anywhere. Smart routing and delegation built-in.",
    href: "/approvals",
    color: "bg-pastel-lavender",
  },
  {
    title: "Reporting",
    description: "Real-time dashboards and custom reports. Export to Excel, PDF, or share online.",
    href: "/reporting",
    color: "bg-pastel-peach",
  },
  {
    title: "Workflows",
    description: "Build any HR automation without code. 78+ templates ready to use.",
    href: "/workflows",
    color: "bg-pastel-pink",
  },
  {
    title: "AI Copilot",
    description: "Your personal HR assistant. Trained on NZ employment law. Available 24/7.",
    href: "/ai-copilot",
    color: "bg-pastel-blue",
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link 
                href={feature.href}
                className={`block ${feature.color} rounded-3xl p-8 h-full hover:shadow-lg transition-shadow group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
