import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-stone-100">
      <nav>
        <div className="md:flex justify-end max-w-screen md:h-[80px]">
          <div className="flex items-end space-x-4 ml-4 md:mr-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/order"}>Order</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
