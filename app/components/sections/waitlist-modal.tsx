"use client"

import { useState, useTransition } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog"
import { Checkbox } from "@/app/components/ui/checkbox"
import { joinWaitlist } from "@/app/actions/waitlist"
import { Mail, User, Building, CheckCircle, AlertCircle } from "lucide-react"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const functionalities = [
  "AI",
  "Workflow",
  "Absence Management",
  "Reporting",
  "Performance Management",
  "Payroll",
  "Customisation",
  "Recruitment",
  "Onboarding",
  "Training",
  "Surveys & Engagement"
]

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string; errors?: Record<string, string> } | null>(null)
  const [selectedFunctionalities, setSelectedFunctionalities] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Add selected functionalities to form data
    formData.append("functionalities", JSON.stringify(selectedFunctionalities))
    
    startTransition(async () => {
      const result = await joinWaitlist(formData)
      setResult(result)
      
      if (result.success) {
        // Reset form on success
        e.currentTarget.reset()
        setSelectedFunctionalities([])
        // Close modal after 3 seconds
        setTimeout(() => {
          onOpenChange(false)
          setResult(null)
        }, 3000)
      }
    })
  }

  const toggleFunctionality = (functionality: string) => {
    setSelectedFunctionalities(prev => 
      prev.includes(functionality)
        ? prev.filter(f => f !== functionality)
        : [...prev, functionality]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription>
            Be among the first to experience the future of HR automation with PeopleCore.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {result?.success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're In!</h3>
              <p className="text-slate-600">{result.message}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {result?.errors?.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {result.errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your work email"
                    />
                  </div>
                  {result?.errors?.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {result.errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Functionalities Multi-Select */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    What functionalities are you mostly interested in? <span className="text-slate-500">(You can pick more than one)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3 max-h-[240px] overflow-y-auto p-4 border border-slate-200 rounded-lg bg-slate-50">
                    {functionalities.map((functionality) => (
                      <div key={functionality} className="flex items-center space-x-2">
                        <Checkbox
                          id={functionality}
                          checked={selectedFunctionalities.includes(functionality)}
                          onCheckedChange={() => toggleFunctionality(functionality)}
                        />
                        <label
                          htmlFor={functionality}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {functionality}
                        </label>
                      </div>
                    ))}
                  </div>
                  {selectedFunctionalities.length > 0 && (
                    <p className="mt-2 text-xs text-slate-600">
                      {selectedFunctionalities.length} selected
                    </p>
                  )}
                </div>
              </div>

              {/* Error Message */}
              {result?.success === false && !result.errors && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {result.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-3 justify-end pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isPending}
                  variant="gradient"
                  className="px-8"
                >
                  {isPending ? "Joining..." : "Join the Waitlist"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

