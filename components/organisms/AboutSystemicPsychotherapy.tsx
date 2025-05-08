import React from "react";
import Image from "next/image";
import { BodyText } from "../atoms/BodyText";
import { Title } from "../atoms/Title";
import Script from "next/script";

export default function AboutSystemicPsychotherapy() {
  return (
    <>
      <Script
        id="solution-focused-Systemic Psychotherapy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: " Systemic Psychotherapy",
            description:
              "A forward-looking approach to therapy that helps individuals imagine and work towards their desired future through goal-oriented questions and positive suggestion.",
            medicalSpecialty: {
              "@type": "MedicalSpecialty",
              name: "Mental Health",
            },
            relevantSpecialty: [
              "Anxiety Treatment",
              "Stress Management",
              "Phobia Treatment",
              "Stop Smoking",
              "Mental Health",
            ],
            recognizingAuthority: [
              "National Council for Systemic Psychotherapy",
              "Association for  Systemic Psychotherapy",
              "Complementary & Natural Healthcare Council",
            ],
          }),
        }}
      />
      <section
        id="about-systemic-psychotherapy"
        className="pt-8"
        aria-labelledby="about-systemic-psychotherapy-heading"
      >
        <h2 id="about-systemic-psychotherapy-heading" className="sr-only">
          About Systemic Psychotherapy
        </h2>
        <div className="container mx-auto px-4 mb-8 text-center">
          <Title size="3xl" colour="rose" weight="bold">
            Systemic Psychotherapy
          </Title>

          <div className="relative mb-12 max-w-5xl mx-auto mt-5">
            <div
              className="block min-h-[400px] sm:aspect-[21/8] w-full relative rounded-2xl overflow-hidden"
              role="img"
              aria-label="Growth and transformation concept"
            >
              <Image
                src="/images/growth_plant.jpg"
                alt="Growth and transformation symbolized by a plant - representing personal development through Systemic Psychotherapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-4 top-4 bottom-4 flex items-center justify-center sm:p-0 sm:inset-auto sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:max-w-md bg-indigo-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-auto sm:w-full sm:m-0">
                <BodyText variant="dark-bg" size="lg" colour="ivory">
                  <strong className="highlight-lavender-dark">
                    Systemic Psychotherapy
                  </strong>{" "}
                  is a forward-looking approach. Rather than dwelling on the
                  past, it encourages you to
                  <em className="emphasis-text-dark">
                    {" "}
                    imagine the future you want
                  </em>
                  , then helps you take steps to get there. The therapist will
                  ask{" "}
                  <strong className="highlight-lavender-dark">
                    powerful, goal-oriented questions
                  </strong>{" "}
                  like: &ldquo;
                  <em className="emphasis-text-dark">
                    What would be different if things got better?
                  </em>
                  &rdquo; or &ldquo;
                  <em className="emphasis-text-dark">
                    How would you know things had changed?
                  </em>
                  &rdquo;
                </BodyText>
              </div>
            </div>
          </div>

          <div className="relative mb-12 max-w-5xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center">
            <div
              className="w-full lg:w-[400px] relative rounded-2xl overflow-hidden max-h-[500px] lg:max-h-[400px]"
              role="img"
              aria-label="Brain transformation concept"
            >
              <div className="aspect-[5/3] relative w-full h-full">
                <Image
                  src="/images/butterfly_brain.jpg"
                  alt="Butterfly brain transformation concept - representing the positive changes possible through Systemic Psychotherapy"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
            <div
              className="w-full lg:w-[550px] bg-indigo-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
              role="article"
              aria-label="Explanation of hypnosis"
            >
              <BodyText variant="dark-bg" size="lg" colour="ivory">
                <strong className="highlight-text-dark">
                  Hypnosis helps calm the mind and body
                </strong>
                , easing anxiety through
                <strong className="highlight-lavender-dark">
                  {" "}
                  relaxation and visualisation
                </strong>
                . In this natural,
                <em className="emphasis-text-dark"> trance-like state</em>, your
                brain becomes more open to positive suggestion, making it easier
                to shift perspective. You remain{" "}
                <strong className="highlight-text-dark">
                  fully aware and in control
                </strong>
                , but deeply relaxed. This state supports{" "}
                <strong className="highlight-lavender-dark">
                  focus on the positives
                </strong>{" "}
                in your life and unlocks inner resources, encouraging
                <em className="emphasis-text-dark">
                  {" "}
                  clarity, confidence, and lasting change
                </em>
                .
              </BodyText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
