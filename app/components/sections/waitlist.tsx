"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { joinWaitlist } from "@/app/actions/waitlist"
import { Mail, User, Building, Briefcase, CheckCircle, AlertCircle } from "lucide-react"

export function Waitlist() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string; errors?: Record<string, string> } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await joinWaitlist(formData)
      setResult(result)
      
      if (result.success) {
        // Reset form on success
        const form = document.getElementById('waitlist-form') as HTMLFormElement
        form?.reset()
      }
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your HR?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of HR leaders getting early access to PeopleCore. 
            Be among the first to experience the future of HR automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          {result?.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
              <p className="text-white/80 mb-6">{result.message}</p>
              <Button
                onClick={() => setResult(null)}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Join Another Person
              </Button>
            </motion.div>
          ) : (
            <form id="waitlist-form" action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {result?.errors?.name && (
                    <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {result.errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your work email"
                    />
                  </div>
                  {result?.errors?.email && (
                    <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {result.errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Role Field */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-white/90 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <select
                      id="role"
                      name="role"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm appearance-none"
                    >
                      <option value="" className="bg-slate-800">Select your role</option>
                      <option value="HR Director" className="bg-slate-800">HR Director</option>
                      <option value="CHRO" className="bg-slate-800">Chief People Officer</option>
                      <option value="HR Manager" className="bg-slate-800">HR Manager</option>
                      <option value="Operations" className="bg-slate-800">Operations</option>
                      <option value="CEO/Founder" className="bg-slate-800">CEO/Founder</option>
                      <option value="Other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {result?.success === false && !result.errors && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {result.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isPending}
                  variant="gradient"
                  size="xl"
                  className="w-full md:w-auto px-12"
                >
                  {isPending ? "Joining..." : "Join the Waitlist"}
                </Button>
                
                <p className="text-white/60 text-sm mt-4">
                  Free during beta • No spam, ever • Unsubscribe anytime
                </p>
              </div>
            </form>
          )}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-white/80">
            <div>
              <div className="text-2xl font-bold text-white mb-1">5,000+</div>
              <div className="text-sm">Beta Signups</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm">Companies Waiting</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm">Countries Represented</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
