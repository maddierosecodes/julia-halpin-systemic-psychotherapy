import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Navigation } from "../molecules/Navigation";
import { BurgerMenu } from "../atoms/BurgerMenu";
import { CTALink } from "../atoms/CTALink";
import Link from "next/link";
import { BodyText } from "../atoms/BodyText";

const navigationLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    dropdownItems: [
      { href: "/about", label: "About Julia" },
      {
        href: "/about#qualifications",
        label: "Training, Qualifications & Memberships",
      },
      {
        href: "/about#about-solution-focused-Systemic Psychotherapy",
        label: "Systemic Psychotherapy",
      },
      { href: "/about#support-offered", label: "Support Offered" },
      // { href: "/about#testimonials", label: "Testimonials" },
      // { href: "/about#articles", label: "Articles" },
    ],
  },
  {
    href: "/services#supportOffered",
    label: "Services",
    dropdownItems: [
      {
        href: "/services#supportOffered",
        label: "Systemic Psychotherapy",
      },
      { href: "/services#stop-smoking", label: "Stop Smoking" },
      { href: "/services#overcome-phobias", label: "Overcome Phobias" },
      { href: "/services#sessions-and-fees", label: "Sessions & Fees" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-lavender-200 border-b-2 border-gold-500"
      role="banner"
    >
      <div className="w-full py-4 lg:py-2">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Title and subtitle group */}
            <Link
              href="/"
              className="flex flex-col items-center text-center w-[400px] lg:w-[300px]"
              aria-label="Julia Halpin Hypnotherapist - Home"
            >
              <Title
                size="4xl"
                smSize="5xl"
                lgSize="3xl"
                colour="indigo"
                weight="bold"
              >
                Child & Family <br />
                <span className="text-4xl lg:text-2xl">Therapy Services</span>
              </Title>
              <Subtitle
                size="lg"
                smSize="xl"
                lgSize="md"
                colour="lavender"
                weight="medium"
              >
                Julia Halpin, Systemic Psychotherapist
              </Subtitle>
            </Link>

            {/* Navigation - centered */}
            <div className="hidden lg:flex justify-center flex-1">
              <Navigation links={navigationLinks} />
            </div>

            {/* Contact info and CTA */}
            <div className="hidden lg:flex items-center gap-4 flex-col w-[400px] lg:w-[300px] justify-end">
              <BodyText size="sm" colour="lavender">
                📞 07951652175
              </BodyText>
              <CTALink href="/contact?type=general" variant="compact">
                📩 Get in touch
              </CTALink>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <BurgerMenu links={navigationLinks} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
