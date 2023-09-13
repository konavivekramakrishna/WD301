import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TaskCard = (props) => {
    const { item, removeTask } = props;
    return (_jsx("div", { className: "TaskItem shadow-md border border-slate-100", children: _jsxs("div", { className: "sm:ml-4 sm:flex sm:w-full sm:justify-between", children: [_jsxs("div", { children: [_jsx("a", { href: `/tasks/${item.id || ""}`, children: _jsx("h2", { className: "text-base font-bold my-1", children: item.title }) }), _jsx("p", { className: "text-sm text-slate-500", children: item.date }), _jsxs("p", { className: "text-sm text-slate-500", children: ["Description: ", item.description] })] }), _jsx("button", { className: "deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5", onClick: removeTask, children: "X" })] }) }));
};
export default TaskCard;
