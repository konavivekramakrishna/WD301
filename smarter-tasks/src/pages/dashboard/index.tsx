import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userDetails] = useState(() => {
    const userD = localStorage.getItem("userData");

    if (userD) {
      return JSON.parse(userD);
    }
    return null;
  });

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="mb-2">Username: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <a
          href="#"
          id="logout-link"
          className="mt-4 inline-block text-blue-500 hover:underline"
          onClick={() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("authToken");
            navigate("/signin");
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
