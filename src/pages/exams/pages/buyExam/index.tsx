import React from "react";
import ExamBanner from "../components/ExamBanner";
import StandOut from "../components/StandOut";



const BuyExam: React.FC = () => {
  return (
    <section className="p-4 max-w-[1580px] mx-auto">
      <ExamBanner
        details={{
          exam_name: "Group 4 Exam - Quick Test - 4",
          total_marks: "100",
          duration: "01:30",
          total_questions: "50",
          candidateCount: 80,
          status: "scheduled",
          type: "paid",
        }}
      />
      <StandOut />
    </section>
  );
};

export default BuyExam;
