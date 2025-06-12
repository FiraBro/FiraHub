import React from "react";
import style from "../Components/Work.module.css";

export default function Work() {
  return (
    <div className={style.holeWork}>
      <h1>Where I Worked</h1>
      <div className={style.grid}>
        <div className={style.parahole}>
          <p>2024 June-July</p>
          <p>Technology Companies</p>
          <p>Full-Stack Developer / Remote</p>
        </div>

        <div className={style.parahole}>
          <p>2024 January-July</p>
          <p>Enthusiastic Full Stack Engineer!</p>
          <p>Full-Stack Developer / Remote</p>
        </div>

        <div className={style.parahole}>
          <p>2024 July-September</p>

          <p>IT Supervisor</p>
          <p>Full-Stack Developer / Remote</p>
        </div>
      </div>
    </div>
  );
}


