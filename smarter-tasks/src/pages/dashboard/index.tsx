import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [userDetails] = useState(() => {
    const userDetails = window.localStorage.getItem("userData");
    if (userDetails && userDetails !== "undefined") {
      return JSON.parse(userDetails);
    }
    return null;
  });
  const navigate = useNavigate();
  if (!userDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Please login to view this page
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 pt-6">
        Dashboard
      </h1>
      <button
        id="logout-link"
        onClick={() => {
          localStorage.removeItem("userData");
          localStorage.removeItem("authToken");
          navigate("/signin");
        }}
        className="m-6 text-white px-4 bg-gray-700 hover:bg-gray-800text-white font-semibold py-2  rounded-md focus:outline-none focus:shadow-outline-gray "
      >
        Logout
      </button>
      <h2 className="text-xl  text-center text-gray-800 mb-8">
        Welcome, {userDetails.name}
      </h2>
      <p className="text-xl  text-center text-gray-800 mb-8">
        Your email is {userDetails.email}
      </p>
    </div>
  );
};

export default Dashboard;
