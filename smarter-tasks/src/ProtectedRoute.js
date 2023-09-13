import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children, }) {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated === "true") {
        return _jsx(_Fragment, { children: children });
    }
    else {
        return _jsx(Navigate, { to: "/signin" });
    }
}
