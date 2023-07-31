"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TaskForm_1 = __importDefault(require("./TaskForm"));
var TaskList_1 = __importDefault(require("./TaskList"));
var TaskApp = /** @class */ (function (_super) {
    __extends(TaskApp, _super);
    function TaskApp(props) {
        var _this = _super.call(this, props) || this;
        _this.addTask = function (task) {
            _this.setState(function (state) {
                return {
                    tasks: __spreadArray(__spreadArray([], state.tasks, true), [task], false),
                };
            });
        };
        _this.state = {
            tasks: [],
        };
        return _this;
    }
    TaskApp.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "container py-10 max-w-4xl mx-auto" },
            react_1.default.createElement("h1", { className: "text-3xl mb-2 font-bold text-slate-700" }, "Smarter Tasks"),
            react_1.default.createElement("h1", { className: "text-lg mb-6 text-slate-600" },
                react_1.default.createElement("span", { className: "font-bold" }, "Project: "),
                "Graduation Final Year Project (Revamp college website)"),
            react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4" },
                react_1.default.createElement("div", { className: "border border-slate-200 rounded-xl p-4" },
                    react_1.default.createElement("h1", { className: "text-slate-500 text-xl font-bold text-center mb-2" }, "Pending"),
                    react_1.default.createElement(TaskForm_1.default, { addTask: this.addTask }),
                    react_1.default.createElement(TaskList_1.default, { tasks: this.state.tasks })))));
    };
    return TaskApp;
}(react_1.default.Component));
exports.default = TaskApp;
