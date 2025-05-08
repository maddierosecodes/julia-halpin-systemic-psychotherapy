import { NavLink } from "../atoms/NavLink";
import { DropdownMenu } from "../atoms/DropdownMenu";

export interface NavigationLink {
  href: string;
  label: string;
  dropdownItems?: { href: string; label: string }[];
}

interface NavigationProps {
  links: NavigationLink[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <ul className="hidden lg:flex items-center" role="list">
      {links.map((link, index) => (
        <li
          key={link.href}
          className={`relative transform skew-x-[-20deg] px-8 py-3 text-lg transition-all duration-500 group cursor-pointer hover:bg-indigo-700/20 ${
            index === 0 ? "border-l" : ""
          } border-r border-gold-500`}
        >
          {/* Top border that slides from left */}
          <div className="absolute top-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full"></div>

          {/* Bottom border that slides from right */}
          <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full"></div>

          <div className="transform skew-x-[20deg]">
            {link.dropdownItems ? (
              <DropdownMenu
                label={link.label}
                items={link.dropdownItems}
                href={link.href}
              />
            ) : (
              <NavLink
                href={link.href}
                className="text-lavender-800 hover:text-ink-400"
              >
                {link.label}
              </NavLink>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
