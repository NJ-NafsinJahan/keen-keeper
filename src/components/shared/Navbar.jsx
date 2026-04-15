import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router";
import { RiHome3Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className=" shadow ">
      <div className=" flex justify-between items-center gap-3 bg-white  p-5 container mx-auto">
        <div>
          <img src={logoImg} alt="" />
        </div>

        <div className="">
          <ul className=" flex justify-end items-center gap-3">
            <li>
              {" "}
              <Link to={"/"}>
                {" "}
                <RiHome3Line />
                Home
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link to={"/timeline"}>
                {" "}
                <IoTimeOutline />
                Timeline
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link to={"/statAnalytics"}>
                {" "}
                <GoGraph />
                Stats
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
