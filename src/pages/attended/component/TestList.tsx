import React, { useState } from "react";
import ExamCards from "../../../component/ExamCards";
import { getAttendedExams } from "../../../service/apiUrls";
import useApiCall from "../../../hooks/useApiCall";

const TestList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"attended" | "paid">("attended");
  const { data: AttendedExams } = useApiCall({
    key: getAttendedExams,
    url: getAttendedExams,
    method: "get",
  });
  const { data: PaidExams } = useApiCall({
    key: getAttendedExams,
    url: getAttendedExams,
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
            {AttendedExams?.data?.map((item: any, index: number) => (
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
            {PaidExams?.data?.map((item: any, index: number) => (
              <ExamCards details={item} index={index} key={`paid-m-${index}`} />
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block ">
        <h5 className="text-2xl font-semibold mb-4">Attended Tests</h5>
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 mb-10">
          {AttendedExams?.data?.map((item: any, index: number) => (
            <ExamCards details={item} index={index} key={`attend-d-${index}`} />
          ))}
        </div>

        <h5 className="text-2xl font-semibold mb-4">Paid Exams</h5>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {PaidExams?.data?.map((item: any, index: number) => (
            <ExamCards details={item} index={index} key={`paid-d-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestList;
