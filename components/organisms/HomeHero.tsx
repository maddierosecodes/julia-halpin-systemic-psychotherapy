"use client";

import { ProfileImage } from "../atoms/ProfileImage";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { BodyText } from "../atoms/BodyText";
import { Hero } from "../molecules/Hero";
import { useEffect, useState } from "react";
import BlobSvg from "@/public/svg/blob.svg";
import { CTAsection } from "./CTAsection";

export const HomeHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const textContent = (
    <section
      className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left relative"
      aria-label="Introduction"
    >
      <header className="flex flex-col gap-2">
        <Title size="5xl" lgSize="8xl" colour="indigo" weight="bold">
          Julia
          <br />
          Halpin
        </Title>

        <Subtitle size="2xl" lgSize="3xl" colour="lavender" weight="medium">
          Systemic Psychotherapy
        </Subtitle>
      </header>

      <BodyText size="xl" variant="light-bg">
        Helping you overcome anxiety, manage stress, <br />
        and build lasting confidence through evidence-based Systemic
        Psychotherapy
      </BodyText>
      <CTAsection />
    </section>
  );

  const imageContent = (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="relative w-64 h-64 lg:w-[32rem] lg:h-[32rem]">
        <div className="absolute inset-0 overflow-visible z-0">
          <BlobSvg className="w-full h-full overflow-visible" />
        </div>
        <figure
          className="relative w-full h-full z-10"
          aria-label="Profile image"
        >
          <ProfileImage
            src="/images/julia_bg.png"
            alt="Julia Halpin, hypnotherapist based in Chorley"
            shape="circle"
            containerClassName="bg-transparent w-full h-full -translate-y-3"
            priority={true}
          />
        </figure>
      </div>
    </div>
  );

  return (
    <Hero
      textComponent={textContent}
      imageComponent={imageContent}
      imagePosition={isMobile ? "left" : "right"}
      className="mt-10 lg:pt-20 relative"
    />
  );
};
