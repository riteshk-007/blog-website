"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Loader from "./Loader";
import TestUser from "./TestUser";

const Login = () => {
  const { loginDetails, setLoginDetails, handleLoginSubmit, isLoading } =
    useContext(Context);
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <span className="absolute left-0 top-0 z-0 w-full h-screen">
        <Image
          src={"/back.png"}
          alt="back"
          layout="fill"
          className="object-cover"
        />
      </span>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={loginDetails.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={loginDetails.password}
                  onChange={handleChange}
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {!isLoading ? (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Login
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-full justify-center cursor-wait  rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  <Loader />
                </button>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            dont have an account?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
            >
              Sign up
            </Link>
          </p>
        </div>
        <TestUser />
      </div>
    </div>
  );
};

export default Login;
