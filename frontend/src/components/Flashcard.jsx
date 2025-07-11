"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Star, Eye, BookOpen, RotateCcw } from "lucide-react"

const Flashcard = ({ card, isCompleted, selectedAnswer, onAnswerSelect, isCorrect }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleAnswerSelect = (optionIndex) => {
    onAnswerSelect(card.id, optionIndex)
    setTimeout(() => {
      setIsFlipped(true)
    }, 400)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getOptionStyle = (optionIndex) => {
    if (!isCompleted) {
      return "bg-white hover:bg-blue-50 border-gray-300 hover:border-blue-400 text-gray-800 hover:shadow-sm"
    }

    if (optionIndex === card.correctAnswer) {
      return "bg-green-50 border-green-400 text-green-800 shadow-sm"
    }

    if (optionIndex === selectedAnswer && optionIndex !== card.correctAnswer) {
      return "bg-red-50 border-red-400 text-red-800 shadow-sm"
    }

    return "bg-gray-50 border-gray-300 text-gray-500"
  }

  const getOptionIcon = (optionIndex) => {
    if (!isCompleted) return null

    if (optionIndex === card.correctAnswer) {
      return <Check className="w-4 h-4 text-green-600" />
    }

    if (optionIndex === selectedAnswer && optionIndex !== card.correctAnswer) {
      return <X className="w-4 h-4 text-red-600" />
    }

    return null
  }

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        className="relative w-full h-[420px] cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={isCompleted ? handleFlip : undefined}
      >
        {/* Front of Card - Question Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-2 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyColor(card.difficulty)}`}>
                    {card.difficulty}
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {card.category}
                  </span>
                </div>

                {isCompleted && (
                  <div
                    className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                      isCorrect ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                    }`}
                  >
                    {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                    {isCorrect ? "Correct" : "Wrong"}
                  </div>
                )}
              </div>
            </div>

            {/* Question Content */}
            <div className="flex-1 p-3 flex flex-col">
              {/* Question Text */}
              <div className="mb-6 text-center flex-shrink-0">
                <h3 className="text-xl font-bold text-gray-800 leading-relaxed">{card.front}</h3>
              </div>

              {/* Options */}
              <div className="flex flex-col space-y-3">
                {card.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      !isCompleted && handleAnswerSelect(index)
                    }}
                    disabled={isCompleted}
                    className={`w-full p-3 rounded border-2 transition-all duration-200 flex items-center justify-between text-left ${getOptionStyle(
                      index,
                    )} ${!isCompleted ? "cursor-pointer hover:scale-[1.01]" : "cursor-default"}`}
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-gray-700">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="text-sm break-words leading-tight">{option}</span>
                    </div>
                    {getOptionIcon(index)}
                  </motion.button>
                ))}
              </div>

              {/* Instructions */}
              <div className="text-center text-gray-500 text-xs mt-2">
                {!isCompleted ? (
                  <span className="flex items-center justify-center gap-1">
                    <span>Select answer</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-1">
                    <Eye className="w-3 h-3" />
                    Click for explanation
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card - Answer Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg shadow-md h-full flex flex-col text-white relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/20 relative z-10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white" />
                <h3 className="text-base font-bold">Explanation</h3>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${isCorrect ? "bg-green-500" : "bg-red-500"}`}>
                {isCorrect ? "✓ Correct" : "✗ Wrong"}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-3 relative z-10 overflow-y-auto">
              <div className="space-y-3">
                {/* Correct Answer */}
                <div className="p-2 bg-white/15 backdrop-blur-sm rounded border border-white/20">
                  <h4 className="text-xs font-bold mb-1">Correct Answer:</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">{String.fromCharCode(65 + card.correctAnswer)}</span>
                    </div>
                    <span className="text-xs">{card.options[card.correctAnswer]}</span>
                  </div>
                </div>

                {/* Your Answer (if wrong) */}
                {!isCorrect && selectedAnswer !== undefined && (
                  <div className="p-2 bg-red-500/20 backdrop-blur-sm rounded border border-red-300/30">
                    <h4 className="text-xs font-bold mb-1">Your Answer:</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{String.fromCharCode(65 + selectedAnswer)}</span>
                      </div>
                      <span className="text-xs">{card.options[selectedAnswer]}</span>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded border border-white/20">
                  <h4 className="text-xs font-bold mb-1">Explanation:</h4>
                  <pre className="text-xs leading-relaxed whitespace-pre-wrap text-white/90">{card.back}</pre>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-1 text-white/70 text-xs p-2 relative z-10">
              <RotateCcw className="w-3 h-3" />
              Click to return
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Flashcard
