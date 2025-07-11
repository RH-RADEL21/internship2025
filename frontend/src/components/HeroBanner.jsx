"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="relative bg-white border border-gray-200 py-8 overflow-hidden font-sans shadow-lg rounded-lg">
      <style jsx global>{`
        :root {
          --bg-primary: #FFF8E1;
          --text-primary: #1A1A1A;
          --accent-red: #B01818;
          --accent-yellow: #FFA600;
          --border: #E0E0E0;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Hero Text */}
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left space-y-4 p-6"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-normal">
                Radiology
                <span className="block text-4xl sm:text-5xl mt-2 font-extrabold text-transparent bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400 bg-clip-text drop-shadow-md leading-[1.4]">
                  Learning Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 font-medium max-w-xl mx-auto md:mx-0 leading-6">
                Transform your diagnostic expertise with our expertly designed radiology education platform, crafted for medical professionals.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Advanced Imaging Techniques", "Case-Based Learning", "Continuous Professional Development"].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={itemVariants}
                    className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-bold border border-gray-300 shadow-sm hover:bg-[var(--accent-yellow)]/20 transition-transform duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Illustration Image */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <img
                  src="/images/doctor.png"
                  alt="Radiology Illustration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroBanner