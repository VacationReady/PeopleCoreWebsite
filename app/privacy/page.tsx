import { PageHeader } from "@/app/components/layout/page-header"
import { SectionContainer } from "@/app/components/layout/section-container"
import { SiteNav } from "@/app/components/navigation/site-nav"
import { Footer } from "@/app/components/sections/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNav />
      <PageHeader 
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information"
      />
      
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  PeopleCore – Privacy Policy (NZ Privacy Act 2020)
                </h1>
                <p className="text-gray-600">
                  Last updated: 17 January 2026
                </p>
              </div>

              <div className="space-y-8 text-gray-700">
                <p className="text-lg leading-relaxed">
                  This Privacy Policy explains how PeopleCore collects, uses, and protects personal information.
                </p>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                    <p className="mb-4">We may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Employee names, contact details, job details</li>
                      <li>Leave, documents, and HR records</li>
                      <li>Login and audit data</li>
                      <li>Usage analytics</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Information</h2>
                    <p className="mb-4">We use personal information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and operate the Service</li>
                      <li>Secure and maintain accounts</li>
                      <li>Communicate system notifications</li>
                      <li>Improve product functionality</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage & Security</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Documents are stored via Supabase</li>
                      <li>HR data is stored in PostgreSQL on Railway</li>
                      <li>The application is hosted on Vercel</li>
                      <li>Emails are sent via Resend</li>
                    </ul>
                    <p className="mt-4">
                      We apply reasonable technical and organisational safeguards.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclosure</h2>
                    <p className="mb-4">We do not sell personal information.</p>
                    <p className="mb-4">Information is disclosed only:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To infrastructure providers necessary to operate the Service</li>
                      <li>Where required by law</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Overseas Storage</h2>
                    <p className="mb-4">
                      Some data may be stored outside New Zealand.
                    </p>
                    <p>
                      Safeguards are used to comply with the Privacy Act 2020.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Access & Correction</h2>
                    <p>
                      Individuals may request access or correction of their personal information via their employer or by contacting us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                    <p>
                      Data is retained only as long as required for service delivery or legal obligations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
                    <p className="mb-4">Privacy enquiries:</p>
                    <p className="font-medium">
                      hi@peoplecore.co.nz
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </main>
  )
}
