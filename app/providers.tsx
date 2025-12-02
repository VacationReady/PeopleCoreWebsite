"use client"

import { CalendlyProvider } from "@/app/components/sections/calendly-modal"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CalendlyProvider>
      {children}
    </CalendlyProvider>
  )
}

