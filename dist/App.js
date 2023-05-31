var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import Header from "./navigation/header";
import { Outlet } from "react-router-dom";
import Footer from "./navigation/footer";
function App() {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("div", __assign({ className: "min-h-screen bg-emerald-950" }, { children: _jsx(Outlet, {}) })), _jsx("div", { children: _jsx(Footer, {}) })] }));
}
export default App;
