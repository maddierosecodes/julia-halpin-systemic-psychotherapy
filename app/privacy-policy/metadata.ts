import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Julia Halpin Systemic Psychotherapy",
  description:
    "Privacy policy for Julia Halpin Systemic Psychotherapy. Learn how we collect, use, and protect your personal information in accordance with UK GDPR.",
  alternates: {
    canonical: "/privacy-policy",
  },
  metadataBase: new URL("https://www.lhSystemicPsychotherapy.co.uk"),
  openGraph: {
    title: "Privacy Policy | Julia Halpin Systemic Psychotherapy",
    description:
      "Privacy policy for Julia Halpin Systemic Psychotherapy. Learn how we collect, use, and protect your personal information in accordance with UK GDPR.",
    url: "https://www.lhSystemicPsychotherapy.co.uk/privacy-policy",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Julia Halpin Systemic Psychotherapy",
  category: "Legal",
};
