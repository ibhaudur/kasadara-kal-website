import React from "react";
import Button from "../../../../../component/UI/Button";

interface QuestionsandOptionsProps {
  setAnswer: (answer: string | null) => void;
  answer: string | null;
  setCurrentQuestion: (index: number) => void;
  currentQuestion: number;
  markedQuestions: number[];
  ontotal_marks: () => void;
  questions: any;
}

const QuestionsandOptions: React.FC<QuestionsandOptionsProps> = ({
  setAnswer,
  answer,
  setCurrentQuestion,
  currentQuestion,
  markedQuestions,
  ontotal_marks,
  questions,
}) => {
  const q = questions?.[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSaveAndNext = () => {
    // answer is already in state via setAnswer when selecting option
    handleNext();
  };

  const handleClearResponse = () => {
    setAnswer(null);
  };

  return (
    <div className="bg-white flex-grow">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center p-2 border border-gray-200">
        <p className="mb-0 font-semibold">Question No: {currentQuestion + 1}</p>
        <div className="flex items-center text-[13px] gap-4 md:gap-2">
          <span>If answer is :</span>
          <p className="mb-0 border border-[#EBEBEB] bg-[#F8F8F8] rounded-xl px-2 py-2">
            Correct &nbsp;
            <span className="bg-[#2C8C53] text-white rounded-2xl px-1">+1</span>
          </p>
          (or)
          <p className="mb-0 border border-[#EBEBEB] bg-[#F8F8F8] rounded-xl px-2 py-2">
            Wrong &nbsp;
            <span className="bg-[#FF4444] text-white rounded-2xl px-1">+1</span>
          </p>
        </div>
      </div>

      {/* Question & Options */}
      <div className="p-3 mb-5">
        <p className="text-lg mb-4">{q?.question}</p>
        {q?.options && Object?.entries(q?.options)?.map(([key, value]) => (
          <div key={key} className="flex px-3 py-1 items-center gap-2 mb-2">
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={key}
              id={`option-${key}`}
              checked={answer === key}
              onChange={() => setAnswer(key)}
              className="accent-[#2C8C53] w-5 h-5 cursor-pointer"
            />
            <label
              htmlFor={`option-${key}`}
              className={`px-3 text-[15px] py-2 rounded-lg w-[80%] lg:w-[60%]  cursor-pointer ${
                answer === key ? "bg-[#D6FFE7]" : "border border-[#EBEBEB]"
              }`}
            >
              {key}) &nbsp;&nbsp; <b>{value as React.ReactNode}</b>
            </label>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div
        className="
    flex items-center w-full justify-between p-2 border mt-8 border-gray-200
    absolute bottom-0
    md:static md:mt-8
  "
      >
        <div className="flex items-center gap-2">
          <Button
            type="outline"
            splClass="text-[#FF4444] border border-[#EBEBEB] px-5 py-2 text-[14px] rounded-[20px]"
            handler={handleClearResponse}
          >
            <span className="block md:hidden">Clear</span>
            <span className="hidden md:block">Clear Response</span>
          </Button>

          <Button
            type="outline"
            splClass={`px-5 py-2 text-[14px] rounded-[20px] ${
              markedQuestions.includes(currentQuestion)
                ? "text-white bg-[#C94951] border border-[#C94951]"
                : "text-[#C94951] border border-[#C94951]"
            }`}
            handler={ontotal_marks}
          >
            {markedQuestions.includes(currentQuestion) ? "Unmark" : "Mark"}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="outline"
            splClass="text-[#2BBC7C] border border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]"
            handler={handleNext}
          >
            Next
          </Button>

          <Button
            splClass="text-white border border-[#2BBC7C] px-5 py-2 text-[14px] rounded-[20px]"
            handler={handleSaveAndNext}
          >
            <span className="block md:hidden">Submit</span>
            <span className="hidden md:block">Save & Next</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsandOptions;
