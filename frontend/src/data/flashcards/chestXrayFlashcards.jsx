export const chestXrayFlashcards = [
  {
    id: 1,
    front: "What are the key steps in systematic chest X-ray interpretation using the ABCDE approach?",
    back: "A - Airways (trachea, carina, bronchi)\nB - Breathing (lungs, pleura, diaphragm)\nC - Circulation (heart, great vessels)\nD - Disability (bones, soft tissues)\nE - Everything else (tubes, lines, foreign objects)\n\nAlways check patient details and image quality first!",
    category: "Systematic Approach",
    difficulty: "Beginner",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    image: "/images/chest-xray/abcde-approach.jpg", // ← Change this path
    options: [
      "ABCDE: Airways, Breathing, Circulation, Disability, Everything else",
      "ABCD: Airway, Blood, Cardiac, Diaphragm",
      "ABC: Airway, Breathing, Circulation only",
      "ABCDEF: Airways, Breathing, Circulation, Disability, Everything, Follow-up",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    front: "What is the normal cardiothoracic ratio and how should it be measured?",
    back: "Normal CTR: <50% on PA chest X-ray\n\nMeasurement:\n• Maximum cardiac width (widest part of heart)\n• Maximum thoracic width (inner rib to inner rib)\n• CTR = Cardiac width ÷ Thoracic width × 100\n\nNote: Not reliable on AP films due to magnification",
    category: "Normal Anatomy",
    difficulty: "Beginner",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    image: "/images/chest-xray/cardiothoracic-ratio.jpg", // ← Change this path
    options: [
      "Normal CTR: <60% on any chest X-ray",
      "Normal CTR: <50% on PA chest X-ray",
      "Normal CTR: <40% on AP chest X-ray",
      "Normal CTR: <70% on lateral chest X-ray",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    front: "What are the classic radiological signs of pneumonia?",
    back: "Primary signs:\n• Consolidation (air-space opacification)\n• Air bronchograms (air-filled bronchi visible)\n• Silhouette sign (loss of normal borders)\n\nSecondary signs:\n• Pleural effusion\n• Volume loss\n• Cavitation (in necrotizing pneumonia)\n• Lymphadenopathy (less common on CXR)",
    category: "Pathology",
    difficulty: "Intermediate",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    image: "/images/chest-xray/pneumonia-signs.jpg", // ← Change this path
    options: [
      "Consolidation, air bronchograms, silhouette sign",
      "Pneumothorax, pleural effusion, mediastinal shift",
      "Cardiomegaly, pulmonary edema, Kerley B lines",
      "Rib fractures, subcutaneous emphysema, hemothorax",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    front: "How do you identify pneumothorax on chest X-ray?",
    back: "Signs of pneumothorax:\n• Visible pleural edge (thin white line)\n• Absence of lung markings beyond pleural line\n• Increased lucency of affected side\n• Possible mediastinal shift (tension PTX)\n• Deep sulcus sign on supine films\n\nQuantification: Light's formula or visual estimation",
    category: "Emergency",
    difficulty: "Intermediate",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    image: "/images/chest-xray/pneumothorax-example.jpg", // ← Change this path
    options: [
      "Consolidation with air bronchograms",
      "Visible pleural edge with absent lung markings beyond",
      "Bilateral pulmonary edema pattern",
      "Enlarged cardiac silhouette",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    front: "What is the silhouette sign and what does it indicate?",
    back: "Definition: Loss of normal border between two structures of similar density\n\nClinical significance:\n• Indicates pathology adjacent to the structure\n• Right heart border: Right middle lobe pathology\n• Left heart border: Lingula pathology\n• Diaphragm: Lower lobe pathology\n\nHelps localize disease anatomically",
    category: "Signs",
    difficulty: "Intermediate",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    image: "/images/chest-xray/silhouette-sign-example.jpg", // ← Change this path
    options: [
      "Enhancement of normal anatomical borders",
      "Loss of normal border between structures of similar density",
      "Appearance of new abnormal shadows",
      "Increased visibility of pulmonary vessels",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    front: "What are the key features of pulmonary edema on chest X-ray?",
    back: "Stages of pulmonary edema:\n1. Vascular redistribution (upper lobe vessels)\n2. Interstitial edema (Kerley B lines, peribronchial cuffing)\n3. Alveolar edema (bat wing/butterfly pattern)\n4. Pleural effusions (usually bilateral)\n\nCardiogenic: Large heart, bilateral\nNon-cardiogenic: Normal heart size",
    category: "Pathology",
    difficulty: "Advanced",
    // 🖼️ ADD YOUR IMAGE PATH HERE
    options: [
      "Unilateral consolidation with cavitation",
      "Bilateral lower lobe consolidation only",
      "Vascular redistribution, Kerley B lines, bat wing pattern",
      "Pneumothorax with mediastinal shift",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    front: "What is the significance of Kerley B lines on a chest X-ray?",
    back: "Kerley B lines are short, horizontal lines at the lung periphery, typically near the costophrenic angles. They indicate interstitial edema due to fluid in the interlobular septa, commonly associated with congestive heart failure.",
    category: "Signs",
    difficulty: "Intermediate",
    options: [
      "Indicate pneumothorax",
      "Represent interstitial edema",
      "Suggest rib fractures",
      "Show bronchial wall thickening",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    front: "How can you differentiate between a pleural effusion and a pneumothorax on chest X-ray?",
    back: "Pleural effusion: Homogeneous opacity with a meniscus sign, blunting of costophrenic angle, fluid layering on lateral decubitus view.\nPneumothorax: Sharp pleural edge, absent lung markings, possible lung collapse, no meniscus sign.",
    category: "Pathology",
    difficulty: "Intermediate",
    options: [
      "Both show a meniscus sign",
      "Pleural effusion shows absent lung markings",
      "Pneumothorax shows a meniscus sign",
      "Pleural effusion has a meniscus sign, pneumothorax has a sharp pleural edge",
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    front: "What is the tree-in-bud sign on a chest X-ray, and what does it suggest?",
    back: "Tree-in-bud sign: Small centrilobular nodules and branching linear structures resembling budding trees, indicating endobronchial spread of infection or inflammation (e.g., tuberculosis, bronchiectasis).",
    category: "Signs",
    difficulty: "Advanced",
    options: [
      "Indicates pulmonary edema",
      "Suggests endobronchial spread of infection",
      "Represents pleural effusion",
      "Shows pneumothorax",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    front: "What are the radiological features of a tension pneumothorax?",
    back: "Features: Large pneumothorax with contralateral mediastinal shift, tracheal deviation, diaphragmatic depression, and rib cage expansion on the affected side. Requires urgent decompression.",
    category: "Emergency",
    difficulty: "Advanced",
    options: [
      "Bilateral pleural effusions",
      "Mediastinal shift toward the affected side",
      "Contralateral mediastinal shift and tracheal deviation",
      "No mediastinal shift, only consolidation",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    front: "What is the normal appearance of the diaphragm on a chest X-ray?",
    back: "Normal diaphragm: Smooth, dome-shaped, right hemidiaphragm higher than left (by ~1-2 cm), sharp costophrenic angles, no free air under diaphragm (indicating pneumoperitoneum).",
    category: "Normal Anatomy",
    difficulty: "Beginner",
    options: [
      "Left hemidiaphragm higher than right",
      "Right hemidiaphragm higher, sharp costophrenic angles",
      "Flat diaphragm bilaterally",
      "Blunted costophrenic angles normally",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    front: "What is the significance of a widened mediastinum on chest X-ray?",
    back: "Widened mediastinum (>8 cm on PA view) may indicate aortic dissection, mediastinal mass, lymphadenopathy, or trauma (e.g., hematoma). Requires urgent clinical correlation and further imaging (e.g., CT).",
    category: "Pathology",
    difficulty: "Advanced",
    options: [
      "Always normal finding",
      "Suggests aortic dissection or mediastinal mass",
      "Indicates pneumothorax",
      "Represents pulmonary edema",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    front: "How do you identify dextrocardia on a chest X-ray?",
    back: "Dextrocardia: Heart shadow predominantly on the right side, aortic arch on the right, and reversed orientation of other structures (e.g., diaphragm). Confirm with patient history and situs inversus if present.",
    category: "Normal Anatomy",
    difficulty: "Intermediate",
    options: [
      "Heart shadow on the left side",
      "Heart shadow on the right side, aortic arch on right",
      "Bilateral heart shadows",
      "No change in heart position",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    front: "What is the bat wing or butterfly pattern on chest X-ray?",
    back: "Bat wing pattern: Bilateral, perihilar alveolar opacities resembling bat wings or a butterfly, typically seen in pulmonary edema (cardiogenic or non-cardiogenic).",
    category: "Signs",
    difficulty: "Intermediate",
    options: [
      "Unilateral consolidation",
      "Bilateral perihilar alveolar opacities",
      "Peripheral ground-glass opacities",
      "Mediastinal widening",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    front: "What are the signs of a rib fracture on chest X-ray?",
    back: "Signs: Discontinuity in bone cortex, sharp edges, possible displacement, associated findings like hemothorax, pneumothorax, or subcutaneous emphysema.",
    category: "Pathology",
    difficulty: "Intermediate",
    options: [
      "Smooth bone contour",
      "Discontinuity in bone cortex, possible hemothorax",
      "Mediastinal widening",
      "Bilateral pulmonary edema",
    ],
    correctAnswer: 1,
  },
  
]
