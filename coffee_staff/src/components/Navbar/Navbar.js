import React, { useEffect, useRef } from "react";
import "./Navbar.css"; // import the CSS file
import { TbCoffee } from "react-icons/tb";
import { BiBookmarkMinus } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineTableBar } from "react-icons/md";
import { useNavigate, Link, Navigate, NavLink } from "react-router-dom";
function Navbar() {
  const selectorActiveRef = useRef(null);

  useEffect(() => {
    const tabsVerticalInner = document.getElementById("accordian");
    const selectorVerticalInner =
    tabsVerticalInner.querySelectorAll("li").length;
    const activeItemVerticalInner = tabsVerticalInner.querySelector(".active");
    const activeWidthVerticalHeight = activeItemVerticalInner.clientHeight;
    const activeWidthVerticalWidth = activeItemVerticalInner.clientWidth;
    const itemPosVerticalTop = activeItemVerticalInner.offsetTop;
    const itemPosVerticalLeft = activeItemVerticalInner.offsetLeft;

    if (selectorActiveRef.current) {
      selectorActiveRef.current.style.top = itemPosVerticalTop + "px";
      selectorActiveRef.current.style.left = itemPosVerticalLeft + "px";
      selectorActiveRef.current.style.height = activeWidthVerticalHeight + "px";
      selectorActiveRef.current.style.width = activeWidthVerticalWidth + "px";
    }

    tabsVerticalInner.addEventListener("click", (e) => {
      const target = e.target.closest("li");
      if (target) {
        tabsVerticalInner.querySelectorAll("li").forEach((li) => {
          li.classList.remove("active");
        });
        target.classList.add("active");
        const activeWidthVerticalHeight = target.clientHeight;
        const activeWidthVerticalWidth = target.clientWidth;
        const itemPosVerticalTop = target.offsetTop;
        const itemPosVerticalLeft = target.offsetLeft;

        if (selectorVerticalInner.toExponential) {
          document.querySelector(".selector-active").style.top =
            itemPosVerticalTop + "px";
          document.querySelector(".selector-active").style.left =
            itemPosVerticalLeft + "px";
          document.querySelector(".selector-active").style.height =
            activeWidthVerticalHeight + "px";
          document.querySelector(".selector-active").style.width =
            activeWidthVerticalWidth + "px";
        }
      }
    });
  }, []);

  const styleHandeler = (e) => {
    const t = e.target;
    t.classList = "active";
    e.target.style = {
      position: "relative",
      transition: "all 0.1s",
      backgroundColor: "#eb966a",
      height: "fit-content",
      width: "fit-content",
      padding: "10px",
      borderRadius: "10px",
    };
  };

  return (
    <div id="accordian">
      <ul className="show-dropdown main-navbar">
        <div className="selector-active">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <li className="active " style={{ marginTop: "90px" }}>
          <Link to="/main">
            <div title="Home">
              <HiOutlineHome size={30} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/main/menu">
            <div title="Menu">
              <TbCoffee size={30} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/main/table">
            <div title="Tables">
              <MdOutlineTableBar size={30} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/main/history">
            <div title="History Orders">
              <BiBookmarkMinus size={30} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/main/setting">
            <div title="Setting">
              <TbSettings size={30} />
            </div>
          </Link>
        </li>
      </ul>

      <div
        title="Logout"
        style={{ position: "absolute", bottom: "16px", right: "17px" }}
      >
        <Link to="/">
        <TbLogout
          size={30}
          color="#eb966a"
          style={{ position: "absolute", bottom: "16px", right: "17px" }}
        />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
