import React from "react";
import { NavbarItem } from "../constants/constant";
import Logo from "./Logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-5 px-5">
      <ul className="flex gap-6 text-neutral-600 ">
        {NavbarItem.map((item) => (
          <li key={item.id} className="hover:text-white">
            <a href={item.navlink}>{item.navName}</a>
          </li>
        ))}
      </ul>

      <Logo />
      <p className="text-neutral-700">
        @{new Date().getFullYear()} All right reseved
      </p>
    </footer>
  );
};
