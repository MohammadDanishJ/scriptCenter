import React from "react";
import { Header } from "../";
import "./Containers.scss";

export const CenterContainer = ({ children, style }) => {
  return (
    <div className="fl fl-c" style={style}>
      {children}
    </div>
  );
};

export const MainContainer = ({ children, logout, back }) => {
  return (
    <div className="fl fl-d-col fl-c fl-j-fs w-100vw h-100vh">
      <Header showLogout={logout} back={back} />
      <div className="p-rel fl w-100 fl-c main-container">{children}</div>
    </div>
  );
};