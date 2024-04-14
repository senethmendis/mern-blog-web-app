import React from "react";

const BlogCard = ({
  blogImg,
  timestamp,
  title,
  description,
  isDel,
  onClickDelete,
}) => {
  return (
    <div className="w-full md:scale-[85%] md:hover:scale-90 transition-all duration-100">
      <img src={blogImg} alt="blogimg" className="rounded-2xl" />
      <h3 className="text-2xl font-semibold capitalize py-2">{title}</h3>
      <p className="text-lg text-neutral-600">{description}</p>
      <span>{new Date(timestamp * 1000).toDateString()}</span>
      {isDel ? (
        <div className="w-full">
          <button className="sub-btn">Read More</button>
          <button className="del-btn" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      ) : (
        <button className="sub-btn">Read More</button>
      )}
    </div>
  );
};

export default BlogCard;
