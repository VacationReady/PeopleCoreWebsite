"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Send, MessageSquare, Zap, BarChart3, Users, FileText, CheckCircle, Upload, Calendar, Mail, Sparkles, PartyPopper } from "lucide-react"

// Enhanced RIGHT-SIDE workflow animation component
function StepAnimation({ step, isActive, workflowType }: { step: any, isActive: boolean, workflowType: string }) {
  if (!isActive) return null

  // eNPS Survey Workflow Animations - RIGHT SIDE ONLY
  if (workflowType === "enps") {
    switch (step.id) {
      case 1: // Survey Time! - Calendar ping
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-red-50 border-2 border-red-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-2xl"
              >
                📅
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-red-600 font-bold text-lg"
              >
                ❌
              </motion.div>
            </div>
            <div className="text-sm font-bold text-red-700">Survey Time!</div>
            <div className="text-xs text-red-600">Monthly pulse check</div>
          </motion.div>
        )
      
      case 2: // eNPS shipped via email animation
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-3xl mb-2"
              >
                📧
              </motion.div>
              <div className="text-sm font-bold text-blue-700">eNPS Survey Shipped!</div>
            </div>
            <div className="space-y-1">
              {["Engineering", "Sales", "Marketing", "HR", "Finance"].map((dept, i) => (
                <motion.div
                  key={dept}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 bg-white rounded p-1"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                  <span className="text-xs text-slate-700">{dept}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="text-xs text-green-600 ml-auto"
                  >
                    ✓
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 3: // Simulate clicking through questions with anonymity
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl mb-2"
              >
                🔒
              </motion.div>
              <div className="text-sm font-bold text-purple-700">Anonymous Responses</div>
            </div>
            
            <div className="bg-white rounded-lg p-3 mb-3">
              <div className="text-xs font-medium text-slate-700 mb-2">Question:</div>
              <div className="text-xs text-slate-600 mb-2">"How likely are you to recommend PeopleCore?"</div>
              
              <div className="flex gap-1 mb-2">
                {[0,1,2,3,4,5,6,7,8,9,10].map((num) => (
                  <motion.button
                    key={num}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: num * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-4 h-4 text-white text-xs rounded flex items-center justify-center ${
                      num === 8 ? 'bg-green-500' : 'bg-slate-300'
                    }`}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <span className="text-xs text-green-600 font-medium">✓ Anonymous submission</span>
              </motion.div>
            </div>
          </motion.div>
        )

      case 4: // AI analysing results
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-green-50 border-2 border-green-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                🤖
              </motion.div>
              <div className="text-sm font-bold text-green-700">AI Analysing Results</div>
              <div className="text-xs text-green-600">Processing 247 responses...</div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-2">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                  <span className="text-xs font-medium text-slate-700">Sentiment Analysis</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5 }}
                  className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
              
              <div className="bg-white rounded-lg p-2">
                <div className="flex items-center gap-2 mb-1">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    className="w-1.5 h-1.5 bg-green-500 rounded-full"
                  />
                  <span className="text-xs font-medium text-slate-700">Trend Detection</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )

      case 5: // Report shipped to CEO
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                📊
              </motion.div>
              <div>
                <div className="text-sm font-bold text-yellow-700">CEO Report Shipped!</div>
                <div className="text-xs text-yellow-600">Executive Summary</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs font-semibold text-slate-900 mb-2">📈 eNPS Report - March 2024</div>
              
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-green-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-green-600">+42</div>
                  <div className="text-xs text-slate-600">Overall eNPS</div>
                </div>
                <div className="bg-blue-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-blue-600">89%</div>
                  <div className="text-xs text-slate-600">Response Rate</div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-slate-600 bg-slate-50 rounded p-2"
              >
                <strong>Key Insights:</strong> Employee satisfaction up 12% vs last quarter.
              </motion.div>
            </div>
          </motion.div>
        )
    }
  }

  // Performance Review Workflow Animations  
  if (workflowType === "performance") {
    switch (step.id) {
      case 1: // Q1 Results Time! popup
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0] 
                }}
                transition={{ duration: 0.8, repeat: 2 }}
                className="text-2xl"
              >
                📅
              </motion.div>
              <div>
                <div className="text-sm font-bold text-emerald-700">Q1 Results Time!</div>
                <div className="text-xs text-emerald-600">Performance Review</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs font-semibold text-slate-900 mb-2">🎯 Q1 Performance Data Ready</div>
              <div className="text-xs text-slate-600">
                Compiling performance metrics across all departments...
              </div>
            </div>
          </motion.div>
        )

      case 2: // Data compiling animation
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-2xl mb-2"
              >
                📊
              </motion.div>
              <div className="text-sm font-bold text-blue-700">Data Compilation</div>
              <div className="text-xs text-blue-600">Gathering performance metrics...</div>
            </div>
            
            <div className="space-y-1">
              {[
                { name: "Goal Completion", value: "94%" },
                { name: "Project Delivery", value: "87%" },
                { name: "Team Collaboration", value: "91%" },
                { name: "Innovation Score", value: "89%" }
              ].map((metric, i) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center justify-between bg-white rounded p-2"
                >
                  <span className="text-xs text-slate-700">{metric.name}</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="text-xs font-bold text-green-600"
                  >
                    {metric.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 3: // Grouping by departments
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-purple-50 border-2 border-purple-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                🏢
              </motion.div>
              <div className="text-sm font-bold text-purple-700">Department Grouping</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {[
                { dept: "Engineering", count: "23" },
                { dept: "Sales", count: "18" },
                { dept: "Marketing", count: "12" },
                { dept: "HR", count: "8" }
              ].map((item, i) => (
                <motion.div
                  key={item.dept}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg p-2 text-center border"
                >
                  <div className="text-sm font-bold text-purple-600">{item.count}</div>
                  <div className="text-xs text-slate-600">{item.dept}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 4: // Charts and dashboards generated
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                📈
              </motion.div>
              <div className="text-sm font-bold text-indigo-700">Dashboard Generation</div>
              <div className="text-xs text-indigo-600">Creating visualisations...</div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 rounded p-2 text-center"
                >
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-1"></div>
                  <div className="text-xs text-slate-600">Performance</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-green-50 rounded p-2 text-center"
                >
                  <div className="h-4 bg-gradient-to-r from-green-400 to-green-600 rounded mb-1"></div>
                  <div className="text-xs text-slate-600">Goals</div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-purple-50 rounded p-2"
              >
                <div className="h-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded mb-1"></div>
                <div className="text-xs text-slate-600 text-center">Department Comparison</div>
              </motion.div>
            </div>
          </motion.div>
        )

      case 5: // Animation of managers reviewing dashboard
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-orange-50 border-2 border-orange-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                👥
              </motion.div>
              <div>
                <div className="text-sm font-bold text-orange-700">Manager Review</div>
                <div className="text-xs text-orange-600">Dashboard distributed</div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Sarah Johnson", role: "Engineering", status: "Reviewing" },
                { name: "Mike Chen", role: "Sales", status: "Completed" },
                { name: "Emma Wilson", role: "Marketing", status: "In Progress" }
              ].map((manager, i) => (
                <motion.div
                  key={manager.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-2 bg-white rounded p-2"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">{manager.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-slate-900">{manager.name}</div>
                    <div className="text-xs text-slate-500">{manager.role}</div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className={`text-xs px-2 py-1 rounded-full ${
                      manager.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      manager.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {manager.status}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
    }
  }

  // Onboarding Workflow Animations (existing)
  if (workflowType === "onboarding") {
    switch (step.id) {
      case 1: // Welcome Email
        return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
            >
              <div className="text-center mb-3">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl mb-2"
                >
                  📧
                </motion.div>
                <div className="text-sm font-bold text-blue-700">Welcome Email</div>
              </div>
              
              <div className="bg-white rounded-lg p-2">
                <div className="text-xs font-bold text-slate-900 mb-1">Hi James, welcome! 👋</div>
                <div className="text-xs text-slate-600 mb-1">from hr@peoplecore.com</div>
                <div className="bg-slate-50 rounded p-1 text-center">
                  <div className="text-xs text-slate-700 mb-1">
                    Your onboarding starts now!
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded text-xs">
                    Begin →
                  </div>
                </div>
              </div>
            </motion.div>
          )
        break

    case 2: // Create Checklist
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-2">
              <span className="text-2xl">📋</span>
              <div className="text-sm font-bold text-blue-700">Onboarding Checklist</div>
            </div>
            <div className="bg-white rounded-lg p-2">
              <div className="space-y-1">
                {[
                  "IT Laptop",
                  "Payroll Setup", 
                  "Templates"
                ].map((task, i) => (
                  <motion.div
                    key={task}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.2 + 0.1 }}
                      className="w-3 h-3 bg-green-500 rounded flex items-center justify-center"
                    >
                      <CheckCircle className="w-2 h-2 text-white" />
                    </motion.div>
                    <span className="text-xs text-slate-700">{task}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      break

    case 3: // Document Upload
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-2">
              <span className="text-2xl">📄</span>
              <div className="text-sm font-bold text-blue-700">Document Upload</div>
            </div>
            <div className="bg-white rounded-lg p-2">
              <div className="space-y-1">
                {["ID.pdf", "Contract.pdf", "Tax.pdf"].map((doc, i) => (
                  <motion.div
                    key={doc}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 p-1 bg-slate-50 rounded"
                  >
                    <span className="text-blue-600">📄</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-slate-900">{doc}</div>
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                        className="h-0.5 bg-green-500 rounded-full mt-0.5"
                      />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.7 }}
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      break

    case 4: // Verify Documents
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-green-50 border-2 border-green-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                ✅
              </motion.div>
              <div className="text-sm font-bold text-green-700">Document Verification</div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <div className="space-y-1">
                {[
                  { doc: "ID Document", status: "✓ Verified" },
                  { doc: "Contract", status: "✓ Signed" },
                  { doc: "Tax Form", status: "✓ Complete" }
                ].map((item, i) => (
                  <motion.div
                    key={item.doc}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-700">{item.doc}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                      className="text-green-600 font-medium"
                    >
                      {item.status}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      break

    case 5: // Assign Buddy
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                👥
              </motion.div>
              <div className="text-sm font-bold text-blue-700">Buddy Assignment</div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-1">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  <div className="text-xs font-medium">James</div>
                  <div className="text-xs text-slate-500">New Hire</div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-red-500 text-sm"
                >
                  ❤️
                </motion.div>

                <motion.div
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-1">
                    <span className="text-white text-xs">👩</span>
                  </div>
                  <div className="text-xs font-medium">Sarah</div>
                  <div className="text-xs text-slate-500">Buddy</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
      break

    case 6: // Training Schedule
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                📚
              </motion.div>
              <div className="text-sm font-bold text-blue-700">Training Schedule</div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <div className="space-y-1">
                {[
                  "Culture 101",
                  "HR Policies", 
                  "System Access",
                  "Dept Intro"
                ].map((training, i) => (
                  <motion.div
                    key={training}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 p-1 bg-slate-50 rounded text-xs"
                  >
                    <span className="text-blue-600">📅</span>
                    <span className="text-slate-700">{training}</span>
                    <span className="text-slate-500 ml-auto">Day {i + 1}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      break

    case 7: // Completion Celebration
      return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 shadow-lg w-full h-full flex flex-col justify-center overflow-hidden"
          >
            <div className="text-center mb-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                🎉
              </motion.div>
              <div className="text-sm font-bold text-green-700">Completion Celebration</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center border border-green-200">
              <div className="text-xs font-bold text-green-900 mb-1">Congratulations James!</div>
              <div className="text-xs text-green-700 mb-2">
                Onboarding complete! Welcome to the team!
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded text-xs font-medium"
              >
                Start Your First Day! 🚀
              </motion.div>
            </div>
          </motion.div>
        )
      break
    }
  }

  return null
}

// Custom workflow visualization component (no external dependencies)
function WorkflowNode({ node, index, isActive, workflowType, activeStep }: { node: any, index: number, isActive: boolean, workflowType: string, activeStep: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
        isActive 
          ? 'bg-blue-50 border-blue-300 shadow-lg' 
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
        }`}>
          {node.icon}
        </div>
        <span className="font-medium text-slate-800">{node.label}</span>
      </div>
      
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  )
}

const demoPrompts = [
  {
    id: 1,
    text: "Create a monthly eNPS survey anonymised by department and send my SLT a report once complete.",
    icon: BarChart3,
    workflowType: "enps",
    workflow: [
      { id: 1, icon: "📅", label: "Survey Time!", description: "Calendar ping notification" },
      { id: 2, icon: "📧", label: "eNPS Distribution", description: "Email survey to departments" },
      { id: 3, icon: "🔒", label: "Anonymous Responses", description: "Collect anonymous feedback" },
      { id: 4, icon: "🤖", label: "AI Analysis", description: "Process sentiment & trends" },
      { id: 5, icon: "📊", label: "CEO Report", description: "Ship executive summary" }
    ]
  },
  {
    id: 2,
    text: "Set up new employee onboarding with document uploads and celebration milestones.",
    icon: Users,
    workflowType: "onboarding",
    workflow: [
      { id: 1, icon: "👋", label: "Welcome Email", description: "Send personalized welcome" },
      { id: 2, icon: "📋", label: "Create Checklist", description: "Generate onboarding tasks" },
      { id: 3, icon: "📄", label: "Document Upload", description: "Collect required documents" },
      { id: 4, icon: "✅", label: "Verify Documents", description: "Auto-check completeness" },
      { id: 5, icon: "👥", label: "Assign Buddy", description: "Match with team member" },
      { id: 6, icon: "📚", label: "Training Schedule", description: "Book required sessions" },
      { id: 7, icon: "🎉", label: "Completion Celebration", description: "Send congratulations!" }
    ]
  },
  {
    id: 3,
    text: "Generate quarterly performance reports with automated insights and manager notifications.",
    icon: FileText,
    workflowType: "performance",
    workflow: [
      { id: 1, icon: "📅", label: "Q1 Results Time!", description: "Quarterly trigger popup" },
      { id: 2, icon: "📊", label: "Data Compilation", description: "Gather performance metrics" },
      { id: 3, icon: "🏢", label: "Department Grouping", description: "Organize by teams" },
      { id: 4, icon: "📈", label: "Dashboard Generation", description: "Create visualizations" },
      { id: 5, icon: "👥", label: "Manager Review", description: "Distribute to managers" }
    ]
  }
]

export function Demo() {
  const [currentPrompt, setCurrentPrompt] = useState(demoPrompts[0])
  const [inputValue, setInputValue] = useState("")
  const [isBuilding, setIsBuilding] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const handlePromptSelect = useCallback((prompt: typeof demoPrompts[0]) => {
    setCurrentPrompt(prompt)
    setInputValue(prompt.text)
    setIsBuilding(true)
    setActiveStep(0)
    setIsCompleted(false)
    setShowCelebration(false)
    
    // Simulate workflow building
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1500)
  }, [])

  const startWorkflow = useCallback(() => {
    setActiveStep(0)
    setIsCompleted(false)
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= currentPrompt.workflow.length - 1) {
          clearInterval(interval)
          setIsCompleted(true)
          setShowCelebration(true)
          setTimeout(() => {
            setShowCelebration(false)
            // Allow user to continue after workflow completes
          }, 3000)
          return prev
        }
        return prev + 1
      })
    }, 1200) // Slower for better visibility
  }, [currentPrompt])

  const handleCustomInput = useCallback(() => {
    if (!inputValue.trim()) return
    
    setIsBuilding(true)
    setTimeout(() => {
      setIsBuilding(false)
      startWorkflow()
    }, 1500)
  }, [inputValue, startWorkflow])

  useEffect(() => {
    // Auto-start the first workflow
    const timer = setTimeout(() => {
      startWorkflow()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-50"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 1,
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight
                }}
                animate={{ 
                  opacity: [1, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -100, -200]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute text-2xl"
              >
                {['🎉', '✨', '🎊', '⭐', '💫'][i % 5]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ask PeopleCore Anything
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch AI transform your natural language requests into sophisticated HR workflows. 
            No coding, no complexity—just conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">PeopleCore AI</h3>
                    <p className="text-white/80 text-sm">Your HR Automation Assistant</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 text-sm">
                    👋 Hi! I'm PeopleCore AI. Describe any HR workflow you need, and I'll build it for you automatically.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPrompt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500"
                  >
                    <p className="text-slate-800">{currentPrompt.text}</p>
                  </motion.div>
                </AnimatePresence>

                {isBuilding && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-600 animate-pulse" />
                      <p className="text-green-800 font-medium">Building your workflow...</p>
                    </div>
                  </motion.div>
                )}

                {isCompleted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <PartyPopper className="w-4 h-4 text-green-600" />
                      <p className="text-green-800 font-medium">Workflow completed successfully! 🎉</p>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomInput()}
                    placeholder="Describe your HR workflow..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button size="lg" className="px-6" onClick={handleCustomInput}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Try these examples:
              </h4>
              <div className="space-y-2">
                {demoPrompts.map((prompt) => {
                  const Icon = prompt.icon
                  return (
                    <button
                      key={prompt.id}
                      onClick={() => handlePromptSelect(prompt)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        currentPrompt.id === prompt.id
                          ? 'bg-blue-50 border-blue-200 text-blue-900'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{prompt.text}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-visible"
          >
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Generated Workflow</h3>
              <p className="text-sm text-slate-600">AI-built automation in real-time</p>
            </div>
            
            <div className="p-6">
              <div className="flex">
                {/* Left side - Workflow steps */}
                <div className="flex-1 space-y-4">
                  {currentPrompt.workflow.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-4">
                      <WorkflowNode 
                        node={step} 
                        index={index} 
                        isActive={index <= activeStep}
                        workflowType={currentPrompt.workflowType || "onboarding"}
                        activeStep={activeStep}
                      />
                      {index < currentPrompt.workflow.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: index < activeStep ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: index * 0.2 }}
                          className="w-0.5 h-8 bg-blue-300 origin-top ml-8"
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Right side - Animation area */}
                <div className="w-72 h-36 relative flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 mt-16 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {currentPrompt.workflow.map((step, index) => (
                      index === activeStep && (
                        <StepAnimation 
                          key={`${step.id}-${index}`}
                          step={step} 
                          isActive={true} 
                          workflowType={currentPrompt.workflowType || "onboarding"} 
                        />
                      )
                    ))}
                  </AnimatePresence>
                  {activeStep < 0 && (
                    <div className="text-slate-400 text-sm text-center">
                      Animation will appear here
                    </div>
                  )}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-6 bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeStep + 1) / currentPrompt.workflow.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-600">
                  Step {activeStep + 1} of {currentPrompt.workflow.length}
                </span>
                <span className="text-slate-600">
                  {Math.round(((activeStep + 1) / currentPrompt.workflow.length) * 100)}% Complete
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                  <span className="text-sm text-slate-600">
                    {isCompleted ? 'Workflow Complete' : 'Workflow Running'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePromptSelect(currentPrompt)}
                  disabled={isBuilding}
                >
                  {isBuilding ? 'Building...' : 'Restart Workflow'}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reduced motion fallback */}
        <div className="sr-only" aria-live="polite">
          Current workflow: {currentPrompt.text}
        </div>
      </div>
    </section>
  )
}
