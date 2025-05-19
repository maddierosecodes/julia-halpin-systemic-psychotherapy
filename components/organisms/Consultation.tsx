import React from "react";
import consultationImage from "@/public/images/consultation.jpg";
import ServiceLayout from "../molecules/ServiceLayout";

export default function Consultation() {
  return (
    <ServiceLayout
      title="MSc Consultation"
      image={consultationImage}
      imageAlt="MSc Consultation"
      contactType="consultation"
    >
      I offer{" "}
      <span className="highlight-lavender-dark">consultation sessions</span> for{" "}
      <span className="highlight-indigo-dark">
        MSc students in Family and Systemic Psychotherapy
      </span>
      .
      <br />
      <span className="emphasis-text-dark">
        These sessions provide a structured space to reflect on your clinical
        work, explore systemic concepts in practice, and meet course
        requirements.
      </span>
      <br />
      Whether you&apos;re preparing{" "}
      <span className="highlight-text-dark">case discussions</span>,{" "}
      <span className="highlight-text-dark">thinking through theory</span>, or
      building your confidence as a therapist, I&apos;ll support you in
      developing your{" "}
      <span className="highlight-lavender-dark">systemic voice</span>.
      <br />
      Sessions are{" "}
      <span className="highlight-indigo-dark">
        collaborative, supportive, and aligned with academic and professional
        standards
      </span>
      .
    </ServiceLayout>
  );
}
