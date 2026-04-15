import React from "react";
import { Link, NavLink } from "react-router";
import { RiHome3Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 font-medium text-[17px] px-3 py-2 rounded ${isActive ? "bg-[#244D3F] text-amber-50" : " text-[#64748B]"}`
      }
    >
      {" "}
      <IoTimeOutline />
      {children}
    </NavLink>
  );
};

export default MyNavLink;
