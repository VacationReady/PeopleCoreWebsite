"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Send, Zap, BarChart3, Users, CheckCircle, Sparkles, LogOut, Heart } from "lucide-react"

function Shimmer() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  )
}

function SkeletonLine({ width = "100%" }: { width?: string }) {
  return (
    <div className="relative overflow-hidden rounded bg-slate-200 h-4" style={{ width }}>
      <Shimmer />
    </div>
  )
}

function WorkspaceGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `
        linear-gradient(to right, rgb(148, 163, 184) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(148, 163, 184) 1px, transparent 1px)
      `,
      backgroundSize: '24px 24px'
    }} />
  )
}

type WorkflowStep = {
  id: number
  icon: string
  label: string
  description: string
}

function StepAnimation({
  step,
  isActive,
  workflowType,
}: {
  step: WorkflowStep
  isActive: boolean
  workflowType: string
}) {
  if (!isActive) return null

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="w-full h-full rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 p-4 text-center shadow-lg">
        <div className="text-4xl mb-2" aria-hidden="true">
          {step.icon}
        </div>
        <p className="text-sm font-semibold text-slate-900">{step.label}</p>
        <p className="text-xs text-slate-500">{step.description}</p>
        <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-wide text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
          {workflowType.replace(/-/g, " ")}
        </div>
      </div>
    </motion.div>
  )
}

const demoPrompts = [
  {
    id: 1,
    text: "Calculate Sarah's annual leave entitlement including her FBAPS and public holiday adjustments for the Holidays Act.",
    icon: BarChart3,
    workflowType: "holidays-act",
    workflow: [
      { id: 1, icon: "📊", label: "Hours Analysed", description: "52-week average calculated" },
      { id: 2, icon: "💰", label: "FBAPS Determined", description: "Four weeks gross earnings" },
      { id: 3, icon: "🗓️", label: "Public Holidays", description: "Mondayisation applied" },
      { id: 4, icon: "✅", label: "Entitlement Ready", description: "100% Holidays Act compliant" }
    ]
  },
  {
    id: 2,
    text: "Enrol our 15 new seasonal workers in KiwiSaver and set up their employer contributions at 4%.",
    icon: Users,
    workflowType: "kiwisaver",
    workflow: [
      { id: 1, icon: "👥", label: "Eligibility Checked", description: "Auto-enrolment criteria met" },
      { id: 2, icon: "📋", label: "KS2 Forms Generated", description: "IRD documentation ready" },
      { id: 3, icon: "💳", label: "Provider Selected", description: "Employee choice recorded" },
      { id: 4, icon: "💰", label: "Contributions Set", description: "4% employer + 3% employee" },
      { id: 5, icon: "📧", label: "IRD Notified", description: "Compliance complete" }
    ]
  },
  {
    id: 3,
    text: "Process tangihanga leave for Hemi and notify his team with culturally appropriate messaging.",
    icon: Heart,
    workflowType: "tangihanga",
    workflow: [
      { id: 1, icon: "🤝", label: "Leave Approved", description: "Bereavement entitlement" },
      { id: 2, icon: "📧", label: "Team Notified", description: "Culturally sensitive message" },
      { id: 3, icon: "📅", label: "Coverage Arranged", description: "Workload redistributed" },
      { id: 4, icon: "💐", label: "Support Offered", description: "EAP resources shared" },
      { id: 5, icon: "✅", label: "Return Planned", description: "Flexible re-entry scheduled" }
    ]
  },
  {
    id: 4,
    text: "Apply the new Fair Pay Agreement minimums to our cleaning staff and update payroll.",
    icon: CheckCircle,
    workflowType: "fair-pay",
    workflow: [
      { id: 1, icon: "📋", label: "FPA Identified", description: "Cleaning sector agreement" },
      { id: 2, icon: "👥", label: "Staff Matched", description: "12 employees affected" },
      { id: 3, icon: "💰", label: "Rates Updated", description: "Minimums applied" },
      { id: 4, icon: "📊", label: "Payroll Adjusted", description: "Backdated if required" },
      { id: 5, icon: "✅", label: "Compliance Verified", description: "Pay equity ensured" }
    ]
  }
]

