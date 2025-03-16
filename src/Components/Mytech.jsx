import React from "react";
import style from "../Components/Mytech.module.css";

export default function Mytech() {
  return (
    <section className={style.section}>
      <div className={style.mytech}>
        <div className={style.frontend}>
          <h1>Frontend Technology</h1>
          <p>
            Typescript / Next.js / React / Redux Toolkit / Tanstack / Zustand /
            React Native
          </p>
          <h1>Styling</h1>
          <p>SASS / Radix UI / TailwindCSS / Framer Motion / GSAP</p>
        </div>
        <div className={style.backend}>
          <span>
            <h1>Backend Technology</h1>
            <p>mongoDB / Node.js / Express.js / mySQL</p>
          </span>
          <span>BACKEND TECH</span>
        </div>
        <div className={style.tech}>
          <h1>
            My <span>Tech</span> <span>Stach</span>
          </h1>
          <p>Always Envolving My Tech Stack</p>
          <div className={style.aboutExpert}>
            <div className={style.expert}>React</div>
            <div className={style.expert}>Express.Js</div>
            <div className={style.expert}>Typescript</div>
            <div className={style.expert}>NextJs</div>
            <div className={style.expert}>TailwindCSS</div>
          </div>
        </div>
      </div>
      <img src="/about-image.png" className={style.image} />
    </section>
  );
}
