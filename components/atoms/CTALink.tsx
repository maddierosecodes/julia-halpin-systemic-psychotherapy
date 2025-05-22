import Link from "next/link";
import { ReactNode } from "react";

interface CTALinkProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "compact" | "compact-centered" | "default-centered";
  darkBg?: boolean;
}

export const CTALink = ({
  href,
  children,
  variant = "default",
  darkBg = false,
}: CTALinkProps) => {
  const baseStyles = `relative transform skew-x-[20deg] inline-block font-main text-md font-bold shadow-[5px_5px_0px_0px_rgba(198,166,100,0.5)] transition-all duration-500 group cursor-pointer border-2 border-gold-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:ring-offset-2 ${
    darkBg
      ? "text-lavender-100 bg-indigo-700 before:bg-lavender-300/30 hover:text-indigo-900"
      : "text-lavender-800 bg-indigo-700/20 before:bg-indigo-700/30 hover:text-lavender-50"
  } before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-all before:duration-500 hover:before:left-0 before:z-[-1]`;

  const variantStyles = {
    default: "px-6 py-2",
    "default-centered": "px-6 py-2",
    compact: "px-4 py-1.5",
    "compact-centered": "px-4 py-1.5",
  };

  const textAlignmentStyles = {
    default: "text-left",
    "default-centered": "text-center",
    compact: "text-left",
    "compact-centered": "text-center",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      <span
        className={`transform skew-x-[-20deg] inline-block relative left-0 whitespace-nowrap ${textAlignmentStyles[variant]}`}
      >
        {children}
      </span>
    </Link>
  );
};
