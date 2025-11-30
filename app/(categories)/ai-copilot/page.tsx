"use client"

import { Bot, Sparkles, MessageSquare, Brain, Zap, Shield } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

const highlights = [
  {
    icon: MessageSquare,
    title: "Natural Conversation",
    description: "Talk to PeopleCore like you'd talk to a colleague. Ask questions, give instructions, get things done."
  },
  {
    icon: Brain,
    title: "Context Aware",
    description: "AI that understands your company, your policies, and your people. Personalized responses every time."
  },
  {
    icon: Sparkles,
    title: "Proactive Insights",
    description: "Get suggestions before you ask. AI spots trends, risks, and opportunities automatically."
  },
  {
    icon: Zap,
    title: "Instant Actions",
    description: "Don't just get answers—take action. AI can execute tasks, generate documents, and update records."
  },
  {
    icon: Shield,
    title: "NZ Law Trained",
    description: "Trained on NZ employment law including Holidays Act, Fair Pay Agreements, and KiwiSaver."
  },
  {
    icon: Bot,
    title: "24/7 Available",
    description: "Always on, always ready. Get HR support anytime, anywhere."
  }
]

const featureDetails = [
  {
    title: "Your Personal HR Assistant",
    description: "PeopleCore AI learns your preferences, understands your context, and proactively helps you work smarter. It's like having an expert HR consultant available 24/7.",
    benefits: [
      "Personalized to your company",
      "Learns from your interactions",
      "Proactive suggestions",
      "Multi-language support",
      "Te reo Māori enabled"
    ],
    placeholderId: "ai-copilot-assistant"
  },
  {
    title: "NZ Employment Law Expert",
    description: "Get instant, accurate answers about NZ employment law. From Holidays Act calculations to Fair Pay Agreement compliance—AI that knows Kiwi HR.",
    benefits: [
      "Holidays Act expertise",
      "KiwiSaver calculations",
      "Fair Pay Agreement guidance",
      "Employment relations advice",
      "Privacy Act compliance"
    ],
    placeholderId: "ai-copilot-law",
    imagePosition: "left" as const
  },
  {
    title: "Action-Oriented AI",
    description: "Go beyond Q&A. PeopleCore AI can execute tasks, generate documents, schedule meetings, and update records—all from a simple conversation.",
    benefits: [
      "Document generation",
      "Leave request processing",
      "Report creation",
      "Data entry & updates",
      "Meeting scheduling"
    ],
    placeholderId: "ai-copilot-actions"
  }
]

const howItWorks = [
  {
    step: 1,
    title: "Ask Anything",
    description: "Type or speak your question in plain English"
  },
  {
    step: 2,
    title: "AI Understands",
    description: "Context-aware AI interprets your intent"
  },
  {
    step: 3,
    title: "Get Answers",
    description: "Receive accurate, personalized responses"
  },
  {
    step: 4,
    title: "Take Action",
    description: "Execute tasks directly from the conversation"
  }
]

export default function AICopilotPage() {
  return (
    <FeaturePageTemplate
      icon={Bot}
      iconGradient="from-pink-400/30 to-rose-400/20"
      headerGradient="from-pink-600 to-rose-600"
      badge="AI Copilot"
      title="Your HR AI Copilot"
      description="A personal HR assistant that learns your preferences and proactively suggests optimizations. Trained on NZ employment law. Available 24/7."
      highlights={highlights}
      featureDetails={featureDetails}
      howItWorks={howItWorks}
      ctaTitle="Meet Your New HR Assistant"
      ctaDescription="Experience the future of HR management with AI that actually understands New Zealand employment law."
      accentColor="from-pink-500 to-rose-600"
    />
  )
}
