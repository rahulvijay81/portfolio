import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../assets/images/imagedeveloper.png";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
  };

  return (
    <div className="w-full h-auto mb-28 sm:mb-0 md:h-screen">
      <div className="w-[90%] flex items-center flex-col lg:justify-between mt-32 sm:flex-row mx-auto lg:w-[80%]  ">
        <div className="w-full">
          <h2 className="lg:text-3xl text-2xl font-semibold text-gray-900 leading-tight">
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="pt-2 text-2xl font-semibold text-gray-900 leading-tight">
            Im {UserData.name}
          </h2>
          <TypewriterText />

          <div className="flex mt-4 gap-8 lg:gap-0">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="flex items-center justify-center lg:w-24 lg:h-12 bg-transparent border-none rounded-lg hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:opacity-80"
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="icon" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <img
            className="max-w[550px] lg:w-[600px] lg:h-[400px] bg-no-repeat bg-cover bg-center"
            src={imagedeveloper}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
