import React, { useState ,useEffect} from "react";
import "./Table.css";
import DatePicker from "react-multi-date-picker";
import { Button } from "@mui/material";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const Table = () => {
  const [time1, setTime1] = useState("09:00");
  const [duration, setDuration] = useState(1);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalCost, setTotalCost] = useState(20000);
  const costPerHour = 20000;

  useEffect(() => {
    const newTotalCost = calculateCost();
    setTotalCost(newTotalCost);
  }, [numberOfGuests, duration]);
  const handleTime1Change = (e) => {
    setTime1(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(parseInt(e.target.value, 10));
  };

  const handleNumberOfGuestsChange = (e) => {
    setNumberOfGuests(parseInt(e.target.value, 10));
  };

  const calculateTime2 = () => {
    const time1Array = time1.split(":");
    const hours = parseInt(time1Array[0], 10) + Math.floor(duration);
    const time2 = `${hours.toString().padStart(2, "0")}:00`;
    return time2;
  };

  const calculateCost = () => {
    const totalCost = costPerHour * numberOfGuests * duration;
    return totalCost;
  };

  const handleReservation = () => {
    const totalCost = calculateCost();
    console.log("Total Cost:", totalCost);
    // Perform reservation logic here
  };

  return (
    <div className="table-form">
      <div className="input-div">
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight"}}>تاریخ </p>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            style={{
              fontFamily:"IRANSansXLight",
              height: "25px",
              color: "#eb966a",
              border: "1px solid #846046",
              background: "#fff",
              borderRadius: "5px",
            }}
            placeholder="تاریخ انتخابی خود را وارد کنید"
          />
        </div>
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight" }}>مدت حضور</p>
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
            style={{
              width: "100px",
            }}
            className="input-style"
            required
          />
        </div>
      </div>
      <div className="input-div">
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight" }}>زمان ورود</p>
          <input
            value={time1}
            onChange={handleTime1Change}
            className="input-style"
            type="time"
            step="60"
            required
          />
        </div>
        <div className="lable-style">
          <p style={{ marginBottom: "7px", fontFamily:"IRANSansXLight" }}>زمان خروج</p>
          <input
            value={calculateTime2()}
            className="input-style"
            type="time"
            step="60"
            required
          />
        </div>
      </div>
      <div className="input-div">
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight" }}>نام میزبان </p>
          <input className="input-style" type="text" required />
        </div>
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight" }}>تعداد مهمانان </p>
          <input
            type="number"
            value={numberOfGuests}
            onChange={handleNumberOfGuestsChange}
            style={{
              width: "100px",
            }}
            className="input-style"
            required
          />
        </div>
      </div>
      <div className="input-div">
        <div className="lable-style">
          <p style={{ marginBottom: "7px" , fontFamily:"IRANSansXLight" }}> تلفن همراه </p>
          <input
            style={{
              direction: "ltr",
            }}
            className="input-style"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div className="lable-style" style={{alignItems:"center", justifyContent:"flex-start", fontSize:"19px"}}>
          <p style={{ marginBottom: "7px", marginLeft:"20px" , fontFamily:"IRANSansXLight" }}>هزینه نهایی:</p>
          <p style={{margin:"0", color: "#eb966a" , fontFamily:"IRANSansXLight"}}>{totalCost} <samp style={{fontSize:"12px" , fontFamily:"IRANSansXLight"}}>تومان</samp></p>
        </div>
      </div>
      <div className="input-div">
        <div className="lable-style"
          style={{
            width: "100%",
          }}
        >
          <p style={{ marginBottom: "7px", marginTop:"0" , fontFamily:"IRANSansXLight" }}> توضیحات </p>
          <textarea
            placeholder="توضیحات رزرو خود را اینجا بنویسید."
            style={{
              fontFamily:"IRANSansXLight",
              position: "relative",
              width: "100%",
              height: "120px",
              color: "black",
            }}
            className="input-style"
            type="text"
            minLength="0"
            maxLength="2000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
      </div>
      <div className="input-div" style={{alignItems:"center"}}>
 
        <Button
          onClick={handleReservation}
          style={{
            marginTop: "10px",
            width: "100px",
            borderRadius: "60px",
            color: "#fff",
            backgroundColor: "#846046",
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
            fontFamily:"IRANSansXLight",
          }}
          variant="contained"
        >
          رزرو
        </Button>
       
      </div>
    </div>
  );
};

export default Table;
