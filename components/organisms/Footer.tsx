import { Copyright } from "../atoms/Copyright";
import { NavLink } from "../atoms/NavLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-rose shadow-sm`} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav
          className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-ivory-100"
          aria-label="Footer navigation"
        >
          <section className="hover:text-lavender-500" aria-label="Site credit">
            <NavLink href="https://maddierosecodes.com" target="_blank">
              <i>Website by</i> maddierosecodes
            </NavLink>
          </section>
          <Copyright year={currentYear} companyName={"Halpin Therapies Ltd"} />
          <section className="hover:text-lavender-500" aria-label="Legal links">
            <NavLink href={"/privacy-policy"}>Privacy Policy</NavLink>
          </section>
        </nav>
      </div>
    </footer>
  );
};
