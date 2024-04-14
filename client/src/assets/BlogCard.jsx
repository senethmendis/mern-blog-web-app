import React from "react";

const BlogCard = ({ blogImg, timestamp, title, description }) => {
  return (
    <div className="w-full md:scale-[85%] md:hover:scale-90 transition-all duration-100">
      <img src={blogImg} alt="blogimg" className="rounded-2xl" />
      <h3 className="text-2xl font-semibold capitalize">{title}</h3>
      <p className="text-lg text-neutral-600">{description}</p>
      <span>{new Date(timestamp * 1000).toDateString()}</span>
      <button className="font-semibold w-full hover:bg-blue-700 bg-neutral-900 border border-white/15 py-2 rounded-full my-3">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
