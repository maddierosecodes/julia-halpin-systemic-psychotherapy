import {
  FaBrain,
  FaHeartbeat,
  FaSmokingBan,
  FaWeight,
  FaBed,
  FaUserFriends,
  FaRunning,
  FaPills,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { GiStomach } from "react-icons/gi";
import { TbMoodPlus } from "react-icons/tb";
import Card from "../atoms/Card";
import Link from "next/link";
import { Title } from "../atoms/Title";
import { BodyText } from "../atoms/BodyText";
import Script from "next/script";

const treatmentAreas = [
  {
    name: "Stress",
    icon: <FaHeartbeat className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Anxiety",
    icon: <MdOutlinePsychology className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Stop Smoking",
    icon: <FaSmokingBan className="w-8 h-8" aria-hidden="true" />,
    href: "services#stop-smoking",
  },
  {
    name: "Phobias",
    icon: <FaBrain className="w-8 h-8" aria-hidden="true" />,
    href: "services#overcome-phobias",
  },
  {
    name: "Depression",
    icon: <TbMoodPlus className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Insomnia",
    icon: <FaBed className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Confidence",
    icon: <FaUserFriends className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Weight Management",
    icon: <FaWeight className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "IBS",
    icon: <GiStomach className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "OCD",
    icon: <FaBrain className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Dependency",
    icon: <FaPills className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
  },
  {
    name: "Performance",
    icon: <FaRunning className="w-8 h-8" aria-hidden="true" />,
    href: "services#supportOffered",
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
        id="support-offered"
        className="flex flex-col items-center justify-center text-center mx-auto px-4 max-w-7xl mb-10 mt-10"
        aria-labelledby="support-offered-heading"
      >
        <h2 id="support-offered-heading" className="sr-only">
          Support Offered
        </h2>
        <Title size="3xl" colour="rose" weight="bold">
          Systemic Psychotherapy can help you with:
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
