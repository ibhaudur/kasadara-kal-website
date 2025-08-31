import React from "react";
import { LuCalendarDays, LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import Button from "../../../../component/UI/Button";
import { ExamDetails } from "../../../../types/pages.types";
import { HiChevronRight, HiOutlineUserGroup } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { GoShareAndroid } from "react-icons/go";
import {
  formatDate,
  formatMinutesToHours,
  formatTime,
} from "../../../../utils/index.utils";
import { useNavigate } from "react-router-dom";

type DetailsProps = {
  details: ExamDetails;
  setIsOpen: (initiate: boolean) => void;
};

const ExamBanner: React.FC<DetailsProps> = ({ details, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white rounded-2xl p-5 shadow-md overflow-hidden">
      {details?.exam_type === "free" && (
        <span className="absolute top-[13px] right-[-25px] w-[100px] text-center bg-[#FFCA60] text-[12px] font-bold px-5 py-1 shadow-sm rotate-45 overflow-hidden">
          FREE
        </span>
      )}
      <small className="text-[10px] sm:text-[12px] text-[#8790A1] flex items-center gap-2 mb-3">
        Exams <HiChevronRight /> Quick tests <HiChevronRight />{" "}
        <span className="text-[#2BBC7C]">{details?.exam_name}</span>
      </small>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex-1">
              <h5 className="text-[24px] font-semibold text-[#21272C]">
                {details?.exam_name}
              </h5>
              <small className="text-[#8790A1] flex gap-2 my-3 mb-4 text-[12px] font-medium flex-wrap">
                <span className="flex items-center gap-2">
                  <LuGauge className="text-[18px]" /> Total marks:{" "}
                  <span className="text-[#2BBC7C]">{details?.total_marks}</span>
                </span>
                |
                <span className="flex items-center gap-2">
                  <PiTimerBold className="text-[18px]" /> Duration :{" "}
                  <span className="text-[#2BBC7C]">
                    {formatMinutesToHours(Number(details?.duration))}
                  </span>
                </span>
                |
                <span className="flex items-center gap-2">
                  <LuFileQuestion className="text-[18px]" /> Questions:{" "}
                  <span className="text-[#2BBC7C]">
                    {details?.total_questions} Ques.
                  </span>
                </span>
              </small>
              <div className="flex gap-3 text-[11px] sm:text-[13px] flex-wrap">
                <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                  <LuCalendarDays className="text-[#2BBC7C] text-[15px]" />{" "}
                  Published on <b>{formatDate(details?.published_on)}</b> at
                  <b> {formatTime(details?.published_on)}</b>
                </span>
                <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                  <HiOutlineUserGroup className="text-[#2BBC7C] text-[15px]" />{" "}
                  <b>230</b>
                  attended candidates{" "}
                </span>{" "}
                <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                  <CgNotes className="text-[#2BBC7C] text-[15px]" /> Quick test{" "}
                </span>
              </div>

              {/* Validity section - shows above price on mobile */}
              <div className="block sm:hidden mt-6">
                <p className="mb-4 text-[20px]">Validity</p>
                <small className="bg-[#FFF5D3] py-1 px-4 rounded-2xl">
                  Valid until <b>26 Dec, 2025</b>
                </small>
              </div>
            </div>

            {/* Price section */}
            <small className="text-[36px] font-medium mt-4 sm:mt-0">
              ₹{details?.price}{" "}
              <span className="text-[#8790A1] text-[20px] line-through">
                ₹{details?.cost}
              </span>{" "}
              <span className="text-[#2BBC7C] text-[16px]">
                ({details?.discount_cost}% OFF)
              </span>{" "}
            </small>
          </div>

          <div className="flex justify-between items-center mt-10 flex-col sm:flex-row gap-4 sm:gap-0">
            {/* Validity section - shows here on desktop */}
            <div className="hidden sm:block w-full sm:w-auto mb-6 sm:mb-0">
              <p className="mb-4 text-[20px]">Validity</p>
              <small className="bg-[#FFF5D3] py-1 px-4 rounded-2xl">
                Valid until <b>{formatDate(details?.valid_until)}</b>
              </small>
            </div>

            <div className="flex gap-3 items-center w-full sm:w-auto">
              <small className="m-0 w-[40px] h-[40px] cursor-pointer flex justify-center items-center p-2 border bg-white border-[#EBEBEB] rounded-3xl">
                <GoShareAndroid className=" text-[18px]" />
              </small>
              <Button
                handler={() => {
                  details?.paid_status === "paid"
                    ? navigate(`/exams/attend/${details?.exam_id}`, {
                        state: {
                          exam_name: details?.exam_name,
                          duration: details?.duration,
                          total_marks: details?.total_marks,
                          total_questions: details?.total_questions,
                        },
                      })
                    : setIsOpen(true);
                }}
                btnName={
                  details?.paid_status === "paid" ? "Attend Now" : "Buy now"
                }
                splClass="rounded-[50px] px-20 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamBanner;
