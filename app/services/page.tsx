import FamilyTherapy from "@/components/organisms/FamilyTherapy";
import CoupleTherapy from "@/components/organisms/CoupleTherapy";
import SessionsAndFees from "@/components/organisms/SessionsAndFees";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import Supervision from "@/components/organisms/Supervision";
import Consultation from "@/components/organisms/Consultation";
import TabDisplay from "@/components/molecules/TabDisplay";
import { Suspense } from "react";
import Script from "next/script";
import { servicesSchema } from "@/schemas/servicesSchema";

const SERVICE_TABS = [
  {
    id: "family-therapy",
    label: "Family Therapy",
    content: <FamilyTherapy />,
  },
  {
    id: "couple-therapy",
    label: "Couple Therapy",
    content: <CoupleTherapy />,
  },
  {
    id: "supervision",
    label: "Supervision",
    content: <Supervision />,
  },
  {
    id: "consultation",
    label: "Consultation",
    content: <Consultation />,
  },
];

export default function Services() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <div
        className="w-full mt-0 md:mt-10"
        aria-label="Systemic Psychotherapy Services"
      >
        <SectionWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <TabDisplay tabs={SERVICE_TABS} />
          </Suspense>
        </SectionWrapper>
        <SectionWrapper>
          <SessionsAndFees />
        </SectionWrapper>
      </div>
    </>
  );
}
