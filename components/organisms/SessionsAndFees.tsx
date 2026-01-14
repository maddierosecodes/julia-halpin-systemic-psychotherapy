import React from 'react';
import { Title } from '../atoms/Title';
import { BodyText } from '../atoms/BodyText';
import { Subtitle } from '../atoms/Subtitle';
import { SectionHeading } from '../atoms/SectionHeading';
import Image from 'next/image';
import flower from '@/public/images/flower.jpg';
import { StructuredTable } from '../molecules/StructuredTable';
import { NavLink } from '../atoms/NavLink';

export default function SessionsAndFees() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Night'];

  // Define availability data with checkmarks
  const availabilityData = {
    Mon: { Morning: false, Afternoon: false, Evening: false, Night: false },
    Tue: { Morning: false, Afternoon: false, Evening: false, Night: false },
    Wed: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Thu: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Fri: { Morning: true, Afternoon: true, Evening: true, Night: false },
    Sat: { Morning: true, Afternoon: false, Evening: false, Night: false },
    Sun: { Morning: true, Afternoon: false, Evening: false, Night: false }
  };

  return (
    <section
      id="sessionAndFees"
      className="flex flex-col justify-center items-center gap-3 mx-auto px-4 sm:px-6 md:px-8 xl:px-0 max-w-7xl mb-8 mt-4"
      aria-labelledby="sessions-and-fees-heading">
      <div className="text-center mb-8 w-full">
        <Title
          size="4xl"
          smSize="5xl"
          lgSize="6xl"
          weight="bold"
          colour="indigo">
          Sessions & Fees
        </Title>
      </div>

      {/* Main container with responsive layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Column (3/5 width on desktop) */}
        <div className="w-full lg:w-3/5 space-y-6 order-2 lg:order-1">
          {/* Availability Box */}
          <div className="bg-indigo-700 rounded-2xl shadow-xl p-4 sm:p-5">
            <Subtitle variant="dark-bg" size="3xl" colour="ivory" weight="bold">
              Availability
            </Subtitle>

            <StructuredTable
              columnHeaders={days}
              rowHeaders={timeSlots}
              data={availabilityData}
              showScrollIndicator={true}
            />
          </div>

          {/* Important Information and Image Container */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Important Information Box */}
            <div className="bg-indigo-700 rounded-2xl shadow-xl p-5 flex-1">
              <div className="flex flex-col gap-2">
                <Subtitle
                  variant="dark-bg"
                  size="2xl"
                  colour="ivory"
                  weight="bold">
                  Important Information:
                </Subtitle>

                <div className="mt-3">
                  <BodyText variant="dark-bg" size="md" colour="ivory">
                    Therapy is flexible and tailored to your needs.{' '}
                    <span className="highlight-indigo-dark">
                      Sessions can range from 4-6 meetings to longer-term
                      support
                    </span>
                    , with progress reviewed regularly.{' '}
                    <span className="emphasis-text-dark">
                      Appointments can be weekly, fortnightly, or spread over
                      longer periods
                    </span>
                    <br />
                    For family therapy,{' '}
                    <span className="highlight-lavender-dark">
                      attendance is flexible - different family members can
                      attend different sessions
                    </span>
                    .
                  </BodyText>
                </div>
              </div>
            </div>

            {/*  Image - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center lg:w-1/3 p-2">
              <Image
                src={flower}
                alt="Flower illustration"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column (2/5 width on desktop) */}
        <div className="lg:w-2/5 order-1 lg:order-2">
          <div className="bg-indigo-700 rounded-2xl shadow-xl p-5 lg:h-full lg:py-8">
            <Subtitle variant="dark-bg" size="3xl" colour="ivory" weight="bold">
              Pricing
            </Subtitle>

            <div className="space-y-6 text-ivory mt-6">
              <div>
                <NavLink href="/contact?type=initial-consultation">
                  <SectionHeading
                    variant="dark-bg"
                    colour="ivory"
                    isInteractive>
                    Initial Consultation – Free
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  A{' '}
                  <span className="highlight-lavender-dark">
                    20-minute telephone consultation
                  </span>{' '}
                  to discuss your needs and how I can help.
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=therapy-sessions">
                  <SectionHeading
                    variant="dark-bg"
                    colour="ivory"
                    isInteractive>
                    Couple & Family Therapy
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  Sessions range from{' '}
                  <span className="highlight-indigo-dark">£100 - £150</span>.
                  <br />
                  <span className="emphasis-text-dark">
                    Please contact me to discuss your specific needs
                  </span>
                  .
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=supervision">
                  <SectionHeading
                    variant="dark-bg"
                    colour="ivory"
                    isInteractive>
                    Supervision
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  <span className="highlight-lavender-dark">Online:</span>{' '}
                  <span className="highlight-indigo-dark">
                    £90 (60 min), £120 (90 min)
                  </span>
                  <br />
                  <span className="highlight-lavender-dark">
                    In person:
                  </span>{' '}
                  <span className="highlight-indigo-dark">
                    £100 (60 min), £130 (90 min)
                  </span>
                </p>
              </div>

              <div>
                <NavLink href="/contact?type=consultation">
                  <SectionHeading
                    variant="dark-bg"
                    colour="ivory"
                    isInteractive>
                    MSc Student Consultation Package
                  </SectionHeading>
                </NavLink>
                <p className="text-sm md:text-base">
                  <span className="emphasis-text-dark">
                    6 x 60 min sessions
                  </span>{' '}
                  for MSc students in Family Therapy
                  <br />
                  <span className="highlight-lavender-dark">Online:</span>{' '}
                  <span className="highlight-indigo-dark">£500</span>
                  <br />
                  <span className="highlight-lavender-dark">
                    In person:
                  </span>{' '}
                  <span className="highlight-indigo-dark">£560</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
