// import React from "react";
// import NavBar from "../../Components/NavBar/NavBar";

// const Home=()=>{
//     return(
//         <div>
//            <NavBar />
//         </div>
//     )
// }
// export default Home;
import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Profile from "../profile/profile";
import Main from "../Main/Main";
import Search from "../SearchPage/Search";
import Basket from "../Basket/Basket";
import CafePage from "../CafePage/CafePage";
import HistoryOrder from "../History_Order/HistoryOrder";
import Payment from "../Payment/Payment";
import SubmitComment from "../SubmitComment/SubmitComment";
import "./Home.css";
import MyMap from "../Map/Map";


const Home = () => {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/Basket" element={<Basket />} />
        <Route exact path='/HistoryOrder' element={<HistoryOrder/>}/>
        <Route exact path='/cafepage/:key?/:kind?' element={<CafePage/>}/>
        <Route path="/cafepage/:key/reviews" element={<CafePage />} />
        <Route path="/map" element={<MyMap />} />
      </Routes>

    </div>
  );
};
export default Home;