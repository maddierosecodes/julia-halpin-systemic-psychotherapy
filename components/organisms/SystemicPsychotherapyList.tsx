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
            name: "Julia Halpin Systemic Psychotherapy",
            description:
              "Professional Systemic Psychotherapy services offering treatment for various conditions including anxiety, stress, phobias, and more.",
            medicalSpecialty: {
              "@type": "MedicalSpecialty",
              name: "Mental Health",
            },
            availableService: treatmentAreas.map((area) => ({
              "@type": "MedicalTherapy",
              name: area.name,
              description: `Professional Systemic Psychotherapy treatment for ${area.name.toLowerCase()}`,
            })),
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
