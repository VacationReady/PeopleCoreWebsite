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
          description: "Comprehensive document management with e-signatures and acknowledgements.",
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
          title: "Enterprise-Grade Document Security",
          description: "Your sensitive employee documents deserve bank-level protection. Here's how we keep them safe:",
          benefits: [
            "Your documents are stored in secure, private cloud storage with zero public exposure. Every file requires authenticated access - no exceptions, no shortcuts.",
            "Your documents exist in their own secure silo - completely invisible and inaccessible to other organisations on the platform.",
            "Documents are protected by layered permissions based on role, department, and position - ensuring employees only access what's relevant to them.",
            "When someone downloads a document, they get a secure link that expires in minutes—not days, not forever. No more worrying about old links floating around in emails or chat histories.",
            "Track exactly who has viewed, acknowledged, and signed every document with tamper-proof timestamps. Perfect for compliance, onboarding verification, and policy rollouts."
          ],
          color: "#eef2ff",
          image: "/screenshots/documents-storage.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Upload", description: "Drag and drop or upload any file" },
        { step: 2, title: "Organise", description: "Categorise and filter who the documents are available to" },
        { step: 3, title: "Sign", description: "Send for e-signature or acknowledgement (or neither) with tracking and email workflow" },
        { step: 4, title: "Store", description: "Secure storage with compliance monitoring" }
      ]}
      ctaTitle="Go paperless today"
      ctaDescription="Transform your document management with PeopleCore. Secure, compliant, incredibly fast."
    />
  )
}
