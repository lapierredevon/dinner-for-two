import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { postData } from "../utils/api";
import { useNavigate } from "react-router-dom";

interface CurrentOrder {
  menu_item?: string;
  price?: number;
  quantity?: number;
}

interface MenuList {
  created_at?: string;
  menu_item: string;
  price: number;
  sushi_id?: number;
  updated_at?: string;
  id?: number;
}

interface Receipt {
  receipt: Array<CurrentOrder>;
}

/**
 * Create a function that can handle post request
 * @returns
 */

export default function Orders() {
  const [sushiOrder, setSushiOrder] = useState<CurrentOrder[]>([]);
  const [menu, setMenu] = useState<MenuList[]>([]);
  const [tempId, setTempId] = useState<number>(0);
  const navigate = useNavigate();

  const [popUp, setPopUp] = useState(false);
  const [addOrder, setAddOrder] = useState<MenuList>({
    menu_item: "",
    price: 0,
    sushi_id: 0,
    id: 0,
  });

  const postToDataBase = async (item: Receipt) => {
    try {
      const dataToServer = await postData(item);
      console.log("Server", dataToServer.order_id);
      navigate(`/confirmation/${dataToServer.order_id}`);
    } catch (error) {
      console.log(error);
    }
  };

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
    if (addOrder.menu_item !== "" && addOrder.id === tempId) {
      setPopUp(true);
    }
  }, [tempId]);

  return (
    <div className="bg-emerald-950 h-fill text-stone-100">
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
      <div className="flex justify-center md:mt-20">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl mt-5">Place Your Order</h1>
          <div className="mt-5">
            {popUp === true && (
              <div>
                <AddToCart
                  item={addOrder}
                  addToOrder={setSushiOrder}
                  id={tempId}
                  setId={setTempId}
                  setPopUp={setPopUp}
                  setAddOrder={setAddOrder}
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
                      // setSushiMenuItem(meal.menu_item);
                      // setItemPrice(meal.price);
                      setTempId((tempId) => tempId + 1);
                      setAddOrder({
                        menu_item: meal.menu_item,
                        price: meal.price,
                        sushi_id: meal.sushi_id,
                        id: tempId + 1,
                      });
                      console.log("tempId Counter", tempId);
                      console.log("addOrder.id", addOrder.id);
                    }}
                    whileHover={{ scale: 1.5, color: "#FFD700" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {`${meal.menu_item} - $${meal.price}.00`}
                  </motion.li>
                ))}
              </ul>
            )}
            <div className="md:ml-[250px] md:text-xl mt-5 mb-10">
              <button
                className="bg-slate-900 w-48 h-9 rounded-lg"
                onClick={(event) => {
                  event.preventDefault();
                  const sendOrder: Receipt = {
                    receipt: sushiOrder,
                  };
                  postToDataBase(sendOrder);
                }}
              >
                Submit Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
