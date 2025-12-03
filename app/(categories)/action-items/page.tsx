"use client"

import { Inbox, CheckSquare, Users, TrendingUp, ClipboardList, Bell } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function ActionItemsPage() {
  return (
    <FeaturePageTemplate
      icon={Inbox}
      accentColor="#6366F1"
      badge="Action Items"
      title="Your unified command centre"
      description="One dashboard for everything that needs your attention. Holiday approvals, employee updates, performance reviews, surveys — all in one intuitive hub."
      highlights={[
        {
          icon: CheckSquare,
          title: "Everything In One Place",
          description: "No more juggling between systems. All pending actions consolidated into a single, prioritised view."
        },
        {
          icon: Bell,
          title: "Smart Notifications",
          description: "Get notified your way — push, email, Slack, or Teams. Never miss an important action."
        },
        {
          icon: TrendingUp,
          title: "Priority Insights",
          description: "AI-powered prioritisation ensures the most urgent items surface first."
        }
      ]}
      featureDetails={[
        {
          title: "One place for all actions",
          description: "From leave approvals to employee detail changes, performance management tasks to survey completions — everything you need to action lives in one beautiful, intuitive dashboard.",
          benefits: [
            "Holiday and leave approvals",
            "Employee information updates",
            "Performance review completions",
            "Survey responses and feedback",
            "Document acknowledgements",
            "Training completions"
          ],
          color: "#eef2ff",
          image: "/screenshots/action-items-dashboard.png"
        },
        {
          title: "Work the way you want",
          description: "Bulk approve, delegate, or action items individually. Set up rules for auto-approvals or escalations. Your workflow, your rules.",
          benefits: [
            "Bulk actions for efficiency",
            "Delegation when you're away",
            "Auto-approval rules",
            "Escalation policies",
            "Full audit trail"
          ],
          color: "#eef2ff",
          image: "/screenshots/action-items-bulk.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Collect", description: "All actions flow into your unified inbox" },
        { step: 2, title: "Prioritise", description: "AI sorts by urgency and importance" },
        { step: 3, title: "Action", description: "Approve, decline, or delegate in one click" },
        { step: 4, title: "Track", description: "Full visibility and audit history" }
      ]}
      ctaTitle="Take control of your workload"
      ctaDescription="Stop context-switching between systems. Manage all your HR actions from one powerful, intuitive dashboard."
    />
  )
}

