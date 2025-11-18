import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Question {
  question_id: number;
  user_answer: string | null;
  correct_answer: string;
}

interface Summary {
  correct: number;
  incorrect: number;
  total_questions: number;
}

interface Props {
  questions: Question[];
  currentQuestion: number;
  handleSetCurrentQuestion: (index: number) => void;
  summary: Summary;
}

const Validator: React.FC<Props> = ({
  questions,
  currentQuestion,
  handleSetCurrentQuestion,
  summary,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false); // NEW for mobile toggle

  const getBgColor = (q: Question) => {
    if (q.user_answer === q.correct_answer) return "bg-green-500 text-white";
    if (q.user_answer && q.user_answer !== q.correct_answer)
      return "bg-red-500 text-white";
    return "bg-gray-200";
  };

  return (
    <>
      {/* Mobile arrow button */}
      <button
        className="fixed top-[70%] right-0 cursor-pointer z-10 bg-white shadow-2xs border border-[#E5E5E5] p-2 rounded-l-[20px] text-[#2BBC7C] md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <div
        className={`fixed top-26 right-0 w-[330px] transform 
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
        {/* Summary */}
        <div className="bg-[#F9F9F9] border-gray-200 p-4 rounded-3xl">
          <div className="flex items-center text-xs gap-2 mb-4">
            <span className="px-3 py-1">Result:</span>
            <span className="px-3 py-1 flex items-center gap-3 rounded-[10px] bg-[#E3FFEE] text-[#21272C] border border-[#2BBC7C]">
              Correct
              <span className="text-[#2C8C53] text-[16px] font-semibold">
                {summary.correct}
              </span>
            </span>
            <span className="px-3 py-1 flex items-center gap-3 rounded-[10px] bg-[#FFE8E8] text-[#21272C] border border-[#FF4444]">
              Wrong{" "}
              <span className="text-[#FF4444] text-[16px] font-semibold">
                {summary.incorrect}
              </span>
            </span>
          </div>

          {/* Questions Grid */}
          <h6 className="text-[16px] font-semibold mb-3">Questions</h6>
          <div className="grid grid-cols-5 max-h-[70vh] overflow-y-auto gap-2">
            {questions.map((q, index) => (
              <button
                key={q.question_id}
                onClick={() => handleSetCurrentQuestion(index)}
                className={`w-11 h-8 flex items-center cursor-pointer justify-center rounded-full font-medium border ${getBgColor(
                  q
                )} ${
                  currentQuestion === index
                    ? "ring-1 ring-offset-1 ring-green-400"
                    : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Validator;
