import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * when the form is submitted the pop-up box should close and set the useState back to false so the useState value also needs to be passed in as a prop.
 *
 */
export default function AddToCart(meal: {
  menu_item: string;
  price: number;
  addToOrder: any;
  currentOrder: any;
  popUp: any;
  setPopUp: any;
}) {
  interface ItemQuantity {
    menu_item: string;
    price: number;
    quantity: number;
  }

  const [item, SetItem] = useState<ItemQuantity>({
    menu_item: meal.menu_item,
    price: meal.price,
    quantity: 0,
  });

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div>
          <form
            className=" bg-slate-900 h-36 rounded-lg"
            onSubmit={(event) => {
              event.preventDefault();
              let arr: any[] = [...meal.currentOrder, { item }];
              meal.addToOrder(arr);
              meal.setPopUp(!meal.popUp);
            }}
          >
            <div className="flex space-x-7">
              <p className="mt-5 ml-5">{meal.menu_item}</p>
              <p className="mt-5 ml-5">{`$${meal.price}.00`}</p>
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
