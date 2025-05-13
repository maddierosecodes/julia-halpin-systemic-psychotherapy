import React from "react";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { ProfileImage } from "../atoms/ProfileImage";
import Link from "next/link";
import Script from "next/script";

export default function AboutJulia() {
  const heroText = (
    <div
      className="flex flex-col items-center text-center xl:pr-10"
      role="article"
      aria-label="About Julia Halpin"
    >
      <Title size="4xl" colour="indigo" weight="bold">
        Julia Halpin
      </Title>

      <Subtitle size="xl" colour="lavender" weight="medium">
        Systemic Psychotherapist
      </Subtitle>

      <span className="max-w-3xl my-4 sm:my-8 text-base sm:text-lg text-ink-500">
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
      </span>
    </div>
  );

  const heroImage = (
    <div
      className="w-full max-w-[280px] sm:max-w-md mx-auto aspect-square"
      role="img"
      aria-label="Julia Halpin's profile image"
    >
      <ProfileImage
        src="/images/julia_halpin.jpg"
        alt="Julia Halpin, a professional hypnotherapist based in Chorley"
        shape="circle"
        priority={true}
      />
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
            jobTitle: " Hypnotherapist",
            description:
              "Professional hypnotherapist with over 30 years of mental health experience, specialising in solution-focused Systemic Psychotherapy for anxiety, stress, and more.",
            image:
              "https://juliahalpinSystemic Psychotherapy.com/images/julia_alt.jpg",
            url: "https://juliahalpinSystemic Psychotherapy.com/about",
            sameAs: [
              "https://www.facebook.com/juliahalpinSystemic Psychotherapy",
              "https://www.linkedin.com/in/julia-halpin",
            ],
            knowsAbout: [
              " Systemic Psychotherapy",
              "Mental Health",
              "Anxiety Treatment",
              "Stress Management",
              "Stop Smoking",
              "Phobia Treatment",
            ],
            hasCredential: [
              "Diploma in  Systemic Psychotherapy (DSFH)",
              "Systemic Psychotherapy in Practice Diploma (HPD)",
              "Registered Mental Health Nurse",
            ],
          }),
        }}
      />
      <section
        id="about-julia"
        className="mt-4 sm:mt-15 flex flex-col items-center justify-center px-4"
        aria-labelledby="about-julia-heading"
      >
        <h2 id="about-julia-heading" className="sr-only">
          About Julia Halpin
        </h2>
        <Hero
          imageComponent={heroImage}
          textComponent={heroText}
          imagePosition="left"
        />
      </section>
    </>
  );
}
