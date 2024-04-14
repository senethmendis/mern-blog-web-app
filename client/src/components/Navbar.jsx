import React from "react";
import { NavbarItem } from "../constants/constant";
import { Avatar } from "../assets";
import { LuBellDot } from "react-icons/lu";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav id="home" className="w-full flex justify-between py-4">
      <Logo />
      <ul className="hidden md:flex justify-center items-center gap-6">
        {NavbarItem.map((item) => (
          <li key={item.id} className="hover:text-white text-neutral-500">
            <Link to={item.navlink}>{item.navName}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center">
        <Link to="profile">
          <img src={Avatar} alt="avatar" className="avatar" />
        </Link>
        <LuBellDot size={20} />
        <button className=" flex justify-center items-center bg-white text-black px-3 py-1.5 font-bold rounded-full">
          📞 Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
