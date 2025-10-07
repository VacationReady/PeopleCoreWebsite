import { BarChart3, TrendingUp, Eye, Clock, Target, PieChart } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function ReportingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <BarChart3 className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">HR Analytics & Reporting</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Executive dashboards with predictive analytics, custom KPIs, and automated insights delivery. 
            Transform your HR data into actionable intelligence with real-time reporting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
            <Eye className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Real-Time Dashboards</h3>
            <p className="text-slate-600">
              Live executive dashboards that update automatically with the latest HR metrics and key performance indicators.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
            <TrendingUp className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="text-slate-600">
              AI-powered predictions for turnover risk, performance trends, and workforce planning insights.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
            <Clock className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Automated Delivery</h3>
            <p className="text-slate-600">
              Schedule reports to be automatically generated and delivered to stakeholders via email or dashboard.
            </p>
          </div>
        </div>

        {/* Report Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Available Reports</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <PieChart className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Workforce Demographics</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Turnover Analysis</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Performance Metrics</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <Target className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Recruitment Funnel</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Absence Patterns</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Salary Benchmarking</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Training Effectiveness</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <PieChart className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Diversity & Inclusion</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <Target className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Employee Engagement</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <Eye className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Custom Reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Executive Dashboard Preview</h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Total Employees</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs text-green-400">+5.2% this quarter</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Turnover Rate</span>
                  <TrendingUp className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-2xl font-bold">8.3%</div>
                <div className="text-xs text-red-400">+1.1% vs last year</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-300">Engagement Score</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-xs text-green-400">+3.5% improvement</div>
              </div>
            </div>
            <p className="text-slate-300 text-center">
              Real-time metrics updated automatically from all HR systems
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Our Analytics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Visibility</h3>
                  <p className="text-sm text-slate-600">See everything happening in your organisation with comprehensive dashboards</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Predictive Insights</h3>
                  <p className="text-sm text-slate-600">AI identifies trends and predicts future outcomes before they happen</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Real-Time Updates</h3>
                  <p className="text-sm text-slate-600">Data refreshes automatically so you always have the latest information</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Custom KPIs</h3>
                  <p className="text-sm text-slate-600">Track the metrics that matter most to your organisation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Automated Reports</h3>
                  <p className="text-sm text-slate-600">Schedule reports to be generated and delivered automatically</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interactive Visualisations</h3>
                  <p className="text-sm text-slate-600">Drill down into data with interactive charts and graphs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Get Real-Time HR Insights Today</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Transform your HR data into actionable intelligence with our advanced analytics and reporting platform.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
