"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, User, Building2, Phone } from "lucide-react"
import { SiteNav } from "@/app/components/navigation/site-nav"
import { Footer } from "@/app/components/sections/footer"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { submitContactForm } from "@/app/actions/contact"

const companySizeOptions = [
  { value: "1-5", label: "1-5 people" },
  { value: "5-20", label: "5-20 people" },
  { value: "20-50", label: "20-50 people" },
  { value: "50-100", label: "50-100 people" },
  { value: "100-250", label: "100-250 people" },
  { value: "250+", label: "250+ people" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        formElement.reset()
      } else {
        console.error(result.message)
      }
    } catch (error) {
      console.error("Contact form submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-tight grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
              We typically reply within 1 business day
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Talk to
              <br />
              <span className="text-primary">the PeopleCore team</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-500">
              Share a few details and we&apos;ll follow up with the right next step - whether
              that&apos;s a quick question, a product demo, or a deeper conversation about
              your HR setup.
            </p>

            <div className="grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email us directly</div>
                  <a
                    href="mailto:hi@peoplecore.co.nz"
                    className="font-medium text-primary hover:underline"
                  >
                    hi@peoplecore.co.nz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Or give us a call</div>
                  <p className="text-gray-500">0800 PEOPLECORE (Lines open 9am - 5pm)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="elevated" padding="lg" className="shadow-lg shadow-primary/10">
              {!isSubmitted && (
                <CardHeader className="space-y-1">
                  <CardTitle>Contact us</CardTitle>
                  <CardDescription>
                    Tell us a bit about you and we&apos;ll be in touch shortly.
                  </CardDescription>
                </CardHeader>
              )}

              <CardContent className="mt-4">
                {isSubmitted ? (
                  <div className="space-y-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg font-semibold text-foreground">
                        Thanks for reaching out
                      </div>
                      <p className="text-sm text-gray-500">
                        We&apos;ve received your details and will come back to you soon.
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">
                      If it&apos;s urgent, email us at
                      {" "}
                      <a
                        href="mailto:hi@peoplecore.co.nz"
                        className="font-medium text-primary hover:underline"
                      >
                        hi@peoplecore.co.nz
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        leftIcon={User}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.co.nz"
                        leftIcon={Mail}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Your organisation"
                        leftIcon={Building2}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="companySize"
                        className="text-sm font-medium text-foreground"
                      >
                        Company size
                      </label>
                      <div className="relative">
                        <select
                          id="companySize"
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
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
                        placeholder="Give us a bit of context so we can connect you with the right person."
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>

                      <p className="text-center text-xs text-gray-400">
                        By submitting this form, you agree to be contacted about PeopleCore.
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
