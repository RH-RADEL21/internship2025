"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ContentLayout from "../components/ContentLayout"
import TopicHeader from "../components/TopicHeader"
import DescriptionSection from "../components/DescriptionSection"
import LearnFirstSection from "../components/LearnFirstSection"
import FlashcardSection from "../components/FlashcardSection"
import AdditionalResources from "../components/AdditionalResources"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import { getTopicById, getTopicsList } from "../data/radiologyData"
import { getFlashcardsByTopic } from "../data/flashcardData"

const RadiologyLearning = () => {
  const [currentTopic, setCurrentTopic] = useState("chest-xray")
  const [topicData, setTopicData] = useState(null)
  const [activeSection, setActiveSection] = useState("learn-first") // Set default to "learn-first"
  const [availableTopics, setAvailableTopics] = useState([])
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    const topics = getTopicsList()
    setAvailableTopics(topics)
  }, [])

  useEffect(() => {
    const data = getTopicById(currentTopic)
    const cards = getFlashcardsByTopic(currentTopic)
    setTopicData(data)
    setFlashcards(cards)
    setActiveSection("learn-first") // Reset to "learn-first" when topic changes
  }, [currentTopic])

  const handleTopicChange = (newTopic) => {
    setCurrentTopic(newTopic)
  }

  if (!topicData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-burnt-red mx-auto mb-4"></div>
          <p className="text-charcoal-gray/60">Loading radiology content...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white to-white">
      <Navbar currentTopic={currentTopic} onTopicChange={handleTopicChange} availableTopics={availableTopics} />

      {/* Hero Banner */}
      <HeroBanner currentTopic={currentTopic} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <ContentLayout>
          <TopicHeader topic={topicData} activeSection={activeSection} setActiveSection={setActiveSection} />

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            {activeSection === "learn-first" && <LearnFirstSection learnFirst={topicData.learnFirst} />}
            {activeSection === "description" && (
              <DescriptionSection
                description={topicData.description}
                topicImage={topicData.image}
                flashcards={flashcards}
              />
            )}
            {activeSection === "flashcards" && <FlashcardSection flashcards={topicData.flashcards} />}
            {activeSection === "resources" && <AdditionalResources resources={topicData.additionalResources} />}
          </motion.div>
        </ContentLayout>
      </motion.div>

      <Footer />
    </div>
  )
}

export default RadiologyLearning