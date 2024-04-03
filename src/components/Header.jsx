import { useEffect, useState } from "react";
import logo from "../Assets/images/logor.png";
import { Link, Events, scrollSpy } from "react-scroll";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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

  return (
    <header
      className={`flex items-center justify-between w-full px-28 pt-2 fixed top-0 z-50 transition-all text-base ${
        isScrolling ? "sticky" : ""
      }`}
    >
      <div>
        <img
          className="w-[90px] h-[80px] bg-no-repeat bg-cover"
          src={logo}
          alt=""
        />
      </div>
      <nav>
        <div className="flex items-center space-x-4 gap-6">
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
    </header>
  );
};

export default Header;
