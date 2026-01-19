"use client"

import { Newspaper, Bell, Smartphone, Eye } from "lucide-react"
import { FeaturePageTemplate } from "@/app/components/sections/feature-page-template"

export default function NewsPage() {
  return (
    <FeaturePageTemplate
      icon={Newspaper}
      accentColor="#3B82F6"
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
          description: "Know what traction your important updates are getting with detailed engagement analytics."
        },
        {
          icon: Smartphone,
          title: "Mobile Friendly",
          description: "Your staff can view all news and announcements on the go via our mobile app"
        }
      ]}
      featureDetails={[
        {
          title: "Create compelling company stories",
          description: "Write and format beautiful articles with rich media, images, and videos.",
          benefits: [
            "Rich text editor with media support",
            "File uploads for newsletters and more",
            "Target specific departments or roles",
            "Social engagement on all posts"
          ],
          color: "#eff6ff",
          image: "/screenshots/news-editor.png"
        },
        {
          title: "Modernise your workforce comms",
          description: "Track how your news is performing with analytics. See read rates, employee feedback and share posts.",
          benefits: [
            "Realtime read tracking",
            "Email announcements for posts",
            "Pin & share the important ones"
          ],
          color: "#eff6ff",
          image: "/screenshots/news-analytics.png"
        }
      ]}
      howItWorks={[
        { step: 1, title: "Write", description: "Create your news story with our rich editor" },
        { step: 2, title: "Target", description: "Choose who should see your announcement" },
        { step: 3, title: "Publish", description: "Send immediately with email functionality" },
        { step: 4, title: "Track", description: "Monitor engagement and readership" }
      ]}
      ctaTitle="Keep your team connected"
      ctaDescription="Share news that matters and ensure everyone stays informed about what's happening in your organization."
    />
  )
}
