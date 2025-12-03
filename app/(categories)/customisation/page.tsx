"use client"

import { Settings, Layout, Calendar, Zap, Palette, Code } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function CustomisationPage() {
  return (
    <FeaturePageTemplate
      icon={Settings}
      accentColor="#6366F1"
      badge="Customisation"
      title="Make it truly yours"
      description="Powerful configuration tools that let you tailor PeopleCore to your exact needs. No developers required."
      highlights={[
        {
          icon: Layout,
          title: "Screen Designer",
          description: "Drag-and-drop interface builder. Add, remove, or rearrange fields to match your processes."
        },
        {
          icon: Zap,
          title: "Event Manager",
          description: "Trigger automated actions when events occur. Send emails, update records, or kick off workflows."
        },
        {
          icon: Calendar,
          title: "Holiday Rules Engine",
          description: "Define complex leave policies, entitlements, and accrual rules specific to New Zealand."
        }
      ]}
      featureDetails={[
        {
          title: "Screen Designer",
          description: "Create the perfect interface for your team. Add custom fields, rearrange layouts, hide what you don't need, and make each screen work exactly the way you want.",
          benefits: [
            "Drag-and-drop field placement",
            "Custom field types (text, dropdown, date, etc.)",
            "Conditional visibility rules",
            "Role-based screen variants",
            "Preview before publishing"
          ],
          color: "#eef2ff",
          image: "/screenshots/customisation-screen-designer.png"
        },
        {
          title: "Event Manager",
          description: "Build powerful automations without code. When something happens in PeopleCore, trigger actions automatically — send notifications, update fields, create tasks, or integrate with external systems.",
          benefits: [
            "Visual event builder",
            "Pre-built event templates",
            "Multi-step action chains",
            "Conditional logic",
            "Webhook integrations"
          ],
          color: "#eef2ff",
          image: "/screenshots/customisation-event-manager.png"
        },
        {
          title: "Holiday Rules Engine",
          description: "Configure complex leave policies that match New Zealand employment law and your company's unique needs. Handle pro-rata calculations, anniversary dates, and multiple leave types with ease.",
          benefits: [
            "NZ public holiday calendars",
            "Anniversary date tracking",
            "Accrual rule configuration",
            "Leave type definitions",
            "Entitlement calculations",
            "Parental leave support"
          ],
          color: "#eef2ff",
          image: "/screenshots/customisation-holiday-rules.png"
        },
        {
          title: "Branding & Theming",
          description: "Make PeopleCore feel like your own. Upload your logo, set your brand colours, and create a seamless experience for your employees.",
          benefits: [
            "Custom logo and favicon",
            "Brand colour palette",
            "Custom email templates",
            "White-label options"
          ],
          color: "#eef2ff",
          image: "/screenshots/customisation-branding.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Design", description: "Use our visual tools to customise" },
        { step: 2, title: "Preview", description: "Test your changes in a sandbox" },
        { step: 3, title: "Publish", description: "Push changes live with one click" },
        { step: 4, title: "Iterate", description: "Refine based on user feedback" }
      ]}
      ctaTitle="Your HR system, your way"
      ctaDescription="No two businesses are the same. PeopleCore adapts to you, not the other way around."
    />
  )
}

