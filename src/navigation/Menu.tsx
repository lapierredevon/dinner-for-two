import React, { useState, useEffect } from "react";
import motion from "framer-motion";
import menuRoll from "../imagesAndVideos/menuRolls.png";
// import loader from "../utils/api";

/**
 * Fix the font size make mobiley responsive
 * @returns tsxcreated_at
 */

export default function Menu() {
  interface MenuList {
    created_at?: string;
    menu_item: string;
    price: number;
    sushi_id: number;
    updated_at?: string;
  }

  const [menu, SetMenu] = useState<MenuList[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const loadMenu = async () => {
      let menuItems = await fetch("http://localhost:5001/sushi");
      let displayMenu = await menuItems.json();
      console.log("test", displayMenu);
      SetMenu(displayMenu.data);
    };

    loadMenu();
    return () => abortController.abort();
  }, []);

  console.log("test 2", menu);
  return (
    <div className="bg-emerald-950 text-stone-100 sm:h-screen md:h-fit">
      <h1 className="text-center text-3xl md:text-6xl mb-7">Rolls</h1>
      <div>
        <div>
          <div className="flex md:justify-evenly ">
            <div className="flex flex-col mr-5">
              {menu !== null &&
                menu.map((meal) => (
                  <div
                    key={meal.sushi_id}
                    className="flex md:flex-row mb-6 space-x-3 sm:text-1xl md:text-2xl"
                  >
                    <p>{meal.menu_item}</p>
                    <p>{`$${meal.price}.00`}</p>
                  </div>
                ))}
            </div>
            <div className="sm:h-fill sm:w-[300px] md:h-[700px] md:w-[850px] rounded-lg">
              <img src={menuRoll} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
