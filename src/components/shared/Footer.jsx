import React from "react";
import footerImg from "../../assets/images/logo-xl.png";
import instagramImg from "../../assets/images/instagram.png";
import facebookImg from "../../assets/images/facebook.png";
import twitterImg from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className=" bg-[#244D3F] ">
      {/* div for contact footer */}
      <div></div>

      <div className="h-[103.25 px] flex flex-col justify-center items-center gap-4 p-4">
        <img src={footerImg} alt="" className=" mt-5" />
        <p className="font-normal text-[16px] text-gray-300 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <div>
            <h2 className="font-normal text-[20px] text-amber-50 text-center mb-4">
              {" "}
              Social Links
            </h2>
            <div className="flex justify-center items-center gap-5">
              <img src={instagramImg} alt="" />
              <img src={facebookImg} alt="" />
              <img src={twitterImg} alt="" />
            </div>
          </div>
        </div>

        {/* div for copy right */}
        <div className="flex  justify- items-center gap-40 mt-10">
          <p className="font-mono text-[12px] text-[#FAFAFA]">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className=" flex justify-center items-center gap-4">
            <p className="font-normal text-[12px] text-[#FAFAFA]">
              Privacy Policy{" "}
            </p>
            <p className="font-normal text-[12px] text-[#FAFAFA]">
              Terms of Service{" "}
            </p>
            <p className="font-normal text-[12px] text-[#FAFAFA]">Cookies </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
