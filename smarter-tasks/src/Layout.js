import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
}
