import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";

function Project() {
  return (
    <div className="w-full h-auto mb-24 sm:mb-0 md:h-screen">
      <div>
        <p className="w-[50%] pb-10 mx-auto text-2xl lg:text-3xl font-poppins text-gray-900 pt-8 tracking-wider text-center font-poppins">
          Projects
        </p>
      </div>
      <div className="w-[90%] mx-auto mb-2 sm:mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Cards />
      </div>
      <div className="w-[90%] mx-auto">
        <p className="flex items-center gap-2 text-gray-900 leading-tight font-semibold cursor-pointer">
          <div class="relative group font-poppins">
            <span>View Full Project Archive</span>
            <span class="absolute left-0 bottom-0 top-6 w-full h-[2px] bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </div>

          <FaLocationArrow />
        </p>
      </div>
    </div>
  );
}

export default Project;
