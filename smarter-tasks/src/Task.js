import React from "react";
import "./TaskCard.css";
class Task extends React.Component {
    render() {
        const { title, description, date } = this.props;
        return (React.createElement("div", { className: "TaskItem shadow-md border border-slate-100 p-4 rounded-md" },
            React.createElement("h2", { className: "text-base font-bold mb-1" }, title),
            React.createElement("p", { className: "text-sm text-slate-500" },
                "Due Date: ",
                date.toDateString(),
                "."),
            React.createElement("p", { className: "text-sm text-slate-500" },
                "Description: ",
                description)));
    }
}
export default Task;
