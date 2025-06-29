import React from "react";
import { StandsOutList } from "../utils/index.utils";
import Overview from "./Overview";
const StandOut: React.FC = () => {
  return (
    <div className="relative bg-white rounded-2xl p-5 shadow-md overflow-hidden mt-5">
      <h5 className="text-2xl font-semibold mb-3">What Makes Us Stand Out</h5>
      <p className="text-[#8790A1] font-normal text-[14px]">
        Our platform offers real-time mock tests and performance tracking{" "}
        <br></br> to help you prepare smarter and succeed faster
      </p>
      <div className="grid grid-cols-5 mt-5 gap-5">
        {StandsOutList.map((item, index) => (
          <div
            key={index}
            className="p-3 flex gap-3 col-span-1 items-center bg-[#DFFFF1] rounded-2xl"
          >
            <img src={item.image} alt="i" />
            <small className="text-[#21272C]">{item.content}</small>
          </div>
        ))}
      </div>
      <Overview />
    </div>
  );
};

export default StandOut;
