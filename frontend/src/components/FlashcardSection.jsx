"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Flashcard from "./Flashcard"
import { ChevronLeft, ChevronRight, Trophy, CheckCircle, XCircle, RefreshCw, BarChart3 } from "lucide-react"

const FlashcardSection = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completedCards, setCompletedCards] = useState(new Set())
  const [cardResults, setCardResults] = useState({})
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length)
  }

  const handleAnswerSelect = (cardId, selectedOption) => {
    const card = flashcards.find((c) => c.id === cardId)
    const isCorrect = selectedOption === card.correctAnswer

    setSelectedAnswers((prev) => ({
      ...prev,
      [cardId]: selectedOption,
    }))

    setCardResults((prev) => ({
      ...prev,
      [cardId]: isCorrect,
    }))

    setCompletedCards((prev) => new Set([...prev, cardId]))
  }

  const resetProgress = () => {
    setCompletedCards(new Set())
    setCardResults({})
    setSelectedAnswers({})
    setCurrentIndex(0)
  }

  const goToCard = (index) => {
    setCurrentIndex(index)
  }

  const progress = (completedCards.size / flashcards.length) * 100
  const correctAnswers = Object.values(cardResults).filter((result) => result).length
  const wrongAnswers = Object.values(cardResults).filter((result) => !result).length

  return (
    <div className="max-w-7xl mx-auto">
      {/* Ultra Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-2 mb-3 border border-gray-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
              <Trophy className="w-3 h-3 text-orange-600" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-800">Flashcards</h2>
              <p className="text-xs text-gray-600">
                {currentIndex + 1}/{flashcards.length} • {Math.round(progress)}% Complete
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-3 h-3" />
                {correctAnswers}
              </span>
              <span className="flex items-center gap-1 text-red-500">
                <XCircle className="w-3 h-3" />
                {wrongAnswers}
              </span>
            </div>
            <button
              onClick={resetProgress}
              className="p-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              title="Reset Progress"
            >
              <RefreshCw className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mini Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-red-600 to-orange-500 h-1 rounded-full"
          />
        </div>
      </motion.div>

      {/* Main Layout - Optimized for Visibility */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-3">
        {/* Flashcard - Maximum Space */}
        <div className="xl:col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Flashcard
                card={flashcards[currentIndex]}
                isCompleted={completedCards.has(flashcards[currentIndex].id)}
                selectedAnswer={selectedAnswers[flashcards[currentIndex].id]}
                onAnswerSelect={handleAnswerSelect}
                isCorrect={cardResults[flashcards[currentIndex].id]}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compact Side Panel */}
        <div className="xl:col-span-1 space-y-3">
          {/* Navigation */}
          <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
            <div className="flex xl:flex-col gap-2">
              <button
                onClick={prevCard}
                disabled={flashcards.length <= 1}
                className="flex-1 xl:flex-none flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={nextCard}
                disabled={flashcards.length <= 1}
                className="flex-1 xl:flex-none flex items-center justify-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-medium transition-colors disabled:opacity-50"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Grid - Compact */}
          <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-3 h-3 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">Cards</span>
            </div>
            <div className="grid grid-cols-6 xl:grid-cols-4 gap-1">
              {flashcards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => goToCard(index)}
                  className={`w-7 h-7 rounded text-xs font-bold transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-red-600 text-white scale-110 shadow-md"
                      : completedCards.has(card.id)
                        ? cardResults[card.id] === true
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                  title={`Card ${index + 1}${
                    completedCards.has(card.id) ? (cardResults[card.id] ? " - Correct" : " - Incorrect") : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats - Only if there's progress */}
          {completedCards.size > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">
                  {completedCards.size > 0 ? Math.round((correctAnswers / completedCards.size) * 100) : 0}%
                </div>
                <div className="text-xs text-gray-600">Accuracy</div>
                <div className="flex justify-center gap-3 mt-2 text-xs">
                  <span className="text-green-600 font-medium">{correctAnswers}✓</span>
                  <span className="text-red-500 font-medium">{wrongAnswers}✗</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Instructions - Ultra Compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-3 bg-blue-50 rounded-lg p-2 border border-blue-200"
      >
        <p className="text-xs text-center text-gray-700">
          <span className="font-medium">💡 Tip:</span> Select answer → Card flips → Click to return
        </p>
      </motion.div>
    </div>
  )
}

export default FlashcardSection
