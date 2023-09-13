import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Header = () => {
    return (_jsx("nav", { className: "bg-gray-800 py-4", children: _jsx("div", { className: "mx-auto px-4", children: _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "flex items-center w-1/3", children: [_jsx("a", { href: "/home", className: "ml-6 text-gray-300 hover:text-white", children: "Home" }), _jsx("a", { href: "/tasks", className: "ml-6 text-gray-300 hover:text-white", children: "Tasks" })] }), _jsx("div", { className: "flex items-center w-1/3 justify-center", children: _jsx("h2", { className: "text-white text-lg font-bold", children: "Smarter Tasks" }) }), _jsx("div", { className: "flex items-center w-1/3 justify-end", children: _jsx("a", { href: "/signin", className: "ml-6 text-gray-300 hover:text-white", children: "Signout" }) })] }) }) }));
};
export default Header;
