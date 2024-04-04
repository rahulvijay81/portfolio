import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className="text-2xl pb-2 lg:text-3xl lg:pb-3">Sorry, Page Not Found!</div>
        <p className="text-sm px-6 pb-6 text-center lg:text-base lg:w-2/4 lg:px-20 lg:pb-8">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>
        <div className="">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="w-[200px] h-[50px] bg-transparent border-2 border-black hover:bg-gray-900 hover:bg-opacity-40"
          >
            Back
          </button>
        </div>
      </div>
  );
}

export default NotFound;
