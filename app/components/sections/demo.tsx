"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Send, Zap, BarChart3, Users, CheckCircle, Sparkles, LogOut, Heart } from "lucide-react"

// Simple step indicator - no complex animations
function StepAnimation({ step, isActive, workflowType }: { step: any, isActive: boolean, workflowType: string }) {
  if (!isActive) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 shadow-lg w-full h-full flex items-center justify-center"
    >
      <div className="text-center">
        <div className="text-3xl mb-2">{step.icon}</div>
        <div className="text-sm font-bold text-blue-700">{step.label}</div>
        <div className="text-xs text-blue-600">{step.description}</div>
      </div>
    </motion.div>
  )
}

const demoPrompts = [
  {
    id: 1,
    text: "Create a monthly eNPS survey anonymised by department and send my SLT a report once complete.",
    icon: BarChart3,
    workflowType: "enps",
    workflow: [
      { id: 1, icon: "📊", label: "Survey Created", description: "eNPS survey generated" },
      { id: 2, icon: "📧", label: "Emails Sent", description: "Distributed to all staff" },
      { id: 3, icon: "🔒", label: "Responses Collected", description: "Anonymous submissions" },
      { id: 4, icon: "🤖", label: "AI Analysis", description: "Processing results" },
      { id: 5, icon: "📈", label: "Report Generated", description: "Sent to leadership" }
    ]
  },
  {
    id: 2,
    text: "Set up new employee onboarding with document uploads and celebration milestones.",
    icon: Users,
    workflowType: "onboarding",
    workflow: [
      { id: 1, icon: "👋", label: "Welcome Email", description: "Send personalised welcome" },
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
    text: "James Smith is leaving on the 10th of this month, can you commence offboarding?",
    icon: LogOut,
    workflowType: "offboarding",
    workflow: [
      { id: 1, icon: "🚀", label: "Offboarding Commenced", description: "Process initiated" },
      { id: 2, icon: "💻", label: "IT Notified", description: "Equipment return scheduled" },
      { id: 3, icon: "💰", label: "Payroll System Notified", description: "Final pay calculated" },
      { id: 4, icon: "📊", label: "Leave Calculations Underway", description: "Accrued leave processed" },
      { id: 5, icon: "📝", label: "Exit Interview Diarised", description: "Meeting scheduled" },
      { id: 6, icon: "✅", label: "Offboarding Complete!", description: "All tasks finished" }
    ]
  },
  {
    id: 4,
    text: "Jemma Kingley has just got married! Can you change her title and last name to Mrs and Middleton please, and then create a news survey to celebrate the news to the company?",
    icon: Heart,
    workflowType: "marriage",
    workflow: [
      { id: 1, icon: "💍", label: "Employee Married!", description: "Congratulations!" },
      { id: 2, icon: "👤", label: "Title Changed", description: "Updated to Mrs" },
      { id: 3, icon: "📝", label: "Last Name Changed", description: "Updated to Middleton" },
      { id: 4, icon: "📰", label: "News Article Published", description: "Company announcement" },
      { id: 5, icon: "📧", label: "Emails Sent to All Staff", description: "Celebrating the news" },
      { id: 6, icon: "🏖️", label: "Honeymoon Commences!", description: "Enjoy your time off!" }
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
    }, 1000)
  }, [])

  const startWorkflow = useCallback(() => {
    setActiveStep(0)
    setIsCompleted(false)
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= currentPrompt.workflow.length) {
          clearInterval(interval)
          setIsCompleted(true)
          setShowCelebration(true)
          setTimeout(() => {
            setShowCelebration(false)
          }, 3000)
          return prev
        }
        return prev + 1
      })
    }, 1500) // 1.5 seconds per step
  }, [currentPrompt])

  const handleCustomInput = useCallback(() => {
    if (!inputValue.trim()) return
    
    setIsBuilding(true)
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1000)
  }, [inputValue, startWorkflow])

  // Auto-start immediately - no delay
  useEffect(() => {
    startWorkflow()
  }, [startWorkflow])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Workflow Complete!</h3>
              <p className="text-slate-600 mb-4">PeopleCore has successfully automated your HR process.</p>
              <Button 
                onClick={() => setShowCelebration(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Amazing! ✨
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Ask PeopleCore Anything
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Watch AI transform your natural language requests into sophisticated HR workflows.
            <br />
            <span className="text-slate-500">No coding, no complexity—just conversation.</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* AI Assistant Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">PeopleCore AI</h3>
                    <p className="text-blue-100 text-sm">Your HR Automation Assistant</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="bg-white rounded-b-2xl border-2 border-slate-200 p-6 space-y-4 min-h-[400px]">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 mb-2">PeopleCore AI</p>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-slate-800">Hi! I'm PeopleCore AI. Describe any HR workflow you need, and I'll build it for you automatically.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 text-sm">You</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 mb-2">You</p>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                      <p className="text-slate-800">{currentPrompt.text}</p>
                    </div>
                  </div>
                </div>

                {isBuilding && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-2">PeopleCore AI</p>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Zap className="w-4 h-4 text-blue-500" />
                          </motion.div>
                          <p className="text-slate-800">Building your workflow...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!isBuilding && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-2">PeopleCore AI</p>
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                        <p className="text-green-800 font-medium mb-2">🎉 Workflow completed successfully! 🎉</p>
                        <p className="text-slate-700">
                          {currentPrompt.workflowType === "onboarding" && "Set up new employee onboarding with document uploads and celebration milestones."}
                          {currentPrompt.workflowType === "enps" && "Created monthly eNPS survey with automated department analysis and leadership reporting."}
                          {currentPrompt.workflowType === "offboarding" && "James Smith's offboarding process has been completed successfully."}
                          {currentPrompt.workflowType === "marriage" && "Jemma's details have been updated and the celebration announcement has been sent to all staff!"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Describe your HR workflow..."
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomInput()}
                  />
                  <Button 
                    onClick={handleCustomInput}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Try These Examples */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">TRY THESE EXAMPLES:</p>
                <div className="grid grid-cols-1 gap-2">
                  {demoPrompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => handlePromptSelect(prompt)}
                      className="flex items-center gap-3 p-3 text-left bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <prompt.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-800 line-clamp-2">
                        {prompt.text.length > 80 ? `${prompt.text.substring(0, 80)}...` : prompt.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Generated Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Generated Workflow</h3>
                    <p className="text-sm text-slate-600">AI-built automation in real-time</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  {/* Left side - Workflow steps */}
                  <div className="flex-1">
                    {currentPrompt.workflow.map((step, index) => (
                      <div key={step.id} className="flex items-start gap-4 mb-4 last:mb-0">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                            index < activeStep 
                              ? 'bg-green-500 text-white' 
                              : index === activeStep 
                              ? 'bg-blue-500 text-white animate-pulse' 
                              : 'bg-slate-200 text-slate-500'
                          }`}>
                            {index < activeStep ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              step.icon
                            )}
                          </div>
                          {index < currentPrompt.workflow.length - 1 && (
                            <motion.div
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: index < activeStep ? 1 : 0 }}
                              transition={{ duration: 0.3, delay: index * 0.2 }}
                              className="w-0.5 h-8 bg-blue-300 origin-top mt-2"
                            />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <h4 className={`font-medium transition-colours duration-300 ${
                            index <= activeStep ? 'text-slate-900' : 'text-slate-500'
                          }`}>
                            {step.label}
                          </h4>
                          <p className={`text-sm transition-colours duration-300 ${
                            index <= activeStep ? 'text-slate-600' : 'text-slate-400'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right side - Animation area */}
                  <div className="w-72 h-36 relative flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 mt-16 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {currentPrompt.workflow.map((step, index) => (
                        index === activeStep && (
                          <StepAnimation 
                            key={`${step.id}-${index}`}
                            step={step} 
                            isActive={true} 
                            workflowType={currentPrompt.workflowType || "onboarding"} 
                          />
                        )
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
