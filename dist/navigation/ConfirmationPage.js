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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { orderConfirmation } from "../utils/api";
export default function ConfirmationPage() {
    var _a = useState({
        order_id: 0,
        receipt: [],
    }), currentOrder = _a[0], setCurrentOrder = _a[1];
    var _b = useState(0), total = _b[0], setTotal = _b[1];
    var orderId = useParams().orderId;
    /**
     * useEffect makes a get request to the database
     * Stores the data returned from database to currentOrder
     */
    useEffect(function () {
        var abortController = new AbortController();
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, orderConfirmation(Number(orderId), abortController.signal)];
                        case 1:
                            order = _a.sent();
                            return [4 /*yield*/, setCurrentOrder(order)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        })();
        return function () { return abortController.abort(); };
    }, [orderId]);
    /**
     * Maps through currentOrder and adds the product of the quantity and price to total.
     * The total amount is displayed in JSX
     */
    useEffect(function () {
        if (currentOrder !== undefined) {
            var _loop_1 = function (i) {
                var element = currentOrder.receipt[i];
                var sum = Number(element.price) * Number(element.quantity);
                setTotal(function (total) { return total + sum; });
            };
            for (var i = 0; i < currentOrder.receipt.length; i++) {
                _loop_1(i);
            }
        }
    }, [currentOrder]);
    return (_jsxs("div", __assign({ className: "bg-emerald-950 text-stone-100 text-center" }, { children: [_jsx("div", __assign({ className: " text-2xl md:text-3xl pt-5" }, { children: _jsx("p", { children: "Thank you for your order! Your order confirmation number is: ".concat(orderId, " ") }) })), _jsx("div", { children: currentOrder !== undefined &&
                    currentOrder.receipt.map(function (item, index) {
                        return (_jsxs("div", __assign({ className: "pt-5 ml-5 text-1xl md:text-2xl" }, { children: [_jsx("p", { children: "".concat(item.menu_item, " $").concat(item.price, ".00") }), _jsx("p", { children: "Quantity: ".concat(item.quantity) })] }), index));
                    }) }), _jsxs("div", __assign({ className: "mt-5 py-5 flex flex-row text-1xl md:text-2xl justify-center" }, { children: [_jsx("p", __assign({ className: "mr-3" }, { children: "Total:" })), _jsx("p", { children: "$".concat(total, ".00") })] }))] })));
}
