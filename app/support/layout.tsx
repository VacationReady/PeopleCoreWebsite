import Link from "next/link"
import { ArrowLeft, Search, BookOpen } from "lucide-react"

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Support Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-tight">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link 
                href="/support" 
                className="flex items-center gap-2 text-gray-600 hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Support</span>
              </Link>
              
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">PeopleCore Support</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search support articles..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Page Content */}
      {children}
    </div>
  )
}
