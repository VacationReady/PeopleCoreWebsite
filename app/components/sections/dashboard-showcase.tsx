"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ImagePlaceholder, BrowserFrame } from "@/app/components/ui/image-placeholder"
import { SectionContainer } from "@/app/components/layout/section-container"
import { SectionHeader } from "@/app/components/layout/section-header"
import {
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  Users,
  BarChart3,
  Settings,
  Calendar,
  Shield,
  Sparkles
} from "lucide-react"

type DeviceView = "desktop" | "tablet" | "mobile"

const dashboardFeatures = [
  {
    id: "dashboard",
    title: "Complete HR Dashboard",
    description: "Beautiful, intuitive interface that gives you full control over every aspect of your HR operations. Not just AI—you have complete autonomy over all standard HR functions.",
    placeholderId: "dashboard-main",
    highlights: [
      "Employee profiles & management",
      "Leave balance tracking",
      "Quick actions & approvals",
      "Calendar integration",
      "People metrics & analytics"
    ]
  },
  {
    id: "payroll",
    title: "Payroll & Compensation",
    description: "Comprehensive payroll management with detailed breakdowns, adjustments, and full transparency. Complete control over compensation structures.",
    placeholderId: "payroll-dashboard",
    highlights: [
      "Salary calculations",
      "Adjustment configurations",
      "Annual payroll summaries",
      "Cost tracking",
      "Employee compensation details"
    ]
  },
  {
    id: "automations",
    title: "HR Automation App Store",
    description: "78 ready-to-use automation workflows that save hours of manual work. Install instantly or customize to fit your exact needs.",
    placeholderId: "app-store",
    highlights: [
      "Employee onboarding workflows",
      "Performance review cycles",
      "Leave request approvals",
      "Visa & permit management",
      "Custom workflow builder"
    ]
  }
]

const deviceTabs: { key: DeviceView; icon: typeof Monitor; label: string }[] = [
  { key: "desktop", icon: Monitor, label: "Desktop" },
  { key: "tablet", icon: Tablet, label: "Tablet" },
  { key: "mobile", icon: Smartphone, label: "Mobile" }
]

function DashboardPreview({ 
  feature, 
  deviceView 
}: { 
  feature: typeof dashboardFeatures[0]
  deviceView: DeviceView 
}) {
  return (
    <motion.div
      key={`${feature.id}-${deviceView}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className={`
        relative overflow-hidden rounded-2xl
        ${deviceView === "desktop" ? "w-full" : ""}
        ${deviceView === "tablet" ? "max-w-lg mx-auto" : ""}
        ${deviceView === "mobile" ? "max-w-xs mx-auto" : ""}
      `}>
        <ImagePlaceholder
          placeholderId={`${feature.placeholderId}-${deviceView}`}
          label={`${feature.title} - ${deviceView}`}
          description={`Upload ${deviceView} screenshot`}
          aspectRatio={
            deviceView === "desktop" ? "16/9" : 
            deviceView === "tablet" ? "4/3" : "9/16"
          }
          deviceFrame={
            deviceView === "desktop" ? "browser" :
            deviceView === "tablet" ? "tablet" : "mobile"
          }
          icon={deviceView === "desktop" ? "desktop" : deviceView === "tablet" ? "tablet" : "mobile"}
          variant="gradient"
        />
      </div>
      
      {/* Floating Stats */}
      {deviceView === "desktop" && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 z-10"
          >
            <Card variant="elevated" padding="sm" className="flex items-center gap-2 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">147</div>
                <div className="text-xs text-slate-500">Active Employees</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 right-4 z-10"
          >
            <Card variant="elevated" padding="sm" className="flex items-center gap-2 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-500">Efficiency</div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [deviceView, setDeviceView] = useState<DeviceView>("desktop")

  return (
    <SectionContainer 
      background="gradient" 
      padding="lg" 
      pattern="dots"
      className="overflow-hidden"
    >
      <SectionHeader
        badge="Not Just AI — Full HR Control"
        badgeIcon={Monitor}
        title={
          <>
            Beautiful Dashboard.{" "}
            <span className="text-gradient">Complete Autonomy.</span>
          </>
        }
        description="While AI handles the automation, you maintain full control over every HR function. Beautiful interfaces for all your standard HR operations."
      />

      {/* Device View Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center bg-white rounded-xl p-1.5 shadow-lg border border-slate-200">
          {deviceTabs.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setDeviceView(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                deviceView === key
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Feature Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex flex-wrap justify-center bg-white rounded-2xl p-2 shadow-xl border border-slate-200 gap-1">
          {dashboardFeatures.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Dashboard Preview */}
        <AnimatePresence mode="wait">
          <DashboardPreview
            key={activeTab}
            feature={dashboardFeatures[activeTab]}
            deviceView={deviceView}
          />
        </AnimatePresence>

        {/* Feature Details */}
        <motion.div
          key={`details-${activeTab}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <Badge variant="secondary" className="mb-4">
              {dashboardFeatures[activeTab].id.toUpperCase()}
            </Badge>
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
            <Button variant="gradient" size="lg" className="group">
              Explore Dashboard
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="elevated" padding="default" className="text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
