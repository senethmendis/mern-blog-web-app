import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Avatar } from "../assets";
import { Footer } from "../components/Footer";

const ViewBlog = () => {
  const { blogObj } = useParams();
  const newObj = JSON.parse(decodeURIComponent(blogObj));
  console.log(newObj);
  return (
    <section>
      <Header isBannerVisible={true} secondBannerImg={Avatar} />
      <div className="max-w-[1100px] mx-auto flex flex-col px-3 gap-4 py-5">
        <h1 className="text-4xl font-semibold py-3">{newObj.title}</h1>
        <div className="flex gap-5 flex-row justify-start items-center">
          <img src={Avatar} alt="avatar" className="w-[50px]" />
          <h3 className="text-xl capitalize">{newObj.author}</h3>
        </div>
        <hr className="py-2" />
        <p className="text-2xl py-4">{newObj.description}</p>
      </div>
      <Footer />
    </section>
  );
};

export default ViewBlog;
