import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Family and Couple Therapy Services",
  description:
    "Privacy policy for Family and Couple Therapy Services. Learn how we collect, use, and protect your personal information in accordance with UK GDPR and professional confidentiality standards.",
  alternates: {
    canonical:
      "https://www.familyandcoupletherapyservices.co.uk/privacy-policy",
  },
  metadataBase: new URL("https://www.familyandcoupletherapyservices.co.uk"),
  openGraph: {
    title: "Privacy Policy | Family and Couple Therapy Services",
    description:
      "Privacy policy for Family and Couple Therapy Services. Learn how we collect, use, and protect your personal information in accordance with UK GDPR and professional confidentiality standards.",
    url: "https://www.familyandcoupletherapyservices.co.uk/privacy-policy",
    siteName: "Family and Couple Therapy Services",
    locale: "en_GB",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Family and Couple Therapy Services",
  category: "Legal",
};
