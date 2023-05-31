import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { FormControl, FormLabel } from "@mui/material";
import Button from "@mui/material/Button";

const Wallet = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("female");
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [accountBalance, setAccountBalance]= useState(300000);
  
  const handleChange = (event) => {

    const selectedPrice = event.target.value;
    setValue(selectedPrice); 
    const isPriceValid = selectedPrice <= accountBalance;
    setIsPaymentEnabled(isPriceValid);
  };
  
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontFamily: "IRANSansXBold" }}>موجودی حساب</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontFamily: "IRANSansXLight",
              direction: "rtl",
              marginTop: "3px",
              marginRight: "5px",
            }}
          >
            تومان
          </p>
          <p style={{ fontFamily: "IRANSansXLight" }}>13.000</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "IRANSansXLight",
            marginTop: "10px",
          }}
        >
          <p>روز از اشتراک شما باقی مانده</p>
          <p style={{ marginLeft: "5px" }}>5</p>
        </div>
        <hr
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></hr>
      </div>
      <div
        style={{
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <FormControl>
          <p style={{ fontFamily: "IRANSansXLight", marginBottom: "10px" }}>
            طرح‌های اشتراکی
          </p>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="300000"
              control={<Radio />}
              label={
                <div
                  style={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontFamily: "IRANSansXLight",
                  }}
                >
                  3 ماهه
                  <p>300.000 تومان</p>
                </div>
              }
            ></FormControlLabel>

            <FormControlLabel
              value="500000"
              control={<Radio />}
              label={
                <div
                  style={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontFamily: "IRANSansXLight",
                  }}
                >
                  6 ماهه
                  <p>500.000 تومان</p>
                </div>
              }
            ></FormControlLabel>
            <FormControlLabel
              value="800000"
              control={<Radio />}
              label={
                <div
                  style={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontFamily: "IRANSansXLight",
                  }}
                >
                  1 ساله
                  <p>800.000 تومان</p>
                </div>
              }
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              width: "120px",
              borderRadius: "60px",
              backgroundColor: isPaymentEnabled ? "#846046" : "#D3D3D3",
              fontFamily: "IRANSansXLight",
              fontSize: "12px",
            }}
            variant="contained"
            disabled={!isPaymentEnabled} 
          >
            پرداخت آنلاین
          </Button>
          <Button
            style={{
              width: "120px",
              borderRadius: "60px",
              color: isPaymentEnabled ? "#846046" : "#D3D3D3",
              borderColor: isPaymentEnabled ? "#846046" : "#D3D3D3",
              fontFamily: "IRANSansXLight",
              fontSize: "12px",
            }}
            variant="outlined"
            disabled={!isPaymentEnabled}
          >
            برداشت از حساب
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;


