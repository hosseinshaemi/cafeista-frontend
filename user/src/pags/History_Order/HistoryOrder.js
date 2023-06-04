import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import HistoryOrderCard from "../HistoryOrderCard/HistoryOrderCard";
const HistoryOrder = () => {
  const [HistoryOrderItems, setHistoryOrderItems] = useState([
    {
      id: 1,
      title: "لوتوس",
      date: "1401/08/02",
      tracking_code: "123456789",
      price: "76,000",
      cafeId: 1,
    },
    {
      id: 2,
      title: "وایت",
      date: "1401/08/03",
      tracking_code: "123456879",
      price: "79,000",
      cafeId: 2,
    },
    {
      id: 1,
      title: "لوتوس",
      date: "1401/08/02",
      tracking_code: "123456789",
      price: "76,000",
      cafeId: 3,
    },
    {
      id: 2,
      title: "وایت",
      date: "1401/08/03",
      tracking_code: "123456879",
      price: "79,000",
      cafeId: 4,
    },
    {
      id: 1,
      title: "لوتوس",
      date: "1401/08/02",
      tracking_code: "123456789",
      price: "76,000",
      cafeId: 5,
    },
    {
      id: 2,
      title: "وایت",
      date: "1401/08/03",
      tracking_code: "123456879",
      price: "79,000",
      cafeId: 6,
    },
  ]);
  const handleclick = () => {
    window.history.back();
  };
  return (
    <div>
      <IoArrowBack
        style={{ position: "fixed", top: "3%", left: "7%", color: "#37251B" }}
        size={20}
        onClick={handleclick}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "32px",
        }}
      >
        <p style={{ fontFamily: "IRANSansXLight" }}>اعتبار فعلی</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(170,170,170)",
              direction: "rtl",
              fontFamily: "IRANSansXLight",
            }}
          >
            تومان
          </p>
          <p style={{ fontSize: "15px" }}>200.000</p>
        </div>
        <button
          style={{
            width: "112px",
            height: "38px",
            fontSize: "15px",
            borderRadius: "7px",
          }}
        >
          افزایش اعتبار
        </button >
        <hr style={{ width: "85%", marginTop: "30px" }} />{" "}
        <div>
          <div style={{ direction: "rtl", margin: "30px 0 100px 0 " }}>
            <p
              style={{
                fontFamily: "IRANSansXBold",
                marginRight: "0",
                color: "#37251B",
                marginBottom: "10px",
              }}
            >
              سفارش های پیشین
            </p>

            {HistoryOrderItems.map((item) => (
              <HistoryOrderCard
                key={item.id}
                title={item.title}
                date={item.date}
                tracking_code={item.tracking_code}
                price={item.price}
                cafeId={item.cafeId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryOrder;
