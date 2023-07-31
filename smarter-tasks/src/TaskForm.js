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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TaskForm = /** @class */ (function (_super) {
    __extends(TaskForm, _super);
    function TaskForm(props) {
        var _this = _super.call(this, props) || this;
        _this.addTask = function (event) {
            event.preventDefault();
            var newTask = {
                title: _this.state.title,
            };
            _this.props.addTask(newTask);
            _this.setState({ title: "" });
        };
        _this.titleChanged = function (event) {
            console.log("".concat(event.target.value));
            _this.setState({ title: event.target.value });
        };
        _this.state = {
            title: "",
        };
        return _this;
    }
    TaskForm.prototype.render = function () {
        return (react_1.default.createElement("form", { className: "p-4 border border-solid border-gray-400 rounded-md", onSubmit: this.addTask },
            react_1.default.createElement("label", { htmlFor: "input", className: "block mb-2" }, "Input"),
            react_1.default.createElement("input", { className: "border border-solid border-gray-300 rounded w-full py-2 px-3", name: "input", type: "text", value: this.state.title, onChange: this.titleChanged }),
            react_1.default.createElement("button", { type: "submit" }, "Add item")));
    };
    return TaskForm;
}(react_1.default.Component));
exports.default = TaskForm;
