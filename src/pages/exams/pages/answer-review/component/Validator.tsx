import React from "react";

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
  const getBgColor = (q: Question) => {
    if (q.user_answer === q.correct_answer) return "bg-green-500 text-white";
    if (q.user_answer && q.user_answer !== q.correct_answer)
      return "bg-red-500 text-white";
    return "bg-gray-200";
  };

  return (
    <div className="w-[330px]  p-5">
      {/* Summary */}
      <div className="bg-[#F9F9F9] border-gray-200 p-4 rounded-3xl">
        <div className="flex items-center text-xs gap-2 mb-6">
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
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q, index) => (
            <button
              key={q.question_id}
              onClick={() => handleSetCurrentQuestion(index)}
              className={`w-12 h-9 flex items-center cursor-pointer justify-center rounded-full font-medium border ${getBgColor(
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
  );
};

export default Validator;
