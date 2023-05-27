
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
        },
        {
          itemName: "چای",
          itemPrice: "20000",
          itemImage: require("../../img/coffee.jpg"),
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
        },
        {
          itemName: "پیتزا",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
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