"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RotateCcw, Star, Clock, Target, Stethoscope, Zap, Brain, AlertCircle } from "lucide-react"

const FlashCardGrid = ({ flashcards }) => {
  const [flippedCards, setFlippedCards] = useState(new Set())

  if (!flashcards || flashcards.length === 0) {
    return null
  }

  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#B01818] to-[#800000] rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#333333]">Knowledge Cards</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Interactive learning cards to master radiology concepts. Tap to reveal detailed insights.
        </p>
      </motion.div>

      {/* Cards Grid - Netflix-style Size Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
        {flashcards.map((card, index) => {
          const isFlipped = flippedCards.has(card.id)

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-64 h-96 perspective-1000"
            >
              <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                onClick={() => handleCardFlip(card.id)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of Card - Full Image with Bottom Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                  {/* Full Image Background */}
                  <div className="relative w-full h-full">
                    <img
                      src={card.front.image || "/placeholder.svg?height=400&width=256"}
                      alt={card.front.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
                      }}
                    />
                    {/* Fallback Background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#B01818]/20 to-[#FFA600]/20 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-semibold text-sm">{card.front.title}</p>
                        <p className="text-white/80 text-xs mt-1">Medical Image</p>
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
                      <div className="bg-[#B01818] rounded-lg px-2 py-1 shadow-sm">
                        <span className="text-xs font-medium text-white">Chest X-Ray</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-semibold text-gray-700">4.5</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Details Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1 text-white/80">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">5 min study</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#FFA600]">
                            <RotateCcw className="w-3 h-3" />
                            <span className="text-xs font-medium">Tap to flip</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Detailed Content */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white to-[#FFF8E1] rounded-xl shadow-lg border border-gray-200 overflow-hidden rotate-y-180">
                  <div className="h-full overflow-y-auto p-4 sm:p-5">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="text-center pb-4 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-[#B01818] mb-2">{card.front.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{card.back.definition}</p>
                      </div>

                      {/* Clinical Presentation */}
                      <div className="bg-gradient-to-r from-red-50 to-transparent rounded-lg p-4 border border-red-100">
                        <div className="flex items-center gap-2 mb-3">
                          <Stethoscope className="w-4 h-4 text-[#B01818]" />
                          <h4 className="font-bold text-[#333333] text-sm">Clinical Presentation</h4>
                        </div>
                        <div className="space-y-2">
                          {card.back.clinicalPresentation?.slice(0, 4).map((symptom, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#B01818] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700 leading-relaxed">{symptom}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Flip Back Indicator */}
                      <div className="text-center pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-2 text-[#FFA600]">
                          <RotateCcw className="w-4 h-4" />
                          <span className="text-sm font-medium">Tap to flip back</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-200"
      >
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#B01818]">{flashcards.length}</p>
            <p className="text-gray-600">Total Cards</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#FFA600]">{flippedCards.size}</p>
            <p className="text-gray-600">Studied</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {Math.round((flippedCards.size / flashcards.length) * 100)}%
            </p>
            <p className="text-gray-600">Progress</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FlashCardGrid