import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = (task) => {
            this.setState((state) => {
                return {
                    tasks: [...state.tasks, task],
                };
            });
        };
        this.state = {
            tasks: [],
        };
    }
    render() {
        return (React.createElement("div", { className: "container py-10 max-w-4xl mx-auto" },
            React.createElement("h1", { className: "text-3xl mb-2 font-bold text-slate-700" }, "Smarter Tasks"),
            React.createElement("h1", { className: "text-lg mb-6 text-slate-600" },
                React.createElement("span", { className: "font-bold" }, "Project: "),
                "Graduation Final Year Project (Revamp college website)"),
            React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                React.createElement("div", { className: "border border-slate-200 rounded-xl p-4" },
                    React.createElement("h1", { className: "text-slate-500 text-xl font-bold text-center mb-2" }, "Pending"),
                    React.createElement(TaskForm, { addTask: this.addTask }),
                    React.createElement(TaskList, { tasks: this.state.tasks })))));
    }
}
export default TaskApp;
