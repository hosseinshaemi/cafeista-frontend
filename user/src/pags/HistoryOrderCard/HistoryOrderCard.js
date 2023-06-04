import React, { useState } from "react";
import "../Payment/Payment";
import { AlignVerticalCenter } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const HistoryOrderCard = ({ title, date, tracking_code, price , cafeId}) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const navigate= useNavigate();
  const handleCommentClick =()=>{
    navigate(`/home/cafepage/${cafeId}/comment`)

  }
  const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
  };
  return (
    <div>
      <div
        style={{
          width: "70vw",
          backgroundColor: "rgba(239,224,200,50%)",
          borderRadius: "6px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            direction: "rtl",
            padding: "20px",
            justifyContent: "space-between",
            alignItems:"flex-end"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              direction: "rtl",
              
            }}
          >
            <p
              style={{
                fontFamily: "IRANSansXBold",
                fontSize: "16px",
                margin: "0px 0px 10px 0px" ,
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontFamily: "IRANSansXLight",
                fontSize: "13px",
                margin: 0,
              }}
            >
              کد رهگیری: {tracking_code}
            </p>
            <p
              style={{
                fontFamily: "IRANSansXLight",
                fontSize: "13px",
                margin: 0,
              }}
            >
              تاریخ : {date}
            </p>
            <p
              style={{
                fontFamily: "IRANSansXLight",
                fontSize: "13px",
                margin: 0,
              }}
            >
              قیمت : {price} تومان
            </p>
          </div>
          <button
            style={{
              width: "70px",
              height: "25px",
              fontSize: "13px",
              borderRadius: "7px",
            }}
            onClick={handleCommentClick}

          >
            ثبت نظر
          </button>
        </div>
      </div>
    </div>
  );
};
export default HistoryOrderCard;
