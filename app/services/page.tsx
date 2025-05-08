import { Metadata } from "next";
import SystemicPsychotherapy from "@/components/organisms/SystemicPsychotherapy";
import StopSmoking from "@/components/organisms/StopSmoking";
import OvercomePhobias from "@/components/organisms/OvercomePhobias";
import SessionsAndFees from "@/components/organisms/SessionsAndFees";
import SectionWrapper from "@/components/atoms/SectionWrapper";

export const metadata: Metadata = {
  title:
    "Professional Systemic Psychotherapy Services | Julia Halpin Systemic Psychotherapy Chorley",
  description:
    "Expert Systemic Psychotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Julia Halpin.",
  keywords: [
    "Systemic Psychotherapy services",
    "stop smoking Systemic Psychotherapy",
    "phobia treatment",
    "anxiety management",
    "stress relief",
    " Systemic Psychotherapy",
    "Chorley hypnotherapist",
    "Lancashire Systemic Psychotherapy",
    "quit smoking",
    "overcome fears",
    "relaxation therapy",
    "mental wellbeing",
    "professional Systemic Psychotherapy",
    "evidence-based hypnosis",
    "affordable Systemic Psychotherapy",
  ],
  alternates: {
    canonical: "/services",
  },
  metadataBase: new URL("https://www.lhSystemicPsychotherapy.co.uk"),
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
      "Professional Systemic Psychotherapy Services | Julia Halpin Systemic Psychotherapy Chorley",
    description:
      "Expert Systemic Psychotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Julia Halpin.",
    url: "https://www.lhSystemic Psychotherapy.co.uk/services",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.lhSystemic Psychotherapy.co.uk/images/recovery_road.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Systemic Psychotherapy services in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Systemic Psychotherapy Services | Julia Halpin Systemic Psychotherapy Chorley",
    description:
      "Expert Systemic Psychotherapy services in Chorley including stop smoking, phobia treatment, anxiety management, and stress relief. Solution-focused approach with proven results. Flexible sessions available with experienced NHS professional Julia Halpin.",
    images: [
      "https://www.lhSystemic Psychotherapy.co.uk/images/recovery_road.jpg",
    ],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Health & Wellness",
  classification: "Professional Services",
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Julia Halpin Systemic Psychotherapy",
};

export default function Services() {
  return (
    <main
      role="main"
      className="mt-10"
      aria-label="Systemic Psychotherapy Services"
    >
      <SectionWrapper>
        <SystemicPsychotherapy />
      </SectionWrapper>
      <SectionWrapper>
        <StopSmoking />
      </SectionWrapper>
      <SectionWrapper>
        <OvercomePhobias />
      </SectionWrapper>
      <SectionWrapper>
        <SessionsAndFees />
      </SectionWrapper>
    </main>
  );
}
