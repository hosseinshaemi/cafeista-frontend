import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../ItemCard/ItemCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#846046",
        },
      },
    },
  },
});

const Categories = () => {
  /* const data = [
    {
      categoryName: "نوشیدنی گرم",
      items: [
        {
          itemName: "لاته",
          itemPrice: "48000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "10",
        },
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
          itemDiscount: "0",
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
          itemDiscount: "0",
        },
        {
          itemName: "پیتزا",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "0",
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
          itemDiscount: "0",
        },
        {
          itemName: "ساده",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "0",
        },
        {
          itemName: "لاته",
          itemPrice: "48000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "0",
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
          itemDiscount: "0",
        },
        {
          itemName: "نسکافه",
          itemPrice: "45000",
          itemImage: require("../../img/coffee.jpg"),
          itemDiscount: "0",
        },
      ],
    },
  ]; */

  const data = JSON.parse(localStorage.getItem('cafepageresponse')).message;

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeCategory = data[value];

  const cpr = localStorage.getItem('cafepageresponse');
  if (!cpr) return;
  const menu = JSON.parse(cpr);

  return (
    <ThemeProvider theme={theme}>
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
                  label={category.name}
                  disableRipple={true}
                  sx={{
                    fontFamily: "IRANSansXMedium",
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
          {activeCategory.goods.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Categories;