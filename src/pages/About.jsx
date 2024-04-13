import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../assets/images/AboutImage.png";

function About() {
  const { about } = UserData;
  return (
    <div className="w-full h-auto mb-24 sm:mb-0 md:h-screen">
      <div className="flex md:items-center flex-col justify-between bg-transparent rounded-lg shadow-lg p-4 w-[90%] mx-auto md:flex-row">
        <div className="flex flex-col w-full md:w-[50%]">
          <p className="text-2xl font-semibold text-gray-900 tracking-wide pb-2">
            About Me
          </p>
          <p className="text-sm lg:text-base font-poppins">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={150}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="w-24 h-24 flex items-center justify-center flex-col gap-2 ml-4"
                  key={id}
                >
                  <img
                    className="w-[60px] h-[50px] bg-no-repeat bg-contain"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p>{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <img
          className="max-w[500px] md:w-[350px] lg:w-[550px] lg:h-[350px] bg-no-repeat bg-cover bg-center mt-4 lg:mt-0"
          src={AboutImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
