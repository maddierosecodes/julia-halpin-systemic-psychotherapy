import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  target?: string;
}

export const NavLink = ({
  href,
  children,
  ariaLabel,
  target,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`text-lg font-main outline-none focus:ring-2 focus:ring-lavender-300 focus:ring-offset-2`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};
