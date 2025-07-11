"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tooltip } from "react-tooltip"
import { Lightbulb, Shield, Zap, Clock, Stethoscope, ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import { useState } from "react"

const LearnFirstSection = ({ learnFirst = {}, topicTitle = "Topic" }) => {
  const {
    introduction = "This section provides foundational knowledge about the topic.",
    principles = [],
    safetyTips = [],
    preparation = [],
    commonUses = [],
  } = learnFirst || {}

  const [expandedSection, setExpandedSection] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* Introduction Section - Enhanced with Sparkles */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl overflow-hidden border border-yellow-100 relative group"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                repeatDelay: Math.random() * 5
              }}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400/50" />
            </motion.div>
          ))}
        </div>
        <div className="p-4 sm:p-5 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
            >
              <Lightbulb className="w-5 h-5 text-yellow-600" aria-hidden="true" />
            </motion.div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{topicTitle} Basics</h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{introduction}</p>
        </div>
      </motion.div>

      {/* Content Grid - Enhanced with Interactive Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Principles and Common Uses */}
        <motion.div
          layout
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-2 space-y-4 sm:space-y-6"
        >
          {/* Core Principles - With Expandable Feature */}
          <motion.div 
            layout
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 border border-gray-200"
          >
            <button 
              onClick={() => toggleSection('principles')}
              className="w-full flex items-center justify-between gap-3 mb-2"
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="w-7 h-7 bg-orange-100 rounded-md flex items-center justify-center flex-shrink-0"
                >
                  <Zap className="w-4 h-4 text-orange-600" aria-hidden="true" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">Core Principles</h3>
              </div>
              {expandedSection === 'principles' ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>

            <AnimatePresence>
              {(expandedSection === 'principles' || expandedSection === null) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {principles.length > 0 ? (
                    <ul className="grid grid-cols-1 gap-2" role="list">
                      {principles.map((principle, index) => (
                        <motion.li
                          key={`principle-${index}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-start gap-2 p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border border-yellow-100 hover:shadow-sm transition-shadow"
                          data-tooltip-id="principle-tooltip"
                          data-tooltip-content={`Principle ${index + 1}`}
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          >
                            <span className="text-xs font-bold text-yellow-700">{index + 1}</span>
                          </motion.div>
                          <span className="text-gray-700 text-sm sm:text-base leading-tight">{principle}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base">No principles available.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Common Uses - With Hover Effects */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="w-7 h-7 bg-red-100 rounded-md flex items-center justify-center flex-shrink-0"
              >
                <Stethoscope className="w-4 h-4 text-red-600" aria-hidden="true" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800">Common Uses</h3>
            </div>
            {commonUses.length > 0 ? (
              <ul className="grid grid-cols-1 gap-2" role="list">
                {commonUses.map((use, index) => (
                  <motion.li
                    key={`use-${index}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span className="text-xs font-bold text-red-700">{index + 1}</span>
                    </motion.div>
                    <span className="text-gray-700 text-sm sm:text-base leading-tight">{use}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base">No common uses available.</p>
            )}
          </motion.div>
        </motion.div>

        {/* Safety and Preparation - With Staggered Animation */}
        <motion.div
          layout
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-4 sm:space-y-5"
        >
          {/* Safety Tips - With Pulse Animation */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={inView ? { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            } : {}}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-5 border border-red-200 relative overflow-hidden"
          >
            <div className="absolute -right-5 -top-5 w-20 h-20 bg-red-200 rounded-full opacity-20"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-red-300 rounded-full opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Shield className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                </motion.div>
                Safety Tips
              </h3>
              {safetyTips.length > 0 ? (
                <ul className="space-y-2" role="list">
                  {safetyTips.map((tip, index) => (
                    <motion.li 
                      key={`safety-tip-${index}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-2 p-2 bg-white/50 rounded-lg"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"
                      ></motion.div>
                      <span className="text-gray-700 text-sm sm:text-base leading-tight">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm sm:text-base">No safety tips available.</p>
              )}
            </div>
          </motion.div>

          {/* Preparation Steps - With Checkbox Animation */}
          <motion.div
            layout
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 border border-gray-200"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                <Clock className="w-5 h-5 flex-shrink-0 text-orange-600" aria-hidden="true" />
              </motion.div>
              Preparation Steps
            </h3>
            {preparation.length > 0 ? (
              <ul className="space-y-2" role="list">
                {preparation.map((step, index) => (
                  <motion.li 
                    key={`preparation-step-${index}`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 p-2 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"
                    ></motion.div>
                    <span className="text-gray-700 text-sm sm:text-base leading-tight">{step}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base">No preparation steps available.</p>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Tooltip for principles */}
      <Tooltip id="principle-tooltip" className="z-50" />
    </motion.div>
  )
}

export default LearnFirstSection