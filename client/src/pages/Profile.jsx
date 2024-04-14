import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  return (
    <section>
      <Header />
      <div className="w-full h-32 my-2 border border-white/15 rounded-2xl gap-9 flex justify-center items-center">
        <h1 className="text-2xl">Add Blog</h1>
        <button className="text-3xl font-bold h-10 flex justify-center items-center rounded-full w-10 bg-blue-600">
          <Link to="/addblog">
            <IoMdAdd />
          </Link>
        </button>
        <Link
          to="/deleteblog"
          className="cursor-pointer w-10 h-10 bg-red-500 rounded-full flex justify-center items-center"
        >
          <MdDelete size={25} />
        </Link>
      </div>
    </section>
  );
};

export default Profile;
