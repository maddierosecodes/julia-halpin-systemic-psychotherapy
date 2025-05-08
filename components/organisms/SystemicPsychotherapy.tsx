import React from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import recoveryRoadImage from "@/public/images/recovery_road.jpg";
import { BodyText } from "../atoms/BodyText";
import healthyEatingImage from "@/public/images/healthy_eating.jpg";
import stressImage from "@/public/images/stress.jpg";
import anxietyImage from "@/public/images/anxiety.jpg";
import depressionImage from "@/public/images/depression.jpg";
import { CTALink } from "../atoms/CTALink";
import { BLUR_DATA_URL } from "../utils/imageUtils";

export default function SystemicPsychotherapy() {
  return (
    <section
      id="support-offered"
      className="flex flex-col justify-center items-center gap-3 mx-auto px-4 sm:px-6 md:px-2 max-w-7xl mb-8 mt-4"
      aria-labelledby="support-offered-heading"
    >
      <div className="relative w-full mx-auto">
        <Image
          src={recoveryRoadImage}
          alt="Recovery Road"
          className="w-full object-cover aspect-[3/2] sm:aspect-[3/1.5] md:aspect-4/1 rounded-xl"
          quality={80}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 md:px-8 lg:top-[20%] lg:left-[25%] lg:w-1/2 lg:text-center">
          <div className="bg-indigo-900/60 p-2 md:p-4 rounded-lg inline-block md:w-full lg:bg-transparent">
            <Title
              colour="ivory"
              weight="bold"
              size="2xl"
              smSize="3xl"
              lgSize="4xl"
              lgColour="indigo"
            >
              Systemic Psychotherapy{" "}
              <br className="hidden md:block lg:hidden" />
              Services
            </Title>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 justify-center items-start mt-4 md:mt-6">
        {/* Text Box Section - Now First on Mobile */}
        <div
          className="w-full lg:w-1/2 bg-indigo-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl text-center mx-auto flex flex-col items-center gap-4 order-1 lg:order-2"
          role="article"
          aria-label="Explanation of hypnosis"
        >
          <BodyText variant="dark-bg" size="md" smSize="lg" colour="ivory">
            If you&apos;re struggling with{" "}
            <span className="highlight-lavender-dark">
              anxiety, stress, low mood, sleep issues, confidence
            </span>
            , or other emotional or behavioural challenges, I offer a{" "}
            <span className="highlight-indigo-dark">
              supportive, practical approach
            </span>{" "}
            to help you move forward. <br />
            Each session combines{" "}
            <span className="highlight-text-dark">
              therapeutic conversation
            </span>{" "}
            with <span className="highlight-text-dark">guided relaxation</span>{" "}
            to reduce overwhelm and help you refocus. Together, we
            <span className="emphasis-text-dark">
              {" "}
              identify your strengths, explore what you want life to look like,
              and build the steps to get there
            </span>{" "}
            — gently, safely, and at your pace. <br />
            I&apos;ve worked in mental health for{" "}
            <span className="highlight-lavender-dark">over 36 years</span>, and
            I bring that experience to every session. I&apos;ll help you
            understand{" "}
            <span className="highlight-indigo-dark">how your brain works</span>,{" "}
            <span className="highlight-indigo-dark">
              how your thoughts influence your feelings
            </span>
            , and how
            <span className="emphasis-text-dark">
              {" "}
              small, positive changes can add up to something bigger
            </span>
            . <br />
            Sessions are held{" "}
            <span className="highlight-text-dark">online or in person</span>,
            depending on what suits you best.{" "}
          </BodyText>
          <CTALink href="/contact?type=initial-consultation">
            Book Initial Consultation
          </CTALink>
        </div>
        {/* Gallery Section - Hidden on Mobile */}
        <div
          className="hidden lg:grid grid-cols-2 gap-4 sm:gap-6 gap-y-6 sm:gap-y-9 w-full max-w-xl mx-auto lg:mx-0 px-2 sm:px-4 order-2 lg:order-1"
          role="complementary"
          aria-label="Gallery of therapeutic images"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src={healthyEatingImage}
              alt="Healthy Eating"
              className="rounded-xl object-cover w-full h-32 sm:h-40 md:h-52"
              quality={80}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-11/12 sm:w-10/12 flex items-center justify-center">
              <Image
                src={stressImage}
                alt="Stress"
                className="rounded-xl object-cover w-full h-28 sm:h-32 md:h-40"
                quality={80}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-11/12 sm:w-10/12 flex items-center justify-center">
              <Image
                src={anxietyImage}
                alt="Anxiety"
                className="rounded-xl object-cover w-full h-28 sm:h-32 md:h-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={depressionImage}
              alt="Depression"
              className="rounded-xl object-cover w-full h-32 sm:h-40 md:h-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
