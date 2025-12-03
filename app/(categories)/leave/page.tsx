"use client"

import { Calendar, Clock, Users, Shield } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function LeavePage() {
  return (
    <FeaturePageTemplate
      icon={Calendar}
      accentColor="#10b981"
      badge="Leave Management"
      title="Leave made simple"
      description="Smart leave tracking with Holidays Act compliance built-in. AI-powered approvals and team coverage insights — all automatic."
      highlights={[
        {
          icon: Shield,
          title: "Simple, modern leave tracking",
          description: "Leave tracking made simple. Manage and monitor all types of leave paid or unpaid leave. Review leave requests from any device and report across any timeframes."
        },
        {
          icon: Clock,
          title: "Intelligent Approvals",
          description: "Smart and intuitive dashboard-display leave approvals. See who's off, current balances and much more within one window, ensuring requests have had all the necessary due diligence before being approved"
        },
        {
          icon: Users,
          title: "Powerful Calendars",
          description: "Highly configurable, beautiful calendars views for all employees. Blackout days, amend bookings and AI powered insights"
        }
      ]}
      featureDetails={[
        {
          title: "Smart leave workflows",
          description: "Our system handles every edge case in the way your staff book leave, ensuring full configuration to the way your business operates",
          benefits: [
            "Multi stage and custom approvals for complex teams",
            "Event rules to configure non negotiable policies",
            "Custom events to manage company specific days off",
            "Full reporting across all paid and unpaid leave"
          ],
          color: "#d1fae5"
        },
        {
          title: "Self-service for employees",
          description: "Empower your team to manage their own leave. Mobile-first design means requests from anywhere.",
          benefits: [
            "Check balances in real-time",
            "Request leave in 3 taps",
            "See team calendar before booking",
            "Automatic manager notifications"
          ],
          color: "#cffafe"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Request", description: "Employee submits leave from mobile or desktop" },
        { step: 2, title: "Check", description: "AI validates policy compliance and team coverage" },
        { step: 3, title: "Approve", description: "Manager approves with one click" },
        { step: 4, title: "Track", description: "Payroll syncs automatically" }
      ]}
      ctaTitle="Ready to simplify leave?"
      ctaDescription="Join 200+ NZ businesses using PeopleCore for compliant, effortless leave management."
    />
  )
}
