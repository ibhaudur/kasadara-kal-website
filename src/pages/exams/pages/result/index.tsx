import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../component/UI/Button";
import AttendeesList from "./component/AttendeesList";
import ResultDetails from "./component/ResultDetails";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  getExamAttendies,
  getExamReview,
  getExportExamReview,
} from "../../../../service/apiUrls";
import useApiCall from "../../../../hooks/useApiCall";
import { FiDownload } from "react-icons/fi";
import api from "../../../../service/api";
import { toast } from "react-toastify";

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
  const handleExport = async () => {
    try {
      const response = await api.get(
        getExportExamReview.replace(":id", id || ""),
        {
          responseType: "blob", // 👈 ensures file data (not JSON)
        }
      );

      // ✅ Extract filename from headers or use default
      const contentDisposition = response.headers["content-disposition"];
      let fileName = `${Review?.data?.exam_name}_review.pdf`;
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match?.[1]) fileName = match[1];
      }

      // ✅ Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export failed:", error);
      toast.error("Failed to export the file. Please try again.");
    }
  };
  return (
    <div className="bg-white p-6">
      <div className="justify-end mb-5 hidden">
        <Button
          type="outline"
          splClass="rounded-[20px] flex items-center gap-3 px-2 md:px-5 border border-[#EBEBEB]"
          handler={handleExport} // 👈 only trigger when clicked
        >
          <FiDownload className="text-lg" /> Export
        </Button>
      </div>

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
