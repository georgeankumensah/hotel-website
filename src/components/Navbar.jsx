import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-yellow-300/30 items-center justify-between py-8 px-[80px] fixed w-full">
      <Link to="/" className="text-white">
        Romeo
      </Link>
      <ul className="flex gap-8">
        <NavLink
          className="rounded-xl text-white poppins py-1 px-2 hover:bg-white/30"
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className="rounded-xl text-white poppins py-1 px-2 hover:bg-white/30"
          to="/about"
        >
          <li>About Us</li>
        </NavLink>
        <NavLink
          className="rounded-xl text-white poppins py-1 px-2 hover:bg-white/30 relative group-hover:block" // add relative and group-hover classes
          to="/rooms"
        >
          <li className="peer">
            Rooms
            <IoMdArrowDropdown className="inline-block" />
          </li>
          <div className="absolute bg-white w-[100px] px-3 py-2 rounded-lg shadow-lg hidden peer-hover:flex peer-hover:flex-col hover:flex hover:flex-col">
            <NavLink className="text-black " to="/rooms">
              <li>Our Rooms</li>
            </NavLink>
            <NavLink className="text-black" to="roomdetails">
              <li>Room Details</li>
            </NavLink>
          </div>
        </NavLink>
        <NavLink
          className="rounded-xl text-white poppins py-1 px-2 hover:bg-white/30"
          to="/facilities"
        >
          <li>Faclities</li>
        </NavLink>
        <NavLink
          className="rounded-xl text-white poppins py-1 px-2 hover:bg-white/30"
          to="/packages"
        >
          <li>Packages</li>
        </NavLink>
      </ul>
      <HiMenu className="text-white" size={30} />
    </div>
  );
};

export default Navbar;
