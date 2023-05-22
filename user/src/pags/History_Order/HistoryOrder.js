import React , {useState} from "react";
import { IoArrowBack } from "react-icons/io5";
import "./HistoryOrder.css";
import HistoryOrderCard from "../HistoryOrderCard/HistoryOrderCard";
const HistoryOrder = () => {
  const [HistoryOrderItems, setHistoryOrderItems] = useState([
    {
      id: 1,
      title: 'لوتوس',
      date:'1401/08/02',
      tracking_code:'123456789',
      price: '76,000'
    },
    {
      id: 2,
      title: 'وایت',
      date:'1401/08/03',
      tracking_code:'123456879',
      price: '79,000'
    },
    
  ]);

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
        {HistoryOrderItems.map((item) => (
          <HistoryOrderCard key={item.id} title={item.title} date={item.date} tracking_code={item.tracking_code} price={item.price} />
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default HistoryOrder;
