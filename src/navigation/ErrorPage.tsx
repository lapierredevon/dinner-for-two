import { useRouteError } from "react-router-dom";
import Header from "./header";
import React from "react";
import Footer from "./footer";
import emptyTable from "../imagesAndVideos/Empty-Table.png";

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-emerald-950 text-stone-100">
      <Header />
      <div className="flex justify-center h-screen md:h-full w-screen">
        <div className="flex-col text-sm md:text-2xl text-center">
          <img
            src={emptyTable}
            className="h-[300px] w-[300px] md:h-[900px] md:w-[900px]"
          />
          <h1>Oops!</h1>
          <p>The page you are looking for can't be found or no longer exists</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
