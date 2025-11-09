import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
import Adscarousel from "./components/Adscarousel";
import TermsAndCond from "./pages/components/TermsAndCondn";
const Exams: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("");
  const { data } = useApiCall({
    key: `${getAllExams}?exam_type=${activeTab}`,
    url: `${getAllExams}?exam_type=${activeTab}`,
    method: "get",
  });
  return (
    <section>
      <Banner />
      <Adscarousel />
      <div className="p-4">
        <div className="w-full overflow-x-auto">
          <ul className="flex justify-center md:justify-center gap-6 border-b border-gray-200 mt-8 min-w-max px-4">
            {[
              { name: "All Exams", value: "" },
              { name: "Group 4", value: "group 4" },
              { name: "Group 2A Mains", value: "group 2a mains" },
              { name: "Group 1 Prelims", value: "group 1 prelims" },
            ].map((title) => (
              <li
                key={title.name}
                onClick={() => setActiveTab(title.value)}
                className={`cursor-pointer pb-2 text-base font-semibold whitespace-nowrap transition-colors duration-200
          ${
            activeTab === title.value
              ? "text-[#2c8c53] border-b-2 border-[#2c8c53]"
              : "text-gray-600 hover:text-[#2c8c53]"
          }`}
              >
                {title.name}
              </li>
            ))}
          </ul>
        </div>

        {data?.data && data?.data.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No exams found.</p>
        ) : (
          <TestList list={data?.data} />
        )}
      </div>
      <div className="p-4 max-w-[1580px] mx-auto">
        <div className="bg-white rounded-2xl p-5 px-6 shadow-md overflow-hidden mt-5">
          <TermsAndCond />
        </div>
      </div>
    </section>
  );
};

export default Exams;
