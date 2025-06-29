import React from "react";
import { LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ExamDetails } from "../types/pages.types";
import Button from "./UI/Button";

type DetailsProps = { details: ExamDetails; index: number };

const ExamCards: React.FC<DetailsProps> = ({ details, index }) => {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      onClick={() => navigate(`buy/${index + 1}`)}
      className="relative bg-white rounded-2xl p-4 shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      {details.type === "free" && (
        <span className="absolute top-[13px] right-[-25px] w-[100px] text-center bg-[#FFCA60] text-[12px] font-bold px-5 py-1 shadow-sm rotate-45 overflow-hidden">
          FREE
        </span>
      )}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h5 className="text-[18px] font-semibold text-[#21272C]">
            {details.examName}
          </h5>
          <small className="text-[#8790A1] flex gap-2 my-3 mb-4 text-[12px] font-medium">
            <span className="flex items-center gap-2">
              <LuGauge /> {details.mark} marks
            </span>
            |
            <span className="flex items-center gap-2">
              <PiTimerBold /> {details.hour} hrs
            </span>
            |
            <span className="flex items-center gap-2">
              <LuFileQuestion /> {details.questionCount} Questions
            </span>
          </small>
          <div className="flex justify-between items-center mt-10">
            <small className="text-[24px]">
              ₹49{" "}
              <span className="text-[#8790A1] text-[14px] line-through">
                ₹99
              </span>{" "}
              <span className="text-[#2BBC7C] text-xs">(80% OFF)</span>{" "}
            </small>
            <Button btnName="Buy Now" splClass="rounded-[50px] px-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
