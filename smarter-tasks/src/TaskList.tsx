import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
import { TaskListProps } from "./types";

export default function TaskList(props: TaskListProps) {
  return props.tasks.map((task: TaskItem, idx: number) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        date={new Date(task.date)}
        deleteTask={() => props.deleteTask(idx)}
      />
    </li>
  ));
}
