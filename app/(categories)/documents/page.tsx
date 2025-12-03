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
      description="Intuitive document generation, e-signatures and smart filing. Manage document acknowledgment, onboarding and ad hoc documentation at scale"
      highlights={[
        {
          icon: Upload,
          title: "Smart Upload",
          description: "Modern drag and drop, robust permission setting and multiple file formats allow for bespoke configuration cross all documents"
        },
        {
          icon: FileCheck,
          title: "Native E-signature and Document Acknowledgement",
          description: "Direct on-document e-signatures and document acknowledgements for compliance across the entire employee lifecycle"
        },
        {
          icon: Search,
          title: "One Stop Shop",
          description: "Personal and Company libraries provide employees the ability to autonomously locate and refer to any document relevant to them across both mobile and desktop devices."
        }
      ]}
      featureDetails={[
        {
          title: "Robust e-signature and acknowledgement functionality",
          description: "Generate employment contracts, policy documents, and letters using AI. Your templates, your brand, zero manual work.",
          benefits: [
            "On document e-signature and for any documents such as employment contracts.",
            "Require acknowledgement of documents like policies from any employees.",
            "Bulk action functionality allows for the acknowledgement of ad hoc documents en masse.",
            "Highly configurable security controls on EVERY document."
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
