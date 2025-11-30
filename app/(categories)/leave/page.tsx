"use client"

import { Calendar, Clock, Users, TrendingUp, Shield, Zap, Bell, FileCheck } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: Clock,
    title: "Automated Approvals",
    description: "Smart approval workflows that route requests to the right managers based on team structure, leave policies, and availability."
  },
  {
    icon: Users,
    title: "Team Coverage",
    description: "Automatic conflict detection ensures adequate team coverage. AI suggests alternative dates when coverage is insufficient."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track leave patterns, identify burnout risks, and optimise team scheduling with predictive analytics."
  },
  {
    icon: Shield,
    title: "Holidays Act Compliant",
    description: "100% compliant with NZ Holidays Act. Automatic FBAPS calculations, public holiday handling, and audit trails."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Proactive reminders for managers and employees. Never miss an approval or leave balance milestone."
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Automatic record keeping for all leave requests, approvals, and balances. Perfect audit trails."
  }
]

const featureDetails = [
  {
    title: "Intelligent Leave Tracking",
    description: "Our AI-powered leave management system understands the complexities of NZ employment law. From annual leave to sick leave, bereavement to parental—every leave type is handled with precision.",
    benefits: [
      "Automatic leave accrual calculations",
      "Real-time balance updates",
      "Multi-type leave support (Annual, Sick, TOIL, etc.)",
      "Holiday Act compliant calculations",
      "Leave forecasting and planning"
    ],
    placeholderId: "leave-tracking-dashboard"
  },
  {
    title: "Seamless Approval Workflows",
    description: "Streamline your approval process with intelligent routing, delegation support, and mobile-friendly interfaces that let managers approve requests from anywhere.",
    benefits: [
      "One-click mobile approvals",
      "Automatic escalation for overdue requests",
      "Delegation for manager absence",
      "Bulk approval capabilities",
      "Audit trail for compliance"
    ],
    placeholderId: "leave-approval-workflow",
    imagePosition: "left" as const
  },
  {
    title: "Team Calendar & Coverage",
    description: "Visualise your team's availability at a glance. Our calendar view shows overlapping leave, identifies coverage gaps, and helps you plan around busy periods.",
    benefits: [
      "Visual team calendar",
      "Coverage gap detection",
      "Department-wide visibility",
      "Integration with external calendars",
      "Holiday blackout period support"
    ],
    placeholderId: "leave-team-calendar"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Request Leave",
    description: "Submit requests via chat, mobile app, or web interface in seconds"
  },
  {
    step: 2,
    title: "AI Processing",
    description: "AI checks policies, team coverage, and conflicts automatically"
  },
  {
    step: 3,
    title: "Smart Approval",
    description: "Auto-approve eligible requests or route to the right manager"
  },
  {
    step: 4,
    title: "Calendar Sync",
    description: "Automatic calendar updates and team notifications"
  }
]

export default function LeavePage() {
  return (
    <FeaturePageTemplate
      icon={Calendar}
      iconGradient="from-green-400/30 to-emerald-400/20"
      headerGradient="from-green-600 to-emerald-600"
      badge="Leave Management"
      title="Leave Management"
      description="Intelligent leave tracking with automated approvals, conflict detection, and seamless calendar integration. Manage annual leave, sick leave, and special requests with AI-powered insights—100% Holidays Act compliant."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Ready to Streamline Leave Management?"
      ctaDescription="Join thousands of NZ companies using PeopleCore to automate their leave processes and improve employee satisfaction."
      accentColor="from-green-500 to-emerald-600"
    />
  )
}
