"use client"

import { motion } from "framer-motion"
import { ExternalLink, BookOpen, Globe, Play } from "lucide-react"

const AdditionalResources = ({ resources }) => {
  const getResourceIcon = (type) => {
    switch (type) {
      case "Guidelines":
        return BookOpen
      case "Reference":
        return Globe
      case "Interactive":
        return Play
      default:
        return ExternalLink
    }
  }

  const getResourceColor = (type) => {
    switch (type) {
      case "Guidelines":
        return "from-red-50 to-red-100 border-red-200"
      case "Reference":
        return "from-orange-50 to-yellow-50 border-orange-200"
      case "Interactive":
        return "from-yellow-50 to-orange-50 border-yellow-200"
      default:
        return "from-gray-50 to-gray-100 border-gray-200"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header - Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Additional Resources</h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
              Expand your knowledge with these curated materials
            </p>
          </div>
        </div>

        {/* Resources Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((resource, index) => {
            const Icon = getResourceIcon(resource.type)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${getResourceColor(resource.type)} rounded-xl p-4 sm:p-6 border cursor-pointer transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-white/60 text-gray-800 text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base break-words">{resource.title}</h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 break-words">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-1 text-red-700 text-xs sm:text-sm font-medium">
                      <span>Access Resource</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Study Tips - Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-red-200"
      >
        <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4 sm:mb-6">Study Tips for Radiology</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Systematic Approach</h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Always follow a consistent pattern when interpreting images to avoid missing important findings.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Practice Regularly</h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Regular exposure to various cases helps build pattern recognition skills essential for radiology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Clinical Correlation</h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Always consider clinical history and symptoms when interpreting radiological findings.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Peer Discussion</h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Discuss challenging cases with colleagues to gain different perspectives and insights.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AdditionalResources
