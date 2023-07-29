import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div class="container mx-auto mt-8">
      <h1 class="text-center mb-4 text-3xl font-bold">Smarter Tasks</h1>
      <p class="mb-4">
        Project: Graduation Final Year Project (Revamp College Website)
      </p>
      <div class="flex justify-center space-x-8">
        <div class="p-4 border border-solid border-indigo-600 w-1/2">
          <h2 class="mb-2 text-lg text-red-500">Pending</h2>
          <div class="task-card">
            <h3 class="font-bold mb-2 text-yellow-600">
              Build the darn website with static content
            </h3>
            <p class="text-sm mb-2 text-red-600">Due Date: 10th April</p>
            <p class="text-sm text-green-500">Assignee: Rohit S</p>
          </div>
          <div class="task-card">
            <h3 class="font-bold mb-2 text-yellow-600">Add a freakin' blog</h3>
            <p class="text-sm mb-2 text-red-600">Due Date: 22nd March</p>
            <p class="text-sm text-green-500">Assignee: Rohit M</p>
          </div>
          <button class="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-red-600"
            >
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-2 text-blue-600">Spawn a new task</span>
          </button>
        </div>
        <div class="p-4 border border-solid border-indigo-600 w-1/2">
          <h2 class="mb-2 text-lg text-red-500">Done</h2>
          <div class="task-card">
            <h3 class="font-bold mb-2 text-yellow-600">
              Design the darn mockUp
            </h3>
            <p class="text-sm mb-2 text-red-600">Completed at: 10th April</p>
            <p class="text-sm text-green-500">Assignee: Rohit M</p>
          </div>
          <div class="task-card">
            <h3 class="font-bold mb-2 text-yellow-600">
              Get the approval from the principal
            </h3>
            <p class="text-sm mb-2 text-red-600">Completed at: 20th April</p>
            <p class="text-sm text-green-500">Assignee: Ajay S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
