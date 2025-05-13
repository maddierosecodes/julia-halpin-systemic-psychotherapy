import React from "react";
import Image from "next/image";
import {
  FaUserGraduate,
  FaUserTie,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { IoMdMedical } from "react-icons/io";
import CardDisplay from "../molecules/CardDisplay";
import { Title } from "../atoms/Title";
import rockStackImage from "@/public/images/rock_stack.jpg";

export default function Qualifications() {
  const qualificationsAndMemberships = [
    {
      title: "Post Graduate Diploma in Family Therapy",
      icon: <FaUserGraduate className="w-10 h-10" />,
    },
    {
      title: "Tavistock Qualification in Systemic Supervision",
      icon: <MdSupervisorAccount className="w-10 h-10" />,
    },
    {
      title: "Member of The United Kingdom Council for Psychotherapy (UKCP)",
      icon: <GiDiploma className="w-10 h-10" />,
    },
    {
      title: "Member of The Association for Family Therapy (AFT)",
      icon: <FaUserTie className="w-10 h-10" />,
    },
    {
      title: "Member of the Nursing & Midwifery Council (NMC)",
      icon: <FaHandHoldingMedical className="w-10 h-10" />,
    },
    {
      title: "Member of The Professional Standards Authority",
      icon: <IoMdMedical className="w-10 h-10" />,
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
