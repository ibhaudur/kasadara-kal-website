import { useEffect, useState } from "react";
import ScreenType from "../../../../../component/ScreenType";
import Button from "../../../../../component/UI/Button";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../../../../../component/Modal/Modal";
import logo2 from "../../../../../../public/images/logo2.png";

const formatTime = (time: number) => String(time).padStart(2, "0");

interface ExamIndicatorProps {
  handleSubmitExam: () => void;
  examName: string;
  startTime: string; // YYYY-MM-DD HH:mm:ss
  duration: number; // minutes
}

const ExamIndicator: React.FC<ExamIndicatorProps> = ({
  handleSubmitExam,
  examName,
  startTime,
  duration,
}) => {
  const [remaining, setRemaining] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!startTime || !duration) return;

    const start = new Date(startTime).getTime();
    const end = start + duration * 60 * 1000;

    const tick = () => {
      const now = Date.now();
      const diff = Math.floor((end - now) / 1000);

      if (diff <= 0) {
        setRemaining(0);
        handleSubmitExam();
      } else {
        setRemaining(diff);
      }
    };

    tick(); // initial calculation
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [startTime, duration, handleSubmitExam]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const handleQuitClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmQuit = () => {
    setIsModalOpen(false);
    handleSubmitExam();
  };

  return (
    <>
      <div
        className="bg-white w-full flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-b-[#EBEBEB] p-3 sticky top-0"
        style={{ zIndex: 9999 }}
      >
        <h4 className="text-xl flex items-center gap-3 font-semibold mb-3 md:mb-0">
          <img src={logo2} width={24} alt="icon" />
          {examName}
        </h4>

        <div className="flex justify-start md:justify-end lg:gap-3 text-sm gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[16px]">Time Remaining :</span>
            <div className="flex items-center gap-2">
              <div className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center w-[40px] h-[40px]">
                {formatTime(hours)}
              </div>
              <span>:</span>
              <div className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center w-[40px] h-[40px]">
                {formatTime(minutes)}
              </div>
              <span>:</span>
              <div className="bg-[#D1FFE4] rounded-[16px] font-semibold flex items-center justify-center w-[40px] h-[40px]">
                {formatTime(seconds)}
              </div>
            </div>
          </div>

          <ScreenType />

          <Button
            type="outline"
            splClass="text-[#FF4444] hidden md:inline-flex border border-[#EBEBEB] px-4 py-3 rounded-[16px]"
            onClick={handleQuitClick}
          >
            <span className="flex items-center gap-2">
              <AiOutlineClose />
              Quit Exam
            </span>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Confirm Quit"
      >
        <div className="text-center w-96">
          <p className="text-gray-600 mb-6">
            Are you sure you want to quit the exam? Your exam will be completed
            with all the answers you have provided so far.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleModalClose}
              className="px-4 py-2 rounded-xl border cursor-pointer border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmQuit}
              className="px-4 py-2 rounded-xl cursor-pointer bg-[#FF4444] text-white hover:bg-[#e63b3b]"
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExamIndicator;
