import React from "react";
import ExamCards from "./ExamCards";
const ExamList = [
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 80,
    status: "scheduled",
    type: "paid",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:00",
    questionCount: "50",
    candidateCount: 130,
    status: "published",
    type: "free",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 85,
    status: "draft",
    type: "paid",
    price: "49",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:00",
    questionCount: "50",
    candidateCount: 130,
    status: "published",
    type: "free",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 80,
    status: "scheduled",
    type: "paid",
  },
];
const TestList: React.FC = () => {
  return (
    <div className="mt-20">
      <h5 className="text-4xl font-semibold">Mock Test</h5>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards details={item} index={index} />;
        })}
      </div>
      <h5 className="text-4xl font-semibold mt-8">Quick Test</h5>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards details={item} index={index} />;
        })}
      </div>{" "}
      <h5 className="text-4xl font-semibold mt-8">Exams</h5>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards details={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default TestList;
