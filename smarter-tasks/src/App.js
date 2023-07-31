"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
require("./App.css");
var react_1 = __importDefault(require("react"));
var TaskApp_1 = __importDefault(require("./TaskApp"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(TaskApp_1.default, null)));
}
exports.default = App;
