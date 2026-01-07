"use client"

import { Newspaper, Bell, Share2, Eye } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function NewsPage() {
  return (
    <FeaturePageTemplate
      icon={Newspaper}
      accentColor="#F59E0B"
      badge="News"
      title="Company news that gets read"
      description="Share important updates, announcements, and stories. Keep everyone informed and engaged with your company news."
      highlights={[
        {
          icon: Bell,
          title: "Instant Notifications",
          description: "Reach every employee instantly with targeted news alerts and announcements."
        },
        {
          icon: Eye,
          title: "Read Tracking",
          description: "Know who's read your important updates with detailed engagement analytics."
        },
        {
          icon: Share2,
          title: "Easy Sharing",
          description: "Share news across channels - email, intranet, Slack, or mobile app."
        }
      ]}
      featureDetails={[
        {
          title: "Create compelling news stories",
          description: "Write and format beautiful news articles with rich media, images, and videos. Schedule publications for maximum impact.",
          benefits: [
            "Rich text editor with media support",
            "Schedule and automate publishing",
            "Target specific departments or roles",
            "Multi-language news support"
          ],
          color: "#fef3c7",
          image: "/screenshots/news-editor.png"
        },
        {
          title: "Engagement insights",
          description: "Track how your news is performing with detailed analytics. See read rates, engagement times, and employee feedback.",
          benefits: [
            "Read receipt tracking",
            "Engagement time analytics",
            "Comment and reaction tracking",
            "Performance by department"
          ],
          color: "#fef3c7",
          image: "/screenshots/news-analytics.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Write", description: "Create your news story with our rich editor" },
        { step: 2, title: "Target", description: "Choose who should see your announcement" },
        { step: 3, title: "Publish", description: "Send immediately or schedule for later" },
        { step: 4, title: "Track", description: "Monitor engagement and readership" }
      ]}
      ctaTitle="Keep your team connected"
      ctaDescription="Share news that matters and ensure everyone stays informed about what's happening in your organization."
    />
  )
}
