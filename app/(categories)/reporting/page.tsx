"use client"

import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function ReportingPage() {
  return (
    <FeaturePageTemplate
      icon={BarChart3}
      accentColor="#6366F1"
      badge="Reporting & Analytics"
      title="Insights, instantly"
      description="Beautiful dashboards, custom reports, and predictive analytics. Turn HR data into strategic advantage."
      highlights={[
        {
          icon: PieChart,
          title: "Executive Dashboards",
          description: "Real-time KPIs at a glance. Headcount, retention, diversity. Make important people presentations effortless."
        },
        {
          icon: TrendingUp,
          title: "Fully Custom Reporting",
          description: "Report on anything, from any time. Real time or historic reports from any area of your system, in any order you like."
        },
        {
          icon: Download,
          title: "Export Anywhere",
          description: "Excel, PDF, CSV. Scheduled delivery to stakeholders."
        }
      ]}
      featureDetails={[
        {
          title: "Custom report builder",
          description: "Build any report you need, no technical skills required.",
          benefits: [
            "Choose from a wide selection pre-built templates our customers love.",
            "Sophisticated filtering across all fields to pinpoint the data you need",
            "Send Reports to colleagues who need it.",
            "Shareable with permissions."
          ],
          color: "#eef2ff",
          image: "/screenshots/reporting-builder.png"
        },
        {
          title: "Compliance reporting",
          description: "Generate IRD, diversity, and audit reports instantly. All data formatted correctly.",
          benefits: [
            "IRD-compliant exports",
            "Pay equity analysis",
            "Leave breakdown reports",
            "Audit-ready PDFs"
          ],
          color: "#eef2ff",
          image: "/screenshots/reporting-compliance.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Select", description: "Choose from our pre-built templates, or build your own" },
        { step: 2, title: "Customise", description: "Add fields and filters relevant to what you are trying to capture" },
        { step: 3, title: "Generate", description: "Real-time data, instant results with 100% accuracy" },
        { step: 4, title: "Share", description: "Export to multiple files types, and share with or present to relevant people" }
      ]}
      ctaTitle="Data-driven HR"
      ctaDescription="Get the insights you need to make better workforce decisions. Real-time analytics at your fingertips."
    />
  )
}
