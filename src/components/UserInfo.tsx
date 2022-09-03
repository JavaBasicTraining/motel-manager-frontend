import React from "react";
import User from "../interfaces/User";

export const UserInfo = (props: User) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{height: "fit-content", display: "block", width: 'fit-content', lineHeight:"100%"}}>
        Xin chào{" "}
        <span style={{ color: "red" }}>{props.firstName?.toUpperCase()}</span>
      </span>
    </div>
  );
};
