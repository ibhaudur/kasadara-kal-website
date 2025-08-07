import React from "react";
import { StandsOutList } from "../utils/index.utils";
import Overview from "./Overview";
import Exampattern from "./Exampatter";
import FandQ from "./FandQ";
import TermsAndCond from "./TermsAndCondn";

const StandOut: React.FC = () => {
  return (
    <div className="relative bg-white rounded-2xl p-5 px-6 shadow-md overflow-hidden mt-5">
      <h5 className="text-[16px] sm:text-2xl font-semibold mb-3">What Makes Us Stand Out</h5>
      <p className="text-[#8790A1] font-normal text-[14px]">
        Our platform offers real-time mock tests and performance tracking{" "}
        <br className="hidden sm:block"></br> to help you prepare smarter and succeed faster
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-5 mt-5 gap-5">
        {StandsOutList.map((item, index) => (
          <div
            key={index}
            className="p-3 flex gap-3 col-span-1 sm:col-span-4 md:col-span-2 lg:col-span-1 items-center bg-[#DFFFF1] rounded-2xl"
          >
            <img src={item.image} alt="i" />
            <small className="text-[#21272C]">{item.content}</small>
          </div>
        ))}
      </div>
      <Overview />
      <Exampattern />
      <FandQ />
      <TermsAndCond />
    </div>
  );
};

export default StandOut;