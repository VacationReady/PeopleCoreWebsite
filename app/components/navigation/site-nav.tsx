"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/lib/utils"
import { useCalendly } from "@/app/components/sections/calendly-modal"

const navLinks = [
  { 
    label: "Product", 
    href: "#product",
    children: [
      { label: "Leave Management", href: "/leave", description: "Automated leave tracking" },
      { label: "Documents", href: "/documents", description: "Smart document management" },
      { label: "Approvals", href: "/approvals", description: "Streamlined workflows" },
      { label: "Reporting", href: "/reporting", description: "Analytics & insights" },
      { label: "Workflows", href: "/workflows", description: "Custom automations" },
      { label: "AI Copilot", href: "/ai-copilot", description: "Your HR assistant" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
]

function NavDropdown({ 
  item, 
  isScrolled,
  isHome 
}: { 
  item: typeof navLinks[0]
  isScrolled: boolean
  isHome: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const showSolidBackground = !isHome || isScrolled
  
  if (!item.children) return null
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          showSolidBackground
            ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            : "text-white/90 hover:text-white hover:bg-white/10"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-72 p-2 rounded-xl bg-white shadow-xl border border-slate-200 z-50"
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-medium text-slate-900">
                  {child.label}
                </span>
                {child.description && (
                  <span className="text-xs text-slate-500">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean
  onClose: () => void 
}) {
  const pathname = usePathname()
  const { openCalendly } = useCalendly()
  
  // Close menu when route changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  const handleBookDemo = () => {
    onClose()
    openCalendly()
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
                <span className="font-semibold text-lg text-slate-900">PeopleCore</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.children ? (
                      <MobileNavAccordion item={link} />
                    ) : (
                      <Link
                        href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                        className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-colors"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* CTA Section */}
            <div className="p-4 mt-auto border-t border-slate-200">
              <Button 
                variant="gradient" 
                size="lg" 
                className="w-full"
                onClick={handleBookDemo}
              >
                Book Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-center text-xs text-slate-500 mt-3">
                🇳🇿 Built for Aotearoa
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function MobileNavAccordion({ item }: { item: typeof navLinks[0] }) {
  const [isOpen, setIsOpen] = useState(false)
  
  if (!item.children) return null
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-colors"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-2 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="flex flex-col px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-800">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="text-xs text-slate-500">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const prefersReducedMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openCalendly } = useCalendly()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showSolidBackground = !isHome || isScrolled
  const linkClass = showSolidBackground
    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
    : "text-white/90 hover:text-white hover:bg-white/10"
  const brandText = showSolidBackground ? "text-slate-900" : "text-white"
  const secondaryText = showSolidBackground ? "text-slate-500" : "text-white/60"

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showSolidBackground && "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow" aria-hidden="true">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <div className="flex flex-col">
                <span className={cn("font-semibold text-lg leading-tight", brandText)}>
                  PeopleCore
                </span>
                <span className={cn("text-[10px] leading-tight hidden sm:block", secondaryText)}>
                  🇳🇿 Built for Aotearoa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <NavDropdown 
                      key={link.label} 
                      item={link}
                      isScrolled={isScrolled}
                      isHome={isHome}
                    />
                  )
                }
                
                const resolvedHref = link.href.startsWith("#") && !isHome ? `/${link.href}` : link.href
                return (
                  <Link
                    key={link.label}
                    href={resolvedHref}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      linkClass
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Button 
                variant="gradient" 
                size="default" 
                className="hidden sm:inline-flex group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                onClick={openCalendly}
              >
                Book Demo
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  showSolidBackground 
                    ? "hover:bg-slate-100 text-slate-700" 
                    : "hover:bg-white/10 text-white"
                )}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}
