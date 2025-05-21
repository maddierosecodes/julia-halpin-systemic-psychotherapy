import SectionWrapper from "@/components/atoms/SectionWrapper";
import { HomeHero } from "@/components/organisms/HomeHero";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
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
            "@id": "https://www.familyandcoupletherapyservices.co.uk/#business",
            name: "Family and Couple Therapy Services",
            description:
              "Professional psychotherapy services in Chorley and online. Specialising in family, couple, and relationship therapy, delivered by systemic psychotherapist Julia Halpin.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "7 St. George's St.",
              addressLocality: "Chorley",
              addressRegion: "Lancashire",
              postalCode: "PR7 2AA",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.6532,
              longitude: -2.6329,
            },
            telephone: "+44 7538 001 922",
            email: "julia.halpin@familyandcoupletherapyservices.co.uk",
            url: "https://www.familyandcoupletherapyservices.co.uk/",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Wednesday",
                opens: "17:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Thursday",
                opens: "17:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Friday",
                opens: "09:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "12:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "09:00",
                closes: "12:00",
              },
            ],
            priceRange: "££",
            image:
              "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
            founder: {
              "@type": "Person",
              "@id": "https://www.familyandcoupletherapyservices.co.uk/about",
              name: "Julia Halpin",
              jobTitle: "Systemic Psychotherapist",
              description:
                "Experienced systemic psychotherapist specialising in family, couple, and relationship therapy.",
            },
            accessibilityFeatures: [
              "accessibleParking",
              "wheelchairAccessible",
              "onlineAppointments",
            ],
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Systemic Psychotherapy",
                description:
                  "Psychotherapy using systemic approaches, including work with families, couples, and individuals.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Family Therapy",
              },
              {
                "@type": "MedicalTherapy",
                name: "Couple Therapy",
              },
              {
                "@type": "MedicalTherapy",
                name: "Clinical Supervision",
              },
              {
                "@type": "MedicalTherapy",
                name: "Consultation",
              },
            ],
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
