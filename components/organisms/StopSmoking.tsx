import React from "react";
import Image from "next/image";
import stopSmoking from "@/public/images/stop_smoking.png";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import { CTALink } from "../atoms/CTALink";
import { BLUR_DATA_URL } from "../utils/imageUtils";

export default function StopSmoking() {
  return (
    <section
      id="stop-smoking"
      className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl mb-8"
      aria-labelledby="stop-smoking-heading"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        <div
          className="relative w-full"
          role="banner"
          aria-label="Stop Smoking Session Header"
        >
          <Image
            src={stopSmoking}
            alt="Stop Smoking Systemic Psychotherapy"
            className="w-full object-cover aspect-[3/2] rounded-xl brightness-[0.85]"
            priority={false}
            quality={80}
            loading="lazy"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
            <div className="bg-indigo-900/60 p-2 rounded-lg inline-block">
              <Title size="3xl" smSize="4xl" colour="ivory" weight="bold">
                Stop Smoking <br />
                Session
              </Title>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-4"
          role="article"
          aria-label="Stop Smoking Session Information"
        >
          <div
            className="bg-indigo-900/95 p-6 rounded-xl shadow-lg"
            role="region"
            aria-label="Main session description"
          >
            <BodyText size="lg" colour="ivory">
              <strong className="highlight-text-dark">
                Stop smoking with just one Systemic Psychotherapy session.
              </strong>{" "}
              Using a proven approach, Julia helps you break free from smoking
              through a single, focused session.
              <br />
              <br />
              <span className="highlight-indigo-dark">
                Hypnosis promotes deep relaxation and strengthens your
                motivation, making it easier to let go of old habits and build a
                healthier future.
              </span>
              <br />
              <br />
              <span className="highlight-lavender-dark">
                The stop smoking session lasts between 90–120 minutes and
                includes a relaxation MP3 to support you afterward.
              </span>
            </BodyText>
          </div>

          <div
            className="bg-indigo-900/95 p-6 rounded-xl shadow-lg"
            role="note"
            aria-label="Important session information"
          >
            <BodyText size="md" colour="ivory">
              <em className="emphasis-text-dark">
                No initial consultation is needed. Commitment to the process is
                important — success relies on your participation both during and
                after the session.
              </em>
            </BodyText>
          </div>

          <div className="text-center py-2">
            <CTALink href="/contact?type=stop-smoking">
              Book Stop Smoking Session
            </CTALink>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <Image
          src={stopSmoking}
          alt="Stop Smoking Systemic Psychotherapy"
          className="w-full object-cover aspect-9/4 rounded-xl brightness-[0.85]"
          priority={false}
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute top-[10%] left-[10%]">
          <Title size="6xl" lgSize="5xl" colour="ivory" weight="bold">
            Stop Smoking <br />
            Session
          </Title>
        </div>

        <div className="absolute top-[5%] right-[8%] text-center w-[35%] xl:top-[15%] xl:w-[30%]">
          <BodyText size="xl" lgSize="lg" colour="ivory" weight="bold">
            <strong className="highlight-text-dark">
              Stop smoking with just one Systemic Psychotherapy session.
            </strong>
            <br />
            Using a proven approach, Julia helps you break free from smoking
            through a single, focused session. <br />
            <span className="highlight-indigo-dark">
              Hypnosis promotes deep relaxation and strengthens your motivation,
              making it easier to let go of old habits and build a healthier
              future.
            </span>
            <br />
            <span className="highlight-lavender-dark">
              The stop smoking session lasts between 90–120 minutes and includes
              a relaxation MP3 to support you afterward.
            </span>
          </BodyText>
        </div>

        <div className="absolute bottom-[35%] left-[10%]">
          <CTALink href="/contact?type=stop-smoking">
            Book Stop Smoking Session
          </CTALink>
        </div>

        <div className="absolute bottom-[5%] lg:bottom-[5%] lg:left-[5%] xl:bottom-[5%] xl:left-1/2 transform xl:-translate-x-1/2 text-center lg:text-left xl:text-center lg:w-[40%] xl:w-[90%]">
          <BodyText size="xl" lgSize="md" colour="ivory" weight="bold">
            <em className="emphasis-text-dark">
              No initial consultation is needed. Commitment to the process is
              important — success relies on your participation both during and
              after the session.
            </em>
          </BodyText>
        </div>
      </div>
    </section>
  );
}
