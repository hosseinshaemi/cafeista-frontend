
import React from "react";
import Tab from "../../components/MenuTab/MenuTab";
import "../../components/MenuTab/MenuTab.css";

const Menu = () => {
  const data = [
    {
      categoryName: "نوشیدنی گرم",
      items: [
        {
          itemName: "لاته",
          itemPrice: "48000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "20",
        },
        {
          itemName: "چای",
          itemPrice: "20000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "20",
        },
      ],
    },
    {
      categoryName: "غذا",
      items: [
        {
          itemName: "ساندویچ",
          itemPrice: "35000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "20",
        },
        {
          itemName: "پیتزا",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "20",
        },
      ],
    },
  ]

 
  
  return (
    <div className="main_div">
      <div className="tabmenu">
      <Tab data={data} />
      </div>
    </div>
  );
};
export default Menu;