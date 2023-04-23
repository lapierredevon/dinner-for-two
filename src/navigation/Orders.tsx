import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";

export default function Orders() {
  interface CurrentOrder {
    order: {
      menu_item: string;
      price: number;
      quantity: number;
    }[];
  }

  interface MenuList {
    created_at?: string;
    menu_item: string;
    price: number;
    sushi_id: number;
    updated_at?: string;
  }

  const [sushiOrder, setSushiOrder] = useState<CurrentOrder[]>([]);
  const [menu, setMenu] = useState<MenuList[]>([]);

  //creates a state to trigger when pop-up displays
  const [popUp, setPopUp] = useState(false);

  // Create a useState to keep track of the Sushi id
  const [sushiMenuItem, setSushiMenuItem] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);

  /**
   * create a useEffect that triggers any time a sushi is selected.
   * useEffect needs to cause the pop to appear and change the quantity useState to true.
   * when the form is submitted the pop-up box will close and set the useState back to false.
   */
  useEffect(() => {
    const abortController = new AbortController();
    const loadMenu = async () => {
      let menuItems = await fetch("http://localhost:5001/sushi");
      let displayMenu = await menuItems.json();
      setMenu(displayMenu.data);
    };

    loadMenu();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (sushiMenuItem) setPopUp(true);
    console.log(sushiMenuItem, itemPrice);
  }, [sushiMenuItem]);

  console.log(sushiOrder);
  return (
    <div className="bg-emerald-950 h-screen text-stone-100">
      <div className="flex justify-start ml-5 pt-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
            fill="currentColor"
          />
          <path
            d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
            fill="currentColor"
          />
          <path
            d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
            fill="currentColor"
          />
        </svg>
        <p className="ml-2">{sushiOrder.length}</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl mt-5">Place Your Order</h1>
          <div className="mt-5">
            {popUp === true && (
              <div>
                <AddToCart
                  menu_item={sushiMenuItem}
                  price={itemPrice}
                  addToOrder={setSushiOrder}
                  popUp={popUp}
                  setPopUp={setPopUp}
                  currentOrder={sushiOrder}
                />
              </div>
            )}
            {menu && (
              <ul className="space-y-5 text-1xl md:text-2xl">
                {menu.map((meal) => (
                  <motion.li
                    key={meal.sushi_id}
                    onClick={() => {
                      setSushiMenuItem(meal.menu_item);
                      setItemPrice(meal.price);
                    }}
                    whileHover={{ scale: 1.5, color: "#FFD700" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {`${meal.menu_item} - $${meal.price}.00`}
                  </motion.li>
                ))}
              </ul>
            )}
            <div className="md:ml-[250px] md:text-xl mt-5">
              <button className="bg-slate-900 w-48 h-9 rounded-lg">
                Submit Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
