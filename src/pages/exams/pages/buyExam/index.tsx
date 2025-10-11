import React, { useEffect, useState } from "react";
import ExamBanner from "../components/ExamBanner";
import StandOut from "../components/StandOut";
import useApiCall from "../../../../hooks/useApiCall";
import {
  getExamById,
  postConfirmPayment,
  postInitiatePayment,
} from "../../../../service/apiUrls";
import { useParams } from "react-router-dom";
import Modal from "../../../../component/Modal/Modal";
import Button from "../../../../component/UI/Button";
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import { toast } from "react-toastify";

const BuyExam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [initiate, setInitiate] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, refetch } = useApiCall({
    key: `${getExamById}/${id}`,
    url: `${getExamById}/${id}`,
    method: "get",
  });
  const { mutate } = useApiCall({
    key: "BuyExam",
    url: initiate
      ? postConfirmPayment
      : `${postInitiatePayment}/${data?.data?.exam_id}`,
    method: "post",
  });
  const handleSubmit = () => {
    const payload = {
      exam_id: data?.data?.exam_id,
      mock_paid: true,
    };
    mutate(initiate ? payload : {}, {
      onSuccess: (res: ApiResponse<any>) => {
        if (res?.message !== "Initiate mock payment") {
          window.open(res?.payment_url, "_blank");
          toast.success(res?.message);
          refetch();
          setIsOpen(false);
        }
        if (res?.message === "Initiate mock payment") setInitiate(true);
      },
      onError: (err: ApiError) => {
        toast.error(err.response?.data?.message);
      },
    });
  };
  useEffect(() => {
    if (initiate) {
      setInitiate(false);
      handleSubmit();
    }
  }, [initiate]);
  return (
    <section className="p-4 max-w-[1580px] mx-auto">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Buy Exam">
        <div className="min-w-80 flex flex-col justify-center items-center">
          <div className="text-[18px] text-center">
            <label>Exam Name</label>
            <b className="block mb-3">{data?.data?.exam_name}</b>
            <label>Price</label>
            <b className="block">
              ₹
              {Number(data?.data?.price) % 1 === 0
                ? Number(data?.data?.price)
                : Number(data?.data?.price).toFixed(2)}
            </b>
          </div>
          <Button splClass="rounded-2xl mt-3" handler={handleSubmit}>
            Confirm
          </Button>
        </div>
      </Modal>
      <ExamBanner details={data?.data} setIsOpen={setIsOpen} />
      <StandOut />
    </section>
  );
};

export default BuyExam;
