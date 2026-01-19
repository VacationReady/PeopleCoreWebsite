import { FileText, Users, Settings, Shield, Calendar, Brain, ChevronRight } from "lucide-react"

const categories = [
  {
    title: "Getting Started",
    description: "New to PeopleCore? Start here with setup and onboarding guides",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    href: "/support/getting-started",
    articleCount: 12
  },
  {
    title: "Leave Management",
    description: "Master Holidays Act compliance and leave request workflows",
    icon: Calendar,
    color: "bg-green-50 text-green-600",
    href: "/support/leave-management",
    articleCount: 18
  },
  {
    title: "Employee Management",
    description: "User profiles, permissions, and employee data management",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    href: "/support/employee-management",
    articleCount: 15
  },
  {
    title: "KiwiSaver & Compliance",
    description: "KiwiSaver setup, tax compliance, and NZ employment law",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    href: "/support/compliance",
    articleCount: 22
  },
  {
    title: "Reporting & Analytics",
    description: "Create reports, analyze data, and export information",
    icon: Settings,
    color: "bg-orange-50 text-orange-600",
    href: "/support/reporting",
    articleCount: 14
  },
  {
    title: "AI Copilot",
    description: "Get help with AI-powered features and automation",
    icon: Brain,
    color: "bg-indigo-50 text-indigo-600",
    href: "/support/ai-copilot",
    articleCount: 8
  }
]

export function SupportCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized knowledge base
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.title}
                href={category.href}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-primary/20"
              >
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.articleCount} articles
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
