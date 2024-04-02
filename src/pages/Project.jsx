import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";

function Project() {
  return (
    <div className="w-full h-screen">
      <div>
        <p className="w-[50%] mx-auto text-3xl font-poppins text-gray-900 pb-6 tracking-wider text-center font-poppins">
          Projects
        </p>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <Cards />
      </div>
      <div className="w-[90%] mx-auto">
        <p className="flex items-center gap-2 text-gray-900 leading-tight font-semibold cursor-pointer">
          <div class="relative group">
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
