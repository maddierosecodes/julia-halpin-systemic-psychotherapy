export const treatmentAreasSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Family and Couple Therapy Services",
  url: "https://www.familyandcoupletherapyservices.co.uk/services#supportOffered",
  description:
    "Systemic Psychotherapy services in Chorley supporting couples and families with a wide range of emotional and relational challenges.",
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Mental Health",
  },
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Separation and Divorce",
      description:
        "Support for families and couples navigating separation and its emotional impact.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Bereavement and Grief",
      description:
        "Therapy for families processing loss and grief.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Low Self-Esteem and Confidence",
      description: "Support to build self-worth and foster personal growth.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Stress (including Work-Related Stress)",
      description:
        "Helping clients manage stress and find sustainable coping strategies.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Social Anxiety",
      description:
        "Systemic support for those struggling with social fear or avoidance.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Emotional Regulation Difficulties",
      description:
        "Helping couples and families improve emotional awareness and response.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Trauma and Difficult Life Events",
      description: "Therapy for processing trauma and building resilience.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Mental Health Conditions",
      description:
        "Relational therapy for couples and families living with diagnosed mental health conditions.",
    },
  ],
};
