"use client"

import { motion } from "framer-motion"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#product" },
    { name: "Pricing", href: "/pricing" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Demo", href: "#demo" },
    { name: "Integrations", href: "#integrations" },
  ],
  compliance: [
    { name: "Holidays Act Guide", href: "#resources" },
    { name: "KiwiSaver Compliance", href: "#resources" },
    { name: "Fair Pay Agreements", href: "#resources" },
    { name: "Security Whitepaper", href: "#resources" },
    { name: "Data Residency", href: "#compliance" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "#compliance" },
    { name: "NZ Privacy Act 2020", href: "#compliance" },
    { name: "Acceptable Use", href: "/acceptable-use" },
  ],
  support: [
    { name: "Help Centre", href: "/help" },
    { name: "Contact NZ Team", href: "mailto:hello@peoplecore.co.nz" },
    { name: "Book a Demo", href: "https://calendly.com/peoplecore-nz/demo" },
    { name: "System Status", href: "/status" },
    { name: "API Documentation", href: "/docs" },
  ]
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/peoplecore-nz" },
  { name: "Email", icon: Mail, href: "mailto:hello@peoplecore.co.nz" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                PeopleCore
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                🇳🇿 New Zealand's most advanced HRIS. Built for Holidays Act compliance, 
                KiwiSaver management, and Fair Pay Agreements. Your data stays in Aotearoa.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Compliance Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4">NZ Compliance</h4>
              <ul className="space-y-3">
                {footerLinks.compliance.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Stay Updated on NZ Employment Law</h4>
              <p className="text-slate-300">Get Holidays Act updates, compliance tips, and product news for Kiwi businesses.</p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-sm">
            © 2025 PeopleCore NZ Ltd. All rights reserved. 🇳🇿 Built in Aotearoa.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>Made with ❤️ for Kiwi businesses</span>
            <span>•</span>
            <span>Data hosted in Auckland</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
