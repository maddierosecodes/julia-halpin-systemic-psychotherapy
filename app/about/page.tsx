import AboutJulia from "@/components/organisms/AboutJulia";
import AboutSystemicPsychotherapy from "@/components/organisms/AboutSystemicPsychotherapy";
import SystemicPsychotherapyList from "@/components/organisms/SystemicPsychotherapyList";
import Qualifications from "@/components/organisms/Qualifications";
import SectionWrapper from "@/components/atoms/SectionWrapper";
// import Testimonials from "@/components/organisms/Testimonials";
// import Articles from "@/components/organisms/Articles";

export default function About() {
  return (
    <main
      className="mt-6 md:mt-10"
      aria-label="About Julia Halpin Systemic Psychotherapy"
    >
      <SectionWrapper>
        <AboutJulia />
      </SectionWrapper>

      <SectionWrapper>
        <Qualifications />
      </SectionWrapper>

      <SectionWrapper>
        <AboutSystemicPsychotherapy />
      </SectionWrapper>

      <SectionWrapper>
        <SystemicPsychotherapyList />
      </SectionWrapper>

      {/* <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <Articles />
      </SectionWrapper> */}
    </main>
  );
}
