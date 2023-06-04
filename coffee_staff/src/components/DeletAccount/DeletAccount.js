import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
const DeletAccount = () => {
  const [password, setPassword] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleDeleteItem = () => {};

  const handleSave = () => {};

  const handleCancel = () => {};
  return (
    <div style={{ width: "95%", direction: "rtl" }}>
      <h3
        style={{
          marginRight: "7px",
          marginBottom: "15px",
          fontFamily: "IRANSansXBold",
        }}
      >
        حذف حساب کاربری
      </h3>
      <p
        style={{
          marginRight: "7px",
          marginBottom: "10px",
          fontFamily: "IRANSansXMedium",
          fontSize: "16px",
        }}
      >
        آیا از حذف حساب کاربری خود اطمینان دارید؟
      </p>
      <p
        style={{
          marginRight: "7px",
          marginBottom: "30px",
          fontFamily: "IRANSansXLight",
          fontSize: "14px",
        }}
      >
        در صورت اطمینان رمز عبور خود را وارد کنید
      </p>
      <Input
        style={{
          marginRight: "7px",
          fontFamily: "IRANSansXLight",
          width: "70%",
          fontSize: "14px",
        }}
        placeholder="رمز عبور خود را وارد کنید"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="buttons">
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: "25px",
          }}
        >
          <Button
            style={{
              width: "130px",
              borderRadius: "60px",
              backgroundColor: "#846046",
              fontFamily: "IRANSansXLight",
            }}
            variant="contained"
            onClick={handleCancel}
          >
            لغو
          </Button>
          <Button
            style={{
              width: "130px",
              borderRadius: "60px",
              color: "#846046",
              borderColor: "#846046",
              fontFamily: "IRANSansXLight",
            }}
            variant="outlined"
            onClick={handleClick({
              vertical: "top",
              horizontal: "center",
            })}
          >
            حذف حساب
          </Button>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="درخواست شما برای ادمین ارسال شد"
        key={vertical + horizontal}
      />
    </div>
  );
};
export default DeletAccount;
