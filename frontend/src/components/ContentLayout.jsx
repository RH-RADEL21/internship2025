"use client"

import { motion } from "framer-motion"

const ContentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #b91c1c 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default ContentLayout
