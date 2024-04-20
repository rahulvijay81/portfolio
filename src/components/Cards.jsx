import React, { useState } from "react";
import { ProjectsList } from "../data/ProjectsList";

function Cards() {
  const [showFullDescription, setShowFullDescription] = useState(null);
  const projectsToDisplay = ProjectsList.projects.slice(0, 4);

  const toggleDescription = (index) => {
    console.log("clicking description", index);

    setShowFullDescription(index === showFullDescription ? null : index);
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className="mb-8 h-auto rounded-lg bg-transparent p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold lg:text-xl">
            {project.name}
          </h2>
          <p className="font-poppins text-sm text-gray-900">
            {showFullDescription === index
              ? project.description
              : project.description.substring(0, 120)}
            <span
              className="ml-[5px] cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              ....
            </span>
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
    </>
  );
}

export default Cards;
