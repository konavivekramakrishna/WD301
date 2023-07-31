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
var Task_1 = __importDefault(require("./Task"));
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskList.prototype.render = function () {
        return this.props.tasks.map(function (task, idx) { return (react_1.default.createElement(Task_1.default, { key: idx, title: task.title })); });
    };
    return TaskList;
}(react_1.default.Component));
exports.default = TaskList;
