import React from "react";
import useApiCall from "../../../../hooks/useApiCall";
import { postLogin } from "../../../../service/apiUrls";
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AuthLogin } from "../../../../types/pages.types";
import { addUser } from "../../../../store/slice/userSlice";

const LoginForm: React.FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setIsOpen, setActive }) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const { mutate } = useApiCall({
    key: postLogin,
    url: postLogin,
    method: "post",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(credentials, {
      onSuccess: (res: ApiResponse<AuthLogin>) => {
        toast.success(res?.message);
        dispatch(addUser(res));
        setIsOpen(false);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      },
      onError: (err: ApiError) => {
        toast.error(err.response?.data?.message);
      },
    });
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
      <p className="text-gray-800 mb-9 text-sm">
        Great Things Start Here. Login and Shine!
      </p>
      <form className="space-y-4" onSubmit={handleContinue}>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          value={credentials.email}
          className="w-full px-9 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
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
          onClick={() => setActive(2)}
          className="text-[#2BBC7C] cursor-pointer"
        >
          Sign Up
        </span>{" "}
        here
      </p>
    </>
  );
};

export default LoginForm;
