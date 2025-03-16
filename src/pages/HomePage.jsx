import React from "react";
import Navigation from "../Components/Navigation";
import style from "../pages/Home.module.css";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import Programing from "../Components/Programing";
import Work from "../Components/Work";
import Hireme from "../Components/Hireme";
import Images from "../Components/Images";
import Projects from "../Components/projects";

export default function Home() {
  return (
    <section className={style.section}>
      <div className={style.home}>
        <div className={style.homeBox}>
          <div className={style.textBox}>
            <h3>
              Hello, <span>It's Me Firagos</span>
            </h3>
            <h1>and I'm Full-Stack</h1>
            <div className={style.position}>
              <span className={style.skill}>Developer</span>
            </div>

            <p className={style.para}>
              I specialize in building modern responsive and user-friendly web
              interfaces. With a passion for clean code and seamless user
              experience, I turn ideas into digital solutions that not only look
              great but also perform flawlessly. Let's work together to bring
              your vision to life.
            </p>

            <div className={style.textBtn}>
              <a href="/FiraBro.pdf" download="FiraBro.pdf">
                Download CV
              </a>
              <NavLink to="project">Project</NavLink>
            </div>
          </div>
        </div>
        <div className={style.socialLink}>
          <a
            href="https://www.linkedin.com/in/firagos-jemal-711b83316/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/FiragosJemal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://t.me/SmartCityBoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091551475487"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://github.com/FiraBro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <Images />
        <Work />
        <Programing />
        <Projects />
        <Hireme />
      </div>
    </section>
  );
}
