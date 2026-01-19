import { SupportHero } from "@/app/components/support/support-hero"
import { SupportCategories } from "@/app/components/support/support-categories"
import { PopularArticles } from "@/app/components/support/popular-articles"
import { SupportSearch } from "@/app/components/support/support-search"
import { ContactSupport } from "@/app/components/support/contact-support"
import { Footer } from "@/app/components/sections/footer"

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <SupportHero />
      <SupportSearch />
      <SupportCategories />
      <PopularArticles />
      <ContactSupport />
      <Footer />
    </main>
  )
}
