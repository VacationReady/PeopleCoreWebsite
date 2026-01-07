"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Zap, X, Mail, User, Building2 } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog"
import { submitQuoteRequest } from "@/app/actions/quote"

const plans = [
  {
    name: "Core",
    price: "$4",
    period: "per employee/month",
    description: "Perfect for small businesses looking to modernise and streamline their back office functions",
    badge: null,
    features: [
      "Absence Management",
      "Core Workflows", 
      "Full Custom Reporting",
      "Mobile App",
      "Self Service",
      "Document Management inc. E-signature and Read Acknowledgement",
      "Standard Onboarding",
      "Timesheets & Rotas"
    ],
    cta: "Request a quote",
    popular: false,
    color: "border-green-200 bg-green-50"
  },
  {
    name: "Core Plus", 
    price: "$8",
    period: "per employee/month",
    description: "Advanced AI automation for growing teams",
    badge: null,
    features: [
      "Everything in Core",
      "Screen Designer",
      "Rotas/Shifts",
      "Surveys",
      "Performance Management",
      "Custom Permission Profiles",
      "AI Powered Analytics",
      "Custom Approval and Date Workflows"
    ],
    cta: "Request a quote",
    popular: false,
    color: "border-blue-200 bg-blue-50"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact sales",
    description: "White-glove service for large organisations",
    badge: { text: "Premium", icon: Zap, color: "from-purple-500 to-pink-500" },
    features: [
      "Everything in Professional",
      "Dedicated success manager",
      "Custom AI training",
      "On-premise deployment",
      "Advanced compliance",
      "SLA guarantees",
      "Custom integrations",
      "24/7 phone support"
    ],
    cta: "Request a quote",
    popular: false,
    color: "border-purple-200 bg-purple-50"
  }
]

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const companySizeOptions = [
    { value: "1-5", label: "1-5 people" },
    { value: "5-20", label: "5-20 people" },
    { value: "20-50", label: "20-50 people" },
    { value: "50-100", label: "50-100 people" },
    { value: "100-250", label: "100-250 people" },
    { value: "250+", label: "250+ people" },
  ]

  const handleQuoteRequest = (planName: string) => {
    setSelectedPlan(planName)
    setIsModalOpen(true)
    setIsSubmitted(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting || !selectedPlan) return

    setIsSubmitting(true)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    formData.append("planName", selectedPlan)

    try {
      const result = await submitQuoteRequest(formData)

      if (result.success) {
        setIsSubmitted(true)
        formElement.reset()
      } else {
        console.error(result.message)
      }
    } catch (error) {
      console.error("Quote form submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
    setIsSubmitted(false)
  }
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            No hidden costs, implementation included, and priced for life.
          </p>
          
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span className="text-slate-700 font-medium text-sm sm:text-base">Beta pricing available for early adopters</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl pt-8 sm:pt-10' 
                    : 'bg-white border border-slate-200 shadow-lg'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && plan.badge && (
                  <div className="flex justify-center mb-5 sm:mb-6">
                    <div className={`bg-gradient-to-r ${plan.badge.color} text-white px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md border border-white/50`}>
                      {plan.badge.text}
                    </div>
                  </div>
                )}

                {/* Plan header */}

                {/* Plan header */}
                <div className="relative z-10 text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant={plan.popular ? "gradient" : "outline"}
                    size="lg"
                    className="w-full py-3 sm:py-4 text-sm sm:text-base touch-manipulation"
                    onClick={() => handleQuoteRequest(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">
                Can I upgrade to Plus when I'm ready?
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Yes, you can upgrade to Plus at any point. Just reach out to your account manager who will be happy to demo the additional features.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">
                Do you offer a free trial?
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Yes, we offer a free 7 day trial.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">
                What does price for life mean?
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                The per employee rate will remain fixed for as long as you are a PeopleCore customer. No contract renewal price jumps!
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">
                Is my data secure?
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Absolutely. We're SOC 2 compliant with enterprise-grade security, encryption, and regular audits.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Request Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Request a Quote</DialogTitle>
                <DialogDescription>
                  Get pricing details for the <span className="font-semibold">{selectedPlan}</span> plan
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="quote-name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    leftIcon={User}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-email" className="text-sm font-medium text-foreground">
                    Email address
                  </label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.co.nz"
                    leftIcon={Mail}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-company" className="text-sm font-medium text-foreground">
                    Company name
                  </label>
                  <Input
                    id="quote-company"
                    name="company"
                    type="text"
                    required
                    placeholder="Your organisation"
                    leftIcon={Building2}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-companySize" className="text-sm font-medium text-foreground">
                    Company size
                  </label>
                  <div className="relative">
                    <select
                      id="quote-companySize"
                      name="companySize"
                      required
                      className="flex h-11 w-full appearance-none rounded-lg border border-input bg-background px-4 pr-10 text-sm text-foreground shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {companySizeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-message" className="text-sm font-medium text-foreground">
                    Additional notes (optional)
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-transparent hover:border-input"
                    onClick={closeModal}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="flex-1 hover:opacity-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request Quote"}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold text-foreground">
                  Quote request received!
                </div>
                <p className="text-sm text-gray-500">
                  We'll get back to you shortly with pricing details for the {selectedPlan} plan.
                </p>
              </div>
              <Button
                variant="gradient"
                size="lg"
                className="w-full"
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
