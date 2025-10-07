import { Workflow, Zap, Puzzle, Code, ArrowRight, Settings } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Workflow className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Custom Workflows</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Visual workflow builder with natural language programming and unlimited automation possibilities. 
            Create sophisticated HR processes without any coding knowledge.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
            <Puzzle className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Visual Builder</h3>
            <p className="text-slate-600">
              Drag-and-drop interface to create complex workflows visually. No coding required - just connect the pieces.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
            <Code className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Natural Language</h3>
            <p className="text-slate-600">
              Describe your workflow in plain English and watch AI translate it into automated processes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
            <Zap className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Infinite Flexibility</h3>
            <p className="text-slate-600">
              Create any workflow you can imagine with conditional logic, loops, integrations, and custom actions.
            </p>
          </div>
        </div>

        {/* Workflow Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Popular Workflow Templates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">New Starter Onboarding</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                  <span>Send welcome email with first day details</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
                  <span>Create IT accounts and order equipment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
                  <span>Schedule induction meetings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
                  <span>Assign buddy and send introduction</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Use This Template</Button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Performance Review Cycle</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                  <span>Send self-assessment forms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
                  <span>Collect 360-degree feedback</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
                  <span>Schedule manager meetings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
                  <span>Generate development plans</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Use This Template</Button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Employee Exit Process</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                  <span>Schedule exit interview</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
                  <span>Revoke system access</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
                  <span>Arrange equipment return</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
                  <span>Process final payroll</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Use This Template</Button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Training Request Process</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                  <span>Evaluate training need</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
                  <span>Get budget approval</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
                  <span>Book training provider</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
                  <span>Track completion and feedback</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Use This Template</Button>
            </div>
          </div>
        </div>

        {/* Workflow Builder Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Visual Workflow Builder</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Building: Leave Request Workflow</h3>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Save Workflow</Button>
            </div>
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] text-center backdrop-blur-sm">
                <Settings className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Start</div>
                <div className="text-xs text-slate-300">Leave request submitted</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] text-center backdrop-blur-sm">
                <Zap className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Check Policy</div>
                <div className="text-xs text-slate-300">Validate against rules</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] text-center backdrop-blur-sm">
                <Code className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Route Approval</div>
                <div className="text-xs text-slate-300">Send to manager</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] text-center backdrop-blur-sm">
                <Puzzle className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Update Calendar</div>
                <div className="text-xs text-slate-300">Sync with systems</div>
              </div>
            </div>
            <p className="text-slate-300 text-center mt-4">
              Drag and drop components to build your perfect workflow
            </p>
          </div>
        </div>

        {/* Integration Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Integration Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">API Integrations</h3>
              <p className="text-sm text-slate-600">Connect with any system via REST APIs, webhooks, and custom connectors</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Email & Notifications</h3>
              <p className="text-sm text-slate-600">Send emails, SMS, Slack messages, and push notifications automatically</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Third-Party Tools</h3>
              <p className="text-sm text-slate-600">Integrate with Salesforce, Microsoft 365, Google Workspace, and more</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Build Your Perfect HR Workflow</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Create unlimited custom workflows with our visual builder. No coding required - just drag, drop, and automate.
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-semibold">
            Start Building Workflows
          </Button>
        </div>
      </div>
    </div>
  )
}
