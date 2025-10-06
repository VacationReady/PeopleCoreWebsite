import { Hero } from "@/app/components/sections/hero"
import { Demo } from "@/app/components/sections/demo"
import { ValueProps } from "@/app/components/sections/value-props"
import { Features } from "@/app/components/sections/features"
import { UseCases } from "@/app/components/sections/use-cases"
import { SocialProof } from "@/app/components/sections/social-proof"
import { Pricing } from "@/app/components/sections/pricing"
import { Waitlist } from "@/app/components/sections/waitlist"
import { Footer } from "@/app/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Demo />
      <ValueProps />
      <Features />
      <UseCases />
      <SocialProof />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  )
}
