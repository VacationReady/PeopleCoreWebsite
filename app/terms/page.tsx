import { PageHeader } from "@/app/components/layout/page-header"
import { SectionContainer } from "@/app/components/layout/section-container"
import { SiteNav } from "@/app/components/navigation/site-nav"
import { Footer } from "@/app/components/sections/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNav />
      <PageHeader 
        title="Terms of Service"
        description="Legal terms governing your use of PeopleCore's services"
      />
      
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  PeopleCore – Terms of Service
                </h1>
                <p className="text-gray-600">
                  Last updated: 17 January 2026
                </p>
              </div>

              <div className="space-y-8 text-gray-700">
                <p className="text-lg leading-relaxed">
                  These Terms of Service ("Terms") govern access to and use of PeopleCore, a cloud-based human resources information system ("Service"), operated by PeopleCore ("we", "us", "our").
                </p>
                
                <p className="text-lg leading-relaxed">
                  By accessing or using the Service, you agree to be bound by these Terms.
                </p>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility and Authority</h2>
                    <p className="mb-4">You confirm that:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You are at least 18 years old</li>
                      <li>You are authorised to enter into these Terms on behalf of the organisation you represent</li>
                      <li>All users accessing the Service under your account are authorised by you and will comply with these Terms</li>
                      <li>The Service is intended for New Zealand-based organisations only.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Nature and Scope of the Service</h2>
                    <p className="mb-4">PeopleCore provides a digital platform to store, manage, and analyse HR-related information.</p>
                    <p className="mb-4">The Service:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Is provided for administrative and informational purposes only</li>
                      <li>Does not provide legal, payroll, tax, or employment advice</li>
                      <li>Does not guarantee compliance with employment or privacy laws</li>
                    </ul>
                    <p className="mt-4">You acknowledge that:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You are solely responsible for how the Service is used</li>
                      <li>All employment-related decisions remain your responsibility</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accounts, Roles, and Security</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to the Service is role-based (e.g. Super Admin, Admin, Employee)</li>
                      <li>You are responsible for maintaining the confidentiality of login credentials</li>
                      <li>You are responsible for all activity occurring under your accounts</li>
                      <li>You must notify us promptly of any unauthorised access or security breach</li>
                      <li>We reserve the right to suspend or restrict access where reasonably necessary to protect the Service or data.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Customer Data and Responsibilities</h2>
                    <p className="mb-4">You retain ownership of all data submitted to the Service ("Customer Data").</p>
                    <p className="mb-4">You confirm that:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You have lawful authority to collect, use, and store all Customer Data</li>
                      <li>Any required employee notices or consents have been provided</li>
                      <li>Customer Data entered into the Service is accurate, lawful, and up to date</li>
                    </ul>
                    <p className="mt-4">
                      For the purposes of the Privacy Act 2020, you are the data controller, and PeopleCore acts as a data processor.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Hosting and Subprocessors</h2>
                    <p className="mb-4">PeopleCore uses third-party infrastructure providers to operate the Service, including but not limited to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Supabase (document storage)</li>
                      <li>Railway (PostgreSQL database hosting)</li>
                      <li>Vercel (application hosting)</li>
                      <li>Resend (email communications)</li>
                    </ul>
                    <p className="mt-4">
                      Customer Data may be processed or stored outside New Zealand.
                      We take reasonable steps to ensure appropriate contractual and technical safeguards are in place.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Availability, Changes, and Pilot Use</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The Service is provided on a commercially reasonable efforts basis</li>
                      <li>We do not guarantee uninterrupted, error-free, or continuous availability</li>
                      <li>During pilot or early access phases, features may change, be limited, or be withdrawn</li>
                      <li>You acknowledge that pilot versions may contain incomplete or experimental functionality.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                    <p className="mb-4">All intellectual property rights in the Service remain the exclusive property of PeopleCore or its licensors.</p>
                    <p className="mb-4">
                      You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for internal business purposes only.
                    </p>
                    <p>
                      No rights are granted except as expressly stated in these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Acceptable Use</h2>
                    <p className="mb-4">You must not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use the Service for unlawful purposes</li>
                      <li>Upload malicious code or attempt to compromise system security</li>
                      <li>Reverse engineer or copy the Service</li>
                      <li>Use the Service in a way that infringes third-party rights</li>
                    </ul>
                    <p className="mt-4">
                      We may suspend or terminate access for breach of this clause.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Fees and Payment (if applicable)</h2>
                    <p className="mb-4">Where fees apply:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fees are exclusive of GST unless stated otherwise</li>
                      <li>Non-payment may result in suspension or termination of access</li>
                      <li>Pilot access may be provided free of charge at our discretion</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
                    <p className="mb-4">To the maximum extent permitted by New Zealand law:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>PeopleCore is not liable for indirect, incidental, special, or consequential loss</li>
                      <li>We are not liable for loss arising from employment decisions, payroll processing, statutory compliance, or reliance on reports or analytics generated by the Service</li>
                    </ul>
                    <p className="mb-4">Our total aggregate liability under or in connection with these Terms is limited to the lesser of:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The fees paid by you in the preceding 12 months; or</li>
                      <li>NZD $1,000</li>
                    </ul>
                    <p className="mt-4">
                      Nothing in these Terms limits liability that cannot be excluded under New Zealand law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
                    <p className="mb-4">We may suspend or terminate access to the Service:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>For breach of these Terms</li>
                      <li>For security or legal reasons</li>
                      <li>At the conclusion of a pilot period</li>
                    </ul>
                    <p className="mt-4">
                      Upon termination, you may request export or deletion of Customer Data, subject to legal obligations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                    <p>
                      These Terms are governed by the laws of New Zealand, and the courts of New Zealand have exclusive jurisdiction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact</h2>
                    <p className="mb-4">For enquiries regarding these Terms:</p>
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
