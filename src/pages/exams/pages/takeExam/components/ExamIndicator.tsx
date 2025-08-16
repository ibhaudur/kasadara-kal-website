import { useEffect, useState } from "react";
import ScreenType from "../../../../../component/ScreenType";
import Button from "../../../../../component/UI/Button";
import { AiOutlineClose } from "react-icons/ai";

const INITIAL_TIME = 60 * 90; // 1 duration in seconds

const formatTime = (time: number) => String(time).padStart(2, "0");

const ExamIndicator = () => {
  const [remaining, setRemaining] = useState(INITIAL_TIME);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(timer);
  }, [remaining]);

  const durations = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return (
    <div
      className="bg-white w-full flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-b-[#EBEBEB] p-3 sticky top-0"
      style={{ zIndex: 9999 }}
    >
      {/* Title */}
      <h4 className="text-xl font-semibold mb-3 md:mb-0">
        Group 4 Exam - Quick Test - 4
      </h4>

      {/* Right side controls */}
      <div className="flex justify-start md:justify-end lg:gap-3 text-sm gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[16px]">Time Remaining :</span>
          <div className="flex items-center gap-2">
            <div
              className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              {formatTime(durations)}
            </div>
            <span>:</span>
            <div
              className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              {formatTime(minutes)}
            </div>
            <span>:</span>
            <div
              className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              {formatTime(seconds)}
            </div>
          </div>
        </div>

        <ScreenType />

        <Button
          type="outline"
          splClass="text-[#FF4444] hidden md:inline-flex border border-[#EBEBEB] px-4 py-3 rounded-[16px]"
        >
          <span className="flex items-center gap-2">
            <AiOutlineClose />
            Quit Exam
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ExamIndicator;
