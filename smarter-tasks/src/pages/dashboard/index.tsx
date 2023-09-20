import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [user] = useState(() => {
    const user = window.localStorage.getItem("userData");

    if (user) {
      return JSON.parse(user);
    }
    return null;
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          You are not logged in
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex  flex-col justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <div className="bg-white mx-auto text-center shadow overflow-hidden sm:rounded-lg p-8 w-1/3">
        <p className="text-gray-800">Welcome, {user.name}</p>
        <p className="text-gray-800">Your email is {user.email}</p>
      </div>
      <a
        href="/signin"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mx-auto"
        onClick={() => {
          window.localStorage.removeItem("userData");
          window.localStorage.removeItem("authToken");
        }}
        id="logout-link"
      >
        Logout
      </a>
    </div>
  );
};

export default Dashboard;
