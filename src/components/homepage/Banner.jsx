import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" flex items-center justify-center container mx-auto px-4">
      <div className="w-full max-w-6xl  ">
        {/* Title Section  */}
        <div className="flex flex-col items-center gap-4 mt-12 text-center">
          <h1 className="font-bold text-5xl sm:text-5xl  md:text-5xl text-[#1F2937]">
            Friends to keep close in your life
          </h1>
          <p className=" font-normal text-[14px] sm:text-[16px] text-[#64748B] text-center max-w-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br />
            relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] font-medium text-[17px]  text-amber-50">
            <FaPlus />
            Add a Friend
          </button>
        </div>

        {/* box Section  */}

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 my-7 pb-5 border-b border-gray-200 justify-items-center ">
          <div className=" shadow rounded-lg bg-[#FFFFFF] h-30 w-50 flex flex-col justify-center items-center gap-1">
            <h1 className="font-semibold text-[22px] text-[#1F2937]/85">12</h1>
            <p className=" font-normal text-[16px] text-[#64748B]">
              Total Friends
            </p>
          </div>
          <div className="shadow rounded-lg  bg-[#FFFFFF] h-30 w-50 flex flex-col justify-center items-center gap-1">
            <h1 className="font-semibold text-[22px] text-[#1F2937]/85">3</h1>
            <p className=" font-normal text-[16px] text-[#64748B]">On Track</p>
          </div>
          <div className="shadow rounded-lg  bg-[#FFFFFF] h-30 w-50 flex flex-col justify-center items-center gap-1">
            <h1 className="font-semibold text-[22px] text-[#1F2937]/85">6</h1>
            <p className=" font-normal text-[16px] text-[#64748B]">
              Need Attention
            </p>
          </div>
          <div className="shadow rounded-lg  bg-[#FFFFFF] h-30 w-50 flex flex-col justify-center items-center gap-1">
            <h1 className="font-semibold text-[22px] text-[#1F2937]/85">12</h1>
            <p className=" font-normal text-[16px] text-[#64748B]">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
