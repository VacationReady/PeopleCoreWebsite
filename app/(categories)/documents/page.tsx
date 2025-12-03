"use client"

import { FileText, Upload, FileCheck, Search } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function DocumentsPage() {
  return (
    <FeaturePageTemplate
      icon={FileText}
      accentColor="#6366F1"
      badge="Document Management"
      title="Documents, handled"
      description="AI-powered document generation, e-signatures, and smart filing. Generate contracts in seconds, not hours."
      highlights={[
        {
          icon: Upload,
          title: "Smart Upload",
          description: "Drag and drop. AI categorizes and files automatically."
        },
        {
          icon: FileCheck,
          title: "E-Signatures Built-in",
          description: "Legally binding e-signatures. NZ law compliant."
        },
        {
          icon: Search,
          title: "Find Anything",
          description: "AI-powered search across all your documents."
        }
      ]}
      featureDetails={[
        {
          title: "AI document generation",
          description: "Generate employment contracts, policy documents, and letters using AI. Your templates, your brand, zero manual work.",
          benefits: [
            "Employment contracts in 30 seconds",
            "Policy documents with NZ law updates",
            "Personalised letters and notices",
            "Branded templates"
          ],
          color: "#eef2ff",
          image: "/screenshots/documents-generation.png"
        },
        {
          title: "Secure, compliant storage",
          description: "All documents stored securely in Auckland. Privacy Act 2020 compliant with full audit trails.",
          benefits: [
            "256-bit encryption at rest",
            "Version history for every file",
            "Access controls and permissions",
            "Expiry tracking and alerts"
          ],
          color: "#eef2ff",
          image: "/screenshots/documents-storage.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Upload", description: "Drag and drop or generate with AI" },
        { step: 2, title: "Organize", description: "AI categorizes and links to employees" },
        { step: 3, title: "Sign", description: "Send for e-signature with tracking" },
        { step: 4, title: "Store", description: "Secure storage with compliance monitoring" }
      ]}
      ctaTitle="Go paperless today"
      ctaDescription="Transform your document management with AI. Secure, compliant, incredibly fast."
    />
  )
}
