import React from "react";
import { ProjectsList } from "../data/ProjectsList";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ArchiveProjects() {
  const navigate = useNavigate();
  const AllProjects = ProjectsList.projects;
  return (
    <div className="w-full h-auto ">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="hidden lg:flex lg:items-center ml-[5%] pt-8 gap-2 hover:text-white "
      >
        <FaArrowLeft />
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          Portfolio
        </span>
      </div>
      <div className="flex pb-8 lg:p-4 pt-2 w-[90%] items-center justify-center mx-auto lg:pt-4">
        <div className="text-center text-2xl  font-poppins">
          The project I work on
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-2 sm:mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {AllProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg bg-transparent mb-8 p-4 h-auto shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <h2 className="text-base lg:text-xl font-semibold mb-2 font-poppins cursor-pointer">
              {project.name}
            </h2>
            <p className="text-gray-900 text-sm font-poppins">
              {project.description}
            </p>
            <div className="flex flex-wrap mt-3 lg:mt-6">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="inline-block bg-transparent shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchiveProjects;
