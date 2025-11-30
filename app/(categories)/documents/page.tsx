"use client"

import { FileText, Upload, FileCheck, Search, Shield, Zap } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: Upload,
    title: "Smart Document Upload",
    description: "Drag and drop documents with automatic categorization. Our AI extracts key information and organizes files intelligently."
  },
  {
    icon: FileCheck,
    title: "E-Signatures",
    description: "Built-in electronic signatures for contracts, policies, and agreements. Legally binding and compliant with NZ law."
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "Find any document instantly with AI-powered search. Search by content, date, employee, or document type."
  },
  {
    icon: Shield,
    title: "Compliance Tracking",
    description: "Automatic expiry tracking, renewal reminders, and compliance status dashboards for all your documents."
  },
  {
    icon: Zap,
    title: "AI Generation",
    description: "Generate employment contracts, policy documents, and letters automatically using AI with your company templates."
  },
  {
    icon: FileText,
    title: "Version Control",
    description: "Full version history for every document. Track changes, restore previous versions, and maintain audit trails."
  }
]

const featureDetails = [
  {
    title: "Centralised Document Hub",
    description: "Store all your HR documents in one secure, searchable location. From employment contracts to training certificates—everything accessible in seconds.",
    benefits: [
      "Unlimited document storage",
      "Folder-based organisation",
      "Employee-linked filing",
      "Secure access controls",
      "Bulk upload support"
    ],
    placeholderId: "documents-hub-dashboard"
  },
  {
    title: "Automated Document Workflows",
    description: "Create, route, and track documents through approval workflows. Perfect for contracts, policy acknowledgements, and compliance documents.",
    benefits: [
      "Customizable approval workflows",
      "Automatic routing rules",
      "Deadline tracking",
      "Reminder notifications",
      "Completion certificates"
    ],
    placeholderId: "documents-workflow",
    imagePosition: "left" as const
  },
  {
    title: "Compliance & Audit Ready",
    description: "Meet your compliance obligations with automatic tracking, expiry alerts, and comprehensive audit trails for all document activities.",
    benefits: [
      "Expiry date monitoring",
      "Compliance dashboards",
      "Audit trail logging",
      "Bulk compliance reports",
      "Privacy Act compliant storage"
    ],
    placeholderId: "documents-compliance"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Upload or Generate",
    description: "Upload documents or generate them using AI templates"
  },
  {
    step: 2,
    title: "Auto-Categorise",
    description: "AI automatically tags and files documents correctly"
  },
  {
    step: 3,
    title: "Route for Signatures",
    description: "Send documents for e-signature with tracking"
  },
  {
    step: 4,
    title: "Store & Monitor",
    description: "Secure storage with automatic compliance tracking"
  }
]

export default function DocumentsPage() {
  return (
    <FeaturePageTemplate
      icon={FileText}
      iconGradient="from-blue-400/30 to-cyan-400/20"
      headerGradient="from-blue-600 to-cyan-600"
      badge="Document Management"
      title="Smart Document Management"
      description="AI-powered document generation, e-signatures, and smart contract management with compliance tracking. Store, search, and manage all your HR documents in one secure location."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Ready to Go Paperless?"
      ctaDescription="Transform your document management with AI-powered automation. Secure, compliant, and incredibly fast."
      accentColor="from-blue-500 to-cyan-600"
    />
  )
}
