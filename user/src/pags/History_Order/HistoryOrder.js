import React , {useState} from "react";
import { IoArrowBack } from "react-icons/io5";
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
  const handleclick = () => {
    window.history.back()
  }
  return (
    <div>
      <div>
        <IoArrowBack style={{position:'fixed' , top:'3%' , left:'7%' , color:'#37251B'}} size={20} onClick={handleclick}/>
        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center', marginTop:'32px'}}>
          <p style={{fontFamily:'IRANSansXLight'}}>اعتبار فعلی</p>
          <div style={{display:'flex' , flexDirection:'row'}}>
            <p style={{ fontSize: "15px",color: "rgba(170,170,170)" , direction:'rtl' , fontFamily:'IRANSansXLight'}}>تومان</p>
          <p style={{ fontSize: "15px" }}>200.000</p>
          </div>
          <button style={{width:'112px' , height:'38px' , fontSize:'15px' , borderRadius:'7px'}}>افزایش اعتبار</button>
        </div>
      </div>
      <div >
        <p style={{fontFamily:'IRANSansXBold' , position:'fixed' , right:'7%' , color:'#37251B'}}>سفارش های پیشین</p>
        <div className="historyorders" style={{position:'absolute' , top:'35%' , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , right:"25%" , left:'25%'}}>
        {HistoryOrderItems.map((item) => (
          <HistoryOrderCard key={item.id} title={item.title} date={item.date} tracking_code={item.tracking_code} price={item.price} />
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default HistoryOrder;
