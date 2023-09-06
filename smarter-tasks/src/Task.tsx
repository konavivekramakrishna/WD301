import React from "react";
import { TaskProps } from "./types";

export default function Task(props: TaskProps) {
  return (
    <div className="TaskItem shadow-md border border-slate-100 p-4 rounded-md">
      <h2 className="text-base font-bold mb-1">{props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date: {props.date.toDateString()}.
      </p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>

      <button className="deleteTaskButton" onClick={props.deleteTask}>
        delete task
      </button>
    </div>
  );
}
