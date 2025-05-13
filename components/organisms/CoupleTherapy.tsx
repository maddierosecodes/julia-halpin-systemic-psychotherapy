import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import coupleImage from "@/public/images/couple.jpg";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";
import { BLUR_DATA_URL } from "../utils/imageUtils";

export default function CoupleTherapy() {
  return (
    <section
      id="support-offered"
      className="flex flex-col justify-center items-center gap-3 mx-auto px-4 sm:px-6 md:px-2 max-w-7xl mb-8 mt-4"
      aria-labelledby="support-offered-heading"
    >
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 justify-center items-start">
        {/* Image and Title Section */}
        <div
          className="hidden lg:block relative w-full lg:w-1/2 order-2 lg:order-2"
          role="complementary"
          aria-label="Family therapy illustration"
        >
          <Image
            src={coupleImage}
            alt="Couple Therapy"
            className="rounded-xl object-cover w-full aspect-[3/1.95]"
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
                Couple Therapy
              </Title>
            </div>
          </div>
        </div>
        {/* Text Box Section */}
        <div
          className="w-full lg:w-1/2 bg-indigo-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl text-center mx-auto flex flex-col items-center gap-4 order-1 lg:order-1"
          role="article"
          aria-label="Explanation of family therapy"
        >
          <BodyText variant="dark-bg" size="md" smSize="lg" colour="ivory">
            <span className="highlight-text-dark">
              Relationships can go through difficult periods
            </span>{" "}
            — life events, health issues, or changes over time can create
            tension or distance.
            <br />
            <span className="highlight-indigo-dark">
              Couple Therapy offers a safe, structured space
            </span>{" "}
            to reflect on what&apos;s happening in your relationship and explore
            what you&apos;d like to change.
            <br />
            <span className="emphasis-text-dark">
              Using a systemic approach
            </span>
            , we explore how patterns of communication and interaction have
            developed between you, and how these may be affecting your
            connection.
            <br />
            Together, we focus on{" "}
            <span className="highlight-lavender-dark">
              improving understanding, strengthening communication
            </span>
            , and supporting you to navigate challenges with greater clarity and
            care.
          </BodyText>
          <CTALink href="/contact?type=couple-therapy" darkBg>
            Explore Couple Therapy
          </CTALink>
        </div>
      </div>
    </section>
  );
}
