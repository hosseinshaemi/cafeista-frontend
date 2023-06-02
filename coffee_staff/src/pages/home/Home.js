import React, { useState } from "react";
import ListHomepage from "../../components/ListHomepage/ListHomepage";
import List2Homepage from "../../components/List2Homepage/List2Homepage";
import List3Homepage from "../../components/List3Homepage/List3Homepage";
import TableRequestModal from "../../components/TableRequestModal/TableRequestModal";
import "./../../Fonts/iransansX family/IRANSansX-Bold.ttf";
import "./../../Fonts/iransansX family/IRANSansX-Light.ttf";
import openImage from "../../img/open.png";
import closeImage from "../../img/close.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleImage = () => {
    setIsOpen(!isOpen);
  };
  
  const tableReservationRequests = [
    {
      name: "مهدی مختاری",
      phoneNumber: "123456789",
      date: "1402/04/02",
      arrivalTime: "9",
      departureTime:"11",
      numberOFpoeple: 5,
    },
    {
      name: "فاطمه رضایی",
      phoneNumber: "987654321",
      date: "1402/04/03",
      arrivalTime: "10",
      departureTime:"11",
      numberOFpoeple: 2,
    },
    {
      name:"مهسا بدیعی",
      phoneNumber: "98255855321",
      date: "1402/04/20",
      arrivalTime: "10",
      departureTime:"11",
      numberOFpoeple: 6,
    },
    {
      name:"زهرا عابدی",
      phoneNumber: "98255855321",
      date: "1402/04/20",
      arrivalTime: "09",
      departureTime:"11",
      numberOFpoeple: 4,
    },
    
  ];
  const ordersPendingConfirmation = ["( مهدی مختاری )", "( مهسا بدیعی )", "( زهرا عابدی )"];
  const ordersConfirmed = ["( پارسا محمدی )", "( فاطمه عباسی )", "( محمد نکویی )" ];

  return (
    <div>

      <div style={{ flex: "1 1", position: "fixed", height: "97vh", left: "0px", right: "185px", marginTop: "35px" }}>
        <img style={{ height: "80px", position: "fixed", left: "100px", top: "20px" }} src={isOpen ? openImage : closeImage} onClick={toggleImage} alt={isOpen ? "Close" : "Open"} />
        <div style={{ position: 'absolute', right: 10, fontFamily: "IRANSansXBold" }}>اسم کافه</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ position: 'absolute', right: 10, fontFamily: "IRANSansXLight", top: 55 }}>درخواست های رزرو میز</p>
          <div style={{ position: 'absolute', fontFamily: "IRANSansXBold", top: 90, right: 10 }}>
            <ListHomepage items={tableReservationRequests} />
          </div>

          <p style={{ position: 'absolute', right: 450, fontFamily: "IRANSansXLight", top: 55 }}>سفارشات در انتظار تایید</p>
          <div style={{ position: 'absolute', fontFamily: "IRANSansXBold", top: 90, right: 450 }}>
            <List2Homepage items={ordersPendingConfirmation} />
          </div>

          <p style={{ position: 'absolute', right: 890, fontFamily: "IRANSansXLight", top: 55 }}>سفارشات تایید شده</p>
          <div style={{ position: 'absolute', fontFamily: "IRANSansXBold", top: 90, right: 890 }}>
            <List3Homepage items={ordersConfirmed} />
          </div>
        </div>
        <TableRequestModal />
      </div>

    </div>
  );
};

export default Home;