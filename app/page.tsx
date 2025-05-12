import SectionWrapper from "@/components/atoms/SectionWrapper";
import { HomeHero } from "@/components/organisms/HomeHero";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Professional Systemic Psychotherapy in Chorley | Julia Halpin",
  description:
    "Experienced Systemic Psychotherapist in Chorley offering professional therapy services. Specialising in family therapy, relationships, and personal growth through evidence-based systemic approaches.",
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://www.juliahalpin-therapy.co.uk"),
  openGraph: {
    title: "Professional Systemic Psychotherapy in Chorley | Julia Halpin",
    description:
      "Experienced Systemic Psychotherapist in Chorley offering professional therapy services. Specialising in family therapy, relationships, and personal growth through evidence-based systemic approaches.",
    url: "https://www.juliahalpin-therapy.co.uk",
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
  keywords: [
    "Systemic Psychotherapy",
    "Family Therapy",
    "Relationship Therapy",
    "Chorley",
    "Lancashire",
    "Julia Halpin",
  ],
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
            "@id": "https://www.juliahalpin-therapy.co.uk/#business",
            name: "Julia Halpin Systemic Psychotherapy",
            description:
              "Professional Systemic Psychotherapy services in Chorley, Lancashire. Specialising in family therapy, relationship counselling, and personal development through systemic approaches.",
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
            email: "contact@juliahalpin-therapy.co.uk",
            url: "https://www.juliahalpin-therapy.co.uk",
            sameAs: [
              "https://www.facebook.com/juliahalpintherapy",
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
            image: "https://www.juliahalpin-therapy.co.uk/images/julia_alt.jpg",
            founder: {
              "@type": "Person",
              "@id": "https://www.juliahalpin-therapy.co.uk/#founder",
              name: "Julia Halpin",
              jobTitle: "Systemic Psychotherapist",
              description:
                "Experienced Systemic Psychotherapist specialising in family therapy and relationship counselling",
            },
            accessibilityFeatures: [
              "accessibleParking",
              "wheelchairAccessible",
              "onlineBooking",
            ],
            availableService: {
              "@type": "MedicalTherapy",
              name: "Systemic Psychotherapy",
              description:
                "Professional systemic psychotherapy services including family therapy and relationship counselling",
            },
          }),
        }}
      />
      <main id="main-content" role="main" aria-label="Home page">
        <SectionWrapper>
          <HomeHero />
        </SectionWrapper>
      </main>
    </>
  );
}
