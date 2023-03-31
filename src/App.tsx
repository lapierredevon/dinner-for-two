import React from "react";
import "./App.css";
import Header from "./navigation/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="max-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
