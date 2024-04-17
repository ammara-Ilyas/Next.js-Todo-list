"use client";
import React, { useState, useContext } from "react";
import logo from "../../../public/Image/logo.png";
import Image from "next/image";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../../../components/contextApi/ThemeContext";
function Navbar() {
  const { switchDark, switchLight, theme } = useContext(ThemeContext);

  return (
    <div className="shadow-lg sticky z-0 border-none bg-white top-0 py-1">
      <ul className="flex justify-between px-20 items-center">
        <li className="mr-6">
          <Image src={logo} alt="logo" height={80} width={80} />
        </li>

        <li className="ml-6 text-2xl ">
          {theme === "light" ? (
            <MdDarkMode onClick={switchDark} />
          ) : (
            <CiLight onClick={switchLight} />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
