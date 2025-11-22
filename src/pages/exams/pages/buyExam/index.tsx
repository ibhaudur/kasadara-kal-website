import React, { useEffect, useState } from "react";
import ExamBanner from "../components/ExamBanner";
import StandOut from "../components/StandOut";
import useApiCall from "../../../../hooks/useApiCall";
import {
  getExamById,
  getPaymentStatus,
  postInitiatePayment,
} from "../../../../service/apiUrls";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../component/Modal/Modal";
import Button from "../../../../component/UI/Button";
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import { toast } from "react-toastify";

const BuyExam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const transactionId = queryParams.get("transaction_id");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, refetch } = useApiCall({
    key: `${getExamById}/${id}`,
    url: `${getExamById}/${id}`,
    method: "get",
  });
  const { data: PaymentStatus, error: PaymentError } = useApiCall({
    key: `${getPaymentStatus}${transactionId}`,
    url: `${getPaymentStatus}${transactionId}`,
    method: "get",
    enabled: transactionId ? true : false,
  });
  const { mutate } = useApiCall({
    key: "BuyExam",
    url: `${postInitiatePayment}/${data?.data?.exam_id}`,
    method: "post",
  });
  const handleSubmit = () => {
    mutate(
      {},
      {
        onSuccess: (res: ApiResponse<any>) => {
          if (res?.payment_url) {
            window.open(res?.payment_url, "_self");
          } else {
            toast.success(res?.message);
            refetch();
          }
          setIsOpen(false);
        },
        onError: (err: ApiError) => {
          toast.error(err.response?.data?.message);
        },
      }
    );
  };
  useEffect(() => {
    if (PaymentStatus?.status === "completed") {
      toast.success("Payment successful");
      refetch();
      navigate(`/exams/buy/${id}`, { replace: true });
    } else if (PaymentStatus?.status === "failed") {
      toast.error("Payment failed, please try again");
      navigate(`/exams/buy/${id}`, { replace: true });
    } else if (PaymentError) {
      toast.error(
        PaymentError?.response?.data?.message || "Something went wrong"
      );
      navigate(`/exams/buy/${id}`, { replace: true });
    }
  }, [PaymentStatus, PaymentError]);
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
