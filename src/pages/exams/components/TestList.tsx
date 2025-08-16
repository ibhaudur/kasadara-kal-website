import React from "react";
import ExamCards from "../../../component/ExamCards";
import { ExamDetails } from "../../../types/pages.types";

// const ExamList = [
//   {
//     exam_name: "Group 4 Exam - Quick Test - 4",
//     total_marks: "100",
//     duration: "01:30",
//     total_questions: "50",
//     candidateCount: 80,
//     status: "scheduled",
//     type: "paid",
//   },
//   {
//     exam_name: "Group 4 Exam - Quick Test - 4",
//     total_marks: "100",
//     duration: "01:00",
//     total_questions: "50",
//     candidateCount: 130,
//     status: "published",
//     type: "free",
//   },
//   {
//     exam_name: "Group 4 Exam - Quick Test - 4",
//     total_marks: "100",
//     duration: "01:30",
//     total_questions: "50",
//     candidateCount: 85,
//     status: "draft",
//     type: "paid",
//     discount_cost: "49",
//   },
//   {
//     exam_name: "Group 4 Exam - Quick Test - 4",
//     total_marks: "100",
//     duration: "01:00",
//     total_questions: "50",
//     candidateCount: 130,
//     status: "published",
//     type: "free",
//   },
//   {
//     exam_name: "Group 4 Exam - Quick Test - 4",
//     total_marks: "100",
//     duration: "01:30",
//     total_questions: "50",
//     candidateCount: 80,
//     status: "scheduled",
//     type: "paid",
//   },
// ];
interface TestListProps {
  list: ExamDetails[];
}
const TestList: React.FC<TestListProps> = ({ list }) => {
  return (
    <div className="mt-20">
      <h5 className="text-4xl font-semibold">Mock Test</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {list &&
          list?.map((item, index) => {
            return <ExamCards key={index} details={item} index={index} />;
          })}
      </div>
      {/* <h5 className="text-4xl font-semibold mt-8">Quick Test</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards key={index} details={item} index={index} />;
        })}
      </div>{" "}
      <h5 className="text-4xl font-semibold mt-8">Exams</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards key={index} details={item} index={index} />;
        })}
      </div> */}
    </div>
  );
};

export default TestList;
