import React, { useState, ChangeEvent, FormEvent } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

export default function TaskForm(props: TaskFormProps) {
  const initialFormState: TaskItem = {
    id: null,
    title: "",
    description: "",
    date: "",
  };

  const [formState, setFormState] = useState<TaskItem>(initialFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.title.trim() === "" || formState.date.trim() === "") {
      return;
    }
    // Set the id to be the same as the date
    const taskToAdd: TaskItem = { ...formState, id: formState.date };
    props.addTask(taskToAdd);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="title"
            type="text"
            value={formState.title}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Todo Title"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="description"
            type="text"
            value={formState.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="date"
            type="date"
            value={formState.date}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Due Date"
            required
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            id="addTaskButton"
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
}
