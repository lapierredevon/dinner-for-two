import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Animate Mobile Screen Button
 * @returns
 */
export default function Header() {
  const [displayMobileNavMenu, SetDisplayMobileNavMenu] = useState(false);

  const showMobileMenu = () => {
    SetDisplayMobileNavMenu(!displayMobileNavMenu);
  };

  return (
    <header className="bg-slate-900 text-stone-100">
      <nav>
        <div className="hidden md:flex justify-end max-w-screen h-[80px]">
          <div className="flex items-end space-x-4">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/order"}>Order</Link>
          </div>
        </div>
        <div className="md:hidden flex justify-start h-[auto] space-x-4">
          <div className="flex flex-col">
            <button onClick={showMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
          {displayMobileNavMenu && (
            <div className="relative">
              <div
                className="flex flex-col items-start space-y-3  animate-slide-in absolute z-100
                bg-slate-900 w-screen
              "
                style={{ top: "100%", left: -40 }}
              >
                <Link to={"/home"}>Home</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/order"}>Order</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
