import React from "react";
import { ProjectsList } from "../data/ProjectsList";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ArchiveProjects() {
  const navigate = useNavigate();
  const AllProjects = ProjectsList.projects;
  return (
    <div className="h-auto w-full ">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="ml-[5%] hidden gap-2 pt-8 hover:text-white lg:flex lg:items-center "
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
      <div className="mx-auto flex w-[90%] items-center justify-center pb-8 pt-2 lg:p-4 lg:pt-4">
        <div className="font-poppins text-center  text-2xl">
          The project I work on
        </div>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        {AllProjects.map((project, index) => (
          <div
            key={index}
            className="mb-8 h-auto rounded-lg bg-transparent p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold lg:text-xl">
              {project.name}
            </h2>
            <p className="font-poppins text-sm text-gray-900">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap lg:mt-6">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="mb-2 mr-2 inline-block  rounded-full bg-transparent px-3 py-1 text-sm font-semibold text-gray-900 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
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
