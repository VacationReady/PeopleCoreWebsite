"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Zap } from "lucide-react"
import { Button } from "@/app/components/ui/button"

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
    cta: "Start Free Beta",
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
    cta: "Join Waitlist",
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
    cta: "Contact Sales",
    popular: false,
    color: "border-purple-200 bg-purple-50"
  }
]

export function Pricing() {
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
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 sm:p-8 overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl pt-8 sm:pt-10' 
                    : 'bg-white border border-slate-200 shadow-lg'
                } hover:shadow-xl transition-all duration-300`}
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
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

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
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
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
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                  className="w-full py-3 sm:py-4 text-sm sm:text-base touch-manipulation"
                >
                  {plan.cta}
                </Button>
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
    </section>
  )
}
