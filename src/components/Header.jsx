import { useEffect, useState } from "react";
import logo from "../Assets/images/logor.png";
import { Link, Events, scrollSpy } from "react-scroll";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`flex lg:items-center justify-between w-full lg:px-28 lg:pt-2 fixed top-0 z-50 transition-all text-base sm:px-4
      ${isScrolling ? "sticky" : ""}`}
    >
      <div>
        <img
          className="w-[90px] h-[80px] bg-no-repeat bg-cover"
          src={logo}
          alt=""
        />
      </div>
      <nav className="lg:block hidden"> 
        <div className="lg:flex lg:flex-row items-center space-x-4 lg:gap-6 sm:gap-4 sm:flex sm:flex-col cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            to="Home-section"
          >
            <p
              className={
                activeSection === "Home-section"
                  ? "active"
                  : "text-white hover:text-gray-900"
              }
            >
              Home
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="About-section"
          >
            <p
              className={
                activeSection === "About-section"
                  ? "active"
                  : "text-white hover:text-gray-900"
              }
            >
              About
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="Project-section"
          >
            <p
              className={
                activeSection === "Project-section"
                  ? "active"
                  : "text-white hover:text-gray-900"
              }
            >
              Projects
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact-section"
          >
            <p
              className={
                activeSection === "Contact-section"
                  ? "active"
                  : "text-white hover:text-gray-900"
              }
            >
              Contact
            </p>
          </Link>
          <div>
            <button className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl">
              Resume
            </button>
          </div>
        </div>
      </nav>
      <div className="lg:hidden block"> {/* Show on small screens */}
        <button
          className="block text-white hover:text-gray-900 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden block absolute top-full left-0 w-full bg-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
            >
              <p
                className={
                  activeSection === "Home-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                }
              >
                Home
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
            >
              <p
                className={
                  activeSection === "About-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                }
              >
                About
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="Project-section"
            >
              <p
                className={
                  activeSection === "Project-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                }
              >
                Projects
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
            >
              <p
                className={
                  activeSection === "Contact-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                }
              >
                Contact
              </p>
            </Link>
            <div>
              <button className="w-[120px] button-UI text-gray-900 hover:text-white font-bold py-1.5 px-4 rounded-lg tracking-wider shadow-xl">
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
