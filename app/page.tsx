import { HomeHero } from "@/components/organisms/HomeHero";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional Systemic Psychotherapy in Chorley | Julia Halpin",
  description:
    "Professional Systemic Psychotherapy in Chorley by Julia Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused Systemic Psychotherapy.",
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://www.lhSystemicPsychotherapy.co.uk"),
  openGraph: {
    title: "Professional Systemic Psychotherapy in Chorley | Julia Halpin",
    description:
      "Professional Systemic Psychotherapy in Chorley by Julia Halpin. Expert help with anxiety, stress management, smoking cessation, and phobias through evidence-based solution-focused Systemic Psychotherapy.",
    url: "https://www.lhSystemic Psychotherapy.co.uk",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
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
  publisher: "Julia Halpin Systemic Psychotherapy",
  category: "Health & Wellness",
};

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Julia Halpin Systemic Psychotherapy",
            description:
              "Professional Systemic Psychotherapy services in Chorley, Lancashire, specialising in solution-focused Systemic Psychotherapy for anxiety, stress, phobias, and more.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chorley",
              addressRegion: "Lancashire",
              addressCountry: "GB",
              postalCode: "PR7",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.6532,
              longitude: -2.6329,
            },
            telephone: "+44 1234 567890",
            email: "julia@lhSystemic Psychotherapy.co.uk",
            url: "https://www.lhSystemic Psychotherapy.co.uk",
            sameAs: [
              "https://www.facebook.com/juliahalpinSystemic Psychotherapy",
              "https://www.linkedin.com/in/julia-halpin",
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "20:00",
            },
            priceRange: "££",
            image:
              "https://www.lhSystemic Psychotherapy.co.uk/images/julia_alt.jpg",
            founder: {
              "@type": "Person",
              name: "Julia Halpin",
              jobTitle: "Professional Hypnotherapist",
              description:
                "Professional hypnotherapist with over 36 years of mental health experience",
            },
          }),
        }}
      />
      <HomeHero />
    </>
  );
}
