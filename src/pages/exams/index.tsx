import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";
import Adscarousel from "./components/Adscarousel";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
const Exams: React.FC = () => {
  const { data } = useApiCall({
    key: getAllExams,
    url: getAllExams,
    method: "get",
  });
  console.log(data?.data);
  return (
    <section>
      <Banner />
      <Adscarousel />
      <div className="p-4">
        <TestList list={data?.data} />
      </div>
    </section>
  );
};

export default Exams;
