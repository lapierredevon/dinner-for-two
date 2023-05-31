import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { orderConfirmation } from "../utils/api";

/**
 * This interface is used in the TotalOrder interface to determine what values will fit in the array that is a value of receipt in TotalOrder
 */
interface CurrentOrder {
  menu_item: string;
  price: number;
  quantity: number;
}

interface TotalOrder {
  order_id: number;
  receipt: Array<CurrentOrder>;
}

export default function ConfirmationPage() {
  const [currentOrder, setCurrentOrder] = useState<TotalOrder>({
    order_id: 0,
    receipt: [],
  });

  const [total, setTotal] = useState(0);
  const { orderId } = useParams();

  /**
   * useEffect makes a get request to the database
   * Stores the data returned from database to currentOrder
   */
  useEffect(() => {
    const abortController = new AbortController();
    (async function () {
      const order = await orderConfirmation(
        Number(orderId),
        abortController.signal
      );
      await setCurrentOrder(order);
    })();
    return () => abortController.abort();
  }, [orderId]);

  /**
   * Maps through currentOrder and adds the product of the quantity and price to total.
   * The total amount is displayed in JSX
   */
  useEffect(() => {
    if (currentOrder !== undefined) {
      for (let i = 0; i < currentOrder.receipt.length; i++) {
        const element: CurrentOrder = currentOrder.receipt[i];
        let sum = Number(element.price) * Number(element.quantity);
        setTotal((total) => total + sum);
      }
    }
  }, [currentOrder]);

  return (
    <div className="bg-emerald-950 text-stone-100 text-center">
      <div className=" text-2xl md:text-3xl pt-5">
        <p>{`Thank you for your order! Your order confirmation number is: ${orderId} `}</p>
      </div>
      <div>
        {currentOrder !== undefined &&
          currentOrder.receipt.map((item: CurrentOrder, index) => {
            return (
              <div className="pt-5 ml-5 text-1xl md:text-2xl" key={index}>
                <p>{`${item.menu_item} $${item.price}.00`}</p>
                <p>{`Quantity: ${item.quantity}`}</p>
              </div>
            );
          })}
      </div>
      {
        <div className="mt-5 py-5 flex flex-row text-1xl md:text-2xl justify-center">
          <p className="mr-3">Total:</p>
          <p>{`$${total}.00`}</p>
        </div>
      }
    </div>
  );
}
