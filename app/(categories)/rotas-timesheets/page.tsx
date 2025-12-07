"use client"

import { Clock, Smartphone, Users, BarChart3 } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function RotasTimesheetsPage() {
  return (
    <FeaturePageTemplate
      icon={Clock}
      accentColor="#6366F1"
      badge="Rotas & Timesheets"
      title="Effortless rotas and timesheets"
      description="Plan rotas, capture time and control your wage bill in one place. Real-time visibility from the first clock-in to the final approval."
      highlights={[
        {
          icon: Smartphone,
          title: "Mobile clock-in & out",
          description: "Employees clock in and out from their phone or any device, with precise timestamps and clear visibility for managers."
        },
        {
          icon: Users,
          title: "Shifts allocated in minutes",
          description: "Build rotas in a few clicks. Duplicate patterns, fill gaps fast and always know who is on, where and when."
        },
        {
          icon: BarChart3,
          title: "Live wage bill insight",
          description: "See the cost of every shift as you schedule it. Compare planned vs actual hours and stay on top of budgets."
        }
      ]}
      featureDetails={[
        {
          title: "Mobile-first time capture",
          description: "Make accurate time tracking effortless for frontline teams. Clock in, clock out and break tracking are all designed to be simple enough that nobody forgets.",
          benefits: [
            "Mobile and desktop friendly clock-in and out",
            "Accurate timestamps tied to each shift",
            "Clear visibility of who is currently on shift",
            "Employees see exactly what they're being paid for"
          ],
          color: "#eef2ff",
          image: "/screenshots/rotas-timesheets-mobile.png"
        },
        {
          title: "Smart rotas your team will actually use",
          description: "Design fair, balanced rotas in a fraction of the time. Build templates by role, location or team and reuse them week after week.",
          benefits: [
            "Drag-and-drop style shift allocation",
            "Reusable templates for recurring patterns",
            "Spot understaffing and overstaffing before it happens",
            "Instantly see coverage by location, role or time of day"
          ],
          color: "#eef2ff",
          image: "/screenshots/rotas-timesheets-rotas.png"
        },
        {
          title: "Real-time wage bill control",
          description: "Turn your rotas and timesheets into a live view of your wage bill. Compare planned vs actual hours so there are no surprises at payroll.",
          benefits: [
            "Live view of hours and cost as you schedule",
            "Planned vs actual comparisons in one screen",
            "Spot overtime and overspend before the pay run",
            "Export-ready data for payroll and reporting"
          ],
          color: "#eef2ff",
          image: "/screenshots/rotas-timesheets-analytics.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Plan", description: "Build your rota with templates and drag-and-drop shifts" },
        { step: 2, title: "Publish", description: "Notify staff instantly so everyone knows when they're working" },
        { step: 3, title: "Clock", description: "Employees clock in and out from mobile or desktop" },
        { step: 4, title: "Approve & export", description: "Managers review, approve and send clean data to payroll" }
      ]}
      ctaTitle="Make every shift run smoothly"
      ctaDescription="Give managers live control of rotas, timesheets and wage costs and give employees a simple way to know where they need to be."
    />
  )
}
