import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import style from "../ui/Applayout.module.css";
import { Outlet } from "react-router-dom";
import ParticlesComponent from "../partcleComponent";
export default function Applayout({ children }) {
  console.log(children);
  return (
    <section className={style.section}>
          <ParticlesComponent id="name" />
      <div className={style.body}>
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </section>
  );
}
