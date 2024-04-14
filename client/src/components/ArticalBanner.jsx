import React from "react";
import { ArticalBg } from "../assets";

const ArticalBanner = () => {
  return (
    <section className="w-full h-[400px] object-cover py-5">
      <img
        src={ArticalBg}
        alt="artical bg"
        className="w-full h-full bg-cover object-cover rounded-3xl"
      />
    </section>
  );
};

export default ArticalBanner;
