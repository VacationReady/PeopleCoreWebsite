"use client"

import * as React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { Dialog, DialogContent } from "@/app/components/ui/dialog"
import { Calendar, Loader2 } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/mike-peoplecore"

interface CalendlyContextType {
  openCalendly: () => void
  closeCalendly: () => void
  isOpen: boolean
}

const CalendlyContext = createContext<CalendlyContextType | null>(null)

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error("useCalendly must be used within CalendlyProvider")
  }
  return context
}

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const openCalendly = useCallback(() => setIsOpen(true), [])
  const closeCalendly = useCallback(() => setIsOpen(false), [])
  
  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly, isOpen }}>
      {children}
      <CalendlyModal open={isOpen} onOpenChange={setIsOpen} />
    </CalendlyContext.Provider>
  )
}

interface CalendlyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CalendlyModal({ open, onOpenChange }: CalendlyModalProps) {
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
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Book a Demo</h2>
            <p className="text-sm text-slate-500">Schedule a personalised walkthrough of PeopleCore</p>
          </div>
        </div>
        
        {/* Calendly Embed */}
        <div className="relative flex-1 h-[calc(90vh-80px)]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                <p className="text-sm text-slate-500">Loading calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a demo with PeopleCore"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Standalone button component that opens Calendly modal
interface CalendlyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function CalendlyButton({ children, className, ...props }: CalendlyButtonProps) {
  const { openCalendly } = useCalendly()
  
  return (
    <button onClick={openCalendly} className={className} {...props}>
      {children}
    </button>
  )
}




