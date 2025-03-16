import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../Components/Navigation.module.css";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={style.displays}>
      <nav className={`${style.display} ${isVisible ? "" : style.hidden}`}>
        <ul>
          <li>
            <NavLink to="/" className={style.home}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
