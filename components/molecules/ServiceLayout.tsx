"use client";

import React, { useState, useRef } from "react";
import { Title } from "../atoms/Title";
import Image from "next/image";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";
import { BLUR_DATA_URL } from "../utils/imageUtils";
import { IoMdInformationCircle } from "react-icons/io";
import { StaticImageData } from "next/image";

interface ServiceLayoutProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  imageAspectRatio?: string;
  children: React.ReactNode;
  contactType: string;
}

export default function ServiceLayout({
  title,
  image,
  imageAlt,
  imageAspectRatio = "3/2.385",
  children,
  contactType,
}: ServiceLayoutProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = textContainerRef.current?.scrollTop ?? 0;
    if (!hasScrolled && scrollTop > 0) {
      setHasScrolled(true);
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center gap-3 mx-auto px-0 lg:px-6 max-w-7xl mb-8 mt-4"
      aria-labelledby={`${title.toLowerCase()}-heading`}
    >
      {/* Flip Card for Mobile and Tablet */}
      <div className="block lg:hidden w-full md:w-3/4 md:mx-auto">
        <div
          className="relative w-full h-full cursor-pointer"
          style={{ perspective: "2000px" }}
          onClick={() => setIsFlipped(!isFlipped)}
          role="button"
          aria-label={isFlipped ? "Show image" : "Show description"}
        >
          <div
            className="relative w-full transition-transform duration-700 transform-gpu"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front - Image */}
            <div
              className="relative w-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={image}
                alt={imageAlt}
                className={`w-full aspect-[${imageAspectRatio}] object-cover md:rounded-xl`}
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
                    {title}
                  </Title>
                </div>
              </div>
              {/* Content indicator */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent p-4 flex items-center justify-center">
                <div className="flex items-center gap-2 text-ivory">
                  <IoMdInformationCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Tap to read more</span>
                </div>
              </div>
            </div>

            {/* Back - Text */}
            <div
              ref={textContainerRef}
              onScroll={handleScroll}
              className="absolute top-0 left-0 w-full h-full bg-indigo-900 p-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-indigo-800 [&::-webkit-scrollbar-thumb]:bg-lavender-300 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgb(225,218,248)_rgb(35,35,67)]"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                minHeight: "100%",
              }}
            >
              <div className="pr-2">
                {!hasScrolled && (
                  <div className="flex items-center justify-center gap-2 mb-4 text-ivory-100 transition-opacity duration-300">
                    <IoMdInformationCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Scroll to read more
                    </span>
                  </div>
                )}
                <BodyText
                  variant="dark-bg"
                  size="lg"
                  smSize="xl"
                  lgSize="lg"
                  colour="ivory"
                >
                  {children}
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row w-full gap-8 justify-center items-start">
        <div
          className="relative w-1/2"
          role="complementary"
          aria-label={`${title} illustration`}
        >
          <Image
            src={image}
            alt={imageAlt}
            className="rounded-xl object-cover w-full aspect-[3/2.385]"
            quality={80}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
            <div className="bg-indigo-900/60 p-2 p-4 rounded-lg inline-block">
              <Title
                colour="ivory"
                weight="bold"
                size="2xl"
                smSize="3xl"
                lgSize="4xl"
              >
                {title}
              </Title>
            </div>
          </div>
        </div>
        <div
          className="relative w-1/2 bg-indigo-900/60 backdrop-blur-sm p-6 rounded-2xl text-center mx-auto flex flex-col items-center"
          role="article"
          aria-label={`Explanation of ${title.toLowerCase()}`}
        >
          <div className="w-full aspect-[3/2.385] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-indigo-800 [&::-webkit-scrollbar-thumb]:bg-lavender-300 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgb(225,218,248)_rgb(35,35,67)]">
            <div className="w-full py-6">
              <BodyText
                variant="dark-bg"
                size="lg"
                smSize="xl"
                lgSize="lg"
                colour="ivory"
              >
                {children}
              </BodyText>
              <div className="w-full text-center mt-4 hidden xl:block">
                <CTALink href={`/contact?type=${contactType}`} darkBg>
                  Explore {title}
                </CTALink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button - Outside the content box */}
      <div className="w-full text-center mt-4 xl:hidden">
        <CTALink href={`/contact?type=${contactType}`} darkBg>
          Explore {title}
        </CTALink>
      </div>
    </section>
  );
}
