import React from "react";
import BG from "../../assets/login-bg.jpg";
import "./login.css";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src={BG} alt="bg" className="h-screen w-full object-cover" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign In
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className=" flex justify-between py-2 text-gray-400">
            <p className="flex items-center">
              <input type="checkbox" name="cache" id="cache" className="mr-2" />{" "}
              <label htmlFor="cache"> Remember Me</label>
            </p>
            <a href="#" className="">
              Forgot Password
            </a>
          </div>
          <a
            href="/signup"
            className="w-full flex justify-center text-gray-500"
          >
            Dont have account ?
          </a>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
