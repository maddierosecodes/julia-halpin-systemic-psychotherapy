"use client";

import React from "react";
import familyImage from "@/public/images/family.jpg";
import ServiceLayout from "../molecules/ServiceLayout";

export default function FamilyTherapy() {
  return (
    <ServiceLayout
      title="Family Therapy"
      image={familyImage}
      imageAlt="Family Therapy"
      contactType="family-therapy"
    >
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
      , and over time, patterns of behaviour can become unhelpful or strained.
      <br />
      <span className="highlight-lavender-dark">Systemic therapy</span> helps
      you explore how these patterns have developed, how each person sees the
      situation, and what new ways of relating could work better.
      <br />
      Whether you&apos;re facing{" "}
      <span className="highlight-text-dark">
        stress, loss, parenting challenges, illness, or change
      </span>
      , I provide a safe, supportive space to listen, reflect, and move towards
      solutions — <span className="emphasis-text-dark">together</span>.
      <br />
      My aim is to support{" "}
      <span className="highlight-lavender-dark">
        meaningful change that works for your family
      </span>
      .
    </ServiceLayout>
  );
}
