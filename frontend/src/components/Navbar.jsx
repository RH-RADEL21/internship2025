"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, BookOpen, Users, Settings } from "lucide-react"
import { useState } from "react"

const Navbar = ({ currentTopic, onTopicChange, availableTopics }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "topics", label: "Topics", icon: BookOpen },
    { id: "about", label: "About", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Mobile Responsive */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <img
              src="/images/logos/logo.png" // ← Change this path to your logo
              alt="RadiologyHub Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextSibling.style.display = "flex"
              }}
            />
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-xl flex items-center justify-center"
              style={{ display: "none" }}
            >
              <span className="text-white font-bold text-xs sm:text-sm">RH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">RH RADeL</h1>
              <p className="text-xs text-gray-600">Technology Solutions Pvt. Ltd</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gray-800">RH</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 text-gray-800 hover:text-red-700 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Topic Selector - Desktop */}
          <div className="hidden md:block">
            <select
              value={currentTopic}
              onChange={(e) => onTopicChange(e.target.value)}
              className="px-3 py-2 text-sm bg-yellow-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
            >
              {availableTopics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.title}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-red-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {/* Mobile Navigation Items */}
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-red-700 hover:bg-red-50 transition-colors duration-200 rounded-lg"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </motion.button>
                  )
                })}

                {/* Mobile Topic Selector */}
                <div className="px-4 py-2">
                  <label className="block text-sm font-medium text-gray-800 mb-2">Select Topic:</label>
                  <select
                    value={currentTopic}
                    onChange={(e) => onTopicChange(e.target.value)}
                    className="w-full px-4 py-3 bg-yellow-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                  >
                    {availableTopics.map((topic) => (
                      <option key={topic.id} value={topic.id}>
                        {topic.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
