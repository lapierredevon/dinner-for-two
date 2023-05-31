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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
export default function AddToCart(meal) {
    var _a = useState({
        menu_item: meal.item.menu_item,
        price: meal.item.price,
        quantity: 0,
    }), item = _a[0], SetItem = _a[1];
    return (_jsx("div", __assign({ className: "relative" }, { children: _jsx("div", __assign({ className: "absolute inset-0" }, { children: _jsx("div", { children: _jsxs("form", __assign({ className: " bg-slate-900 h-44 rounded-lg", onSubmit: function (event) {
                        event.preventDefault();
                        try {
                            var arr = __spreadArray(__spreadArray([], meal.currentOrder, true), [item], false);
                            meal.addToOrder(arr);
                            meal.setId(0);
                            meal.setAddOrder({
                                menu_item: "",
                                price: 0,
                                sushi_id: 0,
                                id: 0,
                            });
                            meal.setPopUp(false);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    } }, { children: [_jsx("div", { children: _jsx(motion.svg, __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", whileHover: { scale: 1.5 }, onClick: function () { return meal.setPopUp(false); } }, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })) }), _jsxs("div", __assign({ className: "flex space-x-7" }, { children: [_jsx("p", __assign({ className: "mt-1 ml-5" }, { children: meal.item.menu_item })), _jsx("p", __assign({ className: "mt-1 ml-5" }, { children: "$".concat(meal.item.price, ".00") }))] })), _jsx("label", __assign({ htmlFor: "quantity", className: "ml-5" }, { children: "Quantity :" })), _jsx("input", { name: "quantity", type: "number", className: "form-input ml-3 text-slate-900", id: "quantity", value: item.quantity, min: 1, onChange: function (_a) {
                                var _b;
                                var target = _a.target;
                                SetItem(__assign(__assign({}, item), (_b = {}, _b[target.name] = Number(target.value), _b)));
                            } }), _jsx("br", {}), _jsx("div", __assign({ className: "flex justify-center" }, { children: _jsx(motion.button, __assign({ className: "bg-slate-600 hover:bg-yellow-500 rounded-lg h-9 w-24 mt-2", whileHover: { scaleX: 1.1 } }, { children: "Add to cart" })) }))] })) }) })) })));
}
