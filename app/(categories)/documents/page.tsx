import { FileText, Upload, Shield, Zap, CheckCircle, Search } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Document Management</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            AI-powered document generation, e-signatures, and smart contract management with compliance tracking. 
            Streamline all your HR documentation processes with intelligent automation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <Zap className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Auto-Generation</h3>
            <p className="text-slate-600">
              Generate contracts, policies, and HR documents automatically using AI templates that adapt to your company's needs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <Upload className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Upload</h3>
            <p className="text-slate-600">
              Intelligent document processing that extracts key information, categorises files, and ensures compliance automatically.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compliance Tracking</h3>
            <p className="text-slate-600">
              Automatic compliance monitoring with audit trails, retention policies, and regulatory requirement tracking.
            </p>
          </div>
        </div>

        {/* Document Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Document Types Managed</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Employment Contracts</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Offer Letters</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Non-Disclosure Agreements</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Performance Reviews</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Training Certificates</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Policy Documents</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Employee Handbooks</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Disciplinary Records</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Exit Documentation</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Custom Templates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <Search className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Intelligent Search</h3>
              <p className="text-slate-600 mb-4">
                Find any document instantly with AI-powered search that understands context, content, and relationships between documents.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Natural language queries</li>
                <li>• Content-based search</li>
                <li>• Metadata filtering</li>
                <li>• Version history tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-slate-600 mb-4">
                Enterprise-grade security with role-based access, audit trails, and automatic compliance monitoring for all regulations.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• GDPR compliance</li>
                <li>• Role-based permissions</li>
                <li>• Audit trail logging</li>
                <li>• Secure cloud storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Upload or Generate</h3>
              <p className="text-sm text-slate-600">Upload existing documents or generate new ones using AI templates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Processing</h3>
              <p className="text-sm text-slate-600">AI extracts metadata, categorises content, and checks compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-slate-600">Documents stored securely with appropriate access controls</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Retrieval</h3>
              <p className="text-sm text-slate-600">Find and access documents instantly with intelligent search</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Transform Your Document Management</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience 10x faster document processing with AI-powered automation and intelligent organisation.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
