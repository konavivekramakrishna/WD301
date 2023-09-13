import { jsx as _jsx } from "react/jsx-runtime";
import Task from "./Task";
const TaskList = (props) => {
    return (_jsx("ul", { children: props.tasks.map((task, idx) => (_jsx("li", { children: _jsx(Task, { item: task, removeTask: () => props.deleteTask(idx) }) }, task.id))) }));
};
export default TaskList;
