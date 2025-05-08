import Link from "next/link";
import { ReactNode } from "react";

interface CTALinkProps {
  href: string;
  children: ReactNode;
}

export const CTALink = ({ href, children }: CTALinkProps) => {
  return (
    <Link
      href={href}
      className="relative transform skew-x-[20deg] inline-block font-main text-md font-bold shadow-[5px_5px_0px_0px_rgba(198,166,100,0.5)] transition-all duration-500 group cursor-pointer border-2 border-gold-500 overflow-hidden text-lavender-800 px-6 py-2 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-all before:duration-500 hover:before:left-0 bg-indigo-700/20 before:bg-indigo-700/30"
    >
      <span className="transform skew-x-[-20deg] inline-block relative z-10">
        {children}
      </span>
    </Link>
  );
};
