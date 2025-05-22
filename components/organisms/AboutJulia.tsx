import React from "react";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { ProfileImage } from "../atoms/ProfileImage";
import { CTALink } from "../atoms/CTALink";
import Link from "next/link";
import Script from "next/script";

export default function AboutJulia() {
  const heroText = (
    <div
      className="flex flex-col items-center text-center p-3 xl:pr-10 bg-lavender-50/70 rounded-lg shadow-md border-3 border-gold lg:max-h-[550px] lg:h-full lg:self-center"
      role="article"
      aria-label="About Julia Halpin"
    >
      <div className="lg:block hidden">
        <Title size="4xl" colour="lavender" weight="bold">
          Julia Halpin
        </Title>

        <Subtitle size="xl" variant="light-bg" weight="medium">
          Systemic Psychotherapist
        </Subtitle>
      </div>

      <div className="w-full lg:max-w-2xl my-4 sm:my-6 text-base sm:text-lg text-ink-500 lg:overflow-y-auto lg:pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-indigo-800 [&::-webkit-scrollbar-thumb]:bg-lavender-300 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgb(225,218,248)_rgb(35,35,67)]">
        <BodyText size="lg">
          I&apos;m Julia, a{" "}
          <span className="highlight-indigo">
            UKCP-registered Systemic Psychotherapist
          </span>{" "}
          with over{" "}
          <span className="highlight-text">35 years of experience</span> as a
          Registered Mental Health Nurse (RMN), including{" "}
          <span className="emphasis-text">
            22 years in Child and Adolescent Mental Health Services
          </span>{" "}
          and{" "}
          <span className="emphasis-text">13 years in Adult Mental Health</span>
          .
          <br />I work with{" "}
          <span className="highlight-lavender">
            individuals, couples, and families
          </span>{" "}
          to help them understand the patterns of interaction that shape their
          relationships and wellbeing.
          <br />
          <span className="emphasis-text">
            Systemic psychotherapy offers a compassionate, non-blaming approach
          </span>{" "}
          that creates space for each person&apos;s perspective to be heard and
          valued, working to support clients facing{" "}
          <span className="highlight-text">
            anxiety, communication difficulties, neurodiversity, self-esteem
            issues, and family conflict
          </span>
          .
          <br />I also offer{" "}
          <span className="highlight-lavender">
            supervision to qualified and trainee Systemic Psychotherapists &
            Systemic Practitioners
          </span>
          .
          <br />
          <span className="highlight-indigo">
            <Link
              href="/contact?enquiry=general"
              className="underline decoration-2 underline-offset-4 hover:text-lavender-500 hover:decoration-lavender-500 transition-all"
            >
              Get in touch
            </Link>{" "}
            to discuss how I can support you.
          </span>
        </BodyText>
      </div>
    </div>
  );

  const ctaButton = (
    <CTALink href="/contact?enquiry=general" variant="default-centered" darkBg>
      Get in touch
    </CTALink>
  );

  const heroImage = (
    <div className="flex flex-col items-center gap-6">
      <div
        className="w-full max-w-[280px] sm:max-w-md mx-auto aspect-square p-4 lg:self-center"
        role="img"
        aria-label="Julia Halpin's profile image"
      >
        <ProfileImage
          src="/images/julia_halpin.jpg"
          alt="Julia Halpin, a professional systemic psychotherapist based in Chorley"
          shape="circle"
          priority={true}
          border
        />
      </div>
      {ctaButton}
    </div>
  );

  return (
    <>
      <Script
        id="julia-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Julia Halpin",
            jobTitle: "Systemic Psychotherapist",
            description:
              "Julia Halpin is a qualified systemic psychotherapist with over 30 years of mental health experience. She specialises in helping individuals, couples, and families with anxiety, relationship challenges, and emotional wellbeing.",
            image:
              "https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg",
            url: "https://www.familyandcoupletherapyservices.co.uk/about",
            knowsAbout: [
              "Systemic Psychotherapy",
              "Family Therapy",
              "Couple Therapy",
              "Mental Health",
              "Anxiety",
              "Stress",
              "Relationship Support",
              "Neurodiversity",
            ],
            hasCredential: [
              "Postgraduate Diploma in Systemic Psychotherapy",
              "Registered Mental Health Nurse (RMN)",
              "Member of UKCP",
            ],
            sameAs: [
              "https://www.counselling-directory.org.uk/counsellors/julia-halpin",
              "https://www.psychotherapy.org.uk/therapist/Julia-Halpin-iAhUbAAK",
              "https://www.leonecentre.com/associates/julia-halpin/",
            ],
          }),
        }}
      />

      <section
        id="about-julia"
        className="mt-4 lg:mt-10 flex flex-col items-center justify-center px-4"
        aria-labelledby="about-julia-heading"
      >
        <h2 id="about-julia-heading" className="sr-only">
          About Julia Halpin
        </h2>
        <div className="w-full max-w-7xl bg-indigo-500/75 border-3 border-gold rounded-xl sm:p-8 shadow-xl">
          <div className="flex flex-col items-center text-center lg:hidden">
            <Title size="5xl" colour="lavender-light" weight="bold">
              Julia Halpin
            </Title>

            <Subtitle size="2xl" variant="dark-bg" weight="medium">
              Systemic Psychotherapist
            </Subtitle>
          </div>
          <Hero
            imageComponent={heroImage}
            textComponent={heroText}
            imagePosition="left"
          />
        </div>
      </section>
    </>
  );
}
