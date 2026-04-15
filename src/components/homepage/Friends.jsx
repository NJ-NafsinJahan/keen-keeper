import React, { useEffect, useState } from "react";
import SarahImg from "../../assets/images/Sarah.png";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data, "Data");
      setFriends(data);
    };
    fetchData();
  }, []);
  console.log(friends, "Friends");

  return (
    <div className="container mx-auto px-16 ">
      <h1 className="font-semibold text-2xl text-[#1F2937]">Your Friends</h1>
      {/* card section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-7 mb-8">
        {friends.map((friend, ind) => {
          return (
            <div>
              <div
                key={ind}
                className="card bg-base-100 w-full max-w-sm shadow-sm mx-auto pt-6"
              >
                <figure>
                  <img src={SarahImg} alt={friend.name} />
                </figure>
                <div className="card-body flex flex-col justify-between items-center">
                  <h2 className="font-semibold text-xl text-[#1F2937]">
                    {friend.name}
                  </h2>
                  <p className="font-normal text-[12px] text-[#64748B]">
                    {friend.days_since_contact}d Ago
                  </p>
                  <div className="flex flex-col gap-2 ">
                    <div className=" flex flex-wrap gap-2 items-center justify-center">
                      {friend.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#CBFADB] text-[#244D3F] rounded-full py-1 px-3 text-[14px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium text-center  ${friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "on-track" ? "bg-[#244D3F]" : friend.status === "almost due" ? "bg-[#EFAD44] text-black" : ""}`}
                    >
                      {friend.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
