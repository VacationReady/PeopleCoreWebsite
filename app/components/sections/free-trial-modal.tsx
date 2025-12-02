"use client"

import * as React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { Dialog, DialogContent } from "@/app/components/ui/dialog"
import { Sparkles, Loader2 } from "lucide-react"

const SIGNUP_URL = "https://pcprod.vercel.app/setup-admin"

interface FreeTrialContextType {
  openFreeTrial: () => void
  closeFreeTrial: () => void
  isOpen: boolean
}

const FreeTrialContext = createContext<FreeTrialContextType | null>(null)

export function useFreeTrial() {
  const context = useContext(FreeTrialContext)
  if (!context) {
    throw new Error("useFreeTrial must be used within FreeTrialProvider")
  }
  return context
}

export function FreeTrialProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const openFreeTrial = useCallback(() => setIsOpen(true), [])
  const closeFreeTrial = useCallback(() => setIsOpen(false), [])
  
  return (
    <FreeTrialContext.Provider value={{ openFreeTrial, closeFreeTrial, isOpen }}>
      {children}
      <FreeTrialModal open={isOpen} onOpenChange={setIsOpen} />
    </FreeTrialContext.Provider>
  )
}

interface FreeTrialModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function FreeTrialModal({ open, onOpenChange }: FreeTrialModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Reset loading state when modal opens
  useEffect(() => {
    if (open) {
      setIsLoading(true)
    }
  }, [open])
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Start Your Free Trial</h2>
            <p className="text-sm text-slate-500">Create your account and experience PeopleCore free for 14 days</p>
          </div>
        </div>
        
        {/* Signup Form Embed */}
        <div className="relative flex-1 h-[calc(90vh-80px)]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                <p className="text-sm text-slate-500">Loading signup form...</p>
              </div>
            </div>
          )}
          <iframe
            src={SIGNUP_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Start your free trial with PeopleCore"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Standalone button component that opens Free Trial modal
interface FreeTrialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function FreeTrialButton({ children, className, ...props }: FreeTrialButtonProps) {
  const { openFreeTrial } = useFreeTrial()
  
  return (
    <button onClick={openFreeTrial} className={className} {...props}>
      {children}
    </button>
  )
}

