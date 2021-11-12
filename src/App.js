
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import Home from "./pages/Home";
import Header from "./components/Header"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tenant from "./pages/Tenant"
import User from "./pages/User"
import Modal1 from "./pages/Modal1"
import Modal2 from "./pages/Modal2"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center" />
        <Routes>
        <Route  path="/*" element={<Home/>} />
          <Route path="/tenant"  element={<Tenant/>} />
          <Route path="/user"  element={<User/>} />
          <Route path="/update1/:id"  element={<Modal1/>} />
          <Route path="/update2/:id"  element={<Modal2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;