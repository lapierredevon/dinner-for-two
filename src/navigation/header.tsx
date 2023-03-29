import React from "react";
import { Link } from "react-router-dom";

/**
 * Make the navigation menu bar mobile responsive
 * When the app is on the phone screen I want it to show 3 lines that when it is clicked o by the user  all of the menu items appear
 */
export default function Header() {
  return (
    <header className="bg-slate-600 text-stone-100">
      <nav>
        <div className="flex justify-end max-w-screen h-[80px]">
          <div className="flex items-end space-x-4">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/reservations"}>Reservations</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
