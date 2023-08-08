import React from "react";
class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = (event) => {
            event.preventDefault();
            const newTask = {
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
            };
            this.props.addTask(newTask);
            this.setState({ title: "", description: "", date: new Date() });
        };
        this.titleChanged = (event) => {
            this.setState({ title: event.target.value });
        };
        this.descriptionChanged = (event) => {
            this.setState({ description: event.target.value });
        };
        this.dateChanged = (event) => {
            this.setState({ date: new Date(event.target.value) });
        };
        this.state = {
            date: new Date(),
            title: "",
            description: "",
        };
    }
    render() {
        return (React.createElement("form", { className: "p-4 border border-solid border-gray-400 rounded-md", onSubmit: this.addTask },
            React.createElement("label", { htmlFor: "todoTitle", className: "block mb-2 font-medium" }, "Title"),
            React.createElement("input", { className: "border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2", name: "todoTitle", id: "todoTitle", type: "text", required: true, value: this.state.title, onChange: this.titleChanged }),
            React.createElement("label", { htmlFor: "todoDescription", className: "block mb-2 font-medium" }, "Description"),
            React.createElement("input", { className: "border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2", name: "todoDescription", id: "todoDescription", type: "text", value: this.state.description, onChange: this.descriptionChanged }),
            React.createElement("label", { htmlFor: "todoDueDate", className: "block mb-2 font-medium" }, "Due Date"),
            React.createElement("input", { className: "border border-solid border-gray-300 rounded w-full py-2 px-3 mb-2", type: "date", required: true, name: "todoDueDate", id: "todoDueDate", onChange: this.dateChanged }),
            React.createElement("button", { id: "addTaskButton", type: "submit", className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300" }, "Add Task")));
    }
}
export default TaskForm;
