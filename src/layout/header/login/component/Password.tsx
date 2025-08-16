import React from "react";
import { Credentials } from "../../../../types/pages.types";

const PasswordForm: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
  credentials: Credentials;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ setActive, credentials, handleChange }) => {
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
      <p className="text-gray-800 mb-9 text-sm">
        Great Things Start Here. Sign In and Shine!
      </p>
      <form className="space-y-4" onSubmit={handleContinue}>
        <input
          type="password"
          placeholder="Password"
          name="newPassword"
          onChange={handleChange}
          value={credentials.newPassword}
          className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="confirmPassword"
          value={credentials.confirmPassword}
          className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-[#2BBC7C] text-white py-2 rounded-3xl hover:bg-[#2C8C53] cursor-pointer transition"
        >
          Continue
        </button>
      </form>
      <p className="text-gray-600 mt-4 text-xs">
        Don't have an account?{" "}
        <span
          onClick={() => setActive(1)}
          className="text-[#2BBC7C] cursor-pointer"
        >
          Sign Up
        </span>{" "}
        here
      </p>
    </>
  );
};

export default PasswordForm;
