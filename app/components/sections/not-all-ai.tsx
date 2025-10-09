"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Smartphone, Check } from "lucide-react"

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
                initial={{ height: 0 }}
                animate={{ height: `${bar.height}%` }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                className={`w-full bg-gradient-to-t ${bar.color} rounded-t-lg`}
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="text-xs text-slate-600 font-medium"
            >
              {bar.label}
            </motion.span>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
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
      <div className="bg-slate-50 rounded-lg p-4 min-h-[180px] border-2 border-dashed border-slate-300">
        {/* Dropped elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm"
        >
          <div className="text-xs font-medium text-slate-700 mb-1">Employee Name</div>
          <div className="h-6 bg-slate-100 rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg p-3 mb-3 border border-slate-200 shadow-sm"
        >
          <div className="text-xs font-medium text-slate-700 mb-1">Department</div>
          <div className="h-6 bg-slate-100 rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
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
            y: [0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-8 right-8 w-8 h-8 bg-blue-500 rounded-lg opacity-30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
        <div className="p-4 bg-gradient-to-b from-blue-50 to-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-slate-900 mb-3"
          >
            Leave Request
          </motion.div>

          {/* Request card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-semibold py-2 rounded-lg"
              >
                Approve
              </motion.button>
              <button className="flex-1 bg-slate-200 text-slate-700 text-[10px] font-semibold py-2 rounded-lg">
                Deny
              </button>
            </motion.div>
          </motion.div>

          {/* Approval animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 1.5, repeat: 2 }}
              className="text-2xl"
            >
              ✅
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center text-[10px] text-green-600 font-medium mt-2"
          >
            Approved!
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

