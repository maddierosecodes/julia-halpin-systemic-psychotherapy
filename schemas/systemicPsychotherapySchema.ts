export const systemicPsychotherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Systemic Psychotherapy",
  url: "https://www.familyandcoupletherapyservices.co.uk/about#aboutSystemicPsychotherapy",
  description:
    "Systemic Psychotherapy is a relational approach to mental health treatment that focuses on understanding patterns within families and relationships. It supports individuals, couples, and families in making meaningful changes through collaborative dialogue.",
  therapyType: "Systemic",
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Mental Health",
  },
  relevantSpecialty: [
    "Anxiety",
    "Stress",
    "Relationship Issues",
    "Communication Difficulties",
    "Family Conflict",
    "Neurodiversity Support",
  ],
  recognizingAuthority: [
    "UK Council for Psychotherapy (UKCP)",
    "Association for Family Therapy and Systemic Practice (AFT)",
    "British Association for Counselling and Psychotherapy (BACP)",
  ],
};
