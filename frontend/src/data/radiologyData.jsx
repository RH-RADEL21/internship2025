import { chestXrayTopic } from "./topics/chestXray"
import { ctBasicsTopic } from "./topics/ctBasics"
import { chestXrayFlashcards } from "./flashcards/chestXrayFlashcards"
import { ctBasicsFlashcards } from "./flashcards/ctBasicsFlashcards"
import { chestXrayResources } from "./resources/chestXrayResources"
import { ctBasicsResources } from "./resources/ctBasicsResources"
import { xrayLearnFirst } from "./learn/xray"
import { ctScanLearnFirst } from "./learn/ctScan"

export const radiologyTopics = {
  "chest-xray": {
    ...chestXrayTopic,
    flashcards: chestXrayFlashcards,
    additionalResources: chestXrayResources,
    learnFirst: xrayLearnFirst,
  },
  "ct-basics": {
    ...ctBasicsTopic,
    flashcards: ctBasicsFlashcards,
    additionalResources: ctBasicsResources,
    learnFirst: ctScanLearnFirst,
  },
}

export const getTopicById = (id) => {
  return radiologyTopics[id] || null
}

export const getAllTopics = () => {
  return Object.values(radiologyTopics)
}

export const getTopicsList = () => {
  return Object.keys(radiologyTopics).map((key) => ({
    id: key,
    title: radiologyTopics[key].title,
    subtitle: radiologyTopics[key].subtitle,
  }))
}