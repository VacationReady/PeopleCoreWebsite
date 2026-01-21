"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Footer } from "@/app/components/sections/footer"
import { submitQuoteRequest } from "@/app/actions/quote"
import { motion, AnimatePresence } from "framer-motion"

const PRODUCT_OPTIONS = [
  "Action Items",
  "AI Copilot",
  "Approvals",
  "Customisation",
  "Documents",
  "Leave",
  "News",
  "Onboarding",
  "Reporting",
  "Rotas & Timesheets",
  "Surveys",
  "Workflows",
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeNumbers: "",
    phone: "",
    interests: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("employeeNumbers", formData.employeeNumbers)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("interests", JSON.stringify(formData.interests))

    const result = await submitQuoteRequest(formDataObj)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message)
    }
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                >
                  Thanks for Requesting!
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground mb-8"
                >
                  We've received your quote request and will be in touch shortly.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Back to Home
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Request a Quote
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Tell us about your needs and we'll provide a customized quote for your organization.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-12">
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Employee Numbers */}
                  <div className="mb-6">
                    <label htmlFor="employeeNumbers" className="block text-sm font-semibold text-foreground mb-2">
                      Number of Employees <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="employeeNumbers"
                      required
                      value={formData.employeeNumbers}
                      onChange={(e) => setFormData(prev => ({ ...prev, employeeNumbers: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select employee range</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="101-250">101-250 employees</option>
                      <option value="251-500">251-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  {/* Phone (Optional) */}
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+64 21 123 4567"
                    />
                  </div>

                  {/* Interests */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      What are you interested in? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PRODUCT_OPTIONS.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestToggle(option)}
                          className={`px-4 py-3 rounded-xl border-2 text-left font-medium transition-all ${
                            formData.interests.includes(option)
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-white text-foreground hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                              formData.interests.includes(option)
                                ? "border-primary bg-primary"
                                : "border-gray-300"
                            }`}>
                              {formData.interests.includes(option) && (
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span>{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    {formData.interests.length === 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Please select at least one area of interest
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.interests.length === 0}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
