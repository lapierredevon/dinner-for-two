import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import internal from "stream";

// Build Confirmation Page
// Confirmation page should make a get request to the database.
// Display the order information on the page.
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

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const recallOrder = async () => {
      const order = await fetch(`http://localhost:5001/orders/${orderId}`, {
        signal,
      });
      const returnedOrder = await order.json();
      console.log("returnedOrder", returnedOrder.data);
      await setCurrentOrder(returnedOrder.data);

      // let sum = 0;
      // for (let i = 0; i < currentOrder.receipt.length; i++) {
      //   const element: CurrentOrder = currentOrder.receipt[i];
      //   let sum = Number(element.price) * Number(element.quantity);
      //   setTotal((total) => total + sum);
      // }
      // await setTotal(sum);
    };
    recallOrder();
  }, [orderId]);

  useEffect(() => {
    for (let i = 0; i < currentOrder.receipt.length; i++) {
      const element: CurrentOrder = currentOrder.receipt[i];
      let sum = Number(element.price) * Number(element.quantity);
      setTotal((total) => total + sum);
    }
  }, [currentOrder]);

  return (
    <div className="bg-emerald-950 text-stone-100">
      <div className="text-3xl">
        <p>{`Thank you for your order! Your order confirmation number is: ${orderId} `}</p>
      </div>
      <div>
        {currentOrder.receipt.map((item: CurrentOrder) => {
          return (
            <div className="pt-5 ml-5 text-2xl">
              <p>{`${item.menu_item} $${item.price}.00`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
            </div>
          );
        })}
      </div>
      {
        <div className="mt-5 py-5 ml-5 flex flex-row text-2xl">
          <p className="mr-3">Total:</p>
          <p>{`$${total}.00`}</p>
        </div>
      }
    </div>
  );
}
