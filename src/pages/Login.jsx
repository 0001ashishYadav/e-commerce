import React from "react";
import { Link } from "react-router";

function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center pt-16">
      {/* <!-- component --> */}
      <div className="bg-gray-100 flex justify-center items-center max-w-7xl mx-auto h-[80vh] rounded-3xl overflow-hidden">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-[100%] hidden lg:block">
          <img
            src="/loginAssets/young-girl.avif"
            alt="Placeholder Image"
            className="object-cover w-full h-[100%]"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
            {/* <!-- Username Input --> */}
            <div className="mb-4">
              <label for="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Remember Me Checkbox --> */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label for="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 text-black">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* <!-- Sign up  Link --> */}
          <div className="mt-6 text-black text-center">
            <Link to="/signup" className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
