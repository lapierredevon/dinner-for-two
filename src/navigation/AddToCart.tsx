import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * find out how to use the setStateAction function to pass down state
 * fix the sushiOrder function that is passed into the AddtoCart function. The Sushi order function should be an object within object
 */

interface ItemQuantity {
  menu_item: string;
  price: number;
  quantity: number;
}

interface returnAddOrderInitialState {
  menu_item: string;
  price: number;
  sushi_id?: number;
  id?: number;
}

interface MealInfo {
  item: {
    menu_item: string;
    price: number;
    sushi_id?: number;
    id?: number;
  };
  addToOrder: any;
  currentOrder: any;
  setPopUp: (toggle: boolean) => void;
  id: number;
  setId: (id: number) => void;
  setAddOrder: (initialOrder: returnAddOrderInitialState) => void;
}

interface ItemQuantity {
  menu_item: string;
  price: number;
  quantity: number;
  id: number;
}

export default function AddToCart(meal: MealInfo) {
  const [item, SetItem] = useState<ItemQuantity>({
    menu_item: meal.item.menu_item,
    price: meal.item.price,
    quantity: 0,
    id: meal.id,
  });

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div>
          <form
            className=" bg-slate-900 h-36 rounded-lg"
            onSubmit={(event) => {
              event.preventDefault();
              try {
                let arr: any[] = [...meal.currentOrder, { item }];
                meal.addToOrder(arr);
                meal.setId(0);
                meal.setAddOrder({
                  menu_item: "",
                  price: 0,
                  sushi_id: 0,
                  id: 0,
                });
                meal.setPopUp(false);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div className="flex space-x-7">
              <p className="mt-5 ml-5">{meal.item.menu_item}</p>
              <p className="mt-5 ml-5">{`$${meal.item.price}.00`}</p>
            </div>
            <label htmlFor="quantity" className="ml-5">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              className="form-input ml-3 text-slate-900"
              id="quantity"
              value={item.quantity}
              min={1}
              onChange={({ target }) => {
                SetItem({ ...item, [target.name]: target.value });
                console.log(item);
              }}
            />
            <br />
            <div className="flex justify-center">
              <motion.button
                className="bg-slate-600 hover:bg-yellow-500 rounded-lg h-9 w-24 mt-3"
                whileHover={{ scale: 1.4 }}
              >
                Add to cart
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
