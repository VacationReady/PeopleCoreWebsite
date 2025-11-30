import { Pricing } from "@/app/components/sections/pricing"
import { Footer } from "@/app/components/sections/footer"
import { SiteNav } from "@/app/components/navigation/site-nav"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Pricing />
      <Footer />
    </main>
  )
}
