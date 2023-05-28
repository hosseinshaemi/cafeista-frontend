import React, { useState } from "react";
import Modal from "react-modal";
import image from "../../img/coffee.jpg";
import image1 from "../../img/cafe.jpg";
import "./CafePage.css";
import { MdAdd } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { Fab } from "@mui/material";
import Comments from "../../Components/Comments/Comments";
import NewComment from "../../Components/Comments/NewComment";
import Table from "../../Components/Table/Table";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Menu from "../../Components/Menu/Menu";

const CafePage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFabVisible, setIsFabVisible] = useState(true);
  const [comments, setComments] = useState([]);
  const carouselItems = [image1, image];
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsFabVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFabVisible(true);
  };
  const handleSubmitComment = (newComment) => {
    setComments([...comments, newComment]);
    setIsModalOpen(false);
    setIsFabVisible(true);
  };
  const handleCancelComment = () => {
    setIsModalOpen(false);
    setIsFabVisible(true);
  };
  const heartIcon = isLiked ? (
    <AiFillHeart size={30} color="#eb966a" />
  ) : (
    <AiOutlineHeart size={30} color="#eb966a" />
  );

  let tabContent;
  switch (activeTab) {
    case "menu":
      tabContent = (
        <div>
          <Menu/>
        </div>
      );
      break;
    case "tables":
      tabContent = (
        <div>
          <Table />
        </div>
      );
      break;
    case "reviews":
      tabContent = (
        <div>
          <Comments comments={comments} />
        </div>
      );
      break;
    default:
      tabContent = null;
  }

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
        }}
        class="slide-card card-shadow"
      >
        <AliceCarousel autoPlay autoPlayInterval={10000} infinite={true}>
          {carouselItems.map((item, index) => (
            <img
              key={index}
              src={item}
              style={{
                top: "0",
                width: "100vw",
                height: "auto",
              }}
              alt={`cafe-${index}`}
            />
          ))}
        </AliceCarousel>
      </div>

      <div className="cafeheader">
        <div className="cafename">
          <p style={{ fontSize: "27px", color: "#fff", marginTop: "-12px" }}>
            لوتوس
          </p>
          <p style={{ fontSize: "12px", color: "#fff", marginTop: "-30px" }}>
            حکیم نظامی
          </p>
        </div>
        <div className="cafescore">
          <div className="score">
            <AiFillStar
              style={{ marginRight: "-3px" }}
              size={18}
              color="#fff"
            />
            <p style={{ fontSize: "28", marginLeft: "-3px" }}>4.5</p>
          </div>
          <div
            style={{ position: "relative", marginRight: "auto" }}
            onClick={handleLikeClick}
          >
            {heartIcon}
          </div>
        </div>
      </div>

      <div className="witelayer">
        <div className="tab-container">
          <div className="tabs">
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              checked={activeTab === "menu"}
              onChange={() => handleTabClick("menu")}
            />
            <label className="tab" htmlFor="radio-1">
              منو
            </label>
            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === "tables"}
              onChange={() => handleTabClick("tables")}
            />
            <label className="tab" htmlFor="radio-2">
              میزها
            </label>
            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === "reviews"}
              onChange={() => handleTabClick("reviews")}
            />
            <label className="tab" htmlFor="radio-3">
              نظر کاربران
            </label>
            <span className="glider"></span>
          </div>
        </div>
        <div className="tab-content">
          {tabContent}
          {activeTab === "reviews" && (
            <div className="button-container">
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
                  <MdAdd color="#fff" size={30} />
                </Fab>
              )}
              <Modal
                className="new-comment-modal"
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="ثبت نظر"
              >
                <NewComment
                  onSubmit={handleSubmitComment}
                  onCancel={handleCancelComment}
                />
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CafePage;
