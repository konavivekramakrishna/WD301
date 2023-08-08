import React from "react";
import "./TaskCard.css";

interface TaskProps {
  title: string;
  description: string;
  date: Date;
}

class Task extends React.Component<TaskProps> {
  render() {
    const { title, description, date } = this.props;

    return (
      <div className="TaskItem shadow-md border border-slate-100 p-4 rounded-md">
        <h2 className="text-base font-bold mb-1">{title}</h2>
        <p className="text-sm text-slate-500">
          Due Date: {date.toDateString()}.
        </p>
        <p className="text-sm text-slate-500">Description: {description}</p>
      </div>
    );
  }
}

export default Task;
