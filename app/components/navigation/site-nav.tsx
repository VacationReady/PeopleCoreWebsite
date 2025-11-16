"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Compliance", href: "#compliance" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "/pricing" },
]

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const prefersReducedMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showSolidBackground = !isHome || isScrolled
  const linkClass = showSolidBackground
    ? "text-slate-700 hover:text-slate-900"
    : "text-white/90 hover:text-white"
  const brandText = showSolidBackground ? "text-slate-900" : "text-white"
  const secondaryText = showSolidBackground ? "text-slate-500" : "text-white/60"

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: showSolidBackground ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
        backdropFilter: showSolidBackground ? "blur(18px)" : "blur(0px)",
        boxShadow: showSolidBackground ? "0 4px 16px rgba(15, 23, 42, 0.15)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true" />
            <span className={`${brandText} font-semibold text-lg`}>PeopleCore</span>
            <span className={`ml-2 text-xs hidden sm:inline ${secondaryText}`} aria-label="Built for Aotearoa New Zealand">
              🇳🇿 Built for Aotearoa
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const resolvedHref = link.href.startsWith("#") && !isHome ? `/${link.href}` : link.href
                return (
                  <Link
                    key={link.label}
                    href={resolvedHref}
                    className={`${linkClass} transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <Button variant="gradient" size="default" className="group" asChild>
              <a
                href="https://calendly.com/peoplecore-nz/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
