"use client"

import { CalendlyProvider } from "@/app/components/sections/calendly-modal"
import { FreeTrialProvider } from "@/app/components/sections/free-trial-modal"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CalendlyProvider>
      <FreeTrialProvider>
        {children}
      </FreeTrialProvider>
    </CalendlyProvider>
  )
}


