"use client"

import { CheckCircle, Workflow, Bell, Smartphone } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function ApprovalsPage() {
  return (
    <FeaturePageTemplate
      icon={CheckCircle}
      accentColor="#8b5cf6"
      badge="Approval Workflows"
      title="Approvals, simplified"
      description="One-click approvals from anywhere. Smart routing, delegation support, and zero bottlenecks."
      highlights={[
        {
          icon: Workflow,
          title: "Smart Routing",
          description: "AI routes to the right approver every time."
        },
        {
          icon: Bell,
          title: "Instant Notifications",
          description: "Push, email, Slack, Teams — your choice."
        },
        {
          icon: Smartphone,
          title: "Mobile First",
          description: "Approve anything from your phone in one tap."
        }
      ]}
      featureDetails={[
        {
          title: "Universal approval centre",
          description: "Leave, expenses, timesheets, documents — all approvals in one place. Prioritized queue, bulk actions, full context.",
          benefits: [
            "Single dashboard for everything",
            "Priority-based ordering",
            "Batch approval support",
            "Complete history and analytics"
          ],
          color: "#ede9fe"
        },
        {
          title: "No-code workflow builder",
          description: "Build any approval process without writing code. Multi-step chains, conditional logic, automatic escalation.",
          benefits: [
            "Drag-and-drop workflow builder",
            "Conditional routing rules",
            "SLA monitoring",
            "Auto-escalation when overdue"
          ],
          color: "#fce7f3"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Request", description: "Employee submits via any channel" },
        { step: 2, title: "Route", description: "AI finds the right approver" },
        { step: 3, title: "Notify", description: "Manager gets instant notification" },
        { step: 4, title: "Approve", description: "One-click from anywhere" }
      ]}
      ctaTitle="Eliminate bottlenecks"
      ctaDescription="Speed up your approval processes by 10x. Smart routing, mobile approvals, complete visibility."
    />
  )
}
