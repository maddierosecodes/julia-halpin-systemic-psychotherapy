import SectionWrapper from "@/components/atoms/SectionWrapper";
import { HomeHero } from "@/components/organisms/HomeHero";
import { homeMetadata } from "./page.metadata";
import Script from "next/script";
import { homeSchema } from "@/schemas/homeSchema";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />
      <main id="main-content" aria-label="Home page">
        <SectionWrapper>
          <HomeHero />
        </SectionWrapper>
      </main>
    </>
  );
}
