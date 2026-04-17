import React from "react";
import { useTimeline } from "../../components/context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

const Analytics = () => {
  const { timeline } = useTimeline();

  const callCount = timeline.filter((t) => t.type === "call").length;
  const textCount = timeline.filter((t) => t.type === "text").length;
  const videoCount = timeline.filter((t) => t.type === "video").length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#7E35E1", "#1F2937", "#22C55E"];

  return (
    <div className="container mx-auto mt-10 shadow mb-12 rounded-2xl">
      <div className=" p-4">
        <h1 className="text-2xl font-bold mb-6">Friendship Analytics hi :</h1>

        <p className="mb-4 text-gray-600">By Interaction Type</p>
      </div>

      <div className="flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* simple legend */}
      <div className="flex justify-center gap-6 mt-4 text-sm py-5">
        <span className="text-[#7E35E1]">● Text</span>
        <span className="text-[#244D3F] font-normal text-[14px]">● Call</span>
        <span className="text-[#37A163]">● Video</span>
      </div>
    </div>
  );
};

export default Analytics;
