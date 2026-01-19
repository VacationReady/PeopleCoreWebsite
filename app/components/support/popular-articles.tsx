import { Clock, Star, ArrowRight } from "lucide-react"

const popularArticles = [
  {
    title: "Getting Started with PeopleCore",
    description: "Complete guide to setting up your account and basic configuration",
    category: "Getting Started",
    readTime: "5 min read",
    rating: 4.9,
    href: "/support/getting-started/setup"
  },
  {
    title: "Understanding Holidays Act Compliance",
    description: "Learn how PeopleCore ensures 100% compliance with NZ Holidays Act",
    category: "Leave Management",
    readTime: "8 min read",
    rating: 4.8,
    href: "/support/leave-management/holidays-act"
  },
  {
    title: "Setting Up KiwiSaver Contributions",
    description: "Step-by-step guide to configuring KiwiSaver for your employees",
    category: "Compliance",
    readTime: "6 min read",
    rating: 4.7,
    href: "/support/compliance/kiwisaver"
  },
  {
    title: "Managing Leave Requests",
    description: "How to create, approve, and track leave requests efficiently",
    category: "Leave Management",
    readTime: "4 min read",
    rating: 4.9,
    href: "/support/leave-management/requests"
  },
  {
    title: "Creating Custom Reports",
    description: "Build powerful reports to gain insights into your workforce",
    category: "Reporting",
    readTime: "7 min read",
    rating: 4.6,
    href: "/support/reporting/custom-reports"
  },
  {
    title: "User Roles and Permissions",
    description: "Configure user access levels and permissions for security",
    category: "Employee Management",
    readTime: "5 min read",
    rating: 4.8,
    href: "/support/employee-management/permissions"
  }
]

export function PopularArticles() {
  return (
    <section className="py-20 bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most helpful guides and documentation for PeopleCore users
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {popularArticles.map((article, index) => (
            <a
              key={index}
              href={article.href}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 hover:border-primary/20"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {article.rating}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/support/articles"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
