"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const logos = [
  { name: "TechCorp", width: 120 },
  { name: "InnovateLab", width: 140 },
  { name: "FutureWorks", width: 110 },
  { name: "ScaleUp", width: 100 },
  { name: "NextGen", width: 130 },
  { name: "CloudFirst", width: 125 }
]

const testimonials = [
  {
    id: 1,
    quote: "PeopleCore transformed our HR operations overnight. What used to take our team weeks now happens in minutes through simple conversation.",
    author: "Sarah Chen",
    role: "Chief People Officer",
    company: "TechCorp",
    avatar: "SC",
    rating: 5
  },
  {
    id: 2,
    quote: "The AI understands context better than any HR system we've used. It's like having a senior HR consultant available 24/7.",
    author: "Marcus Rodriguez",
    role: "VP of Operations", 
    company: "InnovateLab",
    avatar: "MR",
    rating: 5
  },
  {
    id: 3,
    quote: "Our compliance reporting went from a monthly nightmare to an automated process. The ROI was immediate and substantial.",
    author: "Emily Watson",
    role: "Head of Finance",
    company: "FutureWorks", 
    avatar: "EW",
    rating: 5
  },
  {
    id: 4,
    quote: "PeopleCore doesn't just automate tasks—it anticipates needs. The predictive insights have revolutionized our workforce planning.",
    author: "David Kim",
    role: "CEO",
    company: "ScaleUp",
    avatar: "DK", 
    rating: 5
  },
  {
    id: 5,
    quote: "The natural language interface is incredible. Our managers can create complex workflows without any technical knowledge.",
    author: "Lisa Thompson",
    role: "Director of HR",
    company: "NextGen",
    avatar: "LT",
    rating: 5
  },
  {
    id: 6,
    quote: "We've seen a 300% improvement in HR efficiency since implementing PeopleCore. It's not just software—it's a competitive advantage.",
    author: "James Park",
    role: "COO",
    company: "CloudFirst",
    avatar: "JP",
    rating: 5
  }
]

export function SocialProof() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-center text-slate-600 mb-8">
            Trusted by forward-thinking companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Enhanced company logos with hover animations */}
            {[
              { name: "TechCorp", icon: "🚀" },
              { name: "InnovateLab", icon: "⚡" },
              { name: "FutureWorks", icon: "🌟" },
              { name: "NextGen", icon: "💫" },
              { name: "SmartSys", icon: "🔮" },
              { name: "CloudFirst", icon: "☁️" }
            ].map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative w-32 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {company.icon}
                  </span>
                  <span className="text-slate-600 font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Loved by HR Leaders Everywhere
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See why thousands of HR professionals choose PeopleCore to transform their operations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            The Numbers Speak for Themselves
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-slate-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-slate-300">Faster Workflows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-slate-300">Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$2M+</div>
              <div className="text-slate-300">Cost Savings Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
