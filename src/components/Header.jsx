import { useEffect, useState } from "react";
import logo from "../Assets/images/logor.png";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <div>
            <p className="text-white hover:text-gray-900">Home</p>
          </div>
          <div>
            <p className="text-white hover:text-gray-900">About</p>
          </div>
          <div>
            <p className="text-white hover:text-gray-900">Projects</p>
          </div>
          <div>
            <p className="text-white hover:text-gray-900">Contact</p>
          </div>
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
