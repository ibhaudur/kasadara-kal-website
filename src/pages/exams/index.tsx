import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
import Adscarousel from "./components/Adscarousel";
import TermsAndCond from "./pages/components/TermsAndCondn";
const Exams: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>("All Exams");
  const { data } = useApiCall({
    key: getAllExams,
    url: getAllExams,
    method: "get",
  });
  return (
    <section>
      <Banner />
      <Adscarousel />
      <div className="p-4">
        <ul className="flex justify-center gap-6 border-b border-gray-200 mt-8 mb-6">
          {["All Exams", "Mock Test", "Quick Test"].map((title) => (
            <li
              key={title}
              onClick={() => setActiveTab(title)}
              className={`cursor-pointer pb-2 text-base font-semibold transition-colors duration-200
            ${
              activeTab === title
                ? "text-[#2c8c53] border-b-2 border-[#2c8c53]"
                : "text-gray-600 hover:text-[#2c8c53]"
            }`}
            >
              {title}
            </li>
          ))}
        </ul>
        <TestList list={data?.data} />
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
