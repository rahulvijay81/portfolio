import { useEffect, useState } from "react";
import logo from "../Assets/images/logor.png"


const Header = () => {
const [isScrolling , setisScrolling] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const isCurrentScrolled =  scrollTop > 0 ;
    setisScrolling(isCurrentScrolled)
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
},[]);

  return (
    <header className={`flex items-center justify-between w-full px-28 pt-2 fixed top-0 z-50 transition-all text-base ${isScrolling ? 'sticky' : ''}`}>
      <div>
       <img className="w-[90px] h-[80px] bg-no-repeat bg-cover" src={logo} alt="" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Projects</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
          <li>
            <button className="w-[120px bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
