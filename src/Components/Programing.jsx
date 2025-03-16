import React from "react";
import style from "../Components/Programing.module.css";
export default function Programing() {
  return (
    <div className={style.parent}>
      <div className={style.sliderParent}>
        <img src="/2html.svg" />
        <label htmlFor="">Html</label>
        <img src="/2css.svg" />
        <label htmlFor="">Css</label>

        <img src="/2javascript.svg" />
        <label htmlFor="">Javascript</label>

        <img src="/react.svg" />
        <label htmlFor="">React</label>

        <img src="/node.svg" />
        <label htmlFor="">Node JS</label>

        <img src="/tailwind.svg" alt="" />
        <label htmlFor="">Tailwind</label>
      </div>
      <div className={style.sliderParent}>
        <img src="/2html.svg" />
        <label htmlFor="">Html</label>
        <img src="/2css.svg" />
        <label htmlFor="">Css</label>

        <img src="/2javascript.svg" />
        <label htmlFor="">Javascript</label>

        <img src="/react.svg" />
        <label htmlFor="">React</label>

        <img src="/node.svg" />
        <label htmlFor="">Node JS</label>

        <img src="/tailwind.svg" alt="" />
        <label htmlFor="">Tailwind</label>
      </div>
    </div>
  );
}
