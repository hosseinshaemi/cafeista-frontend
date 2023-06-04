import React, { useState } from "react";
import { Rating } from "@mui/material";

const CommentCard = ({ info }) => {
  const { user, score: rate, text: context } = info;

  return (
    <div className="commment-card">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <p style={{ fontSize: "24px", margin: "5px 0 -10px 0" , fontFamily:"IRANSansXMedium"}}> {user.firstname}</p>
        <Rating
          style={{
            direction: "ltr",
            color: "#eb966a",
            fontSize: "1.2rem",
            marginBottom: "8px",
          }}
          name="read-only"
          value={rate}
          readOnly
        />
      </div>

      <p style={{ fontWeight: "normal", textAlign: "right" , fontFamily:"IRANSansXLight" }}>
        {context}
        
      </p>
    </div>
  );
};
export default CommentCard;