import { Metadata } from "next";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Julia Halpin | Systemic Psychotherapist in Chorley",
  description:
    "Contact Julia Halpin to enquire about family, couple, and relationship therapy. Offering systemic psychotherapy sessions online or in Chorley. Book a consultation today.",
  keywords: [
    "contact Julia Halpin",
    "systemic psychotherapy contact",
    "Chorley therapy booking",
    "book family therapist",
    "couples counselling Chorley",
    "Lancashire psychotherapy enquiry",
    "mental health support contact",
    "relationship therapy consultation",
    "online psychotherapy appointment",
    "family therapist Chorley",
  ],
  alternates: {
    canonical: "https://www.familyandcoupletherapyservices.co.uk/contact",
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
    title: "Contact Julia Halpin | Systemic Psychotherapist in Chorley",
    description:
      "Contact Julia Halpin to enquire about family, couple, and relationship therapy. Offering systemic psychotherapy sessions online or in Chorley. Book a consultation today.",
    url: "https://www.familyandcoupletherapyservices.co.uk/contact",
    siteName: "Family and Couple Therapy Services",
    locale: "en_GB",
    type: "website",
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
    title: "Contact Julia Halpin | Systemic Psychotherapist in Chorley",
    description:
      "Get in touch with Julia Halpin for systemic psychotherapy. Enquire about therapy for families, couples, and individuals in Chorley or online.",
    images: [
      "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
    ],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Family and Couple Therapy Services",
  category: "Health & Wellness",
  classification: "Professional Services",
};

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Family and Couple Therapy Services",
            url: "https://www.familyandcoupletherapyservices.co.uk",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44 7538 001 922",
              contactType: "Customer Service",
              areaServed: "GB",
              availableLanguage: "English",
              email: "julia.halpin@familyandcoupletherapyservices.co.uk",
            },
          }),
        }}
      />
      <main
        className="flex items-center justify-center px-4 py-2 pt-0 md:pt-16"
        role="main"
        aria-label="Contact Julia Halpin Systemic Psychotherapy"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </main>
    </>
  );
}
