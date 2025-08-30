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
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  const userDetails = useSelector((state: any) => state.user.userDetails);

  return (
    <div className="min-h-screen bg-white p-6 font-sans  ">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light">
            Welcome back, <span className="font-bold">{userDetails?.name}</span>
          </h1>
          <p className="text-sm text-gray-500">
            Here you can see your overall rank and activities
          </p>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 bg-gradient-to-br from-[#ffe9ea] to-[#c4ffed] p-4 rounded-3xl shadow-md">
        {/* Rank Card */}
        <div className="relative p-4 shadow bg-white rounded-xl">
          <img
            src={medal}
            alt="Medal Icon"
            className="absolute top-0 right-5 w-20 h-20"
          />
          <p className="text-gray-600 mb-3">Rank</p>
          <h2 className="text-3xl font-bold mt-4">
            23 <span className="text-gray-500 text-sm">/ 50</span>
          </h2>
          <p className="text-sm text-gray-500 mt-6">
            Compared to all the attendees who <br /> attend the same exams as
            you.
          </p>
        </div>

        {/* Score Details */}
        <div className="grid grid-cols-2 gap-3 bg-white p-4 shadow w-full rounded-xl">
          <div className="flex items-center bg-green-100 rounded-xl p-2 gap-3">
            <img src={average} alt="Average Icon" className="w-10 h-10" />
            <div>
              <p className="text-gray-600 text-[13px]">Avg.Score</p>
              <p className="text-lg font-semibold">78%</p>
            </div>
          </div>

          <div className="flex items-center bg-pink-100 rounded-xl p-2 gap-3">
            <img src={exam} alt="Exam" className="w-10 h-10" />
            <div>
              <p className="text-gray-600 text-[13px]">Exams attended</p>
              <p className="text-lg font-semibold">12</p>
            </div>
          </div>

          <div className="flex items-center bg-blue-100 rounded-xl p-2 gap-3">
            <img src={speed} alt="Speed" className="w-10 h-10" />
            <div>
              <p className="text-gray-600 text-[13px]">Speed</p>
              <p className="text-lg font-semibold">2Q/min</p>
            </div>
          </div>

          <div className="flex items-center bg-pink-100 rounded-xl p-2 gap-3">
            <img src={accuracy} alt="Accuracy" className="w-10 h-10" />
            <div>
              <p className="text-gray-600 text-[13px]">Accuracy</p>
              <p className="text-lg font-semibold">75%</p>
            </div>
          </div>
        </div>

        {/* Exam Result Chart */}
        <div className="bg-white p-4 rounded-xl shadow w-full md:col-span-2 lg:col-span-1 ">
          <h3 className="text-[16px] font-semibold text-[#21272C] mb-2">
            Exam Result overview
          </h3>
          <ExamResultChart />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-4 shadow w-full">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
            Attended Exams
          </h3>
          <p className="text-2xl font-bold text-gray-900">23</p>
          <p className="text-sm text-gray-500 mb-10">exams attended</p>
          <AttendedExamsChart />
        </div>

        <div className="bg-white rounded-xl p-4 shadow w-full">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-4">
            Attended Exams Results
          </h3>
          <AttendedExamResults />
        </div>

        <div className="bg-white p-4 rounded-xl shadow w-full md:col-span-2 lg:col-span-1">
          <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
            Monthly Based Answer Accuracy
          </h3>
          <p className="text-2xl font-bold text-gray-900">78%</p>
          <p className="text-sm text-gray-500 mb-5">Current accuracy</p>
          <AccuracyLineChart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
