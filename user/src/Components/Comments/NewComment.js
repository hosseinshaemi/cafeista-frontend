import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Comments.css";


const NewComment = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");


  const handleSubmit = () => {
    const newComment = {
      name: name,
      rate: rate,
      context: comment,
    };
    onCancel();
    onSubmit(newComment);
    setName("");
    setRate(0);
    setComment("");
  };
  const handleCancel = () => {
    onCancel();
    setName("");
    setRate(0);
    setComment("");
  };
  return (
    <div>
      <div className="modal-content">
        <h3>ثبت نظر</h3>
        <div>
          <div
            style={{
              marginTop: "-5px",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <TextField
              style={{ width: "150px" }}
              id="name"
              label="نام"
              placeholder="نام خود را وارد کنید"
              multiline
              maxRows={1}
              variant="standard"
              labelPlacement="end"
              sx={{
                direction: "rtl",
                "& .MuiInputLabel-root": {
                  right: 0,
                  left: "auto",
                },
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Box>
              <Rating
                style={{
                  direction: "ltr",
                  color: "#eb966a",
                  fontSize: "1.3rem",
                }}
                name="simple-controlled"
                value={rate}
                onChange={( event ,newValue) => setRate(newValue)}
              />
            </Box>
          </div>
          <TextField
            id="commment"
            label="دیدگاه شما"
            placeholder="دیدگاه خود را شرح دهید"
            multiline
            maxRows={10}
            variant="standard"
            labelPlacement="end"
            sx={{
              width: "100%",
              marginTop: "20px",
              direction: "rtl",
              "& .MuiInputLabel-root": {
                right: 0,
                left: "auto",
              },
            }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <Stack
          direction="row"
          spacing={2}
          style={{ margin: "30px -8px 20px 0" }}
        >
          <Button
            style={{
              width: "155px",
              marginRight: "12px",
              borderRadius: "60px",
              color: "#846046",
              borderColor: "#846046",
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
            }}
            variant="outlined"
            onClick={handleCancel}
          >
            لغو
          </Button>
          <Button
            style={{
              width: "155px",
              marginRight: "12px",
              borderRadius: "60px",
              color: "#fff",
              backgroundColor: "#846046",
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            ثبت
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default NewComment;
