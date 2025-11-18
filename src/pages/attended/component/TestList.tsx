import React, { useState } from "react";
import ExamCards from "../../../component/ExamCards";
import { getAttendedExams, getPaidExams } from "../../../service/apiUrls";
import useApiCall from "../../../hooks/useApiCall";

const TestList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"attended" | "paid">("attended");
  const { data: AttendedExams } = useApiCall({
    key: getAttendedExams,
    url: getAttendedExams,
    method: "get",
  });
  const { data: PaidExams } = useApiCall({
    key: getPaidExams,
    url: getPaidExams,
    method: "get",
  });
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
            Completed Exams
          </button>
          <button
            onClick={() => setActiveTab("paid")}
            className={`px-8 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === "paid"
                ? "bg-yellow-400 text-black shadow"
                : "text-gray-700"
            }`}
          >
            Subscribed Exams
          </button>
        </div>
      </div>

      <div className="md:hidden ">
        {activeTab === "attended" &&
          (AttendedExams?.data?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 ">
              {AttendedExams?.data?.map((item: any, index: number) => (
                <ExamCards
                  details={item}
                  index={index}
                  key={`attend-m-${index}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-5">
              No completed exams found.
            </p>
          ))}
        {activeTab === "paid" &&
          (PaidExams?.data?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {PaidExams?.data?.map((item: any, index: number) => (
                <ExamCards
                  details={item}
                  index={index}
                  key={`paid-m-${index}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-5">
              No subscribed exams found.
            </p>
          ))}
      </div>

      <div className="hidden md:block ">
        <h5 className="text-2xl font-semibold mb-4">Completed Exams</h5>
        {AttendedExams?.data?.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 mb-10">
            {AttendedExams?.data?.map((item: any, index: number) => (
              <ExamCards
                details={item}
                index={index}
                key={`attend-d-${index}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-5">
            No completed exams found.
          </p>
        )}
        <h5 className="text-2xl font-semibold mb-4">Subscribed Exams</h5>
        {PaidExams?.data?.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {PaidExams?.data?.map((item: any, index: number) => (
              <ExamCards details={item} index={index} key={`paid-d-${index}`} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-5">
            No subscribed exams found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestList;
