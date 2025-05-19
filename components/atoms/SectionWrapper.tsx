interface SectionWrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="py-2 px-0 sm:px-4 md:px-6 lg:px-8 sm:py-4 md:py-8 lg:py-16">
      {children}
    </section>
  );
}
