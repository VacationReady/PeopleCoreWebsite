"use client"

import { Workflow, Zap, GitBranch, Play } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function WorkflowsPage() {
  return (
    <FeaturePageTemplate
      icon={Workflow}
      accentColor="#6366F1"
      badge="Workflow Automation"
      title="Automate everything"
      description="Build any HR workflow without code. 78+ templates ready to go. From onboarding to offboarding."
      highlights={[
        {
          icon: Zap,
          title: "No-Code Builder",
          description: "Drag, drop, done. Build workflows in minutes."
        },
        {
          icon: GitBranch,
          title: "Smart Logic",
          description: "Conditions, branches, loops. Handle any scenario."
        },
        {
          icon: Play,
          title: "78+ Templates",
          description: "Pre-built workflows for common HR processes."
        }
      ]}
      featureDetails={[
        {
          title: "Visual workflow builder",
          description: "Create complex workflows with a simple drag-and-drop interface. No coding required.",
          benefits: [
            "Intuitive visual editor",
            "Pre-built action blocks",
            "Test before deploying",
            "Version control included"
          ],
          color: "#eef2ff",
          image: "/screenshots/workflows-builder.png"
        },
        {
          title: "Trigger on anything",
          description: "Start workflows from any event — new hire, leave request, document upload, date-based, or manual.",
          benefits: [
            "Event-based triggers",
            "Scheduled automation",
            "Webhook integrations",
            "Manual start option"
          ],
          color: "#eef2ff",
          image: "/screenshots/workflows-triggers.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Choose", description: "Pick a template or start fresh" },
        { step: 2, title: "Build", description: "Drag and drop to create your flow" },
        { step: 3, title: "Test", description: "Run a test before going live" },
        { step: 4, title: "Deploy", description: "Activate and monitor in real-time" }
      ]}
      ctaTitle="Automate the routine"
      ctaDescription="Free your HR team to focus on people, not processes. Build workflows that run themselves."
    />
  )
}
