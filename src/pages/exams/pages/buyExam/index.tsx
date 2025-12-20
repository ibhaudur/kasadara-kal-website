import React, { useEffect, useState } from "react";
import ExamBanner from "../components/ExamBanner";
import StandOut from "../components/StandOut";
import useApiCall from "../../../../hooks/useApiCall";
import {
  getExamById,
  getPaymentStatus,
  postInitiatePayment,
  postPreviewCoupon,
} from "../../../../service/apiUrls";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../component/Modal/Modal";
import Button from "../../../../component/UI/Button";
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import { toast } from "react-toastify";

const BuyExam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState<string>("");
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
  const { mutate: mutateApplyCode, data: applyCodeData } = useApiCall({
    key: "BuyExam",
    url: postPreviewCoupon.replace(":id", data?.data?.exam_id),
    method: "post",
  });
  const handleSubmit = () => {
    const payload = promoCode ? { coupon_code: promoCode } : {};
    mutate(payload, {
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
    });
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
  const handleApplyPromoCode = () => {
    mutateApplyCode(
      { coupon_code: promoCode },
      {
        onSuccess: (res: ApiResponse<any>) => {
          toast.success(res?.message);
        },
        onError: (err: ApiError) => {
          toast.error(err.response?.data?.message);
        },
      }
    );
  };
  return (
    <section className="p-4 max-w-[1580px] mx-auto">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Buy Exam">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[15px] flex justify-between gap-3 w-full">
            <div className="">
              <label>Exam Name</label>
              <b className="block mb-3">{data?.data?.exam_name}</b>
            </div>
            <div>
              <label>Price</label>
              <b className="block">
                ₹
                {Number(data?.data?.price) % 1 === 0
                  ? Number(data?.data?.price)
                  : Number(data?.data?.price).toFixed(2)}
              </b>
            </div>
          </div>
        </div>
        <div className="relative w-full mt-4">
          <input
            type="text"
            className="w-full p-2 pr-24 border rounded-md placeholder:text-xs focus:outline-none"
            placeholder="Enter Coupon Code (if any)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            type="button"
            onClick={handleApplyPromoCode}
            className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer text-[#2BBC7C] px-4 py-1 rounded-md text-sm"
          >
            Apply
          </button>
        </div>
        {applyCodeData?.status && (
          <span className="text-sm text-green-600">
            Coupon applied Successfully!
          </span>
        )}
        <div className="flex justify-between mt-5 items-center w-full text-[15px]">
          <label>Amount to pay:</label>
          <b className="text-sm mb-2  text-center">
            {" "}
            ₹
            {applyCodeData?.data?.final_amount != null
              ? Number(applyCodeData.data.final_amount) % 1 === 0
                ? Number(applyCodeData.data.final_amount)
                : Number(applyCodeData.data.final_amount).toFixed(2)
              : Number(data?.data?.price) % 1 === 0
              ? Number(data?.data?.price)
              : Number(data?.data?.price).toFixed(2)}
          </b>
        </div>
        <Button splClass="rounded-md w-full mt-3" handler={handleSubmit}>
          Confirm
        </Button>
      </Modal>
      <ExamBanner details={data?.data} setIsOpen={setIsOpen} />
      <StandOut />
    </section>
  );
};

export default BuyExam;
