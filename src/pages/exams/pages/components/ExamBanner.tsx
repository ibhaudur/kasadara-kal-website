import React, { useState } from "react";
import { LuCalendarDays, LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import Button from "../../../../component/UI/Button";
import { ExamDetails } from "../../../../types/pages.types";
import { HiChevronRight, HiOutlineUserGroup } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { GoShareAndroid } from "react-icons/go";
import {
  formatDateAndTime,
  formatMinutesToHours,
} from "../../../../utils/index.utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SharePopup from "../../../../component/SharePopup";
import {
  IoCaretForwardCircleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

type DetailsProps = {
  details: ExamDetails;
  setIsOpen: (initiate: boolean) => void;
};

const ExamBanner: React.FC<DetailsProps> = ({ details, setIsOpen }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const url = window.location.href;
  const handleNavigate = () => {
    if (details?.paid_status === "completed")
      if (details?.exam_allow) {
        navigate(`/exams/attend/${details?.exam_id}`, {
          state: {
            exam_name: details?.exam_name,
            duration: details?.duration,
            total_marks: details?.total_marks,
            total_questions: details?.total_questions,
          },
        });
      } else
        toast.error(
          details?.message || "You are not allowed to attend this exam"
        );
    else setIsOpen(true);
  };

  return (
    <div className="relative bg-white rounded-2xl p-5 shadow-md overflow-hidden">
      {details?.exam_type === "free" && (
        <span className="absolute top-[13px] right-[-25px] w-[100px] text-center bg-[#FFCA60] text-[12px] font-bold px-5 py-1 shadow-sm rotate-45 overflow-hidden">
          FREE
        </span>
      )}
      {open && <SharePopup url={url} onClose={() => setOpen(false)} />}
      <small className="text-[10px] sm:text-[12px] text-[#8790A1] flex items-center gap-2 mb-3">
        Exams <HiChevronRight /> {details?.exam_category} <HiChevronRight />{" "}
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
                {details?.published_on && (
                  <>
                    {" "}
                    |
                    <span className="flex items-center gap-2">
                      <LuCalendarDays className="text-[18px]" /> Published on{" "}
                      <b>{formatDateAndTime(details?.published_on)}</b>
                    </span>
                  </>
                )}
              </small>
              <div className="flex gap-3 text-[11px] sm:text-[13px] flex-wrap">
                {/* <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                  <LuCalendarDays className="text-[#2BBC7C] text-[15px]" />{" "}
                  Published on <b>{formatDate(details?.published_on)}</b> at
                  <b> {formatTime(details?.published_on)}</b>
                </span> */}
                <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                  <HiOutlineUserGroup className="text-[#2BBC7C] text-[15px]" />{" "}
                  <b>{details?.attended_candidates}</b>
                  attended candidates{" "}
                </span>{" "}
                {details?.exam_category && (
                  <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                    <CgNotes className="text-[#2BBC7C] text-[15px]" />{" "}
                    {details?.exam_category}{" "}
                  </span>
                )}
                {details?.attempt_info && (
                  <span className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-2xl w-fit">
                    <IoCaretForwardCircleOutline className="text-[#2BBC7C] text-[15px]" />{" "}
                    Available Attempts{" "}
                    {details?.attempt_info?.attempts_remaining}/
                    {details?.attempt_info?.max_allowed_attempts}
                  </span>
                )}
              </div>

              {details?.valid_until && (
                <div className="block sm:hidden mt-6">
                  <p className="mb-4 text-[20px]">Validity</p>
                  <small className="bg-[#FFF5D3] py-1 px-4 mb-2 block rounded-2xl">
                    Valid until <b>{formatDateAndTime(details?.valid_until)}</b>
                  </small>
                  {details?.paid_status === "completed" &&
                    (details?.attempt_info?.status_label ===
                    "No more attempts allowed" ? (
                      <div className="bg-[#e4390f] flex items-center gap-1 text-white py-1 px-4 rounded-2xl">
                        <IoInformationCircleOutline className="text-md" />{" "}
                        <small>{details?.attempt_info?.status_label}</small>
                      </div>
                    ) : (
                      <small className="bg-[#2BBC7C] ms-2 text-white py-1 px-4 rounded-2xl">
                        {details?.attempt_info?.status_label}
                      </small>
                    ))}
                </div>
              )}
            </div>

            {/* Price section */}
            {details?.exam_type !== "free" && (
              <small className="text-[36px] font-medium mt-4 sm:mt-0">
                ₹{Math.round(Number(details?.price))}{" "}
                <span className="text-[#8790A1] text-[20px] line-through">
                  ₹{Math.round(Number(details?.cost))}
                </span>{" "}
                <span className="text-[#2BBC7C] text-[16px]">
                  (₹{Math.round(Number(details?.discount_cost))} OFF)
                </span>{" "}
              </small>
            )}
          </div>

          <div className="flex justify-between items-center mt-10 flex-col sm:flex-row gap-4 sm:gap-0">
            {/* Validity section - shows here on desktop */}
            <div className="hidden sm:block w-full sm:w-auto mb-6 sm:mb-0">
              <p className="mb-4 text-[20px]">Validity</p>
              <div className="flex flex-wrap gap-2">
                {details?.valid_until && (
                  <small className="bg-[#FFF5D3] py-1 px-4 rounded-2xl me-1">
                    Valid until <b>{formatDateAndTime(details?.valid_until)}</b>
                  </small>
                )}
                {details?.paid_status === "completed" &&
                  (details?.attempt_info?.status_label ===
                  "No more attempts allowed" ? (
                    <div className="bg-[#e4390f] flex items-center gap-1 text-white py-1 px-4 rounded-2xl">
                      <IoInformationCircleOutline className="text-md" />{" "}
                      <small>{details?.attempt_info?.status_label}</small>
                    </div>
                  ) : (
                    <small className="bg-[#2BBC7C] ms-2 text-white py-1 px-4 rounded-2xl">
                      {details?.attempt_info?.status_label}
                    </small>
                  ))}
              </div>
            </div>

            <div className="flex gap-3 items-center w-full sm:w-auto">
              <small
                onClick={() => setOpen(true)}
                className="m-0 w-[40px] h-[40px] cursor-pointer flex justify-center items-center p-2 border bg-white border-[#EBEBEB] rounded-3xl"
              >
                <GoShareAndroid className=" text-[18px]" />
              </small>
              <Button
                handler={handleNavigate}
                btnName={
                  details?.paid_status === "completed"
                    ? "Attend Now"
                    : "Buy now"
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
