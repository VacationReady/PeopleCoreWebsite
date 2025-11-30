"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "PeopleCore saved us during kiwifruit season. Managing 80 RSE workers with complex leave calculations used to take days. Now it's automatic.",
    author: "Sarah Mitchell",
    role: "HR Manager",
    company: "Bay of Plenty Orchards",
    metric: "95% reduction in payroll errors",
  },
  {
    quote: "The tangihanga leave workflow shows real cultural understanding. It handles the sensitivity required while ensuring our team is supported.",
    author: "Hemi Tawhiao",
    role: "People & Culture Lead",
    company: "Ngāti Porou Health",
    metric: "100% staff satisfaction",
  },
  {
    quote: "We needed pay equity compliance for 300 council employees. PeopleCore identified gaps we'd missed and gave us a clear roadmap.",
    author: "Jennifer Wong",
    role: "Chief People Officer",
    company: "Wellington City Council",
    metric: "Full pay equity achieved",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Trusted by
            <br />
            <span className="text-primary">NZ businesses</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-pastel-lavender rounded-3xl p-8 md:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground">{testimonials[current].author}</div>
                    <div className="text-gray-500 text-sm">{testimonials[current].role}, {testimonials[current].company}</div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-primary">
                    {testimonials[current].metric}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
