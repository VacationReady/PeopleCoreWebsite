"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Send, MessageSquare, Zap, BarChart3, Users, FileText, CheckCircle, Upload, Calendar, Mail, Sparkles, PartyPopper } from "lucide-react"

// Custom workflow visualization component (no external dependencies)
function WorkflowNode({ node, index, isActive }: { node: any, index: number, isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
        isActive 
          ? 'bg-blue-50 border-blue-300 shadow-lg' 
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
        }`}>
          {node.icon}
        </div>
        <span className="font-medium text-slate-800">{node.label}</span>
      </div>
      
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  )
}

const demoPrompts = [
  {
    id: 1,
    text: "Create a monthly eNPS survey anonymised by department and send my SLT a report once complete.",
    icon: BarChart3,
    workflow: [
      { id: 1, icon: "📅", label: "Monthly Trigger", description: "Automatically starts every month" },
      { id: 2, icon: "📊", label: "Create eNPS Survey", description: "Generate survey questions" },
      { id: 3, icon: "📧", label: "Send to Employees", description: "Distribute via email/Slack" },
      { id: 4, icon: "🔒", label: "Anonymise by Dept", description: "Protect employee privacy" },
      { id: 5, icon: "📈", label: "Aggregate Results", description: "Calculate scores & trends" },
      { id: 6, icon: "📄", label: "Generate Report", description: "Create executive summary" },
      { id: 7, icon: "✅", label: "Notify SLT", description: "Send to leadership team" }
    ]
  },
  {
    id: 2,
    text: "Set up new employee onboarding with document uploads and celebration milestones.",
    icon: Users,
    workflow: [
      { id: 1, icon: "👋", label: "Welcome Email", description: "Send personalized welcome" },
      { id: 2, icon: "📋", label: "Create Checklist", description: "Generate onboarding tasks" },
      { id: 3, icon: "📄", label: "Document Upload", description: "Collect required documents" },
      { id: 4, icon: "✅", label: "Verify Documents", description: "Auto-check completeness" },
      { id: 5, icon: "👥", label: "Assign Buddy", description: "Match with team member" },
      { id: 6, icon: "📚", label: "Training Schedule", description: "Book required sessions" },
      { id: 7, icon: "🎉", label: "Completion Celebration", description: "Send congratulations!" }
    ]
  },
  {
    id: 3,
    text: "Generate quarterly performance reports with automated insights and manager notifications.",
    icon: FileText,
    workflow: [
      { id: 1, icon: "📅", label: "Quarterly Trigger", description: "Starts automatically" },
      { id: 2, icon: "📊", label: "Collect Data", description: "Gather performance metrics" },
      { id: 3, icon: "🏢", label: "Group by Department", description: "Organize by teams" },
      { id: 4, icon: "🤖", label: "AI Analysis", description: "Generate insights" },
      { id: 5, icon: "📈", label: "Create Visualizations", description: "Build charts & graphs" },
      { id: 6, icon: "📄", label: "Generate Reports", description: "Create PDF summaries" },
      { id: 7, icon: "📧", label: "Send to Managers", description: "Distribute automatically" }
    ]
  }
]

export function Demo() {
  const [currentPrompt, setCurrentPrompt] = useState(demoPrompts[0])
  const [inputValue, setInputValue] = useState("")
  const [isBuilding, setIsBuilding] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const handlePromptSelect = useCallback((prompt: typeof demoPrompts[0]) => {
    setCurrentPrompt(prompt)
    setInputValue(prompt.text)
    setIsBuilding(true)
    setActiveStep(0)
    setIsCompleted(false)
    setShowCelebration(false)
    
    // Simulate workflow building
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1500)
  }, [])

  const startWorkflow = useCallback(() => {
    setActiveStep(0)
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= currentPrompt.workflow.length - 1) {
          clearInterval(interval)
          setIsCompleted(true)
          setShowCelebration(true)
          setTimeout(() => setShowCelebration(false), 3000)
          return prev
        }
        return prev + 1
      })
    }, 800)
  }, [currentPrompt])

  const handleCustomInput = useCallback(() => {
    if (!inputValue.trim()) return
    
    setIsBuilding(true)
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1500)
  }, [inputValue, startWorkflow])

  useEffect(() => {
    // Auto-start the first workflow
    const timer = setTimeout(() => {
      startWorkflow()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-50"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 1,
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight
                }}
                animate={{ 
                  opacity: [1, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -100, -200]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute text-2xl"
              >
                {['🎉', '✨', '🎊', '⭐', '💫'][i % 5]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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

                {isCompleted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <PartyPopper className="w-4 h-4 text-green-600" />
                      <p className="text-green-800 font-medium">Workflow completed successfully! 🎉</p>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomInput()}
                    placeholder="Describe your HR workflow..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button size="lg" className="px-6" onClick={handleCustomInput}>
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
            
            <div className="p-6">
              <div className="grid gap-4">
                {currentPrompt.workflow.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-4">
                    <WorkflowNode 
                      node={step} 
                      index={index} 
                      isActive={index <= activeStep} 
                    />
                    {index < currentPrompt.workflow.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: index < activeStep ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        className="w-0.5 h-8 bg-blue-300 origin-top ml-8"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-6 bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep + 1) / currentPrompt.workflow.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-600">
                  Step {activeStep + 1} of {currentPrompt.workflow.length}
                </span>
                <span className="text-slate-600">
                  {Math.round(((activeStep + 1) / currentPrompt.workflow.length) * 100)}% Complete
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                  <span className="text-sm text-slate-600">
                    {isCompleted ? 'Workflow Complete' : 'Workflow Running'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePromptSelect(currentPrompt)}
                  disabled={isBuilding}
                >
                  {isBuilding ? 'Building...' : 'Restart Workflow'}
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
