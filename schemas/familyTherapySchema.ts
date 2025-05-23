export const familyTherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://www.familyandcoupletherapyservices.co.uk/#family-therapy",
  name: "Family Therapy",
  description:
    "Professional family therapy services in Chorley. Supporting families who are feeling stuck, overwhelmed, or struggling to communicate, using systemic therapy approaches to explore patterns and develop new ways of relating.",
  url: "https://www.familyandcoupletherapyservices.co.uk/services?service=family-therapy",
  provider: {
    "@type": "Person",
    name: "Julia Halpin",
    jobTitle: "Systemic Psychotherapist",
    url: "https://www.familyandcoupletherapyservices.co.uk/about",
  },
  areaServed: {
    "@type": "Place",
    name: "Chorley, Lancashire, United Kingdom",
  },
  category: "Family Therapy",
  relevantSpecialty: "Systemic Psychotherapy",
  offerCatalog: {
    "@type": "OfferCatalog",
    name: "Family Therapy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Therapy Sessions",
          description:
            "Therapeutic sessions for families experiencing difficulties in communication, relationships, or managing change.",
        },
      },
    ],
  },
};
