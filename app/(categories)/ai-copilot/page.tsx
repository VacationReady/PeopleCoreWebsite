"use client"

import { Bot, MessageSquare, Shield, Zap } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function AICopilotPage() {
  return (
    <FeaturePageTemplate
      icon={Bot}
      accentColor="#6366F1"
      badge="AI Copilot"
      title="Your AI HR assistant"
      description="Trained on NZ employment law. Available 24/7. Ask anything, get instant answers."
      highlights={[
        {
          icon: MessageSquare,
          title: "Natural Conversation",
          description: "Chat like you would with a colleague. Plain English in, expert answers out."
        },
        {
          icon: Shield,
          title: "NZ Law Expert",
          description: "Trained on Holidays Act, Fair Pay, Privacy Act — the lot."
        },
        {
          icon: Zap,
          title: "Takes Action",
          description: "Not just answers. It can draft documents, update records, create tasks."
        }
      ]}
      featureDetails={[
        {
          title: "Instant HR expertise",
          description: "Get accurate answers to complex HR questions in seconds. From leave calculations to disciplinary process guidance.",
          benefits: [
            "Holidays Act calculations explained",
            "Policy interpretation help",
            "Disciplinary process guidance",
            "Employment law references"
          ],
          color: "#eef2ff",
          image: "/screenshots/ai-copilot-chat.png"
        },
        {
          title: "Action, not just answers",
          description: "The AI doesn't just tell you what to do — it does it. Draft documents, update records, schedule meetings.",
          benefits: [
            "Generate documents on demand",
            "Update employee records",
            "Create and assign tasks",
            "Send notifications"
          ],
          color: "#eef2ff",
          image: "/screenshots/ai-copilot-actions.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Ask", description: "Type your question in plain English" },
        { step: 2, title: "Understand", description: "AI interprets context and intent" },
        { step: 3, title: "Answer", description: "Get accurate, sourced response" },
        { step: 4, title: "Act", description: "Optionally, AI takes the action for you" }
      ]}
      ctaTitle="Meet your new colleague"
      ctaDescription="An HR expert available 24/7. No waiting, no meetings, just answers."
    />
  )
}
