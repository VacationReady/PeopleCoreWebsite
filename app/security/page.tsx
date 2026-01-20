import { PageHeader } from "@/app/components/layout/page-header"
import { SectionContainer } from "@/app/components/layout/section-container"
import { SiteNav } from "@/app/components/navigation/site-nav"
import { Footer } from "@/app/components/sections/footer"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNav />
      <PageHeader 
        title="Security"
        description="How we protect your data and maintain platform security"
      />
      
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  PeopleCore – Security
                </h1>
                <p className="text-gray-600">
                  Last updated: 21 January 2026
                </p>
              </div>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
                  <p className="mb-4">
                    At PeopleCore, we take security seriously. Our platform is designed with a defence-in-depth approach, protecting every layer of the system, including authentication, authorisation, data storage, APIs, and infrastructure.
                  </p>
                  <p className="mb-4">
                    As a multi-tenant HR management system, PeopleCore ensures robust tenant isolation, role-based access control, and comprehensive audit logging. Our security measures are built to keep your data private, compliant, and secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Authentication & Session Management</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Secure Authentication:</strong> We use industry-standard frameworks to verify user identity.</li>
                    <li><strong>Password Protection:</strong> All passwords are hashed using bcrypt with automatic salting.</li>
                    <li><strong>Session Security:</strong> Cookies are HttpOnly, Secure, and set with appropriate SameSite policies to prevent XSS attacks.</li>
                    <li><strong>Enterprise Single Sign-On:</strong> Integration with Google and Microsoft Entra ID (Azure AD) allows seamless SSO for businesses.</li>
                    <li><strong>Immediate Access Revocation:</strong> User sessions can be invalidated instantly during offboarding or credential changes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Authorisation & Access Control</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Role-Based Access Control (RBAC)</strong> ensures that users only see and act on data relevant to their role.</li>
                    <li><strong>Four-tier role hierarchy:</strong> SUPER_ADMIN, ADMIN, MANAGER, EMPLOYEE.</li>
                    <li><strong>Granular permissions:</strong> Screens and actions can be restricted at a fine-grained level for extra security.</li>
                    <li><strong>Tenant Isolation:</strong> Users can never access data belonging to other companies. All operations are scoped to the user's organisation.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Security</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rate Limiting:</strong> All API endpoints are protected to prevent abuse or brute-force attacks.</li>
                    <li><strong>Input Validation:</strong> Strict validation ensures only properly formatted and safe data enters the system.</li>
                    <li><strong>SQL Injection Prevention:</strong> All database queries are parameterised to avoid injection attacks.</li>
                    <li><strong>Authentication Enforcement:</strong> Protected routes require valid sessions, preventing unauthorised access.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Encryption</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Passwords are one-way hashed.</li>
                        <li>Sensitive fields are encrypted with industry-standard AES-256-GCM encryption.</li>
                        <li>All data in transit is encrypted using TLS 1.3.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Audit Logging</h3>
                      <p>Every action within the platform is recorded with full attribution, creating an immutable trail for accountability.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Sensitive Data Handling</h3>
                      <p>Partial masking of private data, such as bank accounts, and secure transmission prevent accidental exposure.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frontend Security</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cross-Site Scripting (XSS) Prevention:</strong> All user inputs are validated and sanitised to prevent malicious scripts.</li>
                    <li><strong>Cross-Site Request Forgery (CSRF) Protection:</strong> Mutating requests require secure tokens to ensure authenticity.</li>
                    <li><strong>Input Validation:</strong> Both client and server-side checks prevent invalid or dangerous data.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Security</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Content Security Policy (CSP)</strong> and strict HTTP headers protect the platform against web-based attacks.</li>
                    <li><strong>Environment Variable Security:</strong> Sensitive configuration is never exposed to the client.</li>
                    <li><strong>Serverless and CDN Protection:</strong> Hosted on Vercel with automatic HTTPS, global CDN, and DDoS protection.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">File Storage and Deployment</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure File Uploads</h3>
                      <p>Files are stored with signed URLs and tenant-scoped paths, with validation to prevent malicious content.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Database Security</h3>
                      <p>Hosted on Railway PostgreSQL, encrypted in transit, patched automatically, with automated backups and private networking.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Deployment Isolation</h3>
                      <p>Preview and production environments are separated to protect against accidental leaks or misconfigurations.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Considerations</h2>
                  <p className="mb-4">PeopleCore's security practices align with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Privacy Act 2020 (NZ):</strong> Controlled access and audit logging.</li>
                    <li><strong>Holidays Act 2003 (NZ):</strong> Accurate leave tracking.</li>
                    <li><strong>GDPR Principles:</strong> Data minimisation, purpose limitation, and access controls.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
                  <p className="mb-4">Security is an ongoing commitment. Our current initiatives include:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">High Priority</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Enforcing server-side CSRF validation</li>
                        <li>Monitoring authentication failures</li>
                        <li>Implementing Subresource Integrity (SRI) for third-party scripts</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Medium Priority</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Strengthening password policies</li>
                        <li>Session timeouts</li>
                        <li>API versioning</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Low Priority</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Reviewing additional security headers</li>
                        <li>Automating vulnerability scans in our CI/CD pipeline</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
                  <p className="mb-4">
                    For security concerns or vulnerability reports, please contact our dedicated security team through the official channels.
                  </p>
                  <p className="font-medium">
                    hi@peoplecore.co.nz
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </main>
  )
}
