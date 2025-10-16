import React from "react";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

interface Question {
  question_id: number;
  question_text: string;
  options: Record<string, string>;
  correct_answer: string;
  user_answer: string | null;
  is_correct: boolean;
  description: string;
}

interface Props {
  question: Question;
  currentQuestion: number;
  handlePrev: () => void;
  handleNext: () => void;
  totalQuestions: number;
}

const QuestionsandOptions: React.FC<Props> = ({
  question,
  currentQuestion,
  handlePrev,
  handleNext,
  totalQuestions,
}) => {
  return (
    <div className="bg-white flex-grow relative">
      {/* Question */}
      <div className="p-4">
        <p className="text-lg mb-4">
          {currentQuestion + 1}. {question.question_text}
        </p>

        {/* Options */}
        {Object.entries(question.options).map(([key, value]) => {
          const isUserAnswer = question.user_answer === key;
          const isCorrectAnswer = question.correct_answer === key;

          let optionClass =
            "flex justify-between mb-3 items-center px-3 py-2 rounded-lg w-[90%] lg:w-[70%] cursor-default";

          if (isCorrectAnswer) {
            optionClass += " bg-[#D6FFE7]";
          } else if (isUserAnswer && !question.is_correct) {
            optionClass += " bg-[#FFE6E6]";
          } else {
            optionClass += " border border-[#EBEBEB]";
          }

          return (
            <div key={key} className={optionClass}>
              <span className="text-[15px]">
                {key}) &nbsp;<b>{value}</b>
              </span>
              {isCorrectAnswer && (
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  <IoMdCheckmarkCircle className="text-xl" />
                  Correct
                </span>
              )}
              {isUserAnswer && !question.is_correct && (
                <span className="text-red-600 font-semibold flex items-center gap-2">
                  <IoMdCloseCircle className="text-xl" /> Wrong
                </span>
              )}
            </div>
          );
        })}
        <div>
          <h5 className="text-lg font-semibold mt-4">Description:</h5>
          <p className="text-[15px] mt-2">{question.description}</p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center w-[71%] justify-between p-3">
        {!question.is_correct ? (
          <p className="text-red-600 font-semibold mt-4 flex items-center gap-2">
            <IoMdCloseCircle className="text-xl" /> Your answer is wrong!
          </p>
        ) : (
          <p className="text-green-600 font-semibold mt-4 flex items-center gap-2">
            <IoMdCheckmarkCircle className="text-xl" /> Your answer is Correct!
          </p>
        )}
        <div className="flex gap-3 ml-auto">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-5 py-2 text-[14px] flex items-center gap-3 rounded-[20px] border border-[#2BBC7C] text-[#2BBC7C] hover:bg-[#2BBC7C] hover:text-white disabled:opacity-50 ${
              currentQuestion === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <HiMiniArrowLongLeft className="text-xl" /> Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentQuestion === totalQuestions - 1}
            className={`px-5 py-2 text-[14px] flex items-center gap-3 rounded-[20px] border border-[#2BBC7C] text-[#2BBC7C] hover:bg-[#2BBC7C] hover:text-white disabled:opacity-50 ${
              currentQuestion === totalQuestions - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next <HiMiniArrowLongRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsandOptions;
