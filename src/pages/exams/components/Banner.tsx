import React, { useState, useEffect } from "react";
import Avt from "../../../../public/images/banner-image.png";
import SearchBox from "../../../component/SearchBox";
import { LuBookCheck } from "react-icons/lu";
import { BannerTileList } from "../utils/index.utils";
import useApiCall from "../../../hooks/useApiCall";
import { getAllExams } from "../../../service/apiUrls";
import { useNavigate } from "react-router-dom";
import { ExamDetails } from "../../../types/pages.types";

const Banner: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchExam, setSearchExam] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(""); // 👈 Debounced input value

  const navigate = useNavigate();

  // ✅ Debounce logic — wait 500ms after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchExam);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchExam]);

  // ✅ API call only when debounced value changes
  const { data } = useApiCall({
    key: `${getAllExams}?search=${debouncedSearch}`,
    url: `${getAllExams}?search=${debouncedSearch}`,
    method: "get",
  });

  return (
    <div className="relative">
      {/* ✅ Main banner background */}
      <div className="grid grid-cols-1 bg-[#CCFFD9] text-[#21272C] pt-10 pb-40 md:pb-20 px-4 md:px-24">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* ✅ Left section */}
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
            <h4 className="text-[22px] md:text-[40px] font-bold leading-tight">
              We’re try to help to improve <br />
              your preparing for group
              <br className="md:hidden" /> exams
            </h4>

            <p className="mt-3 text-[14px] md:text-[15px] mb-4">
              Unlock your exams by buying them to maximize{" "}
              <br className="md:hidden" />
              your preparation
            </p>

            {/* ✅ Wrapper must be relative for dropdown alignment */}
            <div className="relative w-full md:w-[400px] mx-auto md:mx-0">
              <SearchBox
                setSearchExam={setSearchExam}
                placeholder="Search exams, mock test & etc..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)}
              />

              {/* ✅ Dropdown directly below input */}
              {debouncedSearch && isFocused && (
                <ul
                  className="absolute left-0 top-full bg-white shadow-lg rounded-lg border border-gray-200 
                  max-h-60 overflow-auto z-[9999] w-full mt-1"
                >
                  {data?.data && data?.data?.length > 0 ? (
                    data?.data.map((exam: ExamDetails) => (
                      <li
                        key={exam.exam_id}
                        onMouseDown={() => {
                          navigate(`/exams/buy/${exam.exam_id}`);
                          setSearchExam(exam.exam_name);
                          setIsFocused(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
                      >
                        <span className="font-medium text-gray-800">
                          {exam.exam_name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500">
                          ({exam.exam_type})
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500 text-sm">
                      No exams found
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* ✅ Right side image */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <img
              src={Avt}
              alt="Exam Illustration"
              className="w-full max-w-[300px] md:max-w-[350px]"
            />
          </div>
        </div>
      </div>

      {/* ✅ Bottom Banner */}
      <div className="relative z-[5] px-4 md:px-0 -mt-[120px] md:mt-0">
        <div
          className="bg-white p-4 md:p-5 flex flex-col md:flex-row rounded-3xl 
          md:absolute md:left-1/2 md:bottom-[-50px] md:transform md:-translate-x-1/2 
          w-full md:w-auto shadow-md"
        >
          {BannerTileList.map((item, index) => (
            <div
              key={index}
              className={`flex items-center i gap-3 md:gap-2 px-6 py-3 md:py-0 md:px-2 md:w-[260px] ${
                index !== BannerTileList.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#EBEBEB]"
                  : ""
              }`}
            >
              <div className="p-3 bg-[#D0FFEA] rounded-xl">
                <LuBookCheck className="text-[20px]" />
              </div>
              <div>
                <p className="text-[15px] text-gray-700 md:text-black md:font-semibold">
                  {item.name}
                </p>
                <small className="text-[10px] leading-3 block text-gray-500 md:text-black">
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
