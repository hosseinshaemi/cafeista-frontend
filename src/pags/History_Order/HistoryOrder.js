import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./HistoryOrder.css";
import HistoryOrderCard from "../HistoryOrderCard/HistoryOrderCard";
const HistoryOrder = () => {
  return (
    <div>
      <div className="historyorder-header">
        <IoArrowBack className="historyorder-backicon" />
        <p className="historyorder-validity">اعتبار فعلی</p>
        <p className="historyorder-validity" style={{ marginTop: "80px", marginLeft: "30px", fontSize: "15px" }}>200.000</p>
        <p className="historyorder-validity" style={{ marginTop: "80px", marginRight: "70px",fontSize: "15px",color: "rgba(170,170,170)"}}>تومان</p>
        <button>افزایش اعتبار</button>
      </div>
      <div className="historyorder-body">
        <p className="historyorder-text">سفارش های پیشین</p>
        <div className="historyorders" style={{position:'absolute' , top:'40%' , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , right:"25%" , left:'25%'}}>
          <HistoryOrderCard/>
          <HistoryOrderCard/>
          <HistoryOrderCard/>
          <HistoryOrderCard/>
          <HistoryOrderCard/>
          <HistoryOrderCard/>
        </div>
        
      </div>
    </div>
  );
};

export default HistoryOrder;
