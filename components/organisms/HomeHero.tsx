"use client";

import { ProfileImage } from "../atoms/ProfileImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";
import { ThreeColumnLayout } from "../molecules/ThreeColumnLayout";

export const HomeHero = () => {
  const textContentLeft = (
    <section
      className="flex flex-col gap-4 xl:gap-6 relative w-full lg:pt-2 lg:pb-0 xl:pt-2 lg:mb-8 xl:mb-10"
      aria-label="Introduction"
    >
      <div className="px-0 md:px-0 lg:px-0 lg:w-[19rem] xl:w-[22rem] lg:-ml-5 lg:px-2 xl:ml-auto lg:transform lg:-skew-x-12 xl:transform xl:-skew-x-12 lg:border-4 xl:border-4 border-gold-500 bg-lavender-100/10 lg:px-5 lg:py-3 xl:px-6 xl:py-3">
        <div className="lg:transform lg:skew-x-12 xl:transform xl:skew-x-12 leading-normal">
          <header className="flex flex-col text-center">
            <Subtitle size="xl" lgSize="xl" colour="lavender" weight="medium">
              Family & Couple Therapy
            </Subtitle>
          </header>

          <div className="mt-2 text-center mx-auto md:max-w-[80%] lg:max-w-[48ch] xl:max-w-[36ch] lg:mx-auto">
            <BodyText size="lg" lgSize="lg" colour="ink-dark">
              Thoughtful,{" "}
              <span className="highlight-indigo">
                evidence-informed therapy
              </span>{" "}
              for families, couples, and individuals looking to{" "}
              <span className="emphasis-text">improve their relationships</span>
              , <span className="highlight-text">communication</span>, and
              <span className="highlight-lavender"> emotional well-being</span>.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );

  const textContentRight = (
    <section
      className="flex flex-col gap-4 lg:gap-6 px-0 md:px-0 lg:px-0 md:max-w-[80%] lg:max-w-[80%] lg:w-[26rem] lg:max-w-[85%] lg:relative lg:-ml-5 xl:-ml-10 xl:w-[30rem] xl:max-w-full xl:static"
      aria-label="Introduction"
    >
      <div className="leading-normal">
        <header className="flex flex-col text-center lg:text-left items-center lg:items-start">
          {/* Title for <sm, sm, and lg+ */}
          <div className="flex flex-row gap-2 items-baseline relative md:hidden lg:block">
            <Title size="5xl" lgSize="7xl" colour="indigo" weight="bold">
              Julia
            </Title>
            <Title size="5xl" lgSize="7xl" colour="indigo" weight="bold">
              Halpin
            </Title>
            {/* Gold underlines for lg+ */}
            <div className="hidden lg:block absolute bottom-25 left-10 w-[55%] h-1 bg-gold-500" />
            <div className="hidden lg:block absolute bottom-0 left-15 w-[75%] h-1 bg-gold-500" />
          </div>

          <Subtitle size="xl" lgSize="2xl" colour="lavender" weight="medium">
            Systemic Psychotherapist
          </Subtitle>
        </header>

        <div className="mt-2 lg:mt-0 md:py-[1rem] lg:py-[1rem] md:pr-0 lg:mr-4 lg:text-left xl:mb-20 xl:mr-4 xl:text-left">
          <BodyText size="lg" colour="ink-dark">
            Working together to{" "}
            <span className="highlight-indigo">strengthen relationships</span>,{" "}
            <span className="highlight-lavender">improve communication</span>,
            and create <span className="emphasis-text">meaningful change</span>.
          </BodyText>
        </div>
      </div>
    </section>
  );

  const imageContent = (
    <div className="relative w-full h-full flex flex-col justify-center items-center sm:-mt-10 md:-mt-12 lg:mt-0 lg:ml-12">
      <div className="relative w-72 h-80 md:w-64 md:h-[18rem] lg:w-[24rem] lg:h-[30rem] lg:ml-4 xl:w-[28rem] xl:h-[32rem] xl:ml-4">
        {/* Outer Arch container */}
        <div className="relative w-[90%] md:w-[85%] lg:w-[85%] xl:w-[82%] mx-auto h-full">
          {/* Outer Semicircle top */}
          <div className="absolute top-0 left-0 right-0 h-[45%] lg:h-[42%] xl:h-[42%] bg-lavender-800 rounded-t-full border-t-4 border-x-4 border-gold"></div>
          {/* Outer Rectangle bottom */}
          <div className="absolute top-[45%] lg:top-[42%] xl:top-[42%] left-0 right-0 h-[55%] lg:h-[58%] xl:h-[58%] bg-lavender-800 border-b-4 border-x-4 border-gold"></div>

          {/* Inner Arch container - inset by 16px and shorter */}
          <div className="absolute top-4 left-4 right-4 h-[92%] lg:h-[94%] xl:h-[95%]">
            {/* Inner Semicircle top */}
            <div className="absolute top-0 left-0 right-0 h-[45%] lg:h-[42%] xl:h-[42%] bg-indigo-400 rounded-t-full"></div>
            {/* Inner Rectangle bottom */}
            <div className="absolute top-[45%] lg:top-[42%] xl:top-[42%] left-0 right-0 h-[55%] lg:h-[58%] xl:h-[58%] bg-indigo-400"></div>
          </div>

          {/* Image container */}
          <figure
            className="absolute bottom-[3%] left-1/2 -translate-x-[60%] w-[88%] md:w-[90%] lg:w-[95%] lg:bottom-3 lg:h-[96%] xl:w-[95%] xl:bottom-4 xl:h-[96%]"
            aria-label="Profile image"
          >
            <ProfileImage
              src="/images/julia_bg.png"
              alt="Julia Halpin, therapist based in Chorley"
              shape="tall"
              containerClassName="bg-transparent w-full h-full"
              priority={true}
            />
          </figure>
        </div>
      </div>
      {/* md-only Title (under image) */}
      <div className="hidden md:flex lg:hidden flex-row items-baseline gap-3 mt-4 justify-center w-full">
        <Title size="5xl" lgSize="7xl" colour="indigo" weight="bold">
          Julia
        </Title>
        <Title size="5xl" lgSize="7xl" colour="indigo" weight="bold">
          Halpin
        </Title>
      </div>
    </div>
  );

  const leftColumn = (
    <div className="flex flex-col md:h-full lg:gap-0 xl:gap-4 w-full">
      <div className="flex flex-col md:min-h-[12rem] md:flex-1">
        {textContentLeft}
      </div>
      <div className="mt-8 md:mt-0 lg:mt-0 lg:relative lg:-ml-[2.5rem]">
        <CTALink href="/about#support-offered" variant="compact-centered">
          Find out more about <br />
          Family & Couple Therapy
        </CTALink>
      </div>
    </div>
  );

  const rightColumn = (
    <div className="flex flex-col md:h-full lg:h-full lg:relative">
      <div className="flex flex-col md:min-h-[12rem] md:flex-1">
        {textContentRight}
      </div>
      <div className="mt-8 md:mt-0 lg:mt-12 md:-ml-4 lg:mb-8 xl:mt-0 xl:mb-14">
        <CTALink
          href="/contact?type=initial-consultation"
          variant="default-centered"
        >
          Arrange an initial <br /> consultation
        </CTALink>
      </div>
    </div>
  );

  return (
    <ThreeColumnLayout
      leftColumn={leftColumn}
      centerColumn={imageContent}
      rightColumn={rightColumn}
    />
  );
};
