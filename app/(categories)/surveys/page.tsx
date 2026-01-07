"use client"

import { ClipboardList, BarChart3, Users, Target } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function SurveysPage() {
  return (
    <FeaturePageTemplate
      icon={ClipboardList}
      accentColor="#10B981"
      badge="Surveys"
      title="Employee feedback made simple"
      description="Create, send, and analyze employee surveys. Get real insights to improve workplace culture and engagement."
      highlights={[
        {
          icon: Users,
          title: "Employee Engagement",
          description: "Measure satisfaction and engagement across your organization with targeted surveys."
        },
        {
          icon: BarChart3,
          title: "Real-time Analytics",
          description: "Get instant insights with beautiful dashboards and comprehensive reporting."
        },
        {
          icon: Target,
          title: "Actionable Insights",
          description: "Turn feedback into action with automated follow-ups and improvement tracking."
        }
      ]}
      featureDetails={[
        {
          title: "Create surveys in minutes",
          description: "Build professional surveys with our intuitive drag-and-drop editor. Choose from templates or create custom questions.",
          benefits: [
            "Pre-built survey templates",
            "Custom question types",
            "Anonymous or attributed responses",
            "Multi-language support"
          ],
          color: "#ecfdf5",
          image: "/screenshots/surveys-builder.png"
        },
        {
          title: "Powerful analytics dashboard",
          description: "Visualize responses with interactive charts and graphs. Track trends over time and segment results by department.",
          benefits: [
            "Real-time response tracking",
            "Trend analysis over time",
            "Department and role segmentation",
            "Export to PDF and Excel"
          ],
          color: "#ecfdf5",
          image: "/screenshots/surveys-analytics.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Design", description: "Create your survey with templates or custom questions" },
        { step: 2, title: "Distribute", description: "Send to employees via email, Slack, or direct link" },
        { step: 3, title: "Collect", description: "Watch responses come in real-time" },
        { step: 4, title: "Analyze", description: "Get insights and take action on feedback" }
      ]}
      ctaTitle="Start listening to your team"
      ctaDescription="Build a better workplace with regular employee feedback and engagement surveys."
    />
  )
}
