import React from "react";
import { Credentials } from "../../../../types/pages.types";

const SignUp: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
  credentials: Credentials;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (act: number, e: React.FormEvent) => void;
  active: number;
}> = ({ setActive, credentials, handleChange, handleSubmit, active }) => {
  console.log(active);
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {active === 2 ? "Welcome!" : "Forget Password"}
      </h2>
      {active === 2 && (
        <p className="text-gray-800 mb-9 text-sm">
          Great Things Start Here. Sign Up and Shine!
        </p>
      )}
      <form className="space-y-4">
        {active === 2 && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={credentials.name}
            className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          value={credentials.email}
          className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={(e) => handleSubmit(3, e)}
          className="w-full bg-[#2BBC7C] text-white py-2 rounded-3xl hover:bg-[#2C8C53] cursor-pointer transition"
        >
          Continue
        </button>
      </form>
      <p className="text-gray-600 mt-4 text-md">
        Already have an account?{" "}
        <span
          onClick={() => setActive(1)}
          className="text-[#2BBC7C] cursor-pointer"
        >
          Login
        </span>{" "}
        here
      </p>
    </>
  );
};

export default SignUp;
