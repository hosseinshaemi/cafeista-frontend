import React, { useState, useEffect } from "react";
import './table.css';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { BsPlusCircleDotted } from "react-icons/bs";
import { MdOutlineTableBar } from "react-icons/md";
import "react-multi-date-picker/styles/colors/red.css";
import "react-multi-date-picker/styles/backgrounds/bg-brown.css"
import TextField from '@mui/material/TextField';
import TimeButton from "../../components/TimeButton/TimeButton";
import ModalTable from "../../components/ModalTable/ModalTable";
import openImg from "../../img/open.png";
import closeImg from "../../img/close.png";

const Table = () => {

    const [startWork, setStartWork] = useState(null);
    const [endWork, setEndWork] = useState(null);
    const [difference, setDifference] = useState(null);
    const [icons, setIcons] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [selectedIconIndex, setSelectedIconIndex] = useState(null);
    const [isOpenDay, setIsOpenDay] = useState(true);

    const toggleImage = () => {
        setIsOpenDay(!isOpenDay);
    };

    function IconWithCounter({ icon, index, handleIconClick }) {
        return (
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", flexBasis: "20%" }}>
                <div onClick={() => handleIconClick(index)} style={{ cursor: "pointer" }}>{icon}</div>
                <div style={{ marginTop: "75px", marginLeft: "-55px", fontSize: "15px", color: "#999" }}>{index + 1}</div>
            </div>
        );
    }

    useEffect(() => {
        if (startWork && endWork) {
            setDifference(endWork - startWork);
        }
    }, [startWork, endWork]);

    const popups = [];

    for (let i = 0; i < difference; i++) {
        const time = `${parseInt(startWork) + i} - ${parseInt(startWork) + 1 + i}`;
        popups.push(
            <TimeButton timeValue={time} key={i} />
        );
    }

  const handleIconClick1 = () => {
    setIcons([
      ...icons,
      <MdOutlineTableBar
        key={Date.now()}
        style={{
          marginLeft: "35px",
          marginRight: "30px",
          marginTop: "30px",
          fontSize: "40px",
        }}
      />,
    ]);
  };

    const handleIconClick = (index) => {
        setModalContent({ title: "Modal Title", description: "Modal Description" });
        setSelectedIconIndex(index);
        setIsOpen(true);
    };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

    return (
        <div>
            <div style={{ flex: "1 1", position: "fixed", height: "97vh", left: "0px", right: "185px", marginTop: "80px" }}>
                <div style={{ backgroundColor: "#F0E5D4", height: "85%", width: "98%", marginLeft: "30px", borderRadius: 10, overflow: "auto" }}>
                    <img style={{ height: "80px", position: "absolute", left: "70px", top: "20px", marginRight: "40px" }} src={isOpenDay ? openImg : closeImg} onClick={toggleImage} alt={isOpenDay ? "Close" : "Open"} />
                    <div style={{ direction: "rtl" }}>
                        <DatePicker
                            style={{ marginTop: "30px", backgroundColor: "#F8F1E7", width: "16vw" }}
                            className="red"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                        />
                    </div>
                    <div>
                        <p style={{ position: 'absolute', fontSize: 12, fontFamily: "IRANSansXLight", right: "49.5%" }}>:پایان ساعت کاری</p>
                        <p style={{ position: 'absolute', fontSize: 12, fontFamily: "IRANSansXLight", left: '54%' }}>:شروع ساعت کاری</p>
                        <TextField id="EndWork" type="number" variant="filled" size="small" style={{ top: 17, width: 120, marginRight: '1%' }} onChange={(e) => setEndWork(e.target.value)} />
                        <TextField id="StartWork" type="number" variant="filled" size="small" style={{ top: 17, width: 120, }} onChange={(e) => setStartWork(e.target.value)} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginLeft: "10%", marginRight: "10%" }}>
                        {icons.map((icon, index) => (
                            <IconWithCounter icon={icon} index={index} key={index} handleIconClick={handleIconClick} />
                        ))}

                        <BsPlusCircleDotted
                            style={{ fontSize: "25px", cursor: "pointer", marginTop: '50px', marginLeft: "4%", marginRight: "5%" }}
                            onClick={handleIconClick1}
                        />
                    </div>
                </div>
            </div>
            <ModalTable isOpen={isOpen} handleCloseModal={handleCloseModal} modalContent={modalContent} popups={popups} index={selectedIconIndex + 1} />
        </div>
    )
}

export default Table;
