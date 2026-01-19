import { MessageCircle, Mail, Phone, Calendar } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export function ContactSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our support team is here to help you succeed with PeopleCore
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-6">
              Get instant help from our support team during business hours
            </p>
            <Button variant="outline" className="w-full">
              Start Chat
            </Button>
            <p className="text-sm text-gray-500 mt-3">Mon-Fri, 9am-5pm NZST</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Email Support</h3>
            <p className="text-gray-600 mb-6">
              Send us a detailed message and we'll respond within 24 hours
            </p>
            <Button variant="outline" className="w-full">
              Send Email
            </Button>
            <p className="text-sm text-gray-500 mt-3">support@peoplecore.co.nz</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Schedule a Call</h3>
            <p className="text-gray-600 mb-6">
              Book a personalized demo or training session with our team
            </p>
            <Button variant="outline" className="w-full">
              Book Call
            </Button>
            <p className="text-sm text-gray-500 mt-3">30-minute sessions available</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Support</h3>
            <p className="text-gray-600 mb-6">
              For urgent issues affecting your business operations, we offer priority support to all customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Line
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                urgent@peoplecore.co.nz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
