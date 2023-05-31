import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { postData } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { loader } from "../utils/api";

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

  /**
   * This function makes a post request to the database.
   * This function uses the orderId that is returned and navigates to the confirmation page.
   */
  const postToDataBase = async (item: Receipt) => {
    try {
      const dataToServer = await postData(item);
      navigate(`/confirmation/${dataToServer.order_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * useEffect uses loader function to get a list of menu items from the database.
   */
  useEffect(() => {
    const abortController = new AbortController();
    (async function () {
      const loadMenu = await loader(abortController.signal);
      await setMenu(loadMenu);
    })();
    return () => abortController.abort();
  }, []);

  /**
   * When pop-up is set to true it will trigger a pop-up to appear.
   * The pop-up contains a form which is used to determine the quantity of the item you want to order.
   */
  useEffect(() => {
    if (addOrder.menu_item !== "" && addOrder.id === tempId) {
      setPopUp(true);
    }
  }, [tempId]);

  return (
    <div className="bg-emerald-950 h-fit text-stone-100">
      <div className="flex justify-start ml-5 pt-3">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
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
                      setTempId((tempId) => tempId + 1);
                      setAddOrder({
                        menu_item: meal.menu_item,
                        price: meal.price,
                        sushi_id: meal.sushi_id,
                        id: tempId + 1,
                      });
                    }}
                    whileHover={{ color: "#FFD700" }}
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
