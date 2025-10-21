"use client"

import { motion } from "framer-motion"
import { Shield, Lock, MapPin, FileCheck, Award, Download } from "lucide-react"
import { Button } from "@/app/components/ui/button"

const complianceBadges = [
  {
    icon: Shield,
    title: "ISO 27001 Certified",
    description: "Information security management",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lock,
    title: "SOC 2 Type II",
    description: "Security, availability & confidentiality",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Auckland Data Centre",
    description: "100% NZ data sovereignty",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FileCheck,
    title: "Privacy Act 2020",
    description: "Full compliance with NZ privacy law",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Award,
    title: "Holidays Act Certified",
    description: "Verified by employment law experts",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "IRD Approved",
    description: "Certified payroll intermediary",
    color: "from-red-500 to-pink-500"
  }
]

const resources = [
  {
    title: "Holidays Act Survival Guide",
    description: "Complete guide to NZ leave calculations, FBAPS, and compliance requirements",
    size: "2.4 MB PDF",
    icon: "📘"
  },
  {
    title: "Security & Privacy Whitepaper",
    description: "How we protect your data with kaitiakitanga and world-class security",
    size: "1.8 MB PDF",
    icon: "🔒"
  },
  {
    title: "Fair Pay Agreements Checklist",
    description: "Step-by-step guide to FPA compliance for NZ businesses",
    size: "980 KB PDF",
    icon: "✅"
  },
  {
    title: "KiwiSaver Compliance Guide",
    description: "Everything you need to know about auto-enrolment and employer contributions",
    size: "1.2 MB PDF",
    icon: "💰"
  }
]

export function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Security & Compliance You Can Trust
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built with kaitiakitanga—guardianship and protection of your people's data. 
            World-class security meets New Zealand data sovereignty.
          </p>
        </motion.div>

        {/* Compliance Badges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {complianceBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${badge.color} p-3 mb-4`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{badge.title}</h3>
                <p className="text-slate-600 text-sm">{badge.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Data Residency Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-20 border-2 border-blue-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🇳🇿 100% New Zealand
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Your Data Stays in Aotearoa
              </h3>
              <p className="text-lg text-slate-700 mb-6">
                All employee data is hosted in our Auckland data centre with full sovereignty. 
                We never transfer data offshore. Your information is protected under New Zealand law 
                and governed by the Privacy Act 2020.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Auckland-based infrastructure with 99.99% uptime SLA</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Real-time backup to secondary NZ location</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">Encrypted at rest and in transit (AES-256)</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Auckland Data Centre</h4>
                  <p className="text-slate-600">Tier III Certified Facility</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Uptime SLA</span>
                    <span className="font-bold text-green-600">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Data Residency</span>
                    <span className="font-bold text-blue-600">100% NZ</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Backup Location</span>
                    <span className="font-bold text-purple-600">Wellington</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="resources"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Free NZ Employment Law Resources
            </h3>
            <p className="text-lg text-slate-600">
              Download our comprehensive guides to stay compliant and informed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{resource.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h4>
                    <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{resource.size}</span>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
