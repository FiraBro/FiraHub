import React, { useEffect, useRef } from "react";
import style from "../Components/Images.module.css";
let width = { width: "575px" };

export default function Images() {

  return (
    <div className={style.AllImage}>
      <img src="/ethical.png" className={style.hidden} />

      <img src="/studio.png" />

      <img src="/Bugatti.png" className={style.hidden} />
      <img src="/future.png" className={style.image1} />
    </div>
  );
}

