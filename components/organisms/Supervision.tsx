import React from "react";
import supervisionImage from "@/public/images/supervision.jpg";
import ServiceLayout from "../molecules/ServiceLayout";
import Script from "next/script";
import { supervisionSchema } from "@/schemas/supervisionSchema";

export default function Supervision() {
  return (
    <>
      <Script
        id="supervision-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(supervisionSchema),
        }}
      />
      <ServiceLayout
        title="Supervision"
        image={supervisionImage}
        imageAlt="Supervision"
        contactType="supervision"
      >
        I offer{" "}
        <span className="highlight-lavender-dark">clinical supervision</span>{" "}
        for qualified and trainee{" "}
        <span className="highlight-indigo-dark">
          Systemic Psychotherapists and Practitioners
        </span>
        .
        <br />
        <span className="emphasis-text-dark">
          Supervision provides a reflective, supportive space to explore your
          work, build confidence, and develop your systemic thinking.
        </span>
        <br />
        Whether you&apos;re working towards{" "}
        <span className="highlight-text-dark">accreditation</span> or looking to{" "}
        <span className="highlight-text-dark">deepen your practice</span>,
        sessions are tailored to your professional needs.
        <br />
        Together, we consider{" "}
        <span className="highlight-lavender-dark">patterns</span>,{" "}
        <span className="highlight-lavender-dark">positions</span>, and{" "}
        <span className="highlight-lavender-dark">meaning</span> within the
        systems you&apos;re working with — supporting{" "}
        <span className="highlight-indigo-dark">
          ethical, effective, and thoughtful therapeutic work
        </span>
        .
      </ServiceLayout>
    </>
  );
}
