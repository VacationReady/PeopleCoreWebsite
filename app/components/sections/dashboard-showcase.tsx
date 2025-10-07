"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet, Zap, Users, BarChart3, Settings, Calendar, FileText, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

const dashboardFeatures = [
  {
    title: "Complete HR Dashboard",
    description: "Beautiful, intuitive interface that gives you full control over every aspect of your HR operations. Not just AI - you have complete autonomy over all standard HR functions.",
    image: "/dashboard-main.png", // We'll add this image
    highlights: [
      "Employee profiles & management",
      "Leave balance tracking", 
      "Quick actions & approvals",
      "Calendar integration",
      "People metrics & analytics"
    ]
  },
  {
    title: "Payroll & Compensation",
    description: "Comprehensive payroll management with detailed breakdowns, adjustments, and full transparency. Complete control over compensation structures.",
    image: "/payroll-dashboard.png", // We'll add this image  
    highlights: [
      "Salary amount calculations",
      "Adjustment configurations",
      "Annual payroll summaries",
      "Cost of increase tracking",
      "Employee compensation details"
    ]
  },
  {
    title: "HR Automation App Store", 
    description: "78 ready-to-use automation workflows that save hours of manual work. Install instantly or customize to fit your exact needs.",
    image: "/app-store.png", // We'll add this image
    highlights: [
      "Employee onboarding workflows",
      "Performance review cycles", 
      "Leave request approvals",
      "Visa & permit management",
      "Custom workflow builder"
    ]
  }
]

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 mb-6">
            <Monitor className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 font-medium">Not Just AI - Full HR Control</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Beautiful Dashboard.<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Autonomy.
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            While AI handles the automation, you maintain full control over every HR function. 
            Beautiful interfaces for all your standard HR operations.
          </p>
        </motion.div>

        {/* Device View Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-lg border border-slate-200">
            {[
              { key: 'desktop', icon: Monitor, label: 'Desktop' },
              { key: 'tablet', icon: Tablet, label: 'Tablet' },
              { key: 'mobile', icon: Smartphone, label: 'Mobile' }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setDeviceView(key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  deviceView === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-slate-200">
            {dashboardFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ${
              deviceView === 'desktop' ? 'aspect-[16/10]' :
              deviceView === 'tablet' ? 'aspect-[4/3] max-w-md mx-auto' :
              'aspect-[9/16] max-w-xs mx-auto'
            }`}>
              {/* Browser/Device Frame */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-slate-500 ml-4">
                  app.peoplecore.com
                </div>
              </div>

              {/* Beautiful Dashboard UI Showcase */}
              <div className="relative w-full h-full bg-slate-50 overflow-hidden">
                {activeTab === 0 && (
                  // Main Dashboard - Comprehensive HR Dashboard matching uploaded screenshot
                  <div className="flex h-full">
                    {/* Left Sidebar */}
                    <div className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-2 space-y-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-xs font-bold">PC</span>
                      </div>
                      {[
                        { icon: "📊", active: true },
                        { icon: "✅", active: false },
                        { icon: "👥", active: false },
                        { icon: "📅", active: false },
                        { icon: "📄", active: false },
                        { icon: "📈", active: false },
                        { icon: "📰", active: false },
                        { icon: "⚙️", active: false }
                      ].map((item, i) => (
                        <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs cursor-pointer ${item.active ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:bg-slate-100'}`}>
                          {item.icon}
                        </div>
                      ))}
                      <div className="flex-1"></div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs text-slate-400 hover:bg-slate-100 cursor-pointer">
                        🚪
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Top Header */}
                      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">SB</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-sm">Susan Bentley</h3>
                            <p className="text-xs text-slate-500">admin@peoplecore.co.nz</p>
                            <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">ADMIN</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs font-medium">
                            👁 View profile
                          </button>
                          <button className="px-3 py-1 bg-green-500 text-white rounded-md text-xs font-medium">
                            ✉ Email Employee
                          </button>
                          <button className="px-3 py-1 bg-purple-500 text-white rounded-md text-xs font-medium">
                            🤖 AI Chatbot
                          </button>
                          <input type="text" placeholder="Search..." className="px-3 py-1 border border-slate-300 rounded-md text-xs w-24" />
                        </div>
                      </div>

                      {/* Dashboard Content Grid */}
                      <div className="flex-1 p-4 grid grid-cols-12 gap-4">
                        {/* Annual Leave Balance */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="col-span-3 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-semibold text-slate-700">Annual Leave Balance</span>
                          </div>
                          <div className="text-lg font-bold text-blue-600">25 days</div>
                          <div className="text-xs text-slate-500">Total Allowance: 25 days</div>
                          <div className="text-xs text-slate-500">Taken: 10 days</div>
                          <div className="text-xs text-slate-500">Remaining: 15 days</div>
                          <button className="w-full mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                            Book Leave
                          </button>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="col-span-3 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-green-600" />
                            <span className="text-xs font-semibold text-slate-700">Quick Actions</span>
                          </div>
                          <div className="space-y-2">
                            <button className="w-full flex items-center gap-2 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded text-xs">
                              📰 Post News
                            </button>
                            <button className="w-full flex items-center gap-2 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded text-xs">
                              👥 Add Employee
                            </button>
                            <button className="w-full flex items-center gap-2 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded text-xs">
                              📄 Add Document
                            </button>
                            <button className="w-full flex items-center gap-2 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded text-xs">
                              ✏ Edit Employee
                            </button>
                          </div>
                        </motion.div>

                        {/* Calendar */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="col-span-3 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span className="text-xs font-semibold text-slate-700">Calendar</span>
                          </div>
                          <div className="text-xs text-slate-600 mb-2">Upcoming</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 font-semibold">JC</span>
                              </div>
                              <div>
                                <div className="font-medium">James Curtain</div>
                                <div className="text-slate-500">21/10/2024 • Annual Leave - 4...</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-semibold">JW</span>
                              </div>
                              <div>
                                <div className="font-medium">James Walsh</div>
                                <div className="text-slate-500">20/10/2024 • Annual Leave - 3...</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-600 font-semibold">SR</span>
                              </div>
                              <div>
                                <div className="font-medium">Sarah Roberts</div>
                                <div className="text-slate-500">20/10/2024 • Taking some time...</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* People Metrics */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="col-span-3 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-orange-600" />
                            <span className="text-xs font-semibold text-slate-700">People Metrics</span>
                          </div>
                          <div className="text-xs text-slate-600 mb-1">All departments</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-slate-600">Active Employees</span>
                              <span className="text-lg font-bold text-slate-900">21</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-slate-600">Managers</span>
                              <span className="text-lg font-bold text-slate-900">8</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-slate-600">New Starters</span>
                              <span className="text-lg font-bold text-blue-600">18</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Action Items */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="col-span-6 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-xs font-semibold text-slate-700">Action Items</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">3</span>
                              <button className="text-xs text-blue-600 hover:underline">View all</button>
                              <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Quick Approve All</button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[
                              { task: "IT Policy", employee: "Policy Review", status: "Review", color: "blue" },
                              { task: "bank-payroll change request", employee: "Employee Request", status: "Approve", color: "green" },
                              { task: "Trudy Jenkins — Annual Leave", employee: "Trudy Jenkins", status: "Approve", color: "green" }
                            ].map((item, i) => (
                              <motion.div
                                key={item.task}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="flex items-center justify-between bg-slate-50 rounded p-2"
                              >
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-slate-900">{item.task}</div>
                                  <div className="text-xs text-slate-500">{item.employee}</div>
                                </div>
                                <button className={`px-3 py-1 rounded text-xs font-medium text-white ${item.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}>
                                  {item.status}
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Latest News */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="col-span-6 bg-white rounded-lg p-3 border border-slate-200"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <FileText className="w-4 h-4 text-purple-600" />
                            <span className="text-xs font-semibold text-slate-700">Latest News</span>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-4 text-white">
                            <div className="text-sm font-semibold mb-1">Coming soon...</div>
                            <div className="text-xs opacity-90 mb-2">01/01/2025</div>
                            <div className="text-xs">The most comprehensive, AI-powered, no-code automation HR System is almost here ✨</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  // Payroll Dashboard - Based on your payroll screenshot
                  <div className="p-4 space-y-4">
                    <h3 className="font-semibold text-slate-900">Payroll Summary</h3>
                    
                    {/* Employee List */}
                    <div className="space-y-2">
                      {[
                        { name: "Carl Hendon", gross: "£138,901", net: "£143,046", tax: "£37" },
                        { name: "Ivy Smith", gross: "£126,661", net: "£132,084", tax: "£39" },
                        { name: "Niko White", gross: "£97,076", net: "£101,320", tax: "£92" },
                        { name: "Alex Ward", gross: "£78,347", net: "£82,488", tax: "£61" }
                      ].map((employee, i) => (
                        <motion.div
                          key={employee.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between bg-white rounded-lg p-2 border"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">{employee.name}</span>
                          </div>
                          <div className="flex gap-4 text-xs">
                            <span className="text-slate-600">{employee.gross}</span>
                            <span className="text-green-600 font-semibold">{employee.net}</span>
                            <span className="text-slate-500">{employee.tax}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-blue-50 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-slate-900 mb-2">Annual Salary Payroll Summary</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-slate-900">£8,637,596</div>
                          <div className="text-xs text-slate-600">Total before tax</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">£9,069,476</div>
                          <div className="text-xs text-slate-600">After adjustment</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">+£431,880</div>
                          <div className="text-xs text-slate-600">Cost of increase</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {activeTab === 2 && (
                  // App Store - Based on your workflow screenshot
                  <div className="p-4 space-y-4">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-slate-900">HR Automation App Store</h3>
                      <p className="text-xs text-slate-600">78 Ready-to-Use Automation Workflows</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "New Employee Onboarding", icon: "👋", saves: "~4 hours", tags: ["onboarding", "new-starter"] },
                        { name: "30-60-90 Day Review", icon: "📊", saves: "~2 hours", tags: ["probation", "review"] },
                        { name: "Leave Request Approval", icon: "🏖️", saves: "~30 mins", tags: ["leave", "approval"] },
                        { name: "Performance Review Cycle", icon: "⭐", saves: "~6 hours", tags: ["performance", "review"] }
                      ].map((workflow, i) => (
                        <motion.div
                          key={workflow.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white rounded-lg p-3 border hover:shadow-lg transition-shadow cursor-pointer"
                        >
                          <div className="text-2xl mb-2">{workflow.icon}</div>
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">{workflow.name}</h4>
                          <p className="text-xs text-green-600 mb-2">Saves {workflow.saves}</p>
                          <div className="flex gap-1 mb-2">
                            {workflow.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-blue-500 text-white rounded py-1 text-xs font-medium"
                          >
                            + Add
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Floating UI Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-20 left-4 bg-white rounded-lg shadow-lg p-3 border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">21 Active</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-3 border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">98% Efficiency</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Details */}
          <motion.div
            key={`details-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {dashboardFeatures[activeTab].title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {dashboardFeatures[activeTab].description}
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3">
              {dashboardFeatures[activeTab].highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Explore Dashboard
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          {[
            { icon: Shield, label: "Enterprise Security", value: "SOC 2 Compliant" },
            { icon: Zap, label: "Automation Rate", value: "99.7%" },
            { icon: Users, label: "User Satisfaction", value: "4.9/5" },
            { icon: Settings, label: "Customization", value: "Unlimited" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
