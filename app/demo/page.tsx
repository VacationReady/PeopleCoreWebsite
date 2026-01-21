import Link from "next/link"
import { ArrowRight, Calendar, FileText } from "lucide-react"
import { Footer } from "@/app/components/sections/footer"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              See PeopleCore in Action
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our comprehensive demo to discover how PeopleCore streamlines your HR operations and empowers your team.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
              <div style={{ padding: "49.11% 0 0 0", position: "relative" }}>
                <iframe 
                  src="https://player.vimeo.com/video/1156686393?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="PeopleCore Dashboard Demo"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Link 
              href="/contact?type=demo"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book an In-Depth Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact?type=quote"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground border-2 border-border rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary"
            >
              <FileText className="w-5 h-5" />
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="section-padding bg-pastel-lavender">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You'll See in the Demo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intuitive Dashboard</h3>
              <p className="text-muted-foreground">
                Navigate through our clean, user-friendly interface designed for efficiency and ease of use.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Powerful Features</h3>
              <p className="text-muted-foreground">
                Explore comprehensive HR tools from leave management to performance tracking and beyond.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Ready</h3>
              <p className="text-muted-foreground">
                See how PeopleCore works seamlessly across all devices for on-the-go HR management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your HR?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how PeopleCore can be tailored to your organization's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?type=demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Your Personal Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <script src="https://player.vimeo.com/api/player.js" async />
    </main>
  )
}
