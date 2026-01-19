"use client"

import { useState } from "react"
import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export function SupportSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-16 bg-white">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, guides, and documentation..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6"
              size="lg"
            >
              Search
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-500">Popular searches:</span>
            {["Holidays Act", "KiwiSaver setup", "Leave requests", "Reporting", "User management"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="text-sm text-gray-600 hover:text-primary px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
