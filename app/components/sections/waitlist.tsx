"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import { joinWaitlist } from "@/app/actions/waitlist"

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const result = await joinWaitlist(formData)
      setResult(result)
      if (result.success) {
        form.reset()
      }
    } catch (error) {
      console.error("Waitlist submission failed:", error)
      setResult({ success: false, message: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-foreground">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to transform
              <br />
              your HR?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Join 200+ NZ businesses on the waitlist. Get early access to the 
              only HRIS built specifically for New Zealand employment law.
            </p>
          </motion.div>

          {result?.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-400">{result.message}</p>
            </motion.div>
          ) : (
            <motion.form
              id="waitlist-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input type="hidden" name="name" value="Waitlist User" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-foreground rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.form>
          )}

          {result && !result.success && (
            <p className="mt-4 text-sm text-red-300">
              {result.message}
            </p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-500 mt-6"
          >
            🇳🇿 Your data is handled in accordance with the Privacy Act 2020 and stored in Auckland
          </motion.p>
        </div>
      </div>
    </section>
  )
}
