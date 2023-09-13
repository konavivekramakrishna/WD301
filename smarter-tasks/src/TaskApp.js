import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
export default function TaskApp() {
    const [taskAppState, setTaskAppState] = useLocalStorage("tasks", {
        tasks: [],
    });
    const addTask = (task) => {
        setTaskAppState({
            tasks: [...taskAppState.tasks, task],
        });
    };
    const deleteTask = (idx) => {
        const updatedTasks = [...taskAppState.tasks];
        updatedTasks.splice(idx, 1);
        setTaskAppState({
            tasks: updatedTasks,
        });
    };
    return (_jsxs("div", { className: "container py-10 max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-3xl mb-2 font-bold text-slate-700", children: "Smarter Tasks" }), _jsxs("h1", { className: "text-lg mb-6 text-slate-600", children: [_jsx("span", { className: "font-bold", children: "Project: " }), "Graduation Final Year Project (Revamp college website)"] }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsxs("div", { className: "border border-slate-200 rounded-xl p-4", children: [_jsx("h1", { className: "text-slate-500 text-xl font-bold text-center mb-2", children: "Pending" }), _jsx(TaskForm, { addTask: addTask }), _jsx(TaskList, { tasks: taskAppState.tasks, deleteTask: deleteTask })] }) })] }));
}
