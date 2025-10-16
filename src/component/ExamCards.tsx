import React from "react";
import { LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ExamDetails } from "../types/pages.types";
import Button from "./UI/Button";
import { formatMinutesToHours } from "../utils/index.utils";

type DetailsProps = { details: ExamDetails; index: number };

const ExamCards: React.FC<DetailsProps> = ({ details, index }) => {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      onClick={() =>
        navigate(
          details?.answered
            ? `/exams/result/${details.exam_id}`
            : `buy/${details.exam_id}`
        )
      }
      className="    relative bg-white rounded-2xl p-4 shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      {details.exam_type === "free" && (
        <span className="absolute top-[13px] right-[-25px] w-[100px] text-center bg-[#FFCA60] text-[12px] font-bold px-5 py-1 shadow-sm rotate-45 overflow-hidden">
          FREE
        </span>
      )}
      <div className=" flex flex-col h-full justify-between  sm:text-[14px]">
        <div>
          <h5 className="text-[18px] font-semibold text-[#21272C]">
            {details.exam_name}
          </h5>
          <small className=" text-[#8790A1] flex gap-2 my-3 mb-4 text-[11px]   font-medium">
            <span className=" flex items-center gap-2">
              <LuGauge /> {details.total_marks} marks
            </span>
            |
            <span className="flex items-center gap-2">
              <PiTimerBold /> {formatMinutesToHours(Number(details.duration))}
            </span>
            |
            <span className="flex items-center gap-2">
              <LuFileQuestion /> {details.total_questions} Questions
            </span>
          </small>
          <div className="flex justify-between items-center mt-10">
            {details?.user_rank ? (
              <small className="text-[24px]">
                {details?.user_rank}/{details?.total_unique_attendees}{" "}
                <span className="text-[#8790A1] text-[14px]">Rank</span>{" "}
              </small>
            ) : (
              details?.exam_type !== "free" && (
                <small className="text-[24px]">
                  ₹{Number(details.price).toFixed(0)}{" "}
                  <span className="text-[#8790A1] text-[14px] line-through">
                    ₹{Number(details.cost).toFixed(0)}
                  </span>{" "}
                  <span className="text-[#2BBC7C] text-xs">
                    (₹{Number(details?.discount_cost).toFixed(0)} OFF)
                  </span>
                </small>
              )
            )}
            <Button
              btnName={
                details?.answered
                  ? "Review"
                  : details?.exam_type === "free" ||
                    details?.exam_type === "paid"
                  ? "Attend"
                  : "Buy Now"
              }
              splClass={`rounded-[50px] px-9 ${
                details?.exam_type === "free" && "w-full"
              }`}
              onClick={() =>
                navigate(
                  details?.answered
                    ? `/exams/result/${details.exam_id}`
                    : `buy/${details.exam_id}`
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
