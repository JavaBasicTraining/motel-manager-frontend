import { Avatar } from "antd";
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
      <span
        style={{
          height: "fit-content",
          display: "flex",
          gap: "8px",
          width: "fit-content",
          lineHeight: "100%",
          alignItems: "center"
        }}
      >
        <Avatar src={props.avatarUrl} />
        <span style={{ color: "red" }}>{props.firstName}</span>
      </span>
    </div>
  );
};
