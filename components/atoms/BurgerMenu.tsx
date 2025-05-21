"use client";

import { useState, useRef, useEffect } from "react";
import { NavigationLink } from "../molecules/Navigation";

interface BurgerMenuProps {
  links: NavigationLink[];
}

export const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 text-lavender-800 hover:text-ink focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-ink-800 z-[100]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-end pt-4">
              <button
                onClick={toggleMenu}
                className="text-lavender-200 hover:text-ink-400 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              className="flex flex-col items-center h-[calc(100%-4rem)] overflow-y-auto py-8"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="w-full max-w-xs">
                {links.map((link) => (
                  <div key={link.href} className="py-4">
                    <a
                      href={link.href}
                      className="block text-2xl text-lavender-200 hover:text-ink-400 py-2 text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                    {link.dropdownItems && (
                      <div className="mt-2">
                        <div className="pl-4 flex flex-col">
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block text-xl text-lavender-200 hover:text-ink-400 py-2 text-left"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