export function Demo() {
  const [currentPrompt, setCurrentPrompt] = useState(demoPrompts[0])
  const [inputValue, setInputValue] = useState("")
  const [isBuilding, setIsBuilding] = useState(false)
  const [activeStep, setActiveStep] = useState(-1) // Start with no active step
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [hasStarted, setHasStarted] = useState(false) // Track if workflow has been started

  const handlePromptSelect = useCallback((prompt: typeof demoPrompts[0]) => {
    setCurrentPrompt(prompt)
    setInputValue(prompt.text)
    setIsBuilding(true)
    setActiveStep(0)
    setIsCompleted(false)
    setShowCelebration(false)
    setHasStarted(true)
    
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
    setHasStarted(true)
    setActiveStep(0)
    setIsCompleted(false)
    setShowCelebration(false)
    
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1000)
  }, [inputValue, startWorkflow])

  // Remove auto-start - only start when user clicks

  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      <WorkspaceGrid />
      
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight py-2">
            NZ Compliance Made Simple
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Watch PeopleCore handle complex NZ employment law scenarios in plain English.
            <br />
            <span className="text-slate-500">From Holidays Act calculations to Fair Pay Agreements—just ask.</span>
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
                    <div className="relative overflow-hidden bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <p className="text-slate-800">Kia ora! I'm PeopleCore AI. Ask me anything about NZ employment law, leave calculations, or compliance—I'll handle it automatically.</p>
                    </div>
                  </div>
                </div>

                {hasStarted && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-600 text-sm">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-2">You</p>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                        <p className="text-slate-800">{inputValue || currentPrompt.text}</p>
                      </div>
                    </div>
                  </div>
                )}

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

                {!isBuilding && hasStarted && isCompleted && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 mb-2">PeopleCore AI</p>
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                        <p className="text-green-800 font-medium mb-2">🎉 Workflow completed successfully! 🎉</p>
                        <p className="text-slate-700">
                          {currentPrompt.workflowType === "holidays-act" && "Sarah's leave entitlement calculated with full Holidays Act compliance. FBAPS and public holiday adjustments applied."}
                          {currentPrompt.workflowType === "kiwisaver" && "All 15 seasonal workers enrolled in KiwiSaver with 4% employer contributions. IRD notifications sent."}
                          {currentPrompt.workflowType === "tangihanga" && "Tangihanga leave processed for Hemi with culturally appropriate team notifications and support resources."}
                          {currentPrompt.workflowType === "fair-pay" && "Fair Pay Agreement minimums applied to 12 cleaning staff. Payroll updated and compliance verified."}
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-transform px-6"
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
                      className="flex items-center gap-3 p-3 text-left bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 active:scale-[0.98] transition-all duration-200 group"
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
                    {hasStarted ? (
                      currentPrompt.workflow.map((step, index) => (
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
                      ))
                    ) : (
                      <div className="text-center py-16 text-slate-500">
                        <p className="text-lg font-medium mb-2">Ready to Build Your Workflow</p>
                        <p className="text-sm">Click an example below or type your own request to see AI in action</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Right side - Animation area */}
                  <div className="w-72 h-36 relative flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 mt-16 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {hasStarted ? (
                        currentPrompt.workflow.map((step, index) => (
                          index === activeStep && (
                            <StepAnimation 
                              key={`${step.id}-${index}`}
                              step={step} 
                              isActive={true} 
                              workflowType={currentPrompt.workflowType || "onboarding"} 
                            />
                          )
                        ))
                      ) : (
                        <div className="text-center text-slate-400">
                          <div className="text-4xl mb-2">🤖</div>
                          <div className="text-sm">Workflow Preview</div>
                        </div>
                      )}
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
