import { Search, BookOpen, HeadphonesIcon, MessageCircle } from "lucide-react"

export function SupportHero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 section-padding">
      <div className="container-tight">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Knowledge Base & Support Centre
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            How can we help you today?
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find answers to your questions, learn how to use PeopleCore features, and get the support you need to make the most of your HRIS.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Search Articles</h3>
              <p className="text-gray-600 text-sm">Browse our comprehensive knowledge base</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Get instant help from our support team</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Email or schedule a call with our team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
