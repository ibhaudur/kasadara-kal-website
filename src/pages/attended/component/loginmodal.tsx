import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
  };

  const handleBack = () => {
    onClose();       
    navigate("/");  
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-sm"
      onClick={handleBack}
    >
      <div
        onClick={handleModalClick}
        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md p-8 text-center border border-white/40"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Please Login
        </h2>
        <p className="text-gray-700 mb-6">
          You need to login first to continue.
        </p>
        <button
          onClick={handleBack}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
