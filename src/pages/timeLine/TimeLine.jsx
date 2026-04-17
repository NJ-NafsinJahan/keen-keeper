import React, { useState } from "react";
import { useTimeline } from "../../components/context/TimelineContext";
import useFriends from "../../hooks/useFriends";
import callImg from "../../assets/images/call.png";
import textImg from "../../assets/images/text.png";
import videoImg from "../../assets/images/video.png";

const Timeline = () => {
  const { friends, loading } = useFriends();
  console.log(friends, "Friends");
  console.log(loading, "Loading");

  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("");

  const typeMap = {
    call: "Call",
    text: "Text",
    video: "Video",
  };
  const imageMap = {
    call: callImg,
    text: textImg,
    video: videoImg,
  };

  const filteredData = timeline.filter((item) => {
    if (!filter) return true;
    return item.type === filter;
  });

  return (
    <div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Timeline</h1>

        {/* Dropdown Search */}
        <select
          className=" px-6 py-2 mb-6  shadow text-[#64748B] text-[18px] font-normal"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filter Timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        {/* Empty page: no interaction */}
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-400 mt-40 shadow">
            <p className=" m-11 p-10">No interactions logged yet</p>{" "}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 shadow rounded-lg"
              >
                <div className=" p-3 rounded-full flex justify-center items-center">
                  <img
                    src={imageMap[item.type]}
                    alt={item.type}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div>
                  <p className="font-normal text-[18px] text-[#64748B]">
                    {" "}
                    <span className="font-semibold text-[20px] text-[#244D3F]">
                      {typeMap[item.type]}{" "}
                    </span>
                    with {item.name}
                  </p>
                  <p className="font-medium text-[16px] text-[#64748B]">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {/* <p className="text-sm text-gray-500 border-2">{item.date}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
