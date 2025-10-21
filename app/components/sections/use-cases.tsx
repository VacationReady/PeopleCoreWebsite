"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, TrendingUp, DollarSign, ChevronRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"

const useCases = [
  {
    id: "agribusiness",
    icon: TrendingUp,
    title: "Agribusiness",
    subtitle: "Seasonal workforce management made easy",
    color: "from-green-500 to-emerald-500",
    scenarios: [
      {
        title: "Seasonal Worker Management",
        description: "\"Onboard 50 RSE workers for kiwifruit harvest with visa tracking and accommodation\"",
        result: "Automatically generates employment agreements, tracks visa expiry dates, manages accommodation allocation, and ensures Holidays Act compliance for seasonal workers."
      },
      {
        title: "Variable Hours & Leave",
        description: "\"Calculate annual leave for shearers working irregular hours across multiple farms\"",
        result: "Tracks hours across properties, calculates 52-week averages, determines FBAPS entitlements, and ensures accurate leave accrual for variable-hour workers."
      },
      {
        title: "Health & Safety Compliance",
        description: "\"Ensure all farm staff complete required H&S training before lambing season\"",
        result: "Schedules mandatory training, tracks certifications, sends reminders, and generates WorkSafe-compliant documentation for rural operations."
      }
    ]
  },
  {
    id: "healthcare",
    icon: Users,
    title: "Healthcare",
    subtitle: "Shift rostering and compliance for care teams",
    color: "from-blue-500 to-cyan-500",
    scenarios: [
      {
        title: "Shift Pattern Management",
        description: "\"Create rosters for 24/7 aged care facility ensuring MECA compliance\"",
        result: "Generates shift rosters respecting rest breaks, manages on-call allowances, applies MECA rates automatically, and tracks penal rates for night/weekend shifts."
      },
      {
        title: "Professional Registration",
        description: "\"Track APC renewals for all registered nurses and send renewal reminders\"",
        result: "Monitors registration expiry dates, sends automated reminders 90 days before lapse, escalates to managers, and maintains compliance with NCNZ requirements."
      },
      {
        title: "Pandemic Leave Management",
        description: "\"Process COVID-19 special leave for isolating staff and manage coverage\"",
        result: "Applies special leave entitlements, arranges shift coverage, notifies infection control, and maintains confidential health records per Privacy Act."
      }
    ]
  },
  {
    id: "public-sector",
    icon: DollarSign,
    title: "Public Sector",
    subtitle: "Government compliance and pay equity",
    color: "from-purple-500 to-pink-500",
    scenarios: [
      {
        title: "Pay Equity Reviews",
        description: "\"Conduct pay equity analysis for female-dominated roles per Equal Pay Act\"",
        result: "Identifies comparable roles, analyses pay gaps, generates Equal Pay Act reports, and recommends remediation plans with budget impact."
      },
      {
        title: "Collective Agreement Management",
        description: "\"Apply new PSA collective agreement rates to 200 council employees\"",
        result: "Maps employees to agreement coverage, applies new rates and allowances, calculates backdated payments, and updates payroll systems automatically."
      },
      {
        title: "Official Information Requests",
        description: "\"Compile employment data for OIA request on gender pay gap\"",
        result: "Extracts relevant data, anonymises personal information per Privacy Act, generates statistical reports, and prepares OIA-compliant documentation."
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
            Built for New Zealand Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From seasonal agribusiness to 24/7 healthcare to public sector compliance—PeopleCore understands your industry's unique NZ employment challenges.
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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-green-900 mb-2">15+</div>
            <div className="text-green-700">NZ Industry Templates</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
            <div className="text-blue-700">NZ Law Compliance</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="text-3xl font-bold text-purple-900 mb-2">Local</div>
            <div className="text-purple-700">NZ Support Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
