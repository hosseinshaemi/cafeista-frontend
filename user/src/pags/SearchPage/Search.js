import React, { useState, useRef } from "react";
import "./Search.css";
import CoffeeResult from "../../Components/CoffeeResult/CoffeeResult";
import { BiTrendingUp } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import Img from "../../img/coffee.jpg"
const Search = () => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  function handleClick() {
    window.history.back();
  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
    setActive(true);
  }
  function closeHandelClick() {
    if (searchTerm != "") {
      setActive(!active);
    }
    if (active === true) {
      setSearchTerm("");
    } else {
      inputRef.current.focus();
    }
  }
  const handleclick = () => {
    window.history.back()
  }
  return (
    <div className="search-container">
      <div className="searchpage">
        <div className="searchbar">
        <IoArrowBack style={{position:'fixed' , top:'3%' , left:'7%' , color:'#37251B'}} size={20} onClick={handleclick}/>
          <div>
            <input
              type="text"
              className="searchinput"
              placeholder="جستجو"
              value={searchTerm}
              onClick={() => setActive(false)}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
          <div className="icon-circle">
            <div
              className={active ? "search-icon active" : "search-icon"}
              onClick={closeHandelClick}
            >
              <span className="search-line main-line"></span>
              <span className="search-circle"></span>
              <span className="search-line second-line"></span>
            </div>
          </div>
        </div>
        {active && (
          <div
            className="search-result"
            style={{
              paddingTop: "70px",
              position: "fixed",
              alignContent: "center",
            }}
          >
            <div
              style={{
                overflowY: "auto",
                height: "80vh",
                width:"85vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              <CoffeeResult name="نام کافه" address="نام خیابان"/>
              

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
