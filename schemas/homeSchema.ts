export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.familyandcoupletherapyservices.co.uk/#business",
  name: "Family and Couple Therapy Services",
  description:
    "Professional psychotherapy services in Chorley and online. Specialising in family, couple, and relationship therapy, delivered by systemic psychotherapist Julia Halpin.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 St. George's St.",
    addressLocality: "Chorley",
    addressRegion: "Lancashire",
    postalCode: "PR7 2AA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.6532,
    longitude: -2.6329,
  },
  telephone: "+44 7538 001 922",
  email: "julia.halpin@familyandcoupletherapyservices.co.uk",
  url: "https://www.familyandcoupletherapyservices.co.uk/",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "17:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "17:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  priceRange: "££",
  image:
    "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
  founder: {
    "@type": "Person",
    "@id": "https://www.familyandcoupletherapyservices.co.uk/about",
    name: "Julia Halpin",
    jobTitle: "Systemic Psychotherapist",
    description:
      "Experienced systemic psychotherapist specialising in family, couple, and relationship therapy.",
  },
  accessibilityFeatures: [
    "accessibleParking",
    "wheelchairAccessible",
    "onlineAppointments",
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Systemic Psychotherapy",
      description:
        "Psychotherapy using systemic approaches, including work with families, couples, and individuals.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Family Therapy",
    },
    {
      "@type": "MedicalTherapy",
      name: "Couple Therapy",
    },
    {
      "@type": "MedicalTherapy",
      name: "Clinical Supervision",
    },
    {
      "@type": "MedicalTherapy",
      name: "Consultation",
    },
  ],
};
