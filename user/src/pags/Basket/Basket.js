import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import "./Basket.css";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Modal from "react-modal";
import OrderLoading from "../../Components/OrderLoading/OrderLoading";
import BasketItem from "./../../Components/BasketItem/BasketItem";

const Basket = () => {
  const [isFabVisible, setIsFabVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalpayOpen, setIsModalpayOpen] = useState(false);
  const [isFabVisiblepay, setIsFabVisiblepay] = useState(true);
  const [orderlist, setorderlist] = useState([]);
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2124743745.1678829291&semt=robertav1_2_sidr",
      title: "قهوه اسپرسو",
      price: "76,000",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph",
      title: "کاپ کیک",
      price: "35,000",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph",
      title: "کاپ کیک",
      price: "35,000",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph",
      title: "کاپ کیک",
      price: "35,000",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph",
      title: "کاپ کیک",
      price: "35,000",
    },
    
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/cupcake-with-pink-frosting-lot-sprinkles-it_771335-47856.jpg?size=626&ext=jpg&ga=GA1.1.2124743745.1678829291&semt=sph",
      title: "کاپ کیک",
      price: "35,000",
    },
  ]);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFabVisible(true);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsFabVisible(false);
  };

  const closeModalpay = () => {
    setIsModalpayOpen(false);
    setIsFabVisiblepay(true);
  };

  const handleModalpayOpen = () => {
    setIsModalpayOpen(true);
    setIsFabVisiblepay(false);
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const handlemodalpay = () => {
    setIsModalpayOpen(false);
    setIsFabVisiblepay(true);
  };
  const handleclick = () => {
    window.history.back();
  };
  return (
    <div style={{ display: "flex", width: "100%", alignItems: "" }}>
      <div className="header-box">
        <Link to="/home">
          <IoArrowBack
            style={{
              position: "fixed",
              top: "3%",
              left: "7%",
              color: "#37251B",
            }}
            size={20}
            onClick={handleclick}
          />
        </Link>
        <h1 className="header-text">سبد خرید</h1>
        <IoTrashOutline size={20} onClick={clearBasket} color="#37251B" />
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "scroll",
        }}
      >
        <div className="basket-items">
          {basketItems.map((item) => (
            <BasketItem
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
          <div className="basket-description">
            <p>توضیحات</p>
            <textarea
              rows="3"
              cols="50"
              placeholder="توضیحات سفارشات خود را اینجا بنویسید"
            ></textarea>
          </div>
          <div className="basket-detail">
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <p className="detailtitle">جمع سفارش</p>
              <p className="detailprice">130.000<smap>تومان </smap></p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <p className="detailtitle">مالیات</p>
              <p className="detailprice">11.700<smap>تومان </smap></p>
              
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <p className="detailtitle" style={{ color: "black" }}>
                مبلغ قابل پرداخت
              </p>
              <p className="detailprice" style={{ color: "black" }}>
                 141.700 <smap>تومان </smap>
              </p>
             
            </div>
            <hr style={{ width: "100%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <p className="detailtitle" style={{ color: "black" }}>
                جمع کل
              </p>
              <p className="detailprice" style={{ color: "black" }}>
                141.700<smap>تومان </smap>
              </p>

            </div>
          </div>
            <button
              style={{
                height: "56px",
                width: "206px",
                backgroundColor: "#846046",
                marginBottom:"80px",
                padding: "0",
                boxShadow:"0 0 1px 0 rgba(132, 96, 70, 0.25)0 6px 12px 0 rgba(132, 96, 70, 0.25)"
              }}
              onClick={handleModalpayOpen}
            >
              ادامه
            </button>
        </div>

        <div className="plusbutton">
          {isFabVisible && (
            <Fab
              style={{
                backgroundColor: "#846046",
                boxShadow:
                  " 0 0 1px 0 rgba(132, 96, 70, 0.25)0 6px 12px 0 rgba(132, 96, 70, 0.25)",
              }}
              aria-label="add"
              onClick={handleModalOpen}
            >
              <MdOutlineShoppingCartCheckout color="#fff" size={30} />
            </Fab>
          )}
          <Modal
            className="new-comment-modal"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
          >
            <OrderLoading orderlist={orderlist} setorderlist={setorderlist} />
          </Modal>
        </div>

        <div>
          {isFabVisiblepay}
          <Modal
            className="new-comment-modal"
            isOpen={isModalpayOpen}
            onRequestClose={closeModalpay}
          >
            <Payment
              setorderlist={setorderlist}
              handlemodalpay={handlemodalpay}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Basket;
