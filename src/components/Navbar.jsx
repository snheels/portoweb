import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // tambah useNavigate
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleContact = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-pink/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="hidden md:flex items-center justify-center gap-10">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `group relative font-body text-base font-medium transition-all duration-300 ${
                  isActive ? "text-maroon" : "text-maroon/50 hover:text-maroon"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-pink rounded-full" />
                  )}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink rounded-full group-hover:w-full transition-all duration-300" />
                </>
              )}
            </NavLink>
          ))}
          <a
            href="#contact"
            onClick={handleContact}
            className="group relative font-body text-base font-medium text-maroon/50 hover:text-maroon transition-colors duration-300"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink rounded-full group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <button
          className="md:hidden text-maroon p-2 hover:bg-pink/10 rounded-lg transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-pink/20 shadow-lg">
          <div className="flex flex-col items-center gap-6 py-8 px-6">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-maroon border-b-2 border-pink"
                      : "text-maroon/50 hover:text-maroon"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={handleContact}
              className="font-body text-lg font-medium text-maroon/50 hover:text-maroon transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
