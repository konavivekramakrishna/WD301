import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  date: Date;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      date: new Date(),
      title: "",
      description: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", date: new Date() });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ date: new Date(event.target.value) });
  };

  render() {
    return (
      <form
        className="p-4 border border-solid border-gray-400 rounded-md"
        onSubmit={this.addTask}
      >
        <label htmlFor="todoTitle" className="block mb-2 font-medium">
          Title
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2"
          name="todoTitle"
          id="todoTitle"
          type="text"
          required
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <label htmlFor="todoDescription" className="block mb-2 font-medium">
          Description
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2"
          name="todoDescription"
          id="todoDescription"
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <label htmlFor="todoDueDate" className="block mb-2 font-medium">
          Due Date
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2"
          type="date"
          required
          name="todoDueDate"
          id="todoDueDate"
          onChange={this.dateChanged}
        />

        <button
          id="addTaskButton"
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
