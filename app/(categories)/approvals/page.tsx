"use client"

import { CheckCircle, Workflow, Bell, Users, Zap, Shield } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: Workflow,
    title: "Smart Routing",
    description: "Intelligent request routing based on type, amount, department, and custom rules. Always reaches the right approver."
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Instant notifications via email, mobile push, Slack, or Teams. Never miss an approval request."
  },
  {
    icon: Users,
    title: "Delegation Support",
    description: "Seamless delegation when managers are away. Automatic forwarding with full audit trail."
  },
  {
    icon: CheckCircle,
    title: "One-Click Approval",
    description: "Approve requests from anywhere with one click. Mobile-friendly interface for managers on the go."
  },
  {
    icon: Zap,
    title: "Auto-Approval Rules",
    description: "Define rules for automatic approval of routine requests. Free up manager time for exceptions."
  },
  {
    icon: Shield,
    title: "Audit Compliance",
    description: "Complete audit trail for every approval. Perfect for compliance reviews and investigations."
  }
]

const featureDetails = [
  {
    title: "Universal Approval Centre",
    description: "One place for all approvals—leave requests, expense claims, timesheets, document sign-offs, and more. Managers see everything in a single, prioritized queue.",
    benefits: [
      "Unified approval dashboard",
      "Priority-based ordering",
      "Batch approval support",
      "Quick context previews",
      "History and analytics"
    ],
    placeholderId: "approvals-dashboard"
  },
  {
    title: "Custom Approval Workflows",
    description: "Build approval workflows for any process without code. Multi-step approvals, parallel routing, conditional logic, and escalation rules.",
    benefits: [
      "Drag-and-drop workflow builder",
      "Multi-level approval chains",
      "Conditional routing logic",
      "SLA monitoring",
      "Auto-escalation rules"
    ],
    placeholderId: "approvals-workflow-builder",
    imagePosition: "left" as const
  },
  {
    title: "Mobile Approvals",
    description: "Full approval capabilities on mobile. Review details, add comments, approve or reject—all from your phone.",
    benefits: [
      "Native mobile experience",
      "Push notification support",
      "Offline capability",
      "Touch ID/Face ID security",
      "Quick action shortcuts"
    ],
    placeholderId: "approvals-mobile"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Request Submitted",
    description: "Employee submits request via any channel"
  },
  {
    step: 2,
    title: "Smart Routing",
    description: "AI routes to correct approver based on rules"
  },
  {
    step: 3,
    title: "Manager Notified",
    description: "Instant notification with all context needed"
  },
  {
    step: 4,
    title: "One-Click Action",
    description: "Approve, reject, or request more info instantly"
  }
]

export default function ApprovalsPage() {
  return (
    <FeaturePageTemplate
      icon={CheckCircle}
      iconGradient="from-purple-400/30 to-pink-400/20"
      headerGradient="from-purple-600 to-pink-600"
      badge="Approval Workflows"
      title="Smart Approvals"
      description="Streamlined approval workflows with intelligent routing, delegation support, and real-time notifications. Zero bottlenecks, complete visibility."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Eliminate Approval Bottlenecks"
      ctaDescription="Speed up your approval processes by 10x with intelligent routing and one-click mobile approvals."
      accentColor="from-purple-500 to-pink-600"
    />
  )
}
