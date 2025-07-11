"use client"

import { motion } from "framer-motion"
import { CheckCircle, Stethoscope, Target, Eye, Brain, Heart } from "lucide-react"
import FlashCardGrid from "./FlashCardGrid"

const DescriptionSection = ({ description = {}, topicImage, flashcards = [] }) => {
  // Provide defaults to prevent errors
  const { overview = "", keyPoints = [], anatomy = null, clinicalRelevance = "" } = description || {}

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Image Section - Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-xl sm:rounded-2xl overflow-hidden border border-red-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Clinical Overview</h2>
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{overview}</p>

            {/* Stats Cards - Mobile Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/40">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-red-700 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm">Accuracy</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold text-red-700">95%+</p>
                <p className="text-xs text-gray-600">Diagnostic accuracy</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/40">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm">Learning</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold text-orange-600">24/7</p>
                <p className="text-xs text-gray-600">Available access</p>
              </div>
            </div>
          </div>

          {/* Medical Image Placeholder - Mobile Responsive */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/40 h-48 sm:h-64 lg:h-full">
              <img
                src={topicImage || "/images/general/chest.jpg"}
                alt="Medical Topic Overview"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = "none"
                  e.target.nextSibling.style.display = "flex"
                }}
              />
              <div
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-full flex items-center justify-center border-2 border-dashed border-gray-300"
                style={{ display: "none" }}
              >
                <div className="text-center p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />
                  </div>
                  <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Interactive Medical Imaging</p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    High-resolution radiological images with annotations
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
                    <span>DICOM Compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Key Learning Points */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Key Learning Objectives</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {keyPoints &&
              keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-red-700">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
          </div>

          {/* Anatomy Section - Mobile Responsive */}
          {anatomy && (
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                {anatomy.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {anatomy.structures &&
                  anatomy.structures.map((structure, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">{structure}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Clinical Relevance - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 border border-red-200">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3 sm:mb-4 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Clinical Relevance
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{clinicalRelevance}</p>
          </div>

          {/* Quick Facts - Mobile Responsive */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Quick Facts</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                <span className="text-xs sm:text-sm text-gray-600">Exam Duration</span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">2-5 minutes</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                <span className="text-xs sm:text-sm text-gray-600">Radiation Dose</span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">0.02-0.1 mSv</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                <span className="text-xs sm:text-sm text-gray-600">Common Uses</span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">Emergency, Screening</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator - Mobile Responsive */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 sm:p-6 border border-orange-200">
            <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Learning Progress</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Module Completion</span>
                <span className="font-semibold text-gray-800">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-700 to-orange-600 h-2 rounded-full w-0 transition-all duration-500"></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Complete flashcards and assessments to track progress</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Flash Card Grid Section - Added at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FlashCardGrid flashcards={flashcards} />
      </motion.div>
    </div>
  )
}

export default DescriptionSection
