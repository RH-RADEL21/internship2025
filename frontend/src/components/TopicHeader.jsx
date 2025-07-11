"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, ExternalLink, Lightbulb } from "lucide-react"

const TopicHeader = ({ topic, activeSection, setActiveSection }) => {
  const sections = [
    { id: "learn-first", label: "Learn First", icon: Lightbulb },
    { id: "description", label: "Overview", icon: BookOpen },
    { id: "flashcards", label: "Flashcards", icon: Brain },
    { id: "resources", label: "Resources", icon: ExternalLink },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
    >
      {/* Hero Section - Mobile Responsive */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold break-words"
            >
              {topic.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-sm sm:text-base lg:text-lg mt-1"
            >
              {topic.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Mobile Responsive */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setActiveSection(section.id)}
                className={`flex-1 min-w-0 flex items-center justify-center gap-2 py-3 sm:py-4 px-3 sm:px-6 font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? "text-red-700 border-b-2 border-red-700 bg-red-50"
                    : "text-gray-800 hover:text-red-700 hover:bg-red-50"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">{section.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default TopicHeader