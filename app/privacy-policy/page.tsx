"use client";

import { BodyText } from "@/components/atoms/BodyText";
import { Subtitle } from "@/components/atoms/Subtitle";
import { Title } from "@/components/atoms/Title";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Privacy policy for Julia Halpin Systemic Psychotherapy, explaining how we collect, use, and protect your personal information.",
            publisher: {
              "@type": "Organization",
              name: "Julia Halpin Systemic Psychotherapy",
              url: "https://www.lhSystemic Psychotherapy.co.uk",
            },
            datePublished: "2024-01-01",
            dateModified: "2024-03-20",
            mainEntity: {
              "@type": "Article",
              headline: "Privacy Policy",
              author: {
                "@type": "Person",
                name: "Julia Halpin",
              },
              datePublished: "2024-01-01",
              dateModified: "2024-03-20",
            },
          }),
        }}
      />
      <main
        className="min-h-screen w-full px-6 md:px-20 pt-16 md:pt-20 pb-5 relative"
        role="main"
      >
        <section
          className="max-w-4xl mx-auto space-b-12 flex flex-col gap-6"
          aria-labelledby="privacy-policy"
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="flex text-indigo-700 hover:text-lavender-500 transition-colors cursor-pointer pb-5"
            aria-label="Go back to previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
          <div className="space-y-8">
            <Title size="5xl" colour="indigo" weight="bold">
              Privacy Policy
            </Title>

            <div className="text-xl text-indigo-700 italic">
              <Subtitle>
                This privacy policy explains how Halpin Therapies Ltd, trading
                via the domain LH Systemic Psychotherapy, collects, uses, and
                protects any personal information you provide when accessing
                this website or using the Systemic Psychotherapy services
                provided by Julia Halpin.
                <br />
                <br />
                We are committed to ensuring your data is kept secure, used only
                for its intended purpose, and handled in line with UK data
                protection law.
              </Subtitle>
            </div>
          </div>

          <div className="space-y-6">
            <Title size="3xl" colour="indigo" weight="semibold">
              What Information Is Collected?
            </Title>

            <BodyText size="lg" variant="light-bg">
              When you contact Julia Halpin via this website, phone, or email,
              we may collect:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700"
              aria-label="Personal information collected"
            >
              <li>Your name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>
                Any information you choose to share regarding your enquiry
              </li>
            </ul>

            <BodyText size="lg" variant="light-bg">
              We may also collect:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700"
              aria-label="Additional information collected"
            >
              <li>
                GP contact details and basic health information (where relevant)
              </li>
              <li>Details of your next of kin (used only in emergencies)</li>
            </ul>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              How Is This Information Used?
            </Title>

            <BodyText size="lg" variant="light-bg">
              Your data is used to:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700"
              aria-label="How your data is used"
            >
              <li>Contact you about your enquiry or sessions</li>
              <li>Send recordings or appointment information</li>
              <li>Tailor and plan therapy sessions</li>
              <li>
                Ensure suitability for Systemic Psychotherapy and safeguard your
                wellbeing
              </li>
            </ul>

            <BodyText size="lg" variant="light-bg">
              We do not:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700"
              aria-label="What we do not do with your data"
            >
              <li>Store your data in a website database</li>
              <li>Receive or retain your payment or bank details</li>
              <li>
                Share your data with third parties unless legally required
              </li>
            </ul>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              Your Rights Under UK GDPR
            </Title>

            <BodyText size="lg" variant="light-bg">
              Under the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018, you have the right to:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700 space-y-1"
              aria-label="Your rights under UK GDPR"
            >
              <li>
                <strong>Be informed:</strong> This policy explains how your data
                is used.
              </li>
              <li>
                <strong>Access:</strong> Request a copy of your data by emailing{" "}
                <a
                  href="mailto:julia@lhSystemic Psychotherapy.co.uk"
                  className="underline"
                  aria-label="Email Julia Halpin"
                >
                  julia@lhSystemic Psychotherapy.co.uk
                </a>
                .
              </li>
              <li>
                <strong>Rectification:</strong> Ask for corrections to
                inaccurate data.
              </li>
              <li>
                <strong>Erasure:</strong> Your data will be securely deleted 7
                years after your final session, unless otherwise required by
                law.
              </li>
              <li>
                <strong>Restrict processing:</strong> Your data is used only as
                outlined here.
              </li>
              <li>
                <strong>Portability:</strong> Your data will not be transferred
                without explicit consent.
              </li>
              <li>
                <strong>Object:</strong> You won&apos;t be contacted for
                marketing unless you opt in.
              </li>
              <li>
                <strong>Automated decision-making:</strong> No automated
                profiling is used.
              </li>
            </ul>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              Confidentiality and Legal Exceptions
            </Title>

            <BodyText size="lg" variant="light-bg">
              Your information remains confidential unless:
            </BodyText>

            <ul
              className="list-disc ml-6 text-indigo-700"
              aria-label="Confidentiality exceptions"
            >
              <li>There is a serious risk of harm to yourself or others</li>
              <li>
                There is a legal obligation (e.g. safeguarding, crime
                prevention)
              </li>
              <li>
                Anonymous case material is discussed in professional supervision
                or peer support
              </li>
            </ul>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              Cookies
            </Title>

            <BodyText size="lg" variant="light-bg">
              This website may use cookies to analyse traffic and improve user
              experience. You can disable cookies via your browser settings.
              Disabling them may affect site functionality.
            </BodyText>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              External Links
            </Title>

            <BodyText size="lg" variant="light-bg">
              This site may contain links to other websites. Once you leave this
              site, Halpin Therapies Ltd is not responsible for how other sites
              manage your data. Please review their privacy policies.
            </BodyText>
          </div>

          <div className="space-y-4 block mb-4">
            <Title size="3xl" colour="indigo" weight="semibold">
              Data Protection Registration
            </Title>

            <BodyText size="lg" variant="light-bg">
              Halpin Therapies Ltd is registered with the UK Information
              Commissioner&apos;s Office (ICO). <br />
              Registration number: <strong>ZB879212</strong>.
            </BodyText>
          </div>

          <div className="space-y-4">
            <BodyText size="lg" variant="light-bg">
              If you have any questions about this policy or your personal data,
              please contact:
              <br />
              <strong>Julia Halpin</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:julia.halpin@familyandcoupletherapyservices.co.uk"
                className="underline"
                aria-label="Email Julia Halpin"
              >
                julia.halpin@familyandcoupletherapyservices.co.uk
              </a>
            </BodyText>
          </div>
        </section>
      </main>
    </>
  );
}
