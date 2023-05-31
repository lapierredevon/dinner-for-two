import React from "react";

export default function Contact() {
  return (
    <div className="h-screen bg-emerald-950 text-slate-100">
      <h1 className="text-center text-4xl md:text-7xl pt-9">Contact</h1>
      <p className="text-2xl md:text-3xl mt-5">
        To place an order for pickup or to check the status of an existing order
        use the phone number provided below
      </p>
      <div className="text-1xl md:text-2xl mt-9 flex">
        <p>Phone Number:</p>
        <p> 1-111-111-1111</p>
      </div>
    </div>
  );
}
