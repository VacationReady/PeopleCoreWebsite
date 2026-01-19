import { Clock, User, ThumbsUp, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
  return (
    <div className="container-tight py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <BookOpen className="w-4 h-4" />
          <a href="/support" className="hover:text-primary">Support</a>
          <span>/</span>
          <span>Getting Started</span>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Getting Started
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Updated 2 days ago
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Getting Started with PeopleCore
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Complete guide to setting up your PeopleCore account, configuring basic settings, and getting your team onboarded quickly and efficiently.
          </p>
          
          <div className="flex items-center gap-4">
            <Button className="gap-2">
              <ThumbsUp className="w-4 h-4" />
              Helpful
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#account-setup" className="block text-gray-600 hover:text-primary transition-colors py-1">
              1. Account Setup
            </a>
            <a href="#company-configuration" className="block text-gray-600 hover:text-primary transition-colors py-1">
              2. Company Configuration
            </a>
            <a href="#user-management" className="block text-gray-600 hover:text-primary transition-colors py-1">
              3. User Management
            </a>
            <a href="#basic-settings" className="block text-gray-600 hover:text-primary transition-colors py-1">
              4. Basic Settings
            </a>
            <a href="#next-steps" className="block text-gray-600 hover:text-primary transition-colors py-1">
              5. Next Steps
            </a>
          </nav>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
          <section id="account-setup" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">1. Account Setup</h2>
            <p className="text-gray-600 mb-4">
              Setting up your PeopleCore account is the first step to streamlining your HR processes. Follow these steps to get started:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-4">Step 1: Verify Your Email</h3>
              <p className="text-gray-600 mb-4">
                After signing up, check your email for a verification link. Click the link to verify your account and set up your password.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Check your inbox (and spam folder)</li>
                <li>Click the verification link</li>
                <li>Set a strong password</li>
                <li>Enable two-factor authentication (recommended)</li>
              </ul>
            </div>
          </section>

          <section id="company-configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">2. Company Configuration</h2>
            <p className="text-gray-600 mb-4">
              Configure your company details to ensure compliance with New Zealand employment laws and set up your organization structure.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">🇳🇿 New Zealand Specific</h4>
              <p className="text-blue-800">
                PeopleCore is specifically designed for New Zealand businesses. Make sure to configure your IRD number, 
                KiwiSaver details, and Holidays Act settings during setup.
              </p>
            </div>
          </section>

          <section id="user-management" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">3. User Management</h2>
            <p className="text-gray-600 mb-4">
              Add your team members and set appropriate permissions to ensure secure access to your HR data.
            </p>
          </section>

          <section id="basic-settings" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">4. Basic Settings</h2>
            <p className="text-gray-600 mb-4">
              Configure essential settings for leave management, payroll integration, and reporting preferences.
            </p>
          </section>

          <section id="next-steps" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">5. Next Steps</h2>
            <p className="text-gray-600 mb-4">
              Once you've completed the initial setup, explore these advanced features to get the most out of PeopleCore:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">📊 Advanced Reporting</h4>
                <p className="text-gray-600 text-sm">Create custom reports and dashboards</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🤖 AI Copilot</h4>
                <p className="text-gray-600 text-sm">Use AI to automate HR tasks</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">📱 Mobile App</h4>
                <p className="text-gray-600 text-sm">Enable mobile access for your team</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🔗 Integrations</h4>
                <p className="text-gray-600 text-sm">Connect with your existing tools</p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-foreground mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/support/compliance/kiwisaver" className="block p-4 border border-gray-200 rounded-lg hover:border-primary/20 transition-colors">
              <h3 className="font-medium text-foreground mb-2">Setting Up KiwiSaver Contributions</h3>
              <p className="text-sm text-gray-600">Configure KiwiSaver for your employees</p>
            </a>
            <a href="/support/leave-management/holidays-act" className="block p-4 border border-gray-200 rounded-lg hover:border-primary/20 transition-colors">
              <h3 className="font-medium text-foreground mb-2">Holidays Act Compliance</h3>
              <p className="text-sm text-gray-600">Ensure 100% compliance with NZ laws</p>
            </a>
            <a href="/support/employee-management/permissions" className="block p-4 border border-gray-200 rounded-lg hover:border-primary/20 transition-colors">
              <h3 className="font-medium text-foreground mb-2">User Roles and Permissions</h3>
              <p className="text-sm text-gray-600">Configure access levels and security</p>
            </a>
            <a href="/support/reporting/custom-reports" className="block p-4 border border-gray-200 rounded-lg hover:border-primary/20 transition-colors">
              <h3 className="font-medium text-foreground mb-2">Creating Custom Reports</h3>
              <p className="text-sm text-gray-600">Build powerful reports and insights</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
