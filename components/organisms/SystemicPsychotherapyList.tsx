import {
  FaBrain,
  FaHandHoldingHeart,
  FaComments,
  FaChild,
  FaHeart,
  FaSadTear,
  FaUserCheck,
  FaBriefcase,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaStethoscope,
} from "react-icons/fa";
import {
  MdOutlinePsychology,
  MdFamilyRestroom,
  MdSocialDistance,
} from "react-icons/md";
import { GiBreakingChain } from "react-icons/gi";
import { TbMoodSad } from "react-icons/tb";
import Card from "../atoms/Card";
import Link from "next/link";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import Script from "next/script";

const treatmentAreas = [
  {
    name: "Family conflict",
    icon: <MdFamilyRestroom className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Couple and relationship difficulties",
    icon: <FaHandHoldingHeart className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "Separation and divorce",
    icon: <GiBreakingChain className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Parenting and behaviour concerns",
    icon: <FaChild className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Communication challenges",
    icon: <FaComments className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "MSc Consultation",
    icon: <FaChalkboardTeacher className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=consultation",
  },
  {
    name: "Clinical Supervision",
    icon: <FaUserGraduate className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=supervision",
  },

  {
    name: "Bereavement and grief",
    icon: <FaSadTear className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Anxiety and panic attacks",
    icon: <MdOutlinePsychology className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "Depression and low mood",
    icon: <TbMoodSad className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "Neurodiversity (Autism and ADHD)",
    icon: <FaBrain className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Social anxiety",
    icon: <MdSocialDistance className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "Trauma and difficult life events",
    icon: <FaHeart className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Mental health conditions",
    icon: <FaStethoscope className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=family-therapy",
  },
  {
    name: "Work-related stress",
    icon: <FaBriefcase className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
  {
    name: "Self-esteem and confidence",
    icon: <FaUserCheck className="w-8 h-8" aria-hidden="true" />,
    href: "services?service=couple-therapy",
  },
];

export default function SystemicPsychotherapyList() {
  return (
    <>
      <Script
        id="treatment-areas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Family and Couple Therapy Services",
            url: "https://www.familyandcoupletherapyservices.co.uk/services#supportOffered",
            description:
              "Systemic Psychotherapy services in Chorley supporting individuals, couples, and families with a wide range of emotional and relational challenges.",
            medicalSpecialty: {
              "@type": "MedicalSpecialty",
              name: "Mental Health",
            },
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Anxiety and Panic Attacks",
                description:
                  "Therapeutic support for managing anxiety, panic, and overwhelm.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Depression and Low Mood",
                description:
                  "Systemic therapy for emotional regulation and low mood.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Self-Harm",
                description:
                  "Support for individuals struggling with self-harm and emotional distress.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Family Conflict",
                description:
                  "Systemic approaches to managing tension and improving communication in families.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Couple and Relationship Difficulties",
                description:
                  "Therapy to improve connection, communication, and resolve relational issues.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Communication Challenges",
                description:
                  "Support for individuals and families experiencing communication difficulties.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Neurodiversity (Autism and ADHD)",
                description:
                  "Understanding and supporting neurodivergent individuals within relational systems.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Parenting and Behaviour Concerns",
                description:
                  "Guidance and support for parents managing behavioural or developmental concerns.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Separation and Divorce",
                description:
                  "Support for families and couples navigating separation and its emotional impact.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Bereavement and Grief",
                description:
                  "Therapy for individuals and families processing loss and grief.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Low Self-Esteem and Confidence",
                description:
                  "Support to build self-worth and foster personal growth.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Stress (including Work-Related Stress)",
                description:
                  "Helping clients manage stress and find sustainable coping strategies.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Social Anxiety",
                description:
                  "Systemic support for those struggling with social fear or avoidance.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Emotional Regulation Difficulties",
                description:
                  "Helping individuals improve emotional awareness and response.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Trauma and Difficult Life Events",
                description:
                  "Therapy for processing trauma and building resilience.",
              },
              {
                "@type": "MedicalTherapy",
                name: "Mental Health Conditions",
                description:
                  "Relational therapy for individuals living with diagnosed mental health conditions.",
              },
            ],
          }),
        }}
      />
      <section
        id="supportOffered"
        className="flex flex-col items-center justify-center text-center mx-auto px-4 max-w-7xl mb-10 mt-10"
        aria-labelledby="support-offered-heading"
      >
        <h2 id="support-offered-heading" className="sr-only">
          Support Offered
        </h2>
        <Title size="3xl" colour="rose" weight="bold">
          I can offer support for many issues, including:
        </Title>

        <nav aria-label="Treatment areas navigation">
          <ul
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-10 pb-5 w-full"
            role="list"
          >
            {treatmentAreas.map((area, index) => (
              <li key={area.name + index}>
                <Link
                  href={area.href}
                  className="cursor-pointer block"
                  aria-label={`Learn more about ${area.name} treatment`}
                >
                  <Card title={area.name} icon={area.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <BodyText size="lg" variant="light-bg" weight="bold">
          <em>
            Click on the card to find out more about how I can help you with
            these issues.
          </em>
        </BodyText>
      </section>
    </>
  );
}
