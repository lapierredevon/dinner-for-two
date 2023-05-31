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
import { Link } from "react-router-dom";
export default function Header() {
    return (_jsx("header", __assign({ className: "bg-slate-900 text-stone-100" }, { children: _jsx("nav", { children: _jsx("div", __assign({ className: "md:flex justify-end max-w-screen md:h-[80px]" }, { children: _jsxs("div", __assign({ className: "flex items-end space-x-4 ml-4 md:mr-4" }, { children: [_jsx(Link, __assign({ className: "hover:scale-150 hover:text-[#FFD700]", to: "/" }, { children: "Home" })), _jsx(Link, __assign({ className: "hover:scale-150 hover:text-[#FFD700]", to: "/menu" }, { children: "Menu" })), _jsx(Link, __assign({ className: "hover:scale-150 hover:text-[#FFD700]", to: "/contact" }, { children: "Contact" })), _jsx(Link, __assign({ className: "hover:scale-150 hover:text-[#FFD700]", to: "/order" }, { children: "Order" }))] })) })) }) })));
}
