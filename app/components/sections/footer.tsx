"use client"

import Link from "next/link"

const footerLinks = {
  product: [
    { name: "Leave Management", href: "/leave" },
    { name: "Documents", href: "/documents" },
    { name: "Approvals", href: "/approvals" },
    { name: "Reporting", href: "/reporting" },
    { name: "Workflows", href: "/workflows" },
    { name: "AI Copilot", href: "/ai-copilot" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "mailto:hello@peoplecore.co.nz" },
    { name: "Book Demo", href: "https://calendly.com/peoplecore-nz/demo" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-tight section-padding">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              peoplecore
            </Link>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              🇳🇿 New Zealand's most advanced HRIS. 
              Built for Holidays Act compliance.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-500 hover:text-foreground transition-colors text-sm"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 PeopleCore NZ Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Data hosted in Auckland</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
