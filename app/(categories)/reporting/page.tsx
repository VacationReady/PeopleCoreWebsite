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
          description: "Real-time KPIs at a glance. Headcount, retention, diversity."
        },
        {
          icon: TrendingUp,
          title: "Predictive Analytics",
          description: "AI-powered turnover risk and trend predictions."
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
          description: "Build any report you need with drag-and-drop. No SQL, no technical skills required.",
          benefits: [
            "100+ pre-built templates",
            "Drag-and-drop fields",
            "Scheduled report delivery",
            "Shareable with permissions"
          ],
          color: "#eef2ff",
          image: "/screenshots/reporting-builder.png"
        },
        {
          title: "Compliance reporting",
          description: "Generate IRD, WorkSafe, and audit reports instantly. All data formatted correctly.",
          benefits: [
            "IRD-compliant exports",
            "Pay equity analysis",
            "Leave liability reports",
            "Audit-ready documentation"
          ],
          color: "#eef2ff",
          image: "/screenshots/reporting-compliance.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Select", description: "Choose from 100+ templates" },
        { step: 2, title: "Customize", description: "Add fields and filters" },
        { step: 3, title: "Generate", description: "Real-time data, instant results" },
        { step: 4, title: "Share", description: "Export or schedule delivery" }
      ]}
      ctaTitle="Data-driven HR"
      ctaDescription="Get the insights you need to make better workforce decisions. Real-time analytics at your fingertips."
    />
  )
}
