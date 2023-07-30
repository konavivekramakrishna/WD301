import React from "react";
import Task from "./Task";

interface Props {}

interface TaskItem {
  title: string;
}
interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <Task title="Pay rent" />
        <Task title="Go shopping" />
        <Task title="Buy flowers" />
      </div>
    );
  }
}

export default TaskList;
