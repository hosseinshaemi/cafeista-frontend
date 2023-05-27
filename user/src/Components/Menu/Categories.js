import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../ItemCard/ItemCard";

const Categories = () => {
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
    {
      categoryName: "کیک",
      items: [
        {
          itemName: "شکلاتی",
          itemPrice: "35000",
          itemImage: require("../../img/coffee.jpg"),
        },
        {
          itemName: "ساده",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
        },
        {
          itemName: "لاته",
          itemPrice: "48000",
          itemImage: require("../../img/coffee.jpg"),
        },
      ],
    },
    {
      categoryName: "شیک",
      items: [
        {
          itemName: "شکلات",
          itemPrice: "35000",
          itemImage: require("../../img/coffee.jpg"),
        },
        {
          itemName: "نسکافه",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
        },
      ],
    },
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeCategory = data[value];

  return (
    <div>
      <div 
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: 300,
              md: 480,
            },
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {data.map((category, index) => (
              <Tab
                key={index}
                label={category.categoryName}
                disableRipple={true}
                sx={{
                  fontFamily:"IRANSansXMedium",
                  width: {
                    xs: "8%",
                  },
                  "&.Mui-selected": {
                    color: "#846046",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </div>
      <div className="menu-container">
        {activeCategory.items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
