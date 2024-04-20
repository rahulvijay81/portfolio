import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="pb-2 text-2xl lg:pb-3 lg:text-3xl">
        Sorry, Page Not Found!
      </div>
      <p className="px-6 pb-6 text-center text-sm lg:w-2/4 lg:px-20 lg:pb-8 lg:text-base">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>
      <div className="">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
