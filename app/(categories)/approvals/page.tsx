import { CheckCircle, Clock, Users, Zap, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function ApprovalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Approval Workflows</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Smart approval workflows with escalation rules, delegation, and real-time notifications across all processes. 
            Eliminate bottlenecks and ensure nothing falls through the cracks.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <Zap className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Intelligent Routing</h3>
            <p className="text-slate-600">
              AI automatically routes approvals to the right people based on amount, type, department, and organisational hierarchy.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <Clock className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Escalation</h3>
            <p className="text-slate-600">
              Automatic escalation when approvals are delayed, with intelligent delegation to available approvers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <Users className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multi-Level Approvals</h3>
            <p className="text-slate-600">
              Complex approval chains with conditional logic, parallel approvals, and customisable business rules.
            </p>
          </div>
        </div>

        {/* Approval Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Can Be Approved</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Leave Requests</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Expense Claims</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Purchase Orders</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Budget Approvals</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Recruitment Decisions</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Policy Changes</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Training Requests</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Overtime Authorisation</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Equipment Requests</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Custom Workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Example: Expense Approval Workflow</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">1</span>
                </div>
                <p className="text-sm font-medium">Employee Submits</p>
                <p className="text-xs text-slate-600">£250 expense claim</p>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-400 hidden md:block" />
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">2</span>
                </div>
                <p className="text-sm font-medium">Line Manager</p>
                <p className="text-xs text-slate-600">Auto-approved (under £500)</p>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-400 hidden md:block" />
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Finance Notified</p>
                <p className="text-xs text-slate-600">Payment processed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Zero Bottlenecks</h3>
                  <p className="text-sm text-slate-600">Intelligent routing and escalation prevent approvals from getting stuck</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Faster Processing</h3>
                  <p className="text-sm text-slate-600">Reduce approval times from days to minutes with automation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Full Audit Trail</h3>
                  <p className="text-sm text-slate-600">Complete visibility into who approved what and when</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Smart Delegation</h3>
                  <p className="text-sm text-slate-600">Automatic delegation when approvers are unavailable</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Compliance Ready</h3>
                  <p className="text-sm text-slate-600">Built-in compliance checks and regulatory requirements</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mobile Approvals</h3>
                  <p className="text-sm text-slate-600">Approve requests on-the-go with mobile notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Eliminate Approval Bottlenecks Forever</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your approval processes with intelligent automation that ensures nothing gets delayed or forgotten.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
