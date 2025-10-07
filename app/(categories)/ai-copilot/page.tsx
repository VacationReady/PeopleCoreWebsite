import { Bot, MessageCircle, Brain, Lightbulb, Clock, Shield } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function AICopilotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Bot className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">AI Copilot</h1>
          </div>
          <p className="text-xl text-pink-100 max-w-3xl">
            Your personal HR assistant that learns your preferences and proactively suggests optimisations. 
            Available 24/7 to help with any HR question or task through natural conversation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
            <MessageCircle className="w-8 h-8 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Natural Conversation</h3>
            <p className="text-slate-600">
              Chat with your AI assistant in plain English. Ask questions, request reports, or get help with any HR task.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
            <Brain className="w-8 h-8 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Learns Your Preferences</h3>
            <p className="text-slate-600">
              AI adapts to your working style, remembers your preferences, and gets smarter with every interaction.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
            <Lightbulb className="w-8 h-8 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Proactive Suggestions</h3>
            <p className="text-slate-600">
              Receive intelligent recommendations for process improvements, policy updates, and strategic decisions.
            </p>
          </div>
        </div>

        {/* Chat Interface Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Chat with Your AI Assistant</h2>
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600 mb-1">PeopleCore AI</p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-800">Good morning! I noticed you have 5 pending leave requests. Would you like me to review them for policy compliance?</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-600 text-xs">You</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600 mb-1">You</p>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                    <p className="text-slate-800">Yes please, and show me the team coverage for next week</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600 mb-1">PeopleCore AI</p>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                    <p className="text-slate-800 font-medium mb-2">✅ All requests approved!</p>
                    <p className="text-slate-700 text-sm">All 5 requests comply with policy. Team coverage looks good except Tuesday - Engineering will be at 60%. I've suggested Sarah reschedule her leave to Wednesday.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What AI Can Help With */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Your AI Assistant Can Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <MessageCircle className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Answer HR Questions</h4>
                  <p className="text-sm text-slate-600">Get instant answers about policies, procedures, and employee data</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Brain className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Generate Reports</h4>
                  <p className="text-sm text-slate-600">Create custom reports and analytics with simple requests</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Lightbulb className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Process Automation</h4>
                  <p className="text-sm text-slate-600">Set up workflows and automate repetitive tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Clock className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Schedule Management</h4>
                  <p className="text-sm text-slate-600">Coordinate meetings, interviews, and team schedules</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Shield className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Compliance Monitoring</h4>
                  <p className="text-sm text-slate-600">Track regulatory requirements and flag potential issues</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Bot className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Employee Support</h4>
                  <p className="text-sm text-slate-600">Help employees with self-service requests and questions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <Lightbulb className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Strategic Insights</h4>
                  <p className="text-sm text-slate-600">Analyse trends and suggest improvements to HR processes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                <MessageCircle className="w-5 h-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Document Creation</h4>
                  <p className="text-sm text-slate-600">Generate contracts, policies, and other HR documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Conversations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Example Conversations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-pink-900">Quick Policy Check</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/70 rounded p-2">
                  <strong>You:</strong> "Can Sarah take 3 weeks off in July?"
                </div>
                <div className="bg-pink-100/70 rounded p-2">
                  <strong>AI:</strong> "Yes! Sarah has 18 days remaining. July 10-28 works best for team coverage. Shall I send her the approval?"
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-pink-900">Report Generation</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/70 rounded p-2">
                  <strong>You:</strong> "Show me turnover by department this quarter"
                </div>
                <div className="bg-pink-100/70 rounded p-2">
                  <strong>AI:</strong> "Here's your report: Sales 12%, Engineering 3%, Marketing 8%. Sales turnover is above target - would you like me to analyse the causes?"
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-pink-900">Process Optimisation</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/70 rounded p-2">
                  <strong>You:</strong> "Our hiring process is too slow"
                </div>
                <div className="bg-pink-100/70 rounded p-2">
                  <strong>AI:</strong> "I've identified 3 bottlenecks: CV screening (5 days), interview scheduling (3 days), and reference checks (4 days). I can automate CV screening to save 80% of time."
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-pink-900">Employee Query</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/70 rounded p-2">
                  <strong>Employee:</strong> "When do I get my next pay rise review?"
                </div>
                <div className="bg-pink-100/70 rounded p-2">
                  <strong>AI:</strong> "Your annual review is scheduled for March 15th. Based on your performance, you're on track for a promotion discussion. Would you like me to book a pre-review meeting with your manager?"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Meet Your New HR Assistant</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Experience the future of HR with an AI assistant that's always learning, always helping, and always available.
          </p>
          <Button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg font-semibold">
            Start Chatting with AI
          </Button>
        </div>
      </div>
    </div>
  )
}
