import React from "react";
import footerImg from "../../assets/images/logo-xl.png";
import instagramImg from "../../assets/images/instagram.png";
import facebookImg from "../../assets/images/facebook.png";
import twitterImg from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className=" bg-[#244D3F] ">
      {/* div for contact footer */}

      <div className="flex flex-col justify-center items-center gap-4 p-6 container mx-auto text-center ">
        <img src={footerImg} alt="" className=" mt-5" />
        <p className="font-normal text-[16px] text-gray-300 mb-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <div>
            <h2 className="font-normal text-[18px] text-amber-50 text-center mb-4">
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
        <div className="flex  justify- items-center flex-col md:flex-row justify-center gap-4 md:gap-40 mt-6 w-full">
          <p className="font-mono text-[12px] text-[#FAFAFA]/60 text-center">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className=" flex justify-center items-center gap-4">
            <p className="font-normal text-[12px] text-[#FAFAFA]/60">
              Privacy Policy{" "}
            </p>
            <p className="font-normal text-[12px] text-[#FAFAFA]/60">
              Terms of Service{" "}
            </p>
            <p className="font-normal text-[12px] text-[#FAFAFA]/60">
              Cookies{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
