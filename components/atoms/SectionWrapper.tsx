interface SectionWrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="py-2 sm:py-4 md:py-8 lg:py-16">{children}</section>
  );
}
