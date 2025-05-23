import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Family, Couple & Systemic Psychotherapy in Chorley | Julia Halpin",
  description:
    "Offering professional psychotherapy services in Chorley and online. Julia Halpin is an experienced systemic psychotherapist specialising in family, relationship, and couple therapy.",
  alternates: {
    canonical: "https://www.familyandcoupletherapyservices.co.uk/",
  },
  metadataBase: new URL("https://www.familyandcoupletherapyservices.co.uk"),
  openGraph: {
    title: "Family, Couple & Systemic Psychotherapy in Chorley | Julia Halpin",
    description:
      "Offering professional psychotherapy services in Chorley and online. Julia Halpin is an experienced systemic psychotherapist specialising in family, relationship, and couple therapy.",
    url: "https://www.familyandcoupletherapyservices.co.uk",
    siteName: "Family and Couple Therapy Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Halpin - Systemic Psychotherapist",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Family and Couple Therapy Services",
  category: "Health & Wellness",
  keywords: [
    "Systemic Psychotherapy",
    "Family Therapy",
    "Relationship Therapy",
    "Couple Therapy",
    "Psychotherapist Chorley",
    "Online Therapy UK",
    "Julia Halpin",
  ],
};
