import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Julia Halpin | Systemic Psychotherapist in Chorley",
  description:
    "Learn about Julia Halpin, a Systemic Psychotherapist based in Chorley. With over 30 years of mental health experience, she offers evidence-based family, couple, and relationship therapy both online and in-person.",
  keywords: [
    "Julia Halpin",
    "Systemic Psychotherapy",
    "family therapy",
    "relationship therapy",
    "couple therapy",
    "Chorley therapist",
    "Lancashire mental health",
    "neurodiversity support",
    "mental health therapist Chorley",
  ],
  alternates: {
    canonical: "https://www.familyandcoupletherapyservices.co.uk/about",
  },
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
    title: "About Julia Halpin | Systemic Psychotherapist in Chorley",
    description:
      "Learn about Julia Halpin, a Systemic Psychotherapist based in Chorley. With over 30 years of mental health experience, she offers evidence-based family, couple, and relationship therapy both online and in-person.",
    url: "https://www.familyandcoupletherapyservices.co.uk/about",
    siteName: "Family and Couple Therapy Services",
    locale: "en_GB",
    type: "profile",
    images: [
      {
        url: "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Halpin, Systemic Psychotherapist in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Julia Halpin | Systemic Psychotherapist in Chorley",
    description:
      "Discover Julia Halpin's background in Systemic Psychotherapy. She supports individuals, families, and couples in Chorley and online, with over 30 years of mental health experience.",
    images: [
      "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
    ],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Health & Wellness",
  classification: "Professional Services",
};
