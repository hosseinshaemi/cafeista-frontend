import React  , {useState} from "react";
import './HistoryOrderCard.css'
import Payment from "../Payment/Payment";
import Backdrop from "../Components/Backdrop/Backdrop";
import SubmitComment from "../SubmitComment/SubmitComment";
const HistoryOrderCard = ({ title , date , tracking_code , price }) => {
    // const [showBackdrop, setShowBackdrop] = useState(false);

    // const handleButtonClick = () => {
    //   setShowBackdrop(true);
    // };
  
    // const handleToggleBackdrop = () => {
    //   setShowBackdrop(false);
    // };
    
    const [showBackdrop, setShowBackdrop] = useState(false);
    const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
    };
    return(
        <div>
            <div className="card-rectangle" >
                     <p className="title">{title}</p>
                     <p className="date"> : تاریخ</p>
                     <p className="datevalue">{date}</p>
                     <p className="code"> : کد رهگیری </p>
                     <p className="codevalue">{tracking_code}</p>
                     <p className="price"> : قیمت</p>
                     <p className="pricevalue">{price}</p>
                     <p className="tooman">تومان</p>
                     <button onClick={toggleBackdrop} value="ثبت نظر" style={{marginTop:'97px', right:'68%'}}>ثبت نظر</button>
                     <Backdrop showBackdrop={showBackdrop} onToggleBackdrop={toggleBackdrop}>
                        <SubmitComment/>
                    </Backdrop>
                    
            </div>

        </div>
    )
}
export default HistoryOrderCard ; 
