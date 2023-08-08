import React from "react";
import Task from "./Task";
class TaskList extends React.Component {
    render() {
        return this.props.tasks.map((task, idx) => (React.createElement(Task, { key: idx, title: task.title, description: task.description, date: task.date })));
    }
}
export default TaskList;
