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
import { jsx as _jsx } from "react/jsx-runtime";
export default function Footer() {
    return (_jsx("footer", __assign({ className: "bg-slate-900 text-stone-100 h-[100px]" }, { children: _jsx("div", { children: "Copyright\u00A9 2023 DevTheDev Programming Inc. | Trademark Policy" }) })));
}
