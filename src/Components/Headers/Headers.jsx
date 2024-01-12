import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Headers.scss";


export const Header = ({ showLogout = false, back = false }) => {
  const [error, setError] = useState("");

  return (
    <div
      id="header"
      className={`p-abs t-0 l-0 w-100 fl fl-c fl-j-sb ${!back && "pl-1 pr-1"}`}
    >
      <div className="fl fl-c">
        {back && <button disabled={back.disabled} />}
        <span className={`${!back && "pl-1"} logo`}>Script Center</span>
      </div>
      {showLogout && (
        <span
          className=" fl fl-c pr-1 c-p"
          style={{ color: "#ff0000" }}
          onClick={{}}
        >
          {" "}
          {error}
        </span>
      )}
    </div>
  );
};