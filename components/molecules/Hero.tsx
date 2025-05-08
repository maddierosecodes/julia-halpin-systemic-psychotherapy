import { ReactNode } from "react";

interface HeroProps {
  imageComponent: ReactNode;
  textComponent: ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
}

export const Hero = ({
  imageComponent,
  textComponent,
  imagePosition = "right",
  className = "",
}: HeroProps) => {
  const contentArray = [
    <section
      key="text"
      className="flex-1 w-full"
      aria-label="Hero text content"
    >
      {textComponent}
    </section>,
    <figure key="image" className="flex-1 w-full" aria-label="Hero image">
      {imageComponent}
    </figure>,
  ];

  return (
    <section
      className={`flex items-start py-4 sm:py-8 lg:py-0 ${className}`}
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-24 px-4 align-middle w-full">
        {imagePosition === "right" ? contentArray : contentArray.reverse()}
      </div>
    </section>
  );
};
