"use client"

import { ClipboardList, BarChart3, Users, Target } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"
import { MobilePhoneFrame } from "@/app/components/sections/mobile-phone-frame"

export default function SurveysPage() {
  return (
    <FeaturePageTemplate
      icon={ClipboardList}
      accentColor="#3B82F6"
      badge="Surveys"
      title="Employee feedback made simple"
      description="Create, send, and analyse employee surveys. Get real insights to improve workplace culture and engagement."
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
          color: "#eff6ff",
          image: "/screenshots/surveys-builder.png"
        },
        {
          title: "Mobile & Desktop Friendly",
          description: "Ensure all employees can participate in surveys. Mobile app and desktop access ensures everyone can respond.",
          benefits: [
            "Dashboard completion, ensuring staff are never more than one click away",
            "Brilliant visuals breaking down results of each survey",
            "Department, role or ad hoc segmentation",
            "Export to PDF and Excel"
          ],
          color: "#eff6ff",
          image: "/screenshots/surveys-analytics.png",
          useMobileFrame: true
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
