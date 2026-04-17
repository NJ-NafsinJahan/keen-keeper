import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { RiHome3Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className=" shadow">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-3 bg-white  p-5 container mx-auto">
        <div>
          <img src={logoImg} alt="" />
        </div>

        <div className="">
          <ul className=" flex justify-end items-center gap-3">
            <li className="flex justify-between items-center gap-3">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium text-[17px] px-3 py-2 rounded ${isActive ? "bg-[#244D3F] text-amber-50" : " text-[#64748B]"}`
                }
              >
                <RiHome3Line />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium text-[17px] px-3 py-2 rounded ${isActive ? "bg-[#244D3F] text-amber-50" : " text-[#64748B]"}`
                }
              >
                {" "}
                <IoTimeOutline />
                Timeline
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/statAnalytics"}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium text-[17px] px-3 py-2 rounded ${isActive ? "bg-[#244D3F] text-amber-50" : " text-[#64748B]"}`
                }
              >
                <GoGraph />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
