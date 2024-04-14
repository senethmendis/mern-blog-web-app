import React from "react";
import { NavbarItem } from "../constants/constant";
import { Avatar } from "../assets";
import { LuBellDot } from "react-icons/lu";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between py-4">
      <Logo />
      <ul className="hidden md:flex justify-center items-center gap-6">
        {NavbarItem.map((item) => (
          <li key={item.id}>
            <a href={item.navlink}> {item.navName} </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center">
        <img src={Avatar} alt="avatar" className="avatar" />
        <LuBellDot size={20} />
        <button className=" flex justify-center items-center bg-white text-black px-3 py-1.5 font-bold rounded-full">
          📞 Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
