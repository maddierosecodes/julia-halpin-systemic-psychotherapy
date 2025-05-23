import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Systemic Psychotherapy Services in Chorley | Family, Couple & Individual Therapy",
  description:
    "Explore professional therapy services in Chorley with Julia Halpin. Offering systemic psychotherapy for individuals, couples, and families. Supervision and MSc student consultations available.",
  keywords: [
    "Systemic Psychotherapy services",
    "family therapy Chorley",
    "couple therapy Chorley",
    "individual therapy Chorley",
    "Chorley therapist",
    "stress therapy",
    "anxiety support",
    "mental wellbeing",
    "Lancashire therapy",
    "supervision for therapists",
    "MSc student consultation",
    "evidence-based therapy",
    "online therapy UK",
    "relationship counselling",
    "Julia Halpin",
  ],
  alternates: {
    canonical: "https://www.familyandcoupletherapyservices.co.uk/services",
  },
  metadataBase: new URL("https://www.familyandcoupletherapyservices.co.uk"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Systemic Psychotherapy Services in Chorley | Family, Couple & Individual Therapy",
    description:
      "Discover systemic psychotherapy services with Julia Halpin in Chorley. Sessions available for individuals, couples, and families. Also offering supervision and MSc consultations.",
    url: "https://www.familyandcoupletherapyservices.co.uk/services",
    siteName: "Family and Couple Therapy Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.familyandcoupletherapyservices.co.uk/images/recovery_road.jpg",
        width: 1200,
        height: 630,
        alt: "Systemic Psychotherapy services in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Systemic Psychotherapy Services in Chorley | Family, Couple & Individual Therapy",
    description:
      "Learn more about systemic therapy services in Chorley with Julia Halpin. Individual, couple, and family sessions available, including professional supervision.",
    images: [
      "https://www.familyandcoupletherapyservices.co.uk/images/recovery_road.jpg",
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Health & Wellness",
  classification: "Professional Services",
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Family and Couple Therapy Services",
};
