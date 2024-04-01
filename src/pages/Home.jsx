import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../Assets/images/imagedeveloper.png";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
  };

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-between mt-32 mx-auto w-[80%]">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="pt-2 text-2xl font-semibold text-gray-900 leading-tight">
            Im {UserData.name}
          </h2>
          <TypewriterText />

          <div className="flex mt-4">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="flex items-center justify-center w-24 h-12 bg-transparent border-none rounded-lg hover:bg-white hover:bg-opacity-20 hover:shadow-lg hover:opacity-80"
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
            className="max-w[550px] h-[400px] bg-no-repeat bg-cover bg-center"
            src={imagedeveloper}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
