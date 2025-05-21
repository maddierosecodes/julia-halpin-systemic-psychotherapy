import { Metadata } from "next";
import FamilyTherapy from "@/components/organisms/FamilyTherapy";
import CoupleTherapy from "@/components/organisms/CoupleTherapy";
import SessionsAndFees from "@/components/organisms/SessionsAndFees";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import Supervision from "@/components/organisms/Supervision";
import Consultation from "@/components/organisms/Consultation";
import TabDisplay from "@/components/molecules/TabDisplay";
import { Suspense } from "react";
import Script from "next/script";

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

const SERVICE_TABS = [
  {
    id: "family-therapy",
    label: "Family Therapy",
    content: <FamilyTherapy />,
  },
  {
    id: "couple-therapy",
    label: "Couple Therapy",
    content: <CoupleTherapy />,
  },
  {
    id: "supervision",
    label: "Supervision",
    content: <Supervision />,
  },
  {
    id: "consultation",
    label: "Consultation",
    content: <Consultation />,
  },
];

export default function Services() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.familyandcoupletherapyservices.co.uk/#services",
            name: "Family and Couple Therapy Services",
            url: "https://www.familyandcoupletherapyservices.co.uk/services",
            description:
              "Professional systemic psychotherapy services in Chorley with Julia Halpin, including therapy for families, couples, and individuals, plus professional supervision and MSc student consultations.",
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
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Family Therapy",
                description:
                  "Systemic therapy sessions designed to support families in managing conflict, communication, and life transitions.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Couple Therapy",
                description:
                  "Support for couples experiencing relational difficulties, improving communication and emotional connection.",
              },
              {
                "@type": "TherapeuticProcedure",
                name: "Supervision for Newly Qualified Therapists",
                description:
                  "Professional clinical supervision for early-career therapists to reflect on and improve practice.",
              },
              {
                "@type": "EducationalOccupationalProgram",
                name: "MSc Student Consultations",
                description:
                  "One-off or ongoing consultation for Systemic Psychotherapy MSc students needing academic or placement-related support.",
              },
            ],
          }),
        }}
      />
      <div
        className="w-full mt-0 md:mt-10"
        aria-label="Systemic Psychotherapy Services"
      >
        <SectionWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <TabDisplay tabs={SERVICE_TABS} />
          </Suspense>
        </SectionWrapper>
        <SectionWrapper>
          <SessionsAndFees />
        </SectionWrapper>
      </div>
    </>
  );
}
