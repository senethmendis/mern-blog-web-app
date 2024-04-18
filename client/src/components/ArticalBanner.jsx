import React from "react";
import { ArticalBg } from "../assets";

const ArticalBanner = ({ variableImg, imgPath }) => {
  return (
    <section className="max-w-[1100px] mx-auto h-[400px] object-cover py-5">
      <img
        src={variableImg ? imgPath : ArticalBg}
        alt="artical bg"
        className="w-full h-full bg-cover object-cover rounded-3xl"
      />
    </section>
  );
};

export default ArticalBanner;
