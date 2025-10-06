"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet, Zap, Users, BarChart3, Settings, Calendar, FileText, Shield } from "lucide-react"
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
              <div className="relative w-full h-full bg-white overflow-hidden">
                {activeTab === 0 && (
                  // Main Dashboard - Based on your Susan Bentley screenshot
                  <div className="p-4 space-y-4">
                    {/* Header with user profile */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">SB</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">Susan Bentley</h3>
                          <p className="text-xs text-slate-500">admin@peoplecore.co.nz</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs"
                        >
                          View Profile
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-green-500 text-white rounded-full text-xs"
                        >
                          Email Employee
                        </motion.button>
                      </div>
                    </div>

                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-50 rounded-lg p-3"
                      >
                        <div className="text-lg font-bold text-blue-600">25 days</div>
                        <div className="text-xs text-slate-600">Annual Leave Balance</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-green-50 rounded-lg p-3"
                      >
                        <div className="text-lg font-bold text-green-600">Quick Actions</div>
                        <div className="text-xs text-slate-600">Post News, Add Employee</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-purple-50 rounded-lg p-3"
                      >
                        <div className="text-lg font-bold text-purple-600">People Metrics</div>
                        <div className="text-xs text-slate-600">21 Active, 8 Managers</div>
                      </motion.div>
                    </div>

                    {/* Action Items */}
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-semibold text-slate-900 mb-2">Action Items</h4>
                      <div className="space-y-2">
                        {[
                          { task: "IT Policy", status: "Review", color: "blue" },
                          { task: "Bank payroll change request", status: "Approve", color: "green" },
                          { task: "Trudy Jenkins - Annual Leave", status: "Approve", color: "green" }
                        ].map((item, i) => (
                          <motion.div
                            key={item.task}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-center justify-between bg-white rounded p-2"
                          >
                            <span className="text-sm text-slate-700">{item.task}</span>
                            <span className={`px-2 py-1 rounded text-xs text-white bg-${item.color}-500`}>
                              {item.status}
                            </span>
                          </motion.div>
                        ))}
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
