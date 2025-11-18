import React from "react";
import ExamResultChart from "../../../../dashboard/examresultchart";
import medal from "../../../../../../public/images/medal.svg";
import average from "../../../../../../public/images/average.svg";
import exam from "../../../../../../public/images/exam.svg";
import speed from "../../../../../../public/images/speed.svg";
import accuracy from "../../../../../../public/images/accuracy.svg";
import { prepareChartData } from "../../../../../utils/index.utils";

interface ExamResultData {
  exam_name: string;
  user_name: string;
  score: string;
  accuracy: string;
  correct: number;
  incorrect: number;
  skiped: number;
  rank: number;
  total_marks: string;
  obtained_marks: string;
  answered: number;
  not_answered: number;
  correct_answered: number;
  start_time: string;
  end_time: string;
  duration: number;
  speed?: string;
}

interface ResultDetailsProps {
  data: ExamResultData;
}

const ResultDetails: React.FC<ResultDetailsProps> = ({ data }) => {
  const examStats = {
    correct_answered: data?.correct_answered,
    not_answered: data?.not_answered,
    incorrect: data?.incorrect,
  };
  const examConfig = [
    { key: "correct_answered", label: "Correct", color: "#5FDAA4" },
    { key: "incorrect", label: "Incorrect", color: "#FF6666" },
    { key: "not_answered", label: "Skipped", color: "#5B9EE9" },
  ];

  const examData = prepareChartData(examStats, examConfig);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 bg-[#F7F7F7] p-4 rounded-3xl shadow-md">
      {/* Header */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
        <p className="font-semibold text-2xl sm:text-3xl mb-2">
          Thank you for attempting {data?.exam_name}
        </p>
        <p className="font-semibold text-xl sm:text-2xl">All India Pre-Test</p>
      </div>

      {/* Rank */}
      <div className="relative p-4 shadow bg-white rounded-xl flex flex-col justify-between">
        <img
          src={medal}
          alt="Medal Icon"
          className="absolute top-0 right-5 w-16 h-16 sm:w-20 sm:h-20"
        />
        <p className="text-gray-600 mb-2 sm:mb-3">Rank</p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4">
          {data?.rank} <span className="text-gray-500 text-sm">/ 50</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
          Compared to all the attendees who <br /> attended the same exams as
          you.
        </p>
      </div>

      {/* Score Details */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 bg-white p-4 shadow w-full rounded-xl">
        <div className="flex items-center bg-[#D0FFE7] rounded-xl p-2 gap-3">
          <img
            src={average}
            alt="Average Icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <div>
            <p className="text-gray-600 text-xs sm:text-[13px]">Score</p>
            <p className="text-base sm:text-lg font-semibold">
              {Math.round(Number(data?.obtained_marks))}/
              {Math.round(Number(data?.total_marks))}
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#FFF9E4] rounded-xl p-2 gap-3">
          <img src={exam} alt="Exam" className="w-8 h-8 sm:w-10 sm:h-10" />
          <div>
            <p className="text-gray-600 text-xs sm:text-[13px]">Questions</p>
            <p className="text-base sm:text-lg font-semibold">
              {data?.answered}
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#E2FBFF] rounded-xl p-2 gap-3">
          <img src={speed} alt="Speed" className="w-8 h-8 sm:w-10 sm:h-10" />
          <div>
            <p className="text-gray-600 text-xs sm:text-[13px]">Speed</p>
            <p className="text-base sm:text-lg font-semibold">
              {data?.speed}Q/min
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#FFEFF2] rounded-xl p-2 gap-3">
          <img
            src={accuracy}
            alt="Accuracy"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <div>
            <p className="text-gray-600 text-xs sm:text-[13px]">Accuracy</p>
            <p className="text-base sm:text-lg font-semibold">
              {data?.accuracy}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-xl shadow w-full h-full flex items-center justify-center md:col-span-2 lg:col-span-1">
        <ExamResultChart data={examData} />
      </div>
    </section>
  );
};

export default ResultDetails;
