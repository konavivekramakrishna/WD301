import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const TaskDetailsPage = () => {
    const { id } = useParams();
    const [taskAppState] = useLocalStorage("tasks", {
        tasks: [],
    });
    const task = taskAppState.tasks.find((task) => task.id === id);
    return (_jsxs("div", { className: "bg-white shadow-md rounded-md p-4 m-8", children: [_jsx("div", { className: "flex justify-between items-center mb-4", children: _jsx("h3", { className: "text-lg font-medium", children: task === null || task === void 0 ? void 0 : task.title }) }), _jsx("p", { className: "text-gray-600", children: task === null || task === void 0 ? void 0 : task.description }), _jsx("p", { className: "text-gray-600", children: task === null || task === void 0 ? void 0 : task.date })] }));
};
export default TaskDetailsPage;
