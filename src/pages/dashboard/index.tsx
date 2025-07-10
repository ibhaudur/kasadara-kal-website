import React from "react";
import medal from "../../../public/images/medal.svg";
import average from "../../../public/images/average.svg";
import exam from "../../../public/images/exam.svg";
import speed from "../../../public/images/speed.svg";
import accuracy from "../../../public/images/accuracy.svg";
import AccuracyLineChart from "../../pages/dashboard/accuracychart";
import AttendedExamsChart from "../../pages/dashboard/attendedexam";
import ExamResultChart from "../../pages/dashboard/examresultchart";
import AttendedExamResults from "./component/AttendedExamResults";

const Dashboard: React.FC = () => {
  return (
    <div className=" bg-white font-sans min-w-sm max-w-md mx-auto  w-full">
      <header className="mb-8  flex justify-between grid min-w-sm max-w-md  w-full">
        <h1 className="text-3xl text-light">
          Welcome back, <span className="text-3xl  font-bold">John Smith</span>
          <p className="text-sm text-gray-500">
            Here you can see your overall rank and activities
          </p>
        </h1>
      </header>
      <section className="grid  gap-5 mb-6  bg-gradient-to-br from-[#ffe9ea] to-[#c4ffed] p-4 rounded-3xl md-shadow w-full max-w-md min-w-sm mx-auto">
        <div className="relative p-3 shadow bg-white rounded-xl grid">
          <img
            src={medal}
            alt="Medal Icon"
            className=" absolute top-0 right-5 w-30 h-30 -mt-0 -mr-0"
          />
          <p className="text-gray-600 mb-3 mt-4">Rank</p>
          <h2 className="text-3xl font-bold ">
            23 <span className="text-gray-500 text-sm">/ 50</span>
          </h2>
          <p className="text-sm text-gray-500  ">
            {" "}
            Compared to all the <br></br> attendees who  attend the <br></br> same exams as
            you.
          </p>
        </div>
         <div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-white sm:gap-5 w-full ">
      {/* Avg. Score */}
      <div className="flex flex-col items-start bg-green-100 p-2 rounded-xl">
        <img src={average} alt="Average Icon" className="w-8 h-8 mb-2" />
        <p className="text-sm text-gray-600">Avg. score</p>
        <p className="text-lg font-bold text-gray-900">78%</p>
      </div>

      {/* Exams Attended */}
      <div className="flex flex-col items-start bg-pink-100 p-2 rounded-xl">
        <img src={exam} alt="Exam Icon" className="w-8 h-8 mb-2" />
        <p className="text-sm text-gray-600">Exams attended</p>
        <p className="text-lg font-bold text-gray-900">12</p>
      </div>

      {/* Speed */}
      <div className="flex flex-col items-start bg-blue-100 p-2 rounded-xl">
        <img src={speed} alt="Speed Icon" className="w-8 h-8 mb-2" />
        <p className="text-sm text-gray-600">Speed</p>
        <p className="text-lg font-bold text-gray-900">2Q/min</p>
      </div>

      {/* Accuracy */}
      <div className="flex flex-col items-start bg-pink-100 p-2 rounded-xl">
        <img src={accuracy} alt="Accuracy Icon" className="w-8 h-8 mb-2" />
        <p className="text-sm text-gray-600">Accuracy</p>
        <p className="text-lg font-bold text-gray-900">75%</p>
      </div>
    </div>
        <div className="col-span-1 bg-white p-2 rounded-xl shadow ">
          <h3 className="text-[16px] font-semibold text-[#21272C] mb-2">
            Exam Result overview
          </h3>
          <ExamResultChart />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 mb-8 min-w-sm max-w-md mx-auto w-full md-shadow">
        <div className="bg-white rounded-xl p-4 shadow w-full max-w-md">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
            Attended Exams
          </h3>
          <p className="text-2xl font-bold text-gray-900">23</p>
          <p className="text-sm text-gray-500 mb-10">exams attended</p>
          <AttendedExamsChart />
        </div>

        <div className="bg-white rounded-xl p-4 shadow w-full max-w-md ">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-4">
            Attended Exams Results
          </h3>
          <AttendedExamResults />
        </div>

        <div className="bg-white p-4 rounded-xl shadow w-full max-w-md ">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
            Monthly Based Answer Accuracy
          </h3>
          <p className="text-2xl font-bold text-gray-900 ">78%</p>
          <p className="text-sm text-gray-500 mb-5">Current accuracy</p>
          <AccuracyLineChart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
