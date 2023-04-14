import React, { useState } from "react";
import motion from "framer-motion";
import menuRoll from "../imagesAndVideos/menuRolls.png";

/**
 * Work on backend
 * use useeffect to load the required data for the page
 * Then add the current styling
 * @returns tsx
 */
export default function Menu() {
  return (
    <div className="bg-emerald-950 text-stone-100 h-screen">
      <h1 className="text-center md:text-7xl mb-7">Rolls</h1>
      <div>
        <div>
          <div className="flex justify-evenly">
            <div className="flex flex-col">
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
              <div className="flex md:flex-row space-x-3 md:text-3xl">
                <p>California Roll </p>
                <p>$7.99</p>
              </div>
            </div>
            <div>
              <img
                src={menuRoll}
                className="sm:h-[200px] sm:w-[300px] md:h-[700px] md:w-[850px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}