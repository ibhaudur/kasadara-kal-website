import React, { useState } from "react";
import { questions } from "../utils/index.utils";

interface QuestionsandOptionsProps {
  language: string;
}

const QuestionsandOptions: React.FC<QuestionsandOptionsProps> = ({
  language,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const langKey = language.toLocaleLowerCase() as "english" | "tamil";
  const q = questions[0][langKey];

  return (
    <div className="bg-white col-span-4">
      <div className="flex items-center justify-between p-2 border border-gray-200">
        <p className="mb-0 font-semibold">Question No: 1</p>
        <div className="flex items-center text-xs gap-2">
          <span>If answer is :</span>
          <p className="mb-0 border border-[#EBEBEB] bg-[#F8F8F8] rounded-xl px-2 py-2">
            Correct &nbsp;
            <span className="bg-[#2C8C53] text-white rounded-2xl px-1">+1</span>
          </p>{" "}
          (or)
          <p className="mb-0 border border-[#EBEBEB] bg-[#F8F8F8] rounded-xl px-2 py-2">
            Wrong &nbsp;
            <span className="bg-[#FF4444] text-white rounded-2xl px-1">+1</span>
          </p>{" "}
        </div>
      </div>
      <div className="p-3">
        <p className="text-lg mb-4">{q.question}</p>
        {Object.entries(q.options).map(([key, value]) => (
          <div key={key} className="flex px-3 py-1 items-center gap-2 mb-2">
            <input
              type="radio"
              name="question1"
              value={key}
              id={`option-${key}`}
              checked={selected === key}
              onChange={() => setSelected(key)}
              className="accent-[#2C8C53] w-5 h-5 cursor-pointer"
            />
            <label
              htmlFor={`option-${key}`}
              className="px-3 text-[16px] py-2 rounded-lg w-[60%] cursor-pointer"
              style={{ backgroundColor: "#D6FFE7" }}
            >
              {key}) {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsandOptions;
