import React from "react";
import coupleImage from "@/public/images/couple.jpg";
import ServiceLayout from "../molecules/ServiceLayout";
import Script from "next/script";
import { coupleTherapySchema } from "@/schemas/coupleTherapySchema";

export default function CoupleTherapy() {
  return (
    <>
      <Script
        id="couple-therapy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(coupleTherapySchema),
        }}
      />
      <ServiceLayout
        title="Couple Therapy"
        image={coupleImage}
        imageAlt="Couple Therapy"
        imageAspectRatio="3/1.95"
        contactType="couple-therapy"
      >
        <span className="highlight-text-dark">
          Relationships can go through difficult periods
        </span>{" "}
        — life events, health issues, or changes over time can create tension or
        distance.
        <br />
        <span className="highlight-indigo-dark">
          Couple Therapy offers a safe, structured space
        </span>{" "}
        to reflect on what&apos;s happening in your relationship and explore
        what you&apos;d like to change.
        <br />
        <span className="emphasis-text-dark">Using a systemic approach</span>,
        we explore how patterns of communication and interaction have developed
        between you, and how these may be affecting your connection.
        <br />
        Together, we focus on{" "}
        <span className="highlight-lavender-dark">
          improving understanding, strengthening communication
        </span>
        , and supporting you to navigate challenges with greater clarity and
        care.
      </ServiceLayout>
    </>
  );
}
