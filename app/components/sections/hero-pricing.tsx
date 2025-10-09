"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Zap } from "lucide-react"
import { Button } from "@/app/components/ui/button"

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
      "Email support"
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
      "Priority support"
    ],
    cta: "Join Waitlist",
    popular: true,
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
      "24/7 phone support"
    ],
    cta: "Contact Sales",
    color: "border-purple-200 bg-purple-50"
  }
]

export function HeroPricing() {
  return (
    <section className="py-16 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Start free during our beta period. No hidden fees, no surprises. 
            Just powerful AI-driven HR automation.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 font-medium">Beta pricing available for early adopters</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const BadgeIcon = plan.badge.icon
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.color} rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50 scale-105' : ''
                }`}
              >
                {/* Badge */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${plan.badge.color} shadow-lg`}>
                  <BadgeIcon className="w-3 h-3" />
                  {plan.badge.text}
                </div>

                {/* Plan header */}
                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-600 ml-2 text-sm">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
