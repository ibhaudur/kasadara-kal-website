import React from "react";
import Avt from "../../../../public/images/banner-image.png";
import SearchBox from "../../../component/SearchBox";
import { LuBookCheck } from "react-icons/lu";
import { BannerTileList } from "../utils/index.utils";

const Banner: React.FC = () => {
  return (
    <div className="relative" style={{ zIndex: "999" }}>
      <div className="bg-[#CCFFD9] text-[#21272C] py-20">
        <div className="mx-24 grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <h4 className="text-[32px] md:text-[40px] font-bold leading-tight">
              We’re trying to help improve <br /> your preparation for <br />{" "}
              group exams
            </h4>
            <p className="mt-5 text-[15px] mb-4">
              Unlock your exams by buying them to maximize your preparation
            </p>
            <SearchBox placeholder="Search exams, mock test  & etc..." />
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <img
              src={Avt}
              alt="Exam Illustration"
              className="w-full max-w-[350px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-[-50px] transform -translate-x-1/2">
        <div className="bg-white p-6 flex rounded-3xl">
          {BannerTileList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 w-[260px] px-2 border-r border-r-[#EBEBEB] last:border-none"
            >
              <div className="p-4 bg-[#D0FFEA] rounded-2xl">
                <LuBookCheck className="text-[20px]" />
              </div>
              <div>
                <p className="text-[16px] font-semibold">{item.name}</p>
                <small className="text-[10px] leading-3 block line-clamp-2">
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
