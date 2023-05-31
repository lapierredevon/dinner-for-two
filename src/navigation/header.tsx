import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-slate-900 text-stone-100">
      <nav>
        <div className="md:flex justify-end max-w-screen md:h-[80px]">
          <div className="flex items-end space-x-4 ml-4 md:mr-4">
            <Link className="hover:scale-150 hover:text-[#FFD700]" to={"/"}>
              Home
            </Link>
            <Link className="hover:scale-150 hover:text-[#FFD700]" to={"/menu"}>
              Menu
            </Link>
            <Link
              className="hover:scale-150 hover:text-[#FFD700]"
              to={"/contact"}
            >
              Contact
            </Link>
            <Link
              className="hover:scale-150 hover:text-[#FFD700]"
              to={"/order"}
            >
              Order
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
