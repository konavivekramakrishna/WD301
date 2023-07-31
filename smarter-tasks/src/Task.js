import React from "react";
import "./TaskCard.css";
class Task extends React.Component {
    render() {
        return (React.createElement("div", { className: "TaskItem shadow-md border border-slate-100" },
            React.createElement("h2", { className: "text-base font-bold my-1" }, this.props.title),
            React.createElement("p", { className: "text-sm text-slate-500" }, "Due Date:"),
            React.createElement("p", { className: "text-sm text-slate-500" }, "Description:")));
    }
}
export default Task;
