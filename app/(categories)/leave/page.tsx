import { Calendar, Clock, Users, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function LeavePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Leave Management</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Intelligent leave tracking with automated approvals, conflict detection, and seamless calendar integration. 
            Manage annual leave, sick leave, and special requests with AI-powered insights.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <Clock className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Automated Approvals</h3>
            <p className="text-slate-600">
              Smart approval workflows that route requests to the right managers based on team structure, leave policies, and availability.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <Users className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Team Coverage</h3>
            <p className="text-slate-600">
              Automatic conflict detection ensures adequate team coverage. AI suggests alternative dates when coverage is insufficient.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
            <p className="text-slate-600">
              Track leave patterns, identify burnout risks, and optimise team scheduling with predictive analytics and reporting.
            </p>
          </div>
        </div>

        {/* Leave Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Leave Types Supported</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Annual Leave / Holiday</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Sick Leave</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Maternity / Paternity Leave</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Compassionate Leave</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Study Leave</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Sabbatical Leave</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Time in Lieu (TOIL)</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Custom Leave Types</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Request Leave</h3>
              <p className="text-sm text-slate-600">Submit leave requests through chat, mobile app, or web interface</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Processing</h3>
              <p className="text-sm text-slate-600">AI checks policies, team coverage, and conflicts automatically</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Approval</h3>
              <p className="text-sm text-slate-600">Automatic approval or routing to appropriate manager</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Calendar Sync</h3>
              <p className="text-sm text-slate-600">Automatic calendar updates and team notifications</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Leave Management?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using PeopleCore to automate their leave processes and improve employee satisfaction.
          </p>
          <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
