import React from "react";
import Image from "next/image";
import { BodyText } from "../atoms/BodyText";
import { Title } from "../atoms/Title";
import Script from "next/script";
import { systemicPsychotherapySchema } from "@/schemas/systemicPsychotherapySchema";

export default function AboutSystemicPsychotherapy() {
  return (
    <>
      <Script
        id="systemic-psychotherapy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(systemicPsychotherapySchema),
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
        <div className="container mx-auto px-4 mb-8">
          <div className="relative mb-12 max-w-5xl mx-auto mt-5">
            <div
              className="block min-h-[400px] sm:aspect-[21/8] w-full relative rounded-2xl overflow-hidden"
              aria-label="Growth and transformation concept"
            >
              <Image
                src="/images/gold_clouds.jpg"
                alt="Growth and transformation symbolized by a plant - representing personal development through Systemic Psychotherapy"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-indigo-900/20 backdrop-blur-[2px]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-8 text-center md:bg-gold-900/75 max-w-[80%] mx-auto rounded-2xl">
                <Title size="4xl" colour="ivory" weight="bold">
                  What is Systemic Psychotherapy?
                </Title>
              </div>
              <div className="absolute inset-x-4 top-4 bottom-4 flex items-center justify-center md:inset-auto md:left-1/2 md:top-[60%] md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl bg-gold-900/75 backdrop-blur-sm px-4 md:p-10 rounded-2xl shadow-xl w-auto md:w-full md:m-0">
                <BodyText variant="dark-bg" size="lg" colour="ivory">
                  <strong className="highlight-lavender-dark">
                    Systemic Psychotherapy
                  </strong>{" "}
                  focuses on relationships — how we communicate, interact, and
                  influence one another. It sees difficulties not just in
                  individuals, but in the{" "}
                  <em className="emphasis-text-dark">
                    patterns and dynamics between people
                  </em>
                  , such as couples or families. Rather than assigning blame, it{" "}
                  <strong className="highlight-lavender-dark">
                    creates space for everyone&apos;s voice
                  </strong>{" "}
                  to be heard and understood.
                </BodyText>
              </div>
            </div>
          </div>

          <div className="relative mb-12 max-w-5xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center">
            <div
              className="w-full lg:w-[400px] relative rounded-2xl overflow-hidden max-h-[500px] lg:max-h-[400px]"
              aria-label="Brain transformation concept"
            >
              <div className="aspect-[5/3] relative w-full h-full">
                <Image
                  src="/images/gold_steps.jpg"
                  alt="Butterfly brain transformation concept - representing the positive changes possible through Systemic Psychotherapy"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
            <div
              className="w-full lg:w-[550px] bg-gold-900 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
              role="article"
              aria-label="Explanation of systemic psychotherapy"
            >
              <BodyText variant="dark-bg" size="lg" colour="ivory">
                Using{" "}
                <strong className="highlight-text-dark">
                  open, reflective questions
                </strong>
                , systemic therapy helps identify
                <strong className="highlight-lavender-dark">
                  {" "}
                  unhelpful patterns
                </strong>{" "}
                and explore what new ways of relating might look like. By{" "}
                <em className="emphasis-text-dark">
                  focusing on what&apos;s happening between people — not just
                  within them
                </em>
                , it supports families and couples to move forward together with{" "}
                <strong className="highlight-text-dark">
                  more clarity, empathy, and connection
                </strong>
                .
              </BodyText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
