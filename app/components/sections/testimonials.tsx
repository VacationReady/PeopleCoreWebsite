"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "PeopleCore saved us during kiwifruit season. Managing 80 RSE workers with complex leave calculations used to take days. Now it's automatic and 100% Holidays Act compliant.",
    author: "Sarah Mitchell",
    role: "HR Manager",
    company: "Bay of Plenty Orchards Ltd",
    location: "Tauranga",
    metric: "95% reduction in payroll errors",
    industry: "Agribusiness"
  },
  {
    id: 2,
    quote: "The tangihanga leave workflow shows real cultural understanding. It handles the sensitivity required while ensuring our team is supported and coverage is managed respectfully.",
    author: "Hemi Tawhiao",
    role: "People & Culture Lead",
    company: "Ngāti Porou Health Services",
    location: "Gisborne",
    metric: "100% staff satisfaction with leave processes",
    industry: "Healthcare"
  },
  {
    id: 3,
    quote: "We needed pay equity compliance for 300 council employees. PeopleCore's Equal Pay Act analysis identified gaps we'd missed and gave us a clear remediation roadmap.",
    author: "Jennifer Wong",
    role: "Chief People Officer",
    company: "Wellington City Council",
    location: "Wellington",
    metric: "Full pay equity compliance achieved",
    industry: "Public Sector"
  },
  {
    id: 4,
    quote: "Shift rostering for our 24/7 aged care facility was a nightmare. PeopleCore handles MECA rates, penal rates, and rest breaks automatically. It's transformed our operations.",
    author: "David Chen",
    role: "Operations Director",
    company: "CareNZ Group",
    location: "Auckland",
    metric: "40 hours saved per week on rostering",
    industry: "Healthcare"
  },
  {
    id: 5,
    quote: "As a construction company, we deal with multiple sites and variable hours. The FBAPS calculations are spot-on every time. Our employees trust the system completely.",
    author: "Mike Patterson",
    role: "General Manager",
    company: "BuildRight Construction",
    location: "Christchurch",
    metric: "Zero leave calculation disputes",
    industry: "Construction"
  },
  {
    id: 6,
    quote: "The Fair Pay Agreement automation is brilliant. When the cleaning sector FPA came in, PeopleCore updated all our rates overnight. No manual work, no errors.",
    author: "Lisa Sharma",
    role: "Finance Director",
    company: "CleanCo Services",
    location: "Auckland",
    metric: "100% FPA compliance from day one",
    industry: "Facilities Management"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Kiwi Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From Northland to Southland, New Zealand businesses trust PeopleCore for employment law compliance.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-blue-600" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed relative z-10">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-full px-6 py-3 mb-8">
                  <p className="text-blue-900 font-bold text-sm">
                    📊 {currentTestimonial.metric}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-4 border-t border-slate-200 pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-lg">{currentTestimonial.author}</p>
                    <p className="text-slate-600">{currentTestimonial.role}</p>
                    <p className="text-slate-700 font-medium">{currentTestimonial.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <span>📍 {currentTestimonial.location}</span>
                      <span>•</span>
                      <span>{currentTestimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-slate-700 hover:text-blue-600 border-2 border-slate-200 hover:border-blue-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-slate-700 hover:text-blue-600 border-2 border-slate-200 hover:border-blue-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Company Logos / Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500 mb-6">TRUSTED BY NEW ZEALAND ORGANISATIONS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <p className="text-slate-600 font-semibold">🌾 Agribusiness</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <p className="text-slate-600 font-semibold">🏥 Healthcare</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <p className="text-slate-600 font-semibold">🏛️ Public Sector</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <p className="text-slate-600 font-semibold">🏗️ Construction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
