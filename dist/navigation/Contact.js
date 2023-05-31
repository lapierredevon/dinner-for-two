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
export default function Contact() {
    return (_jsxs("div", __assign({ className: "h-screen bg-emerald-950 text-slate-100" }, { children: [_jsx("h1", __assign({ className: "text-center text-4xl md:text-7xl pt-9" }, { children: "Contact" })), _jsx("p", __assign({ className: "text-2xl md:text-3xl mt-5" }, { children: "To place an order for pickup or to check the status of an existing order use the phone number provided below" })), _jsxs("div", __assign({ className: "text-1xl md:text-2xl mt-9 flex" }, { children: [_jsx("p", { children: "Phone Number:" }), _jsx("p", { children: " 1-111-111-1111" })] }))] })));
}
