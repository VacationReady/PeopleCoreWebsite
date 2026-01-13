"use client"

import { UserPlus, ClipboardCheck, Shield, Clock } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function OnboardingPage() {
  return (
    <FeaturePageTemplate
      icon={UserPlus}
      accentColor="#6366F1"
      badge="Employee Onboarding"
      title="Seamless onboarding experience"
      description="Streamline your employee onboarding process with automated workflows, document management, and compliance tracking. Get new hires productive from day one."
      highlights={[
        {
          icon: ClipboardCheck,
          title: "Automated Workflows",
          description: "Customizable onboarding workflows that guide new hires through every step of their journey, from offer acceptance to first day readiness."
        },
        {
          icon: Shield,
          title: "Compliance Management",
          description: "Ensure all legal requirements are met with automated compliance checks, document collection, and policy acknowledgments."
        },
        {
          icon: Clock,
          title: "Time-Saving Automation",
          description: "Reduce administrative overhead by 80% with automated task assignments, reminders, and progress tracking for all stakeholders."
        }
      ]}
      featureDetails={[
        {
          title: "Comprehensive Onboarding Workflows",
          description: "Design and implement customized onboarding journeys that adapt to different roles, departments, and employment types.",
          benefits: [
            "Role-specific onboarding templates for different positions and seniority levels.",
            "Departmental customization to meet team-specific requirements and introductions.",
            "Automated task assignments to HR, managers, IT, and other stakeholders.",
            "Real-time progress tracking for new hires and administrators.",
            "Integration with existing HR systems for seamless data flow."
          ],
          color: "#eef2ff",
          image: "/screenshots/onboarding-workflows.png"
        },
        {
          title: "Digital Document Management",
          description: "Handle all onboarding documentation digitally with e-signatures, automated reminders, and secure storage.",
          benefits: [
            "Digital offer letters and employment contracts with e-signature capabilities.",
            "Automated document collection based on role and regulatory requirements.",
            "Secure cloud storage with role-based access permissions.",
            "Expiration tracking for certifications and compliance documents.",
            "Bulk document operations for efficient mass onboarding."
          ],
          color: "#eef2ff",
          image: "/screenshots/onboarding-documents.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Configure", description: "Set up onboarding workflows and templates" },
        { step: 2, title: "Initiate", description: "Trigger onboarding when offer is accepted" },
        { step: 3, title: "Execute", description: "Automated tasks and reminders are sent" },
        { step: 4, title: "Track", description: "Monitor progress and completion status" }
      ]}
      ctaTitle="Transform your onboarding"
      ctaDescription="Create exceptional first-day experiences while ensuring compliance and efficiency."
    />
  )
}
