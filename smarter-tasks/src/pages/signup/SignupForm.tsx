import React, { useState } from "react";
import { BASE_API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [orgName, setOrgName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      let res = await fetch(`${BASE_API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: orgName,
          user_name: fullName,
          email: emailAddress,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      console.log("Registration successful");

      const data = await res.json();

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <form
      onSubmit={submitForm}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl"
    >
      <div className="mb-4">
        <label
          htmlFor="orgName"
          className="block text-gray-700 font-semibold mb-2"
        >
          Organization Name:
        </label>
        <input
          type="text"
          id="organisationName"
          value={orgName}
          onChange={(e) => handleInputChange(e, setOrgName)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="userName"
          className="block text-gray-700 font-semibold mb-2"
        >
          Full Name:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={fullName}
          onChange={(e) => handleInputChange(e, setFullName)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="emailAddress"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          value={emailAddress}
          onChange={(e) => handleInputChange(e, setEmailAddress)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="userPassword"
          name="userPassword"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
      >
        Sign Up
      </button>
    </form>
  );
}
