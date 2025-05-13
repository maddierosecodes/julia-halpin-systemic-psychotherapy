import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  target?: string;
  variant?: "default" | "navigation";
}

export const NavLink = ({
  href,
  children,
  ariaLabel,
  target,
  variant = "default",
}: NavLinkProps) => {
  const variantStyles = {
    default: "",
    navigation: "text-lavender-800 hover:text-ink-400",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`text-lg font-main outline-none focus:ring-2 focus:ring-lavender-300 focus:ring-offset-2 ${variantStyles[variant]}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};
