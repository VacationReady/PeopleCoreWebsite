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
          title: "100% Holidays Act Compliant",
          description: "FBAPS calculations, AWEP, and public holiday handling done right. Audited and certified."
        },
        {
          icon: Clock,
          title: "Instant Approvals",
          description: "Smart routing based on team coverage and policies. One-click approve from anywhere."
        },
        {
          icon: Users,
          title: "Team Coverage View",
          description: "See who's away and when. AI flags potential conflicts before they happen."
        }
      ]}
      featureDetails={[
        {
          title: "Smart leave calculations",
          description: "Our engine handles every edge case in the Holidays Act — including FBAPS, AWEP, and those tricky 'otherwise working day' scenarios.",
          benefits: [
            "Automatic OWD calculations for shift workers",
            "Pro-rata calculations for part-timers",
            "Accrual tracking with anniversary dates",
            "Alternative holidays handled correctly"
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
