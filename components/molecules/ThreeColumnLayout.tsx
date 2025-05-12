import { ReactNode } from "react";

interface ThreeColumnLayoutProps {
  leftColumn: ReactNode;
  centerColumn: ReactNode;
  rightColumn: ReactNode;
}

export const ThreeColumnLayout = ({
  leftColumn,
  centerColumn,
  rightColumn,
}: ThreeColumnLayoutProps) => {
  return (
    <div className="grid grid-cols-1 mx-3 sm:mx-10 md:mx-0 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-2 lg:gap-0 mt-10 sm:mt-28 md:mt-24 lg:pt-0 xl:mt-6 lg:relative lg:overflow-visible">
      {/* Decorative lines */}
      <div className="hidden lg:block absolute inset-0 w-full h-full mt-2 xl:mt-0 pointer-events-none">
        <div className="absolute left-[6%] right-0 w-[80%] bottom-[28%] xl:bottom-[32%]">
          <div className="relative w-full h-[4px] bg-gold-500" />
        </div>
        <div className="absolute left-[12%] right-0 w-[80%] bottom-[2%] xl:bottom-[3%]">
          <div className="relative w-full h-[4px] bg-gold-500" />
        </div>
      </div>

      <div className="order-3 md:col-span-1 md:order-2 lg:order-none lg:col-start-1 lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right relative md:self-start">
        {leftColumn}
      </div>
      <div className="order-1 md:col-span-full md:order-1 lg:order-none lg:col-span-5 flex justify-center items-center relative">
        {centerColumn}
      </div>
      <div className="order-2 md:col-span-1 md:order-2 lg:order-none lg:col-span-4 lg:relative lg:pl-12 flex flex-col items-center lg:items-start text-center lg:text-left md:self-start overflow-visible">
        {rightColumn}
      </div>
    </div>
  );
};
