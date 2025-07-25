import React from "react";
import Avt from "../../../../public/images/banner-image.png";
import SearchBox from "../../../component/SearchBox";
import { LuBookCheck } from "react-icons/lu";
import { BannerTileList } from "../utils/index.utils";

const Banner: React.FC = () => {
  return (
    <div className="relative z-[999] ">
      
      <div className=" grid grid-cols-1 bg-[#CCFFD9] text-[#21272C] pt-10 pb-40 md:pb-20 px-4 md:px-24 relative z-10">
        <div className="grid grid-cols-12 items-center gap-4">
          
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
            <h4 className="text-[22px] md:text-[40px] font-bold leading-tight">
                We’re try to help to improve <br />
                your preparing for group 
                <br className="md:hidden" /> exams
              </h4>
            <p className="mt-3 text-[14px] md:text-[15px] mb-4">
              Unlock your exams by buying them to maximize  <br className="md:hidden" />your preparation
            </p>
     <div className="w-full md:w-auto max-w-full md:max-w-md mx-auto md:mx-0 px-4 md:px-0">
  <SearchBox placeholder="Search exams, mock test & etc..." />
</div>
          </div>  

          <div className="col-span-12 md:col-span-6 flex justify-center">
            <img
              src={Avt}
              alt="Exam Illustration"
              className="w-full max-w-[300px] md:max-w-[350px]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 px-4 md:px-0 -mt-[120px] md:mt-0">
        <div
          className="bg-white p-4 md:p-5 flex flex-col md:flex-row rounded-3xl 
          md:absolute md:left-1/2 md:bottom-[-50px] md:transform md:-translate-x-1/2 
          w-full md:w-auto shadow-md"
        >
          {BannerTileList.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 md:gap-2 px-6 py-3 md:py-0 md:px-2 md:w-[260px] ${
                index !== BannerTileList.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#EBEBEB]"
                  : ""
              }`}
            >
              <div className="p-3 bg-[#D0FFEA] rounded-xl">
                <LuBookCheck className="text-[20px]" />
              </div>
              <div>
                <p className="text-[15px]  text-gray-700 md:text-black md:font-semibold">
                  {item.name}
                </p>
                <small className="text-[10px] leading-3 block text-gray-500 md:text-black ">
                  {item.content}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
