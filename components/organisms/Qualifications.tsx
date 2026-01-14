import React from 'react';
import Image from 'next/image';
import { FaUserGraduate } from 'react-icons/fa';
import { MdSupervisorAccount } from 'react-icons/md';
import PSAImage from '@/public/images/psa.png';
import UKCPImage from '@/public/images/UKCP.webp';
import CardDisplay from '../molecules/CardDisplay';
import { Title } from '../atoms/Title';
import qualificationsImage from '@/public/images/qualifications.jpg';

export default function Qualifications() {
  const qualificationsAndMemberships = [
    {
      title: 'Post Graduate Diploma in Family Therapy',
      icon: <FaUserGraduate className="w-10 h-10" />
    },
    {
      title: 'Tavistock Qualification in Systemic Supervision',
      icon: <MdSupervisorAccount className="w-10 h-10" />
    },
    {
      title: 'Member of The United Kingdom Council for Psychotherapy (UKCP)',
      icon: <Image src={UKCPImage} alt="UKCP" className="w-18 h-10" />
    },
    {
      title:
        'Member of The Association for Family & Systemic Psychotherapy (AFSP)',
      icon: <MdSupervisorAccount className="w-10 h-10" />
    },
    {
      title: 'Member of The Professional Standards Authority',
      icon: <Image src={PSAImage} alt="PSA" className="w-20 h-10" />
    }
  ];

  return (
    <section
      id="qualifications"
      className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto px-4 max-w-7xl mb-10 mt-10"
      aria-labelledby="qualifications-heading">
      <div className="relative">
        <Image
          src={qualificationsImage}
          alt="Qualifications"
          className="w-full object-cover aspect-3/2 rounded-xl"
          quality={80}
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[80%]  p-3 rounded-lg">
          <Title size="3xl" smSize="4xl" colour="indigo" weight="bold">
            Training, Qualifications <br />& Memberships
          </Title>
        </div>
      </div>

      <CardDisplay cards={qualificationsAndMemberships} />
    </section>
  );
}
