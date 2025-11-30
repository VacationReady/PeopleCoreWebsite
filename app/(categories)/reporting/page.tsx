"use client"

import { BarChart3, PieChart, TrendingUp, Download, Zap, Eye } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    description: "Beautiful, real-time dashboards with KPIs that matter. From headcount to retention, see your HR metrics at a glance."
  },
  {
    icon: PieChart,
    title: "Custom Reports",
    description: "Build any report you need with our drag-and-drop report builder. No SQL required."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "AI-powered predictions for turnover risk, hiring needs, and workforce trends."
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Export to Excel, PDF, or CSV. Schedule automated report delivery to stakeholders."
  },
  {
    icon: Zap,
    title: "Real-time Data",
    description: "Live data feeds ensure your reports are always current. No stale data."
  },
  {
    icon: Eye,
    title: "Data Visualization",
    description: "Charts, graphs, and visualizations that make complex data easy to understand."
  }
]

const featureDetails = [
  {
    title: "HR Analytics Dashboard",
    description: "Get instant visibility into your workforce with beautiful, interactive dashboards. Track headcount, turnover, diversity metrics, and more.",
    benefits: [
      "Real-time workforce metrics",
      "Customizable dashboard widgets",
      "Trend analysis over time",
      "Benchmark comparisons",
      "Mobile-friendly views"
    ],
    placeholderId: "reporting-analytics-dashboard"
  },
  {
    title: "Report Builder",
    description: "Create custom reports without any technical skills. Drag and drop fields, apply filters, and generate insights in minutes.",
    benefits: [
      "No-code report builder",
      "100+ pre-built templates",
      "Scheduled report delivery",
      "Sharing and permissions",
      "Version history"
    ],
    placeholderId: "reporting-builder",
    imagePosition: "left" as const
  },
  {
    title: "Compliance Reporting",
    description: "Generate compliance reports for the IRD, WorkSafe, and internal audits. All the data you need, formatted correctly.",
    benefits: [
      "IRD-compliant reports",
      "Pay equity analysis",
      "Leave liability reports",
      "Diversity & inclusion metrics",
      "Audit-ready exports"
    ],
    placeholderId: "reporting-compliance"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Select Template",
    description: "Choose from 100+ pre-built report templates"
  },
  {
    step: 2,
    title: "Customize",
    description: "Add fields, filters, and visualizations"
  },
  {
    step: 3,
    title: "Generate",
    description: "Run the report with real-time data"
  },
  {
    step: 4,
    title: "Share",
    description: "Export or schedule automatic delivery"
  }
]

export default function ReportingPage() {
  return (
    <FeaturePageTemplate
      icon={BarChart3}
      iconGradient="from-orange-400/30 to-red-400/20"
      headerGradient="from-orange-600 to-red-600"
      badge="Reporting & Analytics"
      title="Powerful HR Reporting"
      description="Executive dashboards with predictive analytics, custom KPIs, and automated insights delivery. Turn your HR data into strategic advantage."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Data-Driven HR Decisions"
      ctaDescription="Get the insights you need to make better workforce decisions. Real-time analytics at your fingertips."
      accentColor="from-orange-500 to-red-600"
    />
  )
}
