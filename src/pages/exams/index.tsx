import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
import Adscarousel from "./components/Adscarousel";
import TermsAndCond from "./pages/components/TermsAndCondn";
const Exams: React.FC = () => {
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
