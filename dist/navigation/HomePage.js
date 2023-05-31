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
import hpVideo from "../imagesAndVideos/hpVideo.mp4";
import sushi1 from "../imagesAndVideos/sushi-1.png";
import eatSushi from "../imagesAndVideos/eatSushi.png";
import { motion } from "framer-motion";
import "../App.css";
export default function HomePage() {
    return (_jsxs("div", __assign({ className: "bg-emerald-950 text-stone-100" }, { children: [_jsx("div", __assign({ className: "flex justify-center" }, { children: _jsxs("div", __assign({ className: "flex h-fill relative w-[95%] translate-y-6" }, { children: [_jsx("video", { src: hpVideo, autoPlay: true, loop: true, muted: true, className: "rounded-lg" }), _jsx("div", __assign({ className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center" }, { children: _jsx(motion.p, __assign({ className: "text-[20px] md:text-[100px]", initial: { y: "-100vh" }, animate: { y: 0 }, transition: { duration: 1, type: "spring", stiffness: 300 } }, { children: "Dinner for two" })) }))] })) })), _jsx(motion.div, __assign({ className: " flex justify-evenly mt-36", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 3 } }, { children: _jsxs("div", __assign({ className: "flex flex-row space-x-5 items-center " }, { children: [_jsx("div", { children: _jsx("img", { src: sushi1, className: "h-96 w-auto" }) }), _jsx("div", { children: _jsxs("p", __assign({ className: "md:text-4xl text-center" }, { children: ["\"The best sushi I've had in New Jersey\"", _jsx("br", {}), "R. Greene"] })) })] })) })), _jsx(motion.div, __assign({ className: "flex justify-evenly mt-36 pb-8", initial: { x: "-100vw" }, whileInView: { x: 0 }, transition: { duration: 1 } }, { children: _jsxs("div", __assign({ className: "flex flex-row space-x-5 items-center" }, { children: [_jsx("div", { children: _jsxs("p", __assign({ className: "md:text-4xl text-center" }, { children: ["\"I can tell that the food is fresh\"", _jsx("br", {}), "R. Nwambuo"] })) }), _jsx("div", { children: _jsx("img", { src: eatSushi, className: "h-96 w-auto" }) })] })) }))] })));
}
