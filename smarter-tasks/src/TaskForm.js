import React from "react";
class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = (event) => {
            event.preventDefault();
            const newTask = {
                title: this.state.title,
            };
            this.props.addTask(newTask);
            this.setState({ title: "" });
        };
        this.titleChanged = (event) => {
            console.log(`${event.target.value}`);
            this.setState({ title: event.target.value });
        };
        this.state = {
            title: "",
        };
    }
    render() {
        return (React.createElement("form", { className: "p-4 border border-solid border-gray-400 rounded-md", onSubmit: this.addTask },
            React.createElement("label", { htmlFor: "input", className: "block mb-2" }, "Input"),
            React.createElement("input", { className: "border border-solid border-gray-300 rounded w-full py-2 px-3", name: "input", type: "text", value: this.state.title, onChange: this.titleChanged }),
            React.createElement("button", { type: "submit" }, "Add item")));
    }
}
export default TaskForm;
