import { Metadata } from "next";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Contact Julia Halpin | Professional Systemic Psychotherapy in Chorley",
  description:
    "Get in touch with Julia Halpin for professional Systemic Psychotherapy services in Chorley. Book a consultation or ask questions about how solution-focused Systemic Psychotherapy can help you achieve positive change.",
  keywords: [
    "contact hypnotherapist",
    "book Systemic Psychotherapy session",
    "Chorley Systemic Psychotherapy consultation",
    " Systemic Psychotherapy booking",
    "Systemic Psychotherapy appointment",
    "mental health consultation",
    "Lancashire hypnotherapist contact",
    "professional Systemic Psychotherapy consultation",
    "Systemic Psychotherapy enquiry",
    "contact Julia Halpin",
  ],
  alternates: {
    canonical: "/contact",
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
      "Contact Julia Halpin | Professional Systemic Psychotherapy in Chorley",
    description:
      "Get in touch with Julia Halpin for professional Systemic Psychotherapy services in Chorley. Book a consultation or ask questions about how solution-focused Systemic Psychotherapy can help you achieve positive change.",
    url: "https://www.lhSystemic Psychotherapy.co.uk/contact",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Julia Halpin | Professional Systemic Psychotherapy in Chorley",
    description:
      "Get in touch with Julia Halpin for professional Systemic Psychotherapy services in Chorley. Book a consultation or ask questions about how solution-focused Systemic Psychotherapy can help you achieve positive change.",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Julia Halpin Systemic Psychotherapy",
  category: "Contact",
  classification: "Professional Services",
};

export default function Contact() {
  return (
    <main
      className="flex items-center justify-center px-4 py-8 pt-16"
      role="main"
      aria-label="Contact Julia Halpin Systemic Psychotherapy"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
