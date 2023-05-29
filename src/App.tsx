import React from "react";
import "./App.css";
import Header from "./navigation/header";
import { Outlet } from "react-router-dom";
import Footer from "./navigation/footer";

function App() {
  return (
    <div>
      <Header />
      <div className="h-screen bg-emerald-950">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
