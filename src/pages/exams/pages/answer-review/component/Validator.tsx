import React from "react";
import { FaChevronLeft, FaCircle } from "react-icons/fa";
import Button from "../../../../../component/UI/Button";
import Modal from "../../../../../component/Modal/Modal";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

interface ValidatorProps {
  answers: (string | null)[];
  markedQuestions: number[];
  currentQuestion: number;
  visitedQuestions: number[];
  handleSetCurrentQuestion: (index: number) => void;
  handleSubmitExam: () => void;
}

const Validator: React.FC<ValidatorProps> = ({
  answers,
  markedQuestions,
  currentQuestion,
  visitedQuestions,
  handleSetCurrentQuestion,
  handleSubmitExam,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // NEW for mobile toggle
  const userDetails = useSelector((state: any) => state.user.userDetails);

  const handleModalClose = () => setIsModalOpen(false);

  const getBgColor = (index: number) => {
    if (currentQuestion === index) return "bg-[#BDFFD8] border-[#2C8C53]";
    if (markedQuestions.includes(index))
      return "bg-[#C94951] text-white cursor-pointer";
    if (answers[index] !== null)
      return "bg-[#2BBC7C] text-white cursor-pointer";
    if (visitedQuestions.includes(index))
      return "bg-[#FF4444] text-white cursor-pointer";
    return "bg-white border-[#EBEBEB] cursor-not-allowed";
  };

  const answeredCount = answers.filter((ans) => ans !== null).length;
  const notAnsweredCount = visitedQuestions.filter(
    (qIndex) => answers[qIndex] === null
  ).length;
  const notAttemptedCount = answers.length - visitedQuestions.length;

  return (
    <>
      {/* Mobile arrow button */}
      <button
        className="fixed top-[70%] right-0 cursor-pointer z-10 bg-white shadow-2xs border border-[#E5E5E5] p-2 rounded-l-[20px] text-[#2BBC7C] md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-26 right-0 h-full w-[330px] bg-white shadow-lg transform 
          transition-transform duration-300 z-40 
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
          md:static md:translate-x-0 md:block`}
      >
        {/* Close button for mobile */}
        {isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute cursor-pointer left-[-33px] top-[60%] md:hidden text-[#FF4444] bg-white shadow-2xs border border-[#E5E5E5] p-2 rounded-l-[20px]"
          >
            <IoMdClose />
          </button>
        )}

        {/* Existing Sidebar UI */}
        <div className="bg-white p-3 flex items-center gap-3">
          <div className="bg-[#EFE2FF] w-12 h-12 rounded-full flex items-center justify-center">
            <p className="text-xl">J</p>
          </div>
          <div>
            <p className="font-semibold mb-0">{userDetails?.name}</p>
            <small className="text-[#8790A1]">{userDetails?.email}</small>
          </div>
        </div>

        <div className="p-4 bg-[#F9F9F9] h-full overflow-y-auto">
          {/* Legend */}
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-[12px]">
            {[
              { iconClass: "text-[#2BBC7C]", label: "Answered" },
              { iconClass: "text-[#FF4444]", label: "Not answered" },
              {
                iconClass:
                  "text-[#BDFFD8] border border-[#2C8C53] rounded-full",
                label: "Currently attending",
              },
              {
                iconClass:
                  "text-[#FFFFFF] border border-[#8790A1] rounded-full",
                label: "Not attempted yet",
              },
              { iconClass: "text-[#C94951]", label: "Marked" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaCircle className={`${item.iconClass} text-[16px]`} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Question Numbers */}
          <div className="mt-5">
            <h6 className="text-[16px] font-semibold mb-3">Questions</h6>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(answers.length)].map((_, index) => (
                <p
                  key={index}
                  onClick={() =>
                    visitedQuestions.includes(index)
                      ? handleSetCurrentQuestion(index)
                      : undefined
                  }
                  className={`w-12 h-9 rounded-2xl flex justify-center items-center text-[15px] border ${getBgColor(
                    index
                  )}`}
                >
                  {index + 1}
                </p>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            handler={() => setIsModalOpen(true)}
            splClass="text-white hidden md:block w-full mt-5 border border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]"
          >
            Submit Test
          </Button>

          {/* Modal */}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Submitting your test"
      >
        <div className="w-lg">
          <ul className="rounded-lg p-0">
            <li className="flex gap-1 justify-between items-center mb-1">
              <p className="w-[200px] bg-[#F9F9F9] mb-0 p-2">
                Number of questions
              </p>
              <p className="flex-grow-1 bg-[#F9F9F9] font-semibold mb-0 p-2">
                {answers.length}
              </p>
            </li>
            <li className="flex gap-1 justify-between items-center mb-1">
              <p className="w-[200px] bg-[#F9F9F9] mb-0 p-2">Answered</p>
              <p className="flex-grow-1 bg-[#F9F9F9] font-semibold mb-0 p-2">
                {answeredCount}
              </p>
            </li>
            <li className="flex gap-1 justify-between items-center mb-1">
              <p className="w-[200px] bg-[#F9F9F9] mb-0 p-2">Not answered</p>
              <p className="flex-grow-1 bg-[#F9F9F9] font-semibold mb-0 p-2">
                {notAnsweredCount}
              </p>
            </li>
            <li className="flex gap-1 justify-between items-center mb-1">
              <p className="w-[200px] bg-[#F9F9F9] mb-0 p-2">Not attempted</p>
              <p className="flex-grow-1 bg-[#F9F9F9] font-semibold mb-0 p-2">
                {notAttemptedCount}
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-3 mt-5">
            <Button
              type="outline"
              handler={handleModalClose}
              splClass="text-[#2BBC7C] flex items-center justify-center gap-2 border w-full border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]"
            >
              <HiMiniArrowLongLeft className="text-xl" />
              Back to test
            </Button>
            <Button
              handler={handleSubmitExam}
              splClass="text-white border w-full border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]"
            >
              Submit Test
            </Button>
          </div>
        </div>
      </Modal>
      {/* Background Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#00000061] bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default React.memo(Validator);
