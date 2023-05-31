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
import { useRouteError } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import emptyTable from "../imagesAndVideos/Empty-Table.png";
export default function ErrorRoute() {
    var error = useRouteError();
    console.error(error);
    return (_jsxs("div", __assign({ className: "bg-emerald-950 text-stone-100" }, { children: [_jsx(Header, {}), _jsx("div", __assign({ className: "flex justify-center h-screen md:h-full w-screen" }, { children: _jsxs("div", __assign({ className: "flex-col text-sm md:text-2xl text-center" }, { children: [_jsx("img", { src: emptyTable, className: "h-[300px] w-[300px] md:h-[900px] md:w-[900px]" }), _jsx("h1", { children: "Oops!" }), _jsx("p", { children: "The page you are looking for can't be found or no longer exists" })] })) })), _jsx(Footer, {})] })));
}
