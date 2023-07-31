import "./index.css";
import "./App.css";
import React from "react";
import TaskApp from "./TaskApp";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(TaskApp, null)));
}
export default App;
