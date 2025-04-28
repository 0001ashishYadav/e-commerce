import React from "react";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="pt-18 h-[70vh] max-w-7xl mx-auto grid items-center">
      <div className="grid gap-5">
        <p className="text-7xl font-semibold text-center ">404 Not Found</p>
        <p className="text-center">
          Your visited page not found. You may go home page
        </p>
      </div>

      {/* button sec */}
      <div className="flex justify-center items-center my-6 ">
        <Link to="/">
          <button className="md:px-8 px-3 md:py-3 py-1 bg-red-400 rounded text-white font-semibold">
            back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
