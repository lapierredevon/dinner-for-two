import React, { useState } from "react";
import { motion } from "framer-motion";

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
  currentOrder: AddOrderItemToArray[];
  setPopUp: (toggle: boolean) => void;
  id: number;
  setId: (id: number) => void;
  setAddOrder: (initialOrder: returnAddOrderInitialState) => void;
}

interface ItemQuantity {
  menu_item?: string;
  price?: number;
  quantity?: number;
  id?: number;
}

interface AddOrderItemToArray {
  menu_item?: string;
  price?: number;
  quantity?: number;
  id?: number;
}

export default function AddToCart(meal: MealInfo) {
  const [item, SetItem] = useState<ItemQuantity>({
    menu_item: meal.item.menu_item,
    price: meal.item.price,
    quantity: 0,
  });

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div>
          <form
            className=" bg-slate-900 h-44 rounded-lg"
            onSubmit={(event) => {
              event.preventDefault();
              try {
                let arr: ItemQuantity[] = [...meal.currentOrder, item];
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
            <div>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                whileHover={{ scale: 1.5 }}
                onClick={() => meal.setPopUp(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </div>
            <div className="flex space-x-7">
              <p className="mt-1 ml-5">{meal.item.menu_item}</p>
              <p className="mt-1 ml-5">{`$${meal.item.price}.00`}</p>
            </div>
            <label htmlFor="quantity" className="ml-5">
              Quantity :
            </label>
            <input
              name="quantity"
              type="number"
              className="form-input ml-3 text-slate-900"
              id="quantity"
              value={item.quantity}
              min={1}
              onChange={({ target }) => {
                SetItem({ ...item, [target.name]: Number(target.value) });
              }}
            />
            <br />
            <div className="flex justify-center">
              <motion.button
                className="bg-slate-600 hover:bg-yellow-500 rounded-lg h-9 w-24 mt-2"
                whileHover={{ scaleX: 1.1 }}
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
