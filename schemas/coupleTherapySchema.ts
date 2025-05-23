export const coupleTherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://www.familyandcoupletherapyservices.co.uk/#couple-therapy",
  name: "Couple Therapy",
  description:
    "Professional couple therapy services in Chorley. Supporting couples who are experiencing difficulties, tension, or distance in their relationship using systemic approaches to improve understanding and communication.",
  url: "https://www.familyandcoupletherapyservices.co.uk/services?service=couple-therapy",
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
  category: "Couple Therapy",
  relevantSpecialty: "Systemic Psychotherapy",
  offerCatalog: {
    "@type": "OfferCatalog",
    name: "Couple Therapy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couple Therapy Sessions",
          description:
            "Therapeutic sessions for couples experiencing relationship difficulties, communication problems, or navigating significant life changes.",
        },
      },
    ],
  },
};
