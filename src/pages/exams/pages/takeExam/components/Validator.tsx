import React from "react";
import { FaCircle } from "react-icons/fa";
import Button from "../../../../../component/UI/Button";

const Validator = () => {
  return (
    <div className="w-[330px]">
      <div className="bg-white p-3 flex items-center gap-3">
        <div className="bg-[#EFE2FF] w-12 h-12 rounded-full flex items-center justify-center">
          <p className="text-xl">J</p>
        </div>
        <div>
          <p className="font-semibold mb-0">John Smith</p>
          <small className="text-[#8790A1]">johnsmithofficial@gmail.com</small>
        </div>
      </div>
      <div className="p-4">
        <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-[12px]">
          {[
            {
              iconClass: "text-[#2BBC7C]",
              label: "Answered",
            },
            {
              iconClass: "text-[#FF4444]",
              label: "Not answered",
            },
            {
              iconClass: "text-[#BDFFD8] border border-[#2C8C53] rounded-full",
              label: "Currently attending",
            },
            {
              iconClass: "text-[#FFFFFF] border border-[#8790A1] rounded-full",
              label: "Not attempted yet",
            },
            {
              iconClass: "text-[#C94951]",
              label: "Marked",
            },
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <FaCircle className={`${item.iconClass} text-[16px]`} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <h6 className="text-[16px] font-semibold mb-3">Questions</h6>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(25)].map((_, index) => (
              <p
                key={index}
                className="bg-white border border-[#EBEBEB] w-12 h-9 rounded-2xl flex justify-center items-center text-[15px]"
              >
                {index + 1}
              </p>
            ))}
          </div>
        </div>
        <Button splClass="text-white w-full mt-5 border border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]">
          Submit Test
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Validator);
