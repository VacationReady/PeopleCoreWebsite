"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, TrendingUp, DollarSign, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    id: "hr",
    icon: Users,
    title: "HR Teams",
    subtitle: "Automate the routine, focus on the strategic",
    color: "from-blue-500 to-cyan-500",
    scenarios: [
      {
        title: "Employee Onboarding",
        description: "\"Create a 30-day onboarding journey for our new software engineer starting Monday\"",
        result: "Automatically generates personalized onboarding timeline, assigns mentors, schedules check-ins, and tracks progress."
      },
      {
        title: "Performance Reviews",
        description: "\"Set up quarterly reviews for the marketing team with 360-degree feedback\"",
        result: "Creates review cycles, sends automated reminders, collects feedback, and generates performance insights."
      },
      {
        title: "Compliance Tracking",
        description: "\"Ensure all employees complete mandatory training by year-end\"",
        result: "Tracks completion rates, sends targeted reminders, escalates overdue items, and generates compliance reports."
      }
    ]
  },
  {
    id: "operations",
    icon: TrendingUp,
    title: "Operations",
    subtitle: "Scale your workforce operations effortlessly",
    color: "from-purple-500 to-pink-500",
    scenarios: [
      {
        title: "Workforce Planning",
        description: "\"Analyze our hiring needs for Q2 based on project pipeline and attrition trends\"",
        result: "Provides data-driven hiring recommendations, identifies skill gaps, and creates recruitment timelines."
      },
      {
        title: "Resource Allocation",
        description: "\"Optimize team assignments for the upcoming product launch\"",
        result: "Analyzes skills, availability, and workload to suggest optimal team compositions and project assignments."
      },
      {
        title: "Process Optimization",
        description: "\"Identify bottlenecks in our approval workflows and suggest improvements\"",
        result: "Maps current processes, identifies delays, and recommends automated solutions to improve efficiency."
      }
    ]
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Finance",
    subtitle: "Complete visibility into people costs",
    color: "from-green-500 to-emerald-500",
    scenarios: [
      {
        title: "Budget Planning",
        description: "\"Project our total compensation costs for next year including planned hires\"",
        result: "Generates detailed cost projections, factors in salary increases, benefits, and new hire plans."
      },
      {
        title: "Cost Analysis",
        description: "\"Break down our per-employee costs by department and identify optimization opportunities\"",
        result: "Provides comprehensive cost breakdowns, benchmarking data, and actionable cost reduction strategies."
      },
      {
        title: "ROI Tracking",
        description: "\"Calculate the ROI of our learning and development programs\"",
        result: "Tracks training investments, measures performance improvements, and calculates program ROI."
      }
    ]
  }
]

export function UseCases() {
  const [activeCase, setActiveCase] = useState(useCases[0])

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
            Built for Every Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're in HR, Operations, or Finance, PeopleCore speaks your language 
            and solves your unique challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Use Case Selector */}
          <div className="space-y-4">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              const isActive = activeCase.id === useCase.id
              
              return (
                <motion.button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-blue-200 bg-blue-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} p-3 ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${
                        isActive ? 'text-blue-900' : 'text-slate-900'
                      }`}>
                        {useCase.title}
                      </h3>
                      <p className={`text-sm ${
                        isActive ? 'text-blue-700' : 'text-slate-600'
                      }`}>
                        {useCase.subtitle}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                      isActive ? 'text-blue-600 rotate-90' : 'text-slate-400'
                    }`} />
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Scenarios Display */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeCase.color} p-2`}>
                    <activeCase.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{activeCase.title}</h3>
                    <p className="text-slate-600">{activeCase.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {activeCase.scenarios.map((scenario, index) => (
                    <motion.div
                      key={scenario.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                    >
                      <h4 className="font-semibold text-slate-900 mb-3">{scenario.title}</h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                          <p className="text-sm text-slate-700 italic">
                            {scenario.description}
                          </p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                          <p className="text-sm text-slate-700">
                            <span className="font-medium text-green-800">AI Response: </span>
                            {scenario.result}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="gradient" size="lg" className="group">
                    Try {activeCase.title} Scenarios
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-blue-700">Pre-built Scenarios</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-purple-900 mb-2">∞</div>
            <div className="text-purple-700">Custom Workflows</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-green-900 mb-2">24/7</div>
            <div className="text-green-700">AI Availability</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
