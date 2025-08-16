import React, { useState } from "react";
import ExamCards from "../../../component/ExamCards";

const ExamList = [
  {
    exam_name: "Group 4 Exam - Quick Test - 4",
    total_marks: 100,
    duration: 30,
    total_questions: 50,
    candidateCount: 130,
    status: "published",
    type: "paid",
    discount_cost: "49",
  },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:00",
  //   total_questions: "50",
  //   candidateCount: 120,
  //   status: "published",
  //   type: "free",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:00",
  //   total_questions: "50",
  //   candidateCount: 125,
  //   status: "published",
  //   type: "paid",
  //   discount_cost: "49",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:00",
  //   total_questions: "50",
  //   candidateCount: 135,
  //   status: "published",
  //   type: "free",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:00",
  //   total_questions: "50",
  //   candidateCount: 140,
  //   status: "published",
  //   type: "paid",
  //   discount_cost: "49",
  // },

  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:30",
  //   total_questions: "50",
  //   candidateCount: 80,
  //   status: "scheduled",
  //   type: "paid",
  //   discount_cost: "49",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:30",
  //   total_questions: "50",
  //   candidateCount: 85,
  //   status: "scheduled",
  //   type: "free",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:30",
  //   total_questions: "50",
  //   candidateCount: 90,
  //   status: "scheduled",
  //   type: "paid",
  //   discount_cost: "49",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:30",
  //   total_questions: "50",
  //   candidateCount: 95,
  //   status: "scheduled",
  //   type: "free",
  // },
  // {
  //   exam_name: "Group 4 Exam - Quick Test - 4",
  //   total_marks: "100",
  //   duration: "01:30",
  //   total_questions: "50",
  //   candidateCount: 100,
  //   status: "scheduled",
  //   type: "paid",
  //   discount_cost: "49",
  // },
];

const TestList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"attended" | "paid">("attended");

  const attendedTests = ExamList.slice(0, 5);
  const paidExams = ExamList.slice(5, 10);

  return (
    <div className="md:px-10">
      <div className="flex md:hidden items-center justify-center my-4  ">
        <div className="flex bg-white rounded-full p-2 ">
          <button
            onClick={() => setActiveTab("attended")}
            className={`px-8 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === "attended"
                ? "bg-yellow-400 text-black shadow"
                : "text-gray-700"
            }`}
          >
            Attended tests
          </button>
          <button
            onClick={() => setActiveTab("paid")}
            className={`px-8 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === "paid"
                ? "bg-yellow-400 text-black shadow"
                : "text-gray-700"
            }`}
          >
            Paid Exams
          </button>
        </div>
      </div>

      <div className="md:hidden ">
        {activeTab === "attended" && (
          <div className="grid grid-cols-1 gap-4 ">
            {attendedTests.map((item, index) => (
              <ExamCards
                details={item}
                index={index}
                key={`attend-m-${index}`}
              />
            ))}
          </div>
        )}
        {activeTab === "paid" && (
          <div className="grid grid-cols-1 gap-4">
            {paidExams.map((item, index) => (
              <ExamCards details={item} index={index} key={`paid-m-${index}`} />
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block ">
        <h5 className="text-2xl font-semibold mb-4">Attended Tests</h5>
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 mb-10">
          {attendedTests.map((item, index) => (
            <ExamCards details={item} index={index} key={`attend-d-${index}`} />
          ))}
        </div>

        <h5 className="text-2xl font-semibold mb-4">Paid Exams</h5>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {paidExams.map((item, index) => (
            <ExamCards details={item} index={index} key={`paid-d-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestList;
