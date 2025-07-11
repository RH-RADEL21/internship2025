export const ctBasicsTopic = {
  id: "ct-basics",
  title: "CT Scan Fundamentals",
  subtitle: "Understanding computed tomography principles and interpretation",
  // 🖼️ This image path needs to match an actual file in public/images/
  image: "/images/general/ct.avif",
  description: {
    overview:
      "Computed Tomography (CT) is a crucial imaging modality providing cross-sectional anatomy with excellent spatial resolution. This module covers CT physics, image acquisition parameters, contrast protocols, and systematic interpretation approaches for various body systems.",
    keyPoints: [
      "CT physics and image reconstruction principles",
      "Window and level settings for different tissues",
      "Contrast administration protocols and timing",
      "Systematic approach to CT interpretation",
      "Recognition of artifacts and technical factors",
      "Radiation safety and dose optimization",
    ],
    clinicalRelevance:
      "Essential for emergency imaging, oncology staging, surgical planning, and detailed anatomical assessment. Critical for trauma evaluation, stroke workup, and complex diagnostic scenarios.",
    anatomy: {
      title: "CT Imaging Principles",
      structures: [
        "Hounsfield units and tissue density",
        "Window width and window level",
        "Slice thickness and reconstruction",
        "Contrast phases and timing",
        "Multiplanar reconstructions",
        "3D rendering techniques",
      ],
    },
  },
}
