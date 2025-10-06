"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Beta Free",
    price: "Free",
    period: "During Beta",
    description: "Perfect for exploring PeopleCore's capabilities",
    badge: { text: "Limited Time", icon: Sparkles, color: "from-green-500 to-emerald-500" },
    features: [
      "Up to 50 employees",
      "Core AI workflows",
      "Basic reporting",
      "Email support",
      "Standard integrations",
      "Mobile app access"
    ],
    cta: "Start Free Beta",
    popular: false,
    color: "border-green-200 bg-green-50"
  },
  {
    name: "Professional", 
    price: "$12",
    period: "per employee/month",
    description: "Advanced AI automation for growing teams",
    badge: { text: "Most Popular", icon: Crown, color: "from-blue-500 to-purple-500" },
    features: [
      "Unlimited employees",
      "Advanced AI workflows", 
      "Custom reporting & analytics",
      "Priority support",
      "All integrations",
      "Advanced security",
      "Custom workflows",
      "API access"
    ],
    cta: "Join Waitlist",
    popular: true,
    color: "border-blue-200 bg-blue-50"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact sales",
    description: "White-glove service for large organizations",
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Start free during our beta period. No hidden fees, no surprises. 
            Just powerful AI-driven HR automation.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 font-medium">Beta pricing available for early adopters</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const BadgeIcon = plan.badge.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl scale-105' 
                    : 'border-slate-200 shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${plan.badge.color} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}>
                      <BadgeIcon className="w-4 h-4" />
                      {plan.badge.text}
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-600 ml-2">/{plan.period}</span>
                    )}
                  </div>

                  {!plan.popular && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${plan.badge.color} text-white text-sm font-medium`}>
                      <BadgeIcon className="w-3 h-3" />
                      {plan.badge.text}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                  className="w-full"
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
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                How long is the beta period?
              </h4>
              <p className="text-slate-600">
                The beta period runs until Q2 2024. All beta users will receive special pricing when we launch.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Can I upgrade or downgrade anytime?
              </h4>
              <p className="text-slate-600">
                Yes, you can change your plan at any time. Changes take effect immediately with prorated billing.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                What integrations are included?
              </h4>
              <p className="text-slate-600">
                We support 100+ integrations including Slack, Microsoft 365, Google Workspace, and major payroll systems.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Is my data secure?
              </h4>
              <p className="text-slate-600">
                Absolutely. We're SOC 2 compliant with enterprise-grade security, encryption, and regular audits.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
