import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../component/UI/Button";
import AttendeesList from "./component/AttendeesList";
import ResultDetails from "./component/ResultDetails";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { getExamAttendies, getExamReview } from "../../../../service/apiUrls";
import useApiCall from "../../../../hooks/useApiCall";

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: Review } = useApiCall({
    key: `${getExamReview}/${id}`,
    url: `${getExamReview}/${id}`,
    method: "get",
  });
  const { data: Attendies } = useApiCall({
    key: `${getExamAttendies}/${id}`,
    url: `${getExamAttendies}/${id}`,
    method: "get",
  });
  return (
    <div className="bg-white p-6">
      <ResultDetails data={Review?.data} />
      <div className="flex justify-center gap-2 md:gap-5 mb-5">
        <Button
          type="outline"
          handler={() => navigate("/exams")}
          splClass="rounded-[20px] flex items-center gap-3 px-2 md:px-5 border border-[#EBEBEB] text-black"
        >
          <FaArrowLeftLong />
          Back to list
        </Button>
        <Button
          type="outline"
          handler={() => navigate(`/exams/answer-review/${id}`)}
          splClass="rounded-[20px] flex items-center gap-3 px-2 md:px-5 border border-[#EBEBEB]"
        >
          Answer Review
          <FaArrowRightLong />
        </Button>
      </div>
      <AttendeesList list={Attendies?.data} />
    </div>
  );
};

export default Result;
