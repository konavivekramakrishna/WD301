import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <form
        className="p-4 border border-solid border-gray-400 rounded-md"
        onSubmit={this.addTask}
      >
        <label htmlFor="input" className="block mb-2">
          Input
        </label>
        <input
          className="border border-solid border-gray-300 rounded w-full py-2 px-3"
          name="input"
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
        />

        <button type="submit">Add item</button>
      </form>
    );
  }
}

export default TaskForm;