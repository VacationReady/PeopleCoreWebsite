"use client"

import { useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Send, MessageSquare, Zap, BarChart3, Users, FileText } from "lucide-react"

// Lazy load React Flow to improve initial page load
const ReactFlow = dynamic(() => import("@xyflow/react").then(mod => mod.ReactFlow), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-slate-100 rounded-lg flex items-center justify-center">
      <div className="text-slate-500">Loading workflow visualization...</div>
    </div>
  )
})

const { Background, Controls, MiniMap } = dynamic(() => 
  import("@xyflow/react").then(mod => ({
    Background: mod.Background,
    Controls: mod.Controls,
    MiniMap: mod.MiniMap
  })), 
  { ssr: false }
)

const demoPrompts = [
  {
    id: 1,
    text: "Create a monthly eNPS survey anonymised by department and send my SLT a report once complete.",
    icon: BarChart3,
    workflow: [
      { id: '1', type: 'input', position: { x: 50, y: 50 }, data: { label: '📅 Monthly Trigger' } },
      { id: '2', type: 'default', position: { x: 250, y: 50 }, data: { label: '📊 Create eNPS Survey' } },
      { id: '3', type: 'default', position: { x: 450, y: 50 }, data: { label: '🔒 Anonymise by Dept' } },
      { id: '4', type: 'default', position: { x: 250, y: 150 }, data: { label: '📈 Aggregate Results' } },
      { id: '5', type: 'default', position: { x: 450, y: 150 }, data: { label: '📄 Generate Report' } },
      { id: '6', type: 'output', position: { x: 650, y: 100 }, data: { label: '📧 Notify SLT' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5' },
      { id: 'e5-6', source: '5', target: '6' },
    ]
  },
  {
    id: 2,
    text: "Set up automated leave approval for managers with escalation to HR after 48 hours.",
    icon: Users,
    workflow: [
      { id: '1', type: 'input', position: { x: 50, y: 50 }, data: { label: '📝 Leave Request' } },
      { id: '2', type: 'default', position: { x: 250, y: 50 }, data: { label: '👤 Route to Manager' } },
      { id: '3', type: 'default', position: { x: 450, y: 50 }, data: { label: '⏰ 48hr Timer' } },
      { id: '4', type: 'default', position: { x: 250, y: 150 }, data: { label: '✅ Auto Approve' } },
      { id: '5', type: 'default', position: { x: 450, y: 150 }, data: { label: '🚨 Escalate to HR' } },
      { id: '6', type: 'output', position: { x: 650, y: 100 }, data: { label: '📧 Notify Employee' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e3-5', source: '3', target: '5' },
      { id: 'e4-6', source: '4', target: '6' },
      { id: 'e5-6', source: '5', target: '6' },
    ]
  },
  {
    id: 3,
    text: "Generate quarterly performance reports for all departments with manager insights.",
    icon: FileText,
    workflow: [
      { id: '1', type: 'input', position: { x: 50, y: 50 }, data: { label: '📅 Quarterly Trigger' } },
      { id: '2', type: 'default', position: { x: 250, y: 50 }, data: { label: '📊 Collect Performance Data' } },
      { id: '3', type: 'default', position: { x: 450, y: 50 }, data: { label: '🏢 Group by Department' } },
      { id: '4', type: 'default', position: { x: 250, y: 150 }, data: { label: '🧠 Generate Insights' } },
      { id: '5', type: 'default', position: { x: 450, y: 150 }, data: { label: '📄 Create Reports' } },
      { id: '6', type: 'output', position: { x: 650, y: 100 }, data: { label: '📧 Send to Managers' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5' },
      { id: 'e5-6', source: '5', target: '6' },
    ]
  }
]

export function Demo() {
  const [currentPrompt, setCurrentPrompt] = useState(demoPrompts[0])
  const [inputValue, setInputValue] = useState("")
  const [isBuilding, setIsBuilding] = useState(false)

  const handlePromptSelect = useCallback((prompt: typeof demoPrompts[0]) => {
    setCurrentPrompt(prompt)
    setInputValue(prompt.text)
    setIsBuilding(true)
    setTimeout(() => setIsBuilding(false), 2000)
  }, [])

  const nodeTypes = useMemo(() => ({}), [])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ask PeopleCore Anything
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch AI transform your natural language requests into sophisticated HR workflows. 
            No coding, no complexity—just conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">PeopleCore AI</h3>
                    <p className="text-white/80 text-sm">Your HR Automation Assistant</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 text-sm">
                    👋 Hi! I'm PeopleCore AI. Describe any HR workflow you need, and I'll build it for you automatically.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPrompt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500"
                  >
                    <p className="text-slate-800">{currentPrompt.text}</p>
                  </motion.div>
                </AnimatePresence>

                {isBuilding && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-600 animate-pulse" />
                      <p className="text-green-800 font-medium">Building your workflow...</p>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Describe your HR workflow..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button size="lg" className="px-6">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Try these examples:
              </h4>
              <div className="space-y-2">
                {demoPrompts.map((prompt) => {
                  const Icon = prompt.icon
                  return (
                    <button
                      key={prompt.id}
                      onClick={() => handlePromptSelect(prompt)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        currentPrompt.id === prompt.id
                          ? 'bg-blue-50 border-blue-200 text-blue-900'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{prompt.text}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Generated Workflow</h3>
              <p className="text-sm text-slate-600">AI-built automation in real-time</p>
            </div>
            
            <div className="h-96 relative">
              <ReactFlow
                nodes={currentPrompt.workflow}
                edges={currentPrompt.edges}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
                className="bg-slate-50"
              >
                <Background />
                <Controls />
                <MiniMap />
              </ReactFlow>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Workflow Active</span>
                </div>
                <Button variant="outline" size="sm">
                  Deploy Workflow
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reduced motion fallback */}
        <div className="sr-only" aria-live="polite">
          Current workflow: {currentPrompt.text}
        </div>
      </div>
    </section>
  )
}
