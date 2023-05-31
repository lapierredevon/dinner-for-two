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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { postData } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { loader } from "../utils/api";
export default function Orders() {
    var _this = this;
    var _a = useState([]), sushiOrder = _a[0], setSushiOrder = _a[1];
    var _b = useState([]), menu = _b[0], setMenu = _b[1];
    var _c = useState(0), tempId = _c[0], setTempId = _c[1];
    var navigate = useNavigate();
    var _d = useState(false), popUp = _d[0], setPopUp = _d[1];
    var _e = useState({
        menu_item: "",
        price: 0,
        sushi_id: 0,
        id: 0,
    }), addOrder = _e[0], setAddOrder = _e[1];
    /**
     * This function makes a post request to the database.
     * This function uses the orderId that is returned and navigates to the confirmation page.
     */
    var postToDataBase = function (item) { return __awaiter(_this, void 0, void 0, function () {
        var dataToServer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, postData(item)];
                case 1:
                    dataToServer = _a.sent();
                    navigate("/confirmation/".concat(dataToServer.order_id));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    /**
     * useEffect uses loader function to get a list of menu items from the database.
     */
    useEffect(function () {
        var abortController = new AbortController();
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var loadMenu;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, loader(abortController.signal)];
                        case 1:
                            loadMenu = _a.sent();
                            return [4 /*yield*/, setMenu(loadMenu)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        })();
        return function () { return abortController.abort(); };
    }, []);
    /**
     * When pop-up is set to true it will trigger a pop-up to appear.
     * The pop-up contains a form which is used to determine the quantity of the item you want to order.
     */
    useEffect(function () {
        if (addOrder.menu_item !== "" && addOrder.id === tempId) {
            setPopUp(true);
        }
    }, [tempId]);
    return (_jsxs("div", __assign({ className: "bg-emerald-950 h-fit text-stone-100" }, { children: [_jsxs("div", __assign({ className: "flex justify-start ml-5 pt-3" }, { children: [_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" }, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }) })), _jsx("p", __assign({ className: "ml-2" }, { children: sushiOrder.length }))] })), _jsx("div", __assign({ className: "flex justify-center md:mt-20" }, { children: _jsxs("div", __assign({ className: "flex flex-col" }, { children: [_jsx("h1", __assign({ className: "text-3xl md:text-6xl mt-5" }, { children: "Place Your Order" })), _jsxs("div", __assign({ className: "mt-5" }, { children: [popUp === true && (_jsx("div", { children: _jsx(AddToCart, { item: addOrder, addToOrder: setSushiOrder, id: tempId, setId: setTempId, setPopUp: setPopUp, setAddOrder: setAddOrder, currentOrder: sushiOrder }) })), menu && (_jsx("ul", __assign({ className: "space-y-5 text-1xl md:text-2xl" }, { children: menu.map(function (meal) { return (_jsx(motion.li, __assign({ onClick: function () {
                                            setTempId(function (tempId) { return tempId + 1; });
                                            setAddOrder({
                                                menu_item: meal.menu_item,
                                                price: meal.price,
                                                sushi_id: meal.sushi_id,
                                                id: tempId + 1,
                                            });
                                        }, whileHover: { color: "#FFD700" } }, { children: "".concat(meal.menu_item, " - $").concat(meal.price, ".00") }), meal.sushi_id)); }) }))), _jsx("div", __assign({ className: "md:ml-[250px] md:text-xl mt-5 mb-10" }, { children: _jsx("button", __assign({ className: "bg-slate-900 w-48 h-9 rounded-lg", onClick: function (event) {
                                            event.preventDefault();
                                            var sendOrder = {
                                                receipt: sushiOrder,
                                            };
                                            postToDataBase(sendOrder);
                                        } }, { children: "Submit Purchase" })) }))] }))] })) }))] })));
}
