import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Mainpage.css";
import Menu from "./Menu/Menu";
import Home from "./home/Home";
import Table from "./Table/table";
import Setting from "./Setting/Setting";
import HistoryOrder from "./HistoryOrder/HistoryOrder";
import "../components/Navbar/Navbar.css";

const MainPage = () => {
  return (
    <div className="main_div">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/table" element={<Table/>} />
          <Route exact path="/history" element={<HistoryOrder/>} />
          <Route exact path="/setting" element={<Setting/>} />
        </Routes>
     
    </div>
  );
};
export default MainPage;
