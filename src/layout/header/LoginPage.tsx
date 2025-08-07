import React, { useState, useRef, useEffect } from "react";

const LoginModal: React.FC<{
  onClose: () => void;
  onLoginSuccess: () => void;
}> = ({ onClose, onLoginSuccess }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#00000070] bg-opacity-20 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-4xl rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="flex flex-col items-center justify-center p-6 bg-white">
          <img
            src="/images/login-page.png"
            alt="Login page"
            className="max-w-full h-auto"
          />
          <p className="text-center mt-4 text-xs font-medium text-gray-700">
            Your Future Awaits — Start Your Exam Journey Today!
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 flex flex-col justify-center text-center">
          <h2 className="text-1xl sm:text-2xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-800 mb-9 text-xs sm:text-sm">
            Great Things Start Here. Sign In and Shine!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Mobile number"
              className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-[#2BBC7C] text-white py-2 rounded-3xl hover:bg-[#2C8C53] cursor-pointer transition"
            >
              Continue
            </button>
          </form>

          <p className="text-gray-300 text-xs text-center mt-8 mb-6">
            By signing in you agree to our
            <br />
            <span className="mt-2 inline-block">
              <a href="#" className="mr-6 inline-block">
                Terms of Service
              </a>
              <a href="#" className="inline-block">
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Parent Component
const LoginWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginSuccess = () => {
    alert("Login success!");
    // do something...
  };

  return (
    <React.Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-2 cursor-pointer ml-3 text-sm text-black-500 border border-[#DCDFE4] rounded-xl"
      >
        Signup/ Login
      </button>

      {isOpen && (
        <LoginModal
          onClose={() => setIsOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </React.Fragment>
  );
};

export default LoginWithModal;
