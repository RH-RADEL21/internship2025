// 🖼️ This image path needs to match an actual file in public/images/

export const chestXrayFlashcards = [
  {
    id: 1,
    front: {
      image: "/images/flashcards/Picture1.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.1",
    },
    back: {
      definition: [
        "Which part of  lung   is adjacent to right heart border ? What is radiographic contrast ?",
      ],
      clinicalPresentation: [
        "Right lung  middle lobe is close to right heart border.The lung contains air (appears black in CXR)",
        "Heart contains blood (appears as white in CXR) Thus there is difference in radiographic density –between black lung and white heart -.This difference in density is called as radiographic contrast.",
        "Because of the presence of this contrast,we are able to identify the  silhouette (outline) right heart border.",
      ],
    },
  },
  {
    id: 2,
    front: {
      image: "/images/flashcards/Picture2.png",
      title: "CXR-LUNG DISEASE-basic principles of diagnosis.2",
    },
    back: {
      definition:
        "What is silhouette sign ? What is its main use ?",
clinicalPresentation: [
  "Silhouette sign: The right heart border is obscured by the lung consolidation (which appears white in CXR) in the right middle lobe.",
  "This silhouette sign helps in localizing lung lesions.",
  "Examples:\n" +
  " - Loss of right heart border indicates a lesion in the right middle lobe (RML).\n" +
  " - Loss of left heart border indicates a lesion in the lingular segment of the left upper lobe (LUL).",
]
    },
  },
  {
    id: 3,
    front: {
      image: "/images/flashcards/Picture3.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.3",
    },
    back: {
      definition:
        "Can you see the air in the bronchial tree in a normal CXR ?",
      clinicalPresentation: [
        "No ,we cannot see the air in the bronchial tree normally,because air everywhere (in bronchial tree,alveoli) are black.",
        "There is no “ contrast “between air in alveoli and bronchial tree.",
        "Thus entire lung appear black in density.",
      ],
    },
  },
  {
    id: 4,
    front: {
      image: "/images/flashcards/Picture4.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.4",
    },
    back: {
      definition:
        "WHAT IS AIR-BRONCHOGRAM SIGN ? HOW IS IT USEFUL ?",
      clinicalPresentation: [
  "Air-bronchogram sign: In this x-ray, air in the bronchial tree is black, while air in lung alveoli has been replaced and appears white (in this case, replaced by exudate in lung consolidation). Thus, there is contrast between white lung and black bronchi. This causes the black bronchi to appear as branched black shadows. This is called as air-bronchogram sign.",
  "This sign is seen only in lung alveolar pathology.",
  "Incidentally, the left heart border is obscured, therefore left upper lobe lung is involved in consolidation. This is another example of the silhouette sign."
],
    },
  },
  {
    id: 5,
    front: {
      image: "/images/flashcards/Picture5.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.-5",
    },
    back: {
      definition:
        "What is the position of the trachea in a normal CXR ?",
     clinicalPresentation: [
  "The trachea is a midline structure in a normal chest x-ray."
],
    },
  },
  {
    id: 6,
    front: {
      image: "/images/flashcards/Picture6.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.-6",
    },
    back: {
      definition:
        "What happens to the tracheal position if there is lung volume loss in one side ?",
      clinicalPresentation: [
  "The trachea is pulled to the same side showing lung volume loss.",
  "This is the concept of tracheal pull."
],
    },
  },
  {
    id: 7,
    front: {
      image: "/images/flashcards/Picture7.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.-7",
    },
    back: {
      definition:
        "What happens to the tracheal position if there is lung volume increase in one side ?",
      clinicalPresentation: [
  "The trachea is pushed to the opposite side of the lung showing increase in volume.",
  "This is the concept of tracheal push."
],
    },
  },
  {
    id: 8,
    front: {
      image: "/images/flashcards/Picture8.png",
      title: "CXR-LUNG DISEASE basic principles of diagnosis.-8",
    },
    back: {
      definition:
        " what is the pathology in this CXR ? Why ?",
      clinicalPresentation: [
  "The pathology in this CXR is lung consolidation, because there is no evidence of lung volume loss.",
  "Please note — both consolidation and collapse produce opacity.",
  "In lung collapse, there is lung volume loss."
],
    },
  },
]

export const getFlashcardsByTopic = (topicId) => {
  switch (topicId) {
    case "chest-xray":
      return chestXrayFlashcards
    default:
      return chestXrayFlashcards
  }
}