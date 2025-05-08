"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownMenuProps {
  href: string;
  label: string;
  items: DropdownItem[];
}

export const DropdownMenu = ({ label, items, href }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${label} navigation`}
    >
      <div className="flex items-center group">
        <Link href={href} className="text-lg font-main">
          {label}
        </Link>
        <span
          className="ml-1 text-xs transition-colors duration-500 group-hover:text-indigo-700"
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <section
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-indigo-700/90 border border-gold-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label={`${label} submenu`}
        >
          <nav className="py-1" role="menu" aria-label={`${label} options`}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-ivory hover:text-gold-300 hover:bg-indigo-800/90"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </nav>
  );
};
