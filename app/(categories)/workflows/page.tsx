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
      description="Build any HR workflow without code. Lots of user provided templates ready to go. From onboarding to offboarding and everything in between, start atuomating every process within your business."
      highlights={[
        {
          icon: Zap,
          title: "No-Code Builder",
          description: "Drag, drop, done. Build workflows in minutes, or ask one of our support team to build it for you!"
        },
        {
          icon: GitBranch,
          title: "Smart Logic",
          description: "Conditions, branches, loops. Handle any scenario with ultimate configurablity to ensure your processes are mirrored flawlessly."
        },
        {
          icon: Play,
          title: "Existing Templates",
          description: "Pre-built workflows for common HR processes can be applied to your system in one click."
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
          description: "Start workflows from any event - new hire, leave request, document upload, date-based, or manual.",
          benefits: [
            "Event-based triggers",
            "Scheduled automation",
            "10 workflows scoped at implementation",
            "Ultimate flexibility"
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
