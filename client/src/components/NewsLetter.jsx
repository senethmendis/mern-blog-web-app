import React from "react";

export const NewsLetter = () => {
  return (
    <section
      id="service"
      className="flex flex-col md:flex-row justify-between py-8 px-5 md:py-20 md:px-10 bg-neutral-800"
    >
      <div>
        <h1 className="text-4xl font-semibold">Subscribe For New Content</h1>
        <p className="py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col justify-start  md:items-start  gap-4 py-10 md:py-0">
        <div className="flex flex-col ">
          <label htmlFor="search-box" className="ml-3">
            Email
          </label>
          <input
            name="search-box"
            type="text"
            placeholder="example@gmail.com"
            className="w-[350px] h-[45px] py-2 px-3 rounded-full bg-neutral-900 border border-white/15"
          />
        </div>
        <button className="w-[150px] h-[45px] font-semibold  hover:bg-blue-700 bg-blue-600  rounded-full md:my-3">
          Subscribe
        </button>
      </div>
    </section>
  );
};
