"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      target={target}
      className={`text-lg font-main outline-none focus:ring-2 focus:ring-lavender-300 focus:ring-offset-2`}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
