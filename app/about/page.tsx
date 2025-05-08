import { Metadata } from "next";
import AboutJulia from "@/components/organisms/AboutJulia";
import AboutSystemicPsychotherapy from "@/components/organisms/AboutSystemicPsychotherapy";
import SystemicPsychotherapyList from "@/components/organisms/SystemicPsychotherapyList";
import Qualifications from "@/components/organisms/Qualifications";
import SectionWrapper from "@/components/atoms/SectionWrapper";
// import Testimonials from "@/components/organisms/Testimonials";
// import Articles from "@/components/organisms/Articles";

export const metadata: Metadata = {
  title: "About Julia Halpin | Professional Hypnotherapist in Chorley",
  description:
    "Meet Julia Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused Systemic Psychotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern Systemic Psychotherapy techniques can help you achieve lasting positive change.",
  keywords: [
    "Julia Halpin",
    "hypnotherapist",
    "Chorley",
    " Systemic Psychotherapy",
    "anxiety treatment",
    "stress management",
    "mental health",
    "NHS nurse",
    "professional Systemic Psychotherapy",
    "stop smoking",
    "phobia treatment",
    "Lancashire hypnotherapist",
    " therapy",
    "mental health support",
    "Systemic Psychotherapy near me",
  ],
  alternates: {
    canonical: "/about",
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
    title: "About Julia Halpin | Professional Hypnotherapist in Chorley",
    description:
      "Meet Julia Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused Systemic Psychotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern Systemic Psychotherapy techniques can help you achieve lasting positive change.",
    url: "https://juliahalpinSystemic Psychotherapy.com/about",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://juliahalpinSystemic Psychotherapy.com/images/julia_alt.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Halpin, professional hypnotherapist based in Chorley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Julia Halpin | Professional Hypnotherapist in Chorley",
    description:
      "Meet Julia Halpin, a professional hypnotherapist with over 30 years of mental health experience. Specialising in solution-focused Systemic Psychotherapy for anxiety, stress, phobias, and more in Chorley and surrounding areas. Discover how his unique approach combining NHS experience with modern Systemic Psychotherapy techniques can help you achieve lasting positive change.",
    images: [
      "https://juliahalpinSystemic Psychotherapy.com/images/julia_alt.jpg",
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

export default function About() {
  return (
    <main
      className="mt-10"
      role="main"
      aria-label="About Julia Halpin Systemic Psychotherapy"
    >
      <SectionWrapper>
        <AboutJulia />
      </SectionWrapper>

      <SectionWrapper>
        <Qualifications />
      </SectionWrapper>

      <SectionWrapper>
        <AboutSystemicPsychotherapy />
      </SectionWrapper>

      <SectionWrapper>
        <SystemicPsychotherapyList />
      </SectionWrapper>

      {/* <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <Articles />
      </SectionWrapper> */}
    </main>
  );
}
