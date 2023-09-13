import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function TaskForm(props) {
    const initialFormState = {
        id: null,
        title: "",
        description: "",
        date: "",
    };
    const [formState, setFormState] = useState(initialFormState);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState(Object.assign(Object.assign({}, formState), { [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState.title.trim() === "" || formState.date.trim() === "") {
            return;
        }
        // Set the id to be the same as the date
        const taskToAdd = Object.assign(Object.assign({}, formState), { id: formState.date });
        props.addTask(taskToAdd);
        setFormState(initialFormState);
    };
    return (_jsx("form", { onSubmit: handleSubmit, children: _jsxs("div", { className: "grid md:grid-cols-4 md:gap-3", children: [_jsx("div", { className: "relative z-0 w-full mb-6 group", children: _jsx("input", { id: "todoTitle", name: "title", type: "text", value: formState.title, onChange: handleInputChange, className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer", placeholder: "Todo Title" }) }), _jsx("div", { className: "relative z-0 w-full mb-6 group", children: _jsx("input", { id: "todoDescription", name: "description", type: "text", value: formState.description, onChange: handleInputChange, placeholder: "Description", className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" }) }), _jsx("div", { className: "relative z-0 w-full mb-6 group", children: _jsx("input", { id: "todoDueDate", name: "date", type: "date", value: formState.date, onChange: handleInputChange, className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer", placeholder: "Due Date", required: true }) }), _jsx("div", { className: "relative z-0 w-full mb-6 group", children: _jsx("button", { id: "addTaskButton", type: "submit", className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: "Add item" }) })] }) }));
}
