import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import SarahImg from "../../assets/images/Sarah.png";
import callImg from "../../assets/images/call.png";
import textImg from "../../assets/images/text.png";
import videoImg from "../../assets/images/video.png";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FadeLoader } from "react-spinners";

const KeenDetails = () => {
  const { id } = useParams();
  console.log(typeof id, "id");

  const { friends, loading } = useFriends();
  const expectedFriend = friends?.find((friend) => String(friend.id) === id);

  console.log(friends, "Friends");
  console.log(loading, "Loading");
  console.log(expectedFriend, "expectedFriend");

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-4 ">
        <FadeLoader color="#244D3F" speedMultiplier={1.5} /> <br />
        <h1 className="text-[#244D3F] text-[16px] font-medium">
          Page is Loading....
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-15">
      {/* <p className="text-2xl font-semibold mb-4">Friend Details</p> */}
      {/* left section with img div*/}
      <div className="grid grid-cols-2 justify-center items-center gap-2 my-2 mb-2 ">
        <div className="flex flex-col justify-center items-center gap-2">
          {/* profile div */}
          <div className="card-body flex flex-col justify-between items-center w-88 h-80 bg-white shadow">
            <figure>
              <img src={SarahImg} alt={expectedFriend?.name} />
            </figure>

            <h2 className="font-semibold text-xl text-[#1F2937]">
              {expectedFriend?.name}
            </h2>

            <p
              className={`py-4 px-3 rounded-3xl flex items-center text-white text-[14px] font-medium ${expectedFriend?.status === "overdue" ? "bg-[#EF4444]" : expectedFriend?.status === "on-track" ? "bg-[#244D3F]" : expectedFriend?.status === "almost due" ? "bg-[#EFAD44] text-black" : ""}`}
            >
              {expectedFriend?.status}
            </p>
            <div className="flex flex-col gap-2 ">
              <div className=" flex flex-wrap gap-2 items-center justify-center">
                {expectedFriend?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#CBFADB] text-[#244D3F] rounded-full py-1 px-3 text-[14px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="font-normal text-[16px] text-[#64748B]">
              " {expectedFriend?.bio} "
            </p>
            <p className="font-normal text-[14px] text-[#64748B]">
              Preferred: {expectedFriend?.email}
            </p>
          </div>
          {/* static bnt div */}
          <div className="flex flex-col items-center gap-2 w-88 h-50">
            <button className="btn btn-block text-[16px] text-[#1F2937]">
              {" "}
              <RiNotificationSnoozeLine />
              Snooze 2 weeks
            </button>

            <button className="btn btn-block text-[16px] text-[#1F2937]">
              {" "}
              <FiArchive />
              Archive
            </button>
            <button className="btn btn-block text-[16px] text-[#EF4444]">
              {" "}
              <RiDeleteBinLine />
              Delete
            </button>
          </div>
        </div>

        {/* right section div */}
        <div>
          {/* div-01-Static     className=" w-122 h-150 shadow "*/}
          <div className=" flex items-center gap-7 ">
            <div className=" shadow rounded-lg bg-[#FFFFFF] h-25 w-48 flex flex-col justify-center items-center gap-1">
              <h1 className="font-semibold text-[22px] text-[#1F2937]/85">
                {expectedFriend?.days_since_contact}
              </h1>
              <p className=" font-normal text-[14px] text-[#64748B]">
                Days Since Contact
              </p>
            </div>
            <div className="shadow rounded-lg  bg-[#FFFFFF] h-25 w-48  flex flex-col justify-center items-center gap-1">
              <h1 className="font-semibold text-[22px] text-[#1F2937]/85">
                {expectedFriend?.goal}
              </h1>
              <p className=" font-normal text-[14px] text-[#64748B]">
                Goal (Days)
              </p>
            </div>
            <div className="shadow rounded-lg  bg-[#FFFFFF] h-25 w-48 flex flex-col justify-center items-center gap-1">
              <h1 className="font-semibold text-[20px] text-[#1F2937]/85">
                {expectedFriend?.next_due_date}
              </h1>
              <p className=" font-normal text-[14px] text-[#64748B]">
                Next Due
              </p>
            </div>
          </div>

          {/* div-02-Static */}
          <div className=" bg-white shadow  rounded-lg   my-7 p-7">
            <div className="flex justify-between items-center">
              <p className="font-medium text-[18px] text-[#244D3F]">
                Relationship Goal
              </p>
              <button className="btn text-[12px]">Edit</button>
            </div>
            <p className="text-[#64748B] text-[16px]">
              Connect every{" "}
              <span className="font-bold text-[#1F2937] text-[16px]">
                30 days
              </span>
            </p>
          </div>

          {/* div-03-Dynamic */}
          <div className="  bg-white shadow rounded-lg  my-7 p-7  ">
            <p className="font-medium text-[22px] text-[#244D3F] mb-4">
              Quick Check-In
            </p>
            {/* active btn div */}

            <div className=" flex justify-center items-center gap-7">
              {/* call btn */}

              <button className=" shadow rounded-lg bg-[#E9E9E9]/30 h-22 w-44  flex flex-col justify-center items-center gap-2">
                <BiPhoneCall className="text-[35px] text-[#1F2937]" />

                <p className=" font-normal text-[18px] text-[#64748B]">Call</p>
              </button>

              {/* Text btn */}

              <button className=" shadow rounded-lg bg-[#E9E9E9]/30 h-22 w-44  flex flex-col justify-center items-center gap-2">
                <MdOutlineTextsms className="text-[35px] text-[#1F2937]" />

                <p className=" font-normal text-[18px] text-[#64748B]">Text</p>
              </button>

              {/* Video btn */}
              <button className=" shadow rounded-lg bg-[#E9E9E9]/30 h-22 w-44  flex flex-col justify-center items-center gap-2">
                <LuVideo className="text-[35px] text-[#1F2937]" />

                <p className=" font-normal text-[18px] text-[#64748B]">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeenDetails;
