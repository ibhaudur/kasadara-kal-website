import { useEffect, useRef, useState } from "react";
import OtpForm from "./component/OtpForm";
import LoginForm from "./component/LoginForm";
import SignUp from "./component/SignUp";
import PasswordForm from "./component/Password";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
    otp: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-2 cursor-pointer ml-3 text-sm text-black border border-[#DCDFE4] rounded-xl"
      >
        Signup / Login
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#00000070] flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white w-full max-w-4xl rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Left side image */}
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
              {active === 1 && (
                <SignUp
                  credentials={credentials}
                  handleChange={handleChange}
                  setActive={setActive}
                />
              )}
              {active === 2 && (
                <LoginForm setIsOpen={setIsOpen} setActive={setActive} />
              )}
              {active === 3 && (
                <OtpForm
                  onBack={() => setActive(1)}
                  credentials={credentials}
                  setCredentials={setCredentials}
                  setActive={setActive}
                />
              )}
              {active === 4 && (
                <PasswordForm
                  credentials={credentials}
                  handleChange={handleChange}
                  setActive={setActive}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
