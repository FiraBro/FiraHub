import React from "react";
import style from "../Components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerhead}>
        <h1>Firagos Jemal</h1>
        <p>© 2025 Firagos Jemal. All rights reserved.</p>
        <span>Beker</span>
      </div>
      <div>
        <ul className={style.footerlink}>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
        </ul>
      </div>
    </footer>
  );
}
