"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

// Bar Chart Animation Component
function BarChartAnimation() {
  const bars = [
    { height: 60, label: "Q1", color: "from-blue-500 to-blue-600" },
    { height: 80, label: "Q2", color: "from-purple-500 to-purple-600" },
    { height: 45, label: "Q3", color: "from-pink-500 to-pink-600" },
    { height: 95, label: "Q4", color: "from-green-500 to-green-600" },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-slate-900">Revenue Report</h4>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
      <div className="flex items-end justify-around gap-3 h-32">
        {bars.map((bar, index) => (
          <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full flex items-end justify-center h-24">
              <motion.div
                animate={{ 
                  height: [`0%`, `${bar.height}%`, `${bar.height}%`, `0%`],
                }}
                transition={{ 
                  duration: 4, 
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut" 
                }}
                className={`w-full bg-gradient-to-t ${bar.color} rounded-t-lg`}
              />
            </div>
            <span className="text-xs text-slate-600 font-medium">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
      <motion.div
        animate={{ 
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          times: [0, 0.3, 0.7, 1]
        }}
        className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-green-600"
      >
        <Check className="w-3 h-3" />
        Report generated successfully
      </motion.div>
    </div>
  )
}

// Drag and Drop Screen Builder Animation
function DragDropAnimation() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-slate-900">Form Builder</h4>
        <span className="text-xs text-slate-500">Drag & Drop</span>
      </div>
      
      {/* Canvas area */}
      <div className="bg-slate-50 rounded-lg p-4 min-h-[180px] border-2 border-dashed border-slate-300 relative">
        {/* Dropped elements */}
        <motion.div
          animate={{ 
            opacity: [0, 1, 1, 1, 0],
            x: [-50, 0, 0, 0, -50]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.15, 0.7, 0.85, 1]
          }}
          className="bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm"
        >
          <div className="text-xs font-medium text-slate-700 mb-1">Employee Name</div>
          <div className="h-6 bg-slate-100 rounded"></div>
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0, 0, 1, 1, 1, 0],
            x: [-50, -50, 0, 0, 0, -50]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.15, 0.3, 0.7, 0.85, 1]
          }}
          className="bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm"
        >
          <div className="text-xs font-medium text-slate-700 mb-1">Department</div>
          <div className="h-6 bg-slate-100 rounded"></div>
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0, 0, 0, 1, 1, 1, 0],
            x: [-50, -50, -50, 0, 0, 0, -50],
            scale: [1, 1, 1, 1, 1.05, 1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1]
          }}
          className="bg-white rounded-lg p-3 border border-blue-300 shadow-sm"
        >
          <div className="text-xs font-medium text-blue-700 mb-1">Submit Button</div>
          <div className="h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-semibold">
            Submit
          </div>
        </motion.div>

        {/* Floating drag indicator */}
        <motion.div
          animate={{ 
            y: [-20, 100],
            x: [100, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 0, 5, 5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center"
        >
          <span className="text-white text-xs">📝</span>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          opacity: [0, 0, 0, 1, 1, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.45, 0.5, 0.7, 0.85, 1]
        }}
        className="mt-3 text-xs text-slate-500 flex items-center gap-2"
      >
        <span className="text-green-600">✓</span>
        Custom form created
      </motion.div>
    </div>
  )
}

// Mobile Holiday Approval Animation
function MobileApprovalAnimation() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-xl">
      {/* Mobile phone frame */}
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-[200px] mx-auto">
        {/* Status bar */}
        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
          <span className="text-white text-xs">9:41</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* App content */}
        <div className="p-4 bg-gradient-to-b from-blue-50 to-white min-h-[220px]">
          <div className="text-xs font-semibold text-slate-900 mb-3">
            Leave Request
          </div>

          {/* Request card */}
          <motion.div
            animate={{ 
              opacity: [0, 1, 1, 1, 0],
              scale: [0.9, 1, 1, 1, 0.9],
              y: [20, 0, 0, 0, 20]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              times: [0, 0.2, 0.5, 0.7, 1]
            }}
            className="bg-white rounded-lg p-3 shadow-md border border-slate-200 mb-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                JS
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-900">John Smith</div>
                <div className="text-[10px] text-slate-500">3 days off</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-600 mb-2">
              Dec 24-26, 2024
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 relative">
              <motion.button
                animate={{
                  scale: [1, 1, 1, 1.1, 1.05, 1],
                  backgroundColor: ["rgb(34 197 94)", "rgb(34 197 94)", "rgb(34 197 94)", "rgb(16 185 129)", "rgb(34 197 94)", "rgb(34 197 94)"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  times: [0, 0.3, 0.5, 0.6, 0.65, 1]
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-semibold py-2 rounded-lg"
              >
                Approve
              </motion.button>
              <button className="flex-1 bg-slate-200 text-slate-700 text-[10px] font-semibold py-2 rounded-lg">
                Deny
              </button>
              
              {/* Tap indicator */}
              <motion.div
                animate={{
                  opacity: [0, 0, 0, 1, 0],
                  scale: [0.5, 0.5, 0.5, 1.5, 2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  times: [0, 0.3, 0.5, 0.6, 0.65]
                }}
                className="absolute left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full pointer-events-none"
                style={{ opacity: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Approval animation */}
          <motion.div
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0.8],
              y: [0, 0, 0, 0, -10, 0, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              times: [0, 0.5, 0.6, 0.65, 0.7, 0.85, 1]
            }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 0, 0, 0, 10, -10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2,
                times: [0, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85]
              }}
              className="text-3xl"
            >
              ✅
            </motion.div>
            <div className="text-center text-[10px] text-green-600 font-medium mt-1">
              Approved!
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function NotAllAI() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center max-w-4xl mx-auto mb-12">
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

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  It's Not <span className="text-red-500">All</span> AI
                </h2>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  While AI handles the automation and intelligence, <strong>you maintain complete control</strong> over every HR function. 
                  Beautiful dashboards, comprehensive reporting, and full autonomy over all standard HR operations.
                </p>
              </div>

              {/* Animated demos grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <BarChartAnimation />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <DragDropAnimation />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <MobileApprovalAnimation />
                </motion.div>
              </div>

              {/* AI vs You Control */}
              <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
                <div className="text-left bg-white/50 backdrop-blur-sm rounded-xl p-6">
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

                <div className="text-left bg-white/50 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    You Control
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Custom report building
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Approval processes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Mobile approvals
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Screen design & forms
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  See All Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

