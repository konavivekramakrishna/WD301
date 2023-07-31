import React from "react";
import Task from "./Task";
class TaskList extends React.Component {
    render() {
        return this.props.tasks.map((task, idx) => (React.createElement(Task, { key: idx, title: task.title })));
    }
}
export default TaskList;
