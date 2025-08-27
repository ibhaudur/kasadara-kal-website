import React from "react";
import ExamBanner from "../components/ExamBanner";
import StandOut from "../components/StandOut";
import useApiCall from "../../../../hooks/useApiCall";
import { getExamById } from "../../../../service/apiUrls";
import { useParams } from "react-router-dom";

const BuyExam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useApiCall({
    key: `${getExamById}/${id}`,
    url: `${getExamById}/${id}`,
    method: "get",
  });
  console.log(data);
  return (
    <section className="p-4 max-w-[1580px] mx-auto">
      <ExamBanner details={data?.data} />
      <StandOut />
    </section>
  );
};

export default BuyExam;
