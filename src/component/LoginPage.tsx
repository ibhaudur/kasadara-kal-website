import React from "react";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden md:overflow-visible max-h-screen md:max-h-none overflow-y-auto md:overflow-y-visible">
        <div className="flex flex-col items-center justify-center p-6 relative bg-white">
          <img
            src="/images/login-page.png"
            alt="Login page"
            className="max-w-[80%] h-auto"
          />
          <p className="text-center mt-4 text-sm sm:text-base font-medium text-gray-700">
            Your Future Awaits — Start Your Exam Journey Today!
          </p>
        </div>

        
        <div className="bg-white p-8 sm:p-10 flex flex-col justify-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-800 mb-9 text-sm sm:text-base">
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
              className="w-full bg-green-500 text-white py-2 rounded-3xl hover:bg-green-600 transition"
            >
              Continue
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Or Login With
          </div>

         <div className="flex flex-wrap justify-center items-center gap-3 mt-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl ">
              <img src="/images/google.png" alt="Google icon" className="w-5 h-5" />
              <span className="text-gray-700 text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl">
              <img src="/images/facebook.png" alt="Facebook icon" className="w-5 h-5" />
              <span className="text-gray-700 text-sm font-medium">Facebook</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl">
              <img src="/images/apple.png" alt="Apple icon" className="w-5 h-5" />
              <span className="text-gray-700 text-sm font-medium">Apple</span>
            </button>
          </div>

          <p className="text-gray-300 text-sm text-center mt-8 mb-6">
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

export default LoginPage;
