import { Hero } from "@/app/components/sections/hero"
import { ValueProps } from "./components/sections/value-props"
import { Features } from "./components/sections/features"
import { MobileAppSection } from "./components/sections/mobile-app-section"
import { Waitlist } from "./components/sections/waitlist"
import { Footer } from "./components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProps />
      <Features />
      <MobileAppSection />
      <Waitlist />
      <Footer />
    </main>
  )
}
