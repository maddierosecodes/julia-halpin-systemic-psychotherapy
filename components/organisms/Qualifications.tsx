import React from "react";
import Image from "next/image";
import nchLogo from "@/public/images/NCH.png";
import mafsfhLogo from "@/public/images/AfSFH.png";
import cnhcLogo from "@/public/images/CNHC.jpeg";
import { FcDiploma1, FcDiploma2 } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import CardDisplay from "../molecules/CardDisplay";
import { Title } from "../atoms/Title";
import rockStackImage from "@/public/images/rock_stack.jpg";

export default function Qualifications() {
  const qualificationsAndMemberships = [
    {
      title: "Diploma in  Systemic Psychotherapy (DSFH)",
      icon: <FcDiploma2 className="w-10 h-10" />,
    },
    {
      title: "Systemic Psychotherapy in Practice Diploma (HPD)",
      icon: <FcDiploma1 className="w-10 h-10" />,
    },
    {
      title: "National Council for Systemic Psychotherapy (NCH)",
      icon: (
        <Image
          src={nchLogo}
          alt="National Council for Systemic Psychotherapy"
          width={120}
          height={120}
          className="object-contain w-10 h-10"
          quality={80}
          loading="lazy"
        />
      ),
    },
    {
      title: "CBT certification",
      icon: <FaBrain className="w-10 h-10" />,
    },
    {
      title: "Association for  Systemic Psychotherapy (MAfSFH)",
      icon: (
        <Image
          src={mafsfhLogo}
          alt="Association for  Systemic Psychotherapy"
          width={120}
          height={120}
          className="object-contain w-10 h-10"
          quality={80}
          loading="lazy"
        />
      ),
    },
    {
      title: "Complementary & Natural Healthcare Council (CNHC)",
      icon: (
        <Image
          src={cnhcLogo}
          alt="Complementary & Natural Healthcare Council"
          width={120}
          height={120}
          className="object-contain w-10 h-10"
          quality={80}
          loading="lazy"
        />
      ),
    },
  ];

  return (
    <section
      id="qualifications"
      className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto px-4 max-w-7xl mb-10 mt-10"
      aria-labelledby="qualifications-heading"
    >
      <div className="relative">
        <Image
          src={rockStackImage}
          alt="Qualifications"
          className="w-full object-cover aspect-3/2 rounded-xl"
          quality={80}
          loading="lazy"
        />
        <div className="absolute top-1/2 left-[5%] sm:left-[10%] -translate-y-1/2 text-left max-w-[90%] md:max-w-[60%] bg-black/30 sm:bg-transparent p-3 rounded-lg">
          <Title size="3xl" smSize="4xl" colour="ivory" weight="bold">
            Training, <br />
            Qualifications <br />& Memberships
          </Title>
        </div>
      </div>

      <CardDisplay cards={qualificationsAndMemberships} />
    </section>
  );
}
