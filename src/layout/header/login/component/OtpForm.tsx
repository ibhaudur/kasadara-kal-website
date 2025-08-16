import React, { useState } from "react";
import { Credentials } from "../../../../types/pages.types";

interface OtpFormProps {
  onBack: () => void;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  credentials: Credentials;
  setCredentials: React.Dispatch<React.SetStateAction<Credentials>>;
}

const OtpForm: React.FC<OtpFormProps> = ({ onBack, setActive }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const onVerify = () => {
    setActive(4);
  };

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const next = document.getElementById(`otp-${index + 1}`);
        (next as HTMLInputElement)?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Enter OTP</h2>
      <p className="text-gray-800 mb-6 text-xs sm:text-sm">
        We've sent a 4-digit OTP to your number.
      </p>

      <div className="flex gap-2 mb-4">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            id={`otp-${idx}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            maxLength={1}
            className="w-12 h-12 border border-gray-300 rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>
      <div className="flex justify-center w-full gap-2 mt-3 ">
        <button
          onClick={onBack}
          className=" px-6 py-2 rounded-full bg-[#E6ECFF]  font-medium hover:bg-[#d0dbff] transition"
        >
          Back
        </button>
        <button
          onClick={onVerify}
          className="cursor-pointer px-6 py-2 rounded-full bg-[#2BBC7C] text-white font-medium hover:bg-[#24a06b] transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpForm;
