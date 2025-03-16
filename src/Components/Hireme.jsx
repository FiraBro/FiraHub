import React from "react";
import style from "../Components/Hireme.module.css";
import { NavLink } from "react-router-dom";

export default function Hireme() {
  return (
    <div className={style.holeHire}>
      <div className={style.hireDetail}>
        <p>Let Me Get You a Beautiful Website</p>
        <h1>Hire Me</h1>
      </div>
      <div className={style.hireLink}>
        <NavLink to="https://t.me/SmartCityBoy" target="_blank" className={style.anchor}>
          Here's my Telegram
        </NavLink>
      </div>
    </div>
  );
}
