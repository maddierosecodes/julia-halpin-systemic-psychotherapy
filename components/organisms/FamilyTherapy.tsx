import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import familyImage from "@/public/images/family.jpg";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";
import { BLUR_DATA_URL } from "../utils/imageUtils";

export default function FamilyTherapy() {
  return (
    <section
      id="support-offered"
      className="flex flex-col justify-center items-center gap-3 mx-auto px-4 sm:px-6 md:px-2 max-w-7xl mb-8 mt-4"
      aria-labelledby="support-offered-heading"
    >
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 justify-center items-start">
        {/* Image and Title Section */}
        <div
          className="hidden lg:block relative w-full lg:w-1/2 order-2 lg:order-1"
          role="complementary"
          aria-label="Family therapy illustration"
        >
          <Image
            src={familyImage}
            alt="Family Therapy"
            className="rounded-xl object-cover w-full aspect-[3/2.385]"
            quality={80}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <div className="bg-indigo-900/60 p-2 md:p-4 rounded-lg inline-block">
              <Title
                colour="ivory"
                weight="bold"
                size="2xl"
                smSize="3xl"
                lgSize="4xl"
              >
                Family Therapy
              </Title>
            </div>
          </div>
        </div>
        {/* Text Box Section */}
        <div
          className="w-full lg:w-1/2 bg-indigo-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl text-center mx-auto flex flex-col items-center gap-4 order-1 lg:order-2"
          role="article"
          aria-label="Explanation of family therapy"
        >
          <BodyText variant="dark-bg" size="md" smSize="lg" colour="ivory">
            If your family is feeling{" "}
            <span className="highlight-text-dark">
              stuck, overwhelmed, or struggling to communicate
            </span>
            , Family Therapy offers a way to move forward —{" "}
            <span className="emphasis-text-dark">together</span>.
            <br />
            We don&apos;t live our lives in isolation.{" "}
            <span className="highlight-indigo-dark">
              Each family member affects the whole system
            </span>
            , and over time, patterns of behaviour can become unhelpful or
            strained.
            <br />
            <span className="highlight-lavender-dark">
              Systemic therapy
            </span>{" "}
            helps you explore how these patterns have developed, how each person
            sees the situation, and what new ways of relating could work better.
            <br />
            Whether you&apos;re facing{" "}
            <span className="highlight-text-dark">
              stress, loss, parenting challenges, illness, or change
            </span>
            , I provide a safe, supportive space to listen, reflect, and move
            towards solutions —{" "}
            <span className="emphasis-text-dark">together</span>.
            <br />
            My aim is to support{" "}
            <span className="highlight-lavender-dark">
              meaningful change that works for your family
            </span>
            .
          </BodyText>
          <CTALink href="/contact?type=family-therapy" darkBg>
            Explore Family Therapy
          </CTALink>
        </div>
      </div>
    </section>
  );
}
