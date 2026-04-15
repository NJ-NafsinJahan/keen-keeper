import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-7xl sm:text-8xl font-extrabold text-[#244D3F]">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        Looks like this page doesn’t exist or has been moved. Please check the
        URL or go back to the homepage.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 bg-[#244D3F] hover:bg-[#244D3F] text-white px-6 py-2 rounded-lg shadow-md transition"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
