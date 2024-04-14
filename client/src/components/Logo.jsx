import React from "react";
import { ImBlogger } from "react-icons/im";

const Logo = () => {
  return (
    <div className="w-[200px] h-[50px] flex justify-start items-center gap-3">
      <div className="w-10 h-10 bg-blue-600 flex justify-center items-center rounded-full">
        <ImBlogger size={25} color="fff" />
      </div>
      <h1 className="logo">
        BLOG.<span className="text-gray-400">co</span>
      </h1>
    </div>
  );
};

export default Logo;
