import { Hero } from "@/app/components/sections/hero"
import { Demo } from "./components/sections/demo"
import { NotAllAI } from "./components/sections/not-all-ai"
import { ValueProps } from "./components/sections/value-props"
import { Features } from "./components/sections/features"
import { DashboardShowcase } from "./components/sections/dashboard-showcase"
import { UseCases } from "./components/sections/use-cases"
import { Pricing } from "./components/sections/pricing"
import { Waitlist } from "./components/sections/waitlist"
import { Footer } from "./components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Demo />
      <NotAllAI />
      <ValueProps />
      <Features />
      <DashboardShowcase />
      <UseCases />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  )
}
