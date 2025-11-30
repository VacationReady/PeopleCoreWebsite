"use client"

import { Workflow, Zap, GitBranch, Clock, Settings, Layers } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: GitBranch,
    title: "Visual Workflow Builder",
    description: "Design complex workflows with our drag-and-drop canvas. No coding required—build anything you can imagine."
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Automate repetitive HR tasks instantly. From onboarding sequences to performance review cycles."
  },
  {
    icon: Clock,
    title: "Scheduled Triggers",
    description: "Time-based automation for recurring tasks. Set it and forget it."
  },
  {
    icon: Settings,
    title: "Custom Logic",
    description: "If-then conditions, parallel paths, and decision trees. Build workflows as complex as you need."
  },
  {
    icon: Layers,
    title: "Template Library",
    description: "78+ pre-built workflow templates. Install in one click or customize to fit your needs."
  },
  {
    icon: Workflow,
    title: "Integration Ready",
    description: "Connect to your existing tools. Slack, Teams, Google Workspace, and 200+ more."
  }
]

const featureDetails = [
  {
    title: "No-Code Workflow Canvas",
    description: "Build sophisticated HR automations without writing a single line of code. Our visual builder makes complex workflows simple.",
    benefits: [
      "Drag-and-drop interface",
      "Real-time workflow preview",
      "Version control & rollback",
      "Test mode for validation",
      "Team collaboration"
    ],
    placeholderId: "workflows-canvas"
  },
  {
    title: "Workflow Templates",
    description: "Start fast with 78+ pre-built templates for common HR processes. Customize to match your exact requirements.",
    benefits: [
      "Employee onboarding flows",
      "Performance review cycles",
      "Offboarding checklists",
      "Benefits enrollment",
      "Training assignments"
    ],
    placeholderId: "workflows-templates",
    imagePosition: "left" as const
  },
  {
    title: "Automation Analytics",
    description: "Track the performance of your workflows. See time saved, completion rates, and identify bottlenecks.",
    benefits: [
      "Time savings dashboard",
      "Completion rate tracking",
      "Bottleneck identification",
      "Error monitoring",
      "ROI calculations"
    ],
    placeholderId: "workflows-analytics"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Choose Template",
    description: "Select from 78+ pre-built workflow templates"
  },
  {
    step: 2,
    title: "Customize",
    description: "Modify steps, conditions, and actions to fit"
  },
  {
    step: 3,
    title: "Test",
    description: "Run in test mode to validate the flow"
  },
  {
    step: 4,
    title: "Deploy",
    description: "Activate and watch the automation work"
  }
]

export default function WorkflowsPage() {
  return (
    <FeaturePageTemplate
      icon={Workflow}
      iconGradient="from-indigo-400/30 to-purple-400/20"
      headerGradient="from-indigo-600 to-purple-600"
      badge="Workflow Automation"
      title="Visual Workflow Builder"
      description="Build unlimited HR automations with our no-code workflow builder. Natural language programming and 78+ ready-to-use templates."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Automate Everything"
      ctaDescription="Save hours every week with intelligent HR automation. Build once, run forever."
      accentColor="from-indigo-500 to-purple-600"
    />
  )
}
