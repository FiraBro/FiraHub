import React from "react";
import style from "../Components/projects.module.css";

export default function Project() {
  const projects = [
    {
      title: "Food Delivery",
      description:
        "A web application for ordering food online with real-time tracking and payment integration.",
    },
    {
      title: "Elarning",
      description:
        "A full-featured eLearning platform where users can explore, enroll in, and manage online courses with secure authentication, role-based access, and interactive content delivery.",
    },
    {
      title: "Yoyo - Online Shoe Store",
      description:
        "A modern online shoe delivery platform where users can browse footwear by category, view product variants, add items to cart, place orders, and track deliveries — built with a secure and scalable full-stack architecture.",
    },
    {
      title: "Admin Dashboard – Yoyo Brand",
      description:
        "A powerful admin dashboard for managing Yoyo's online shoe store. Includes features for product management, order tracking, user control, and real-time insights into sales and inventory, built with a responsive and intuitive UI.",
    },
    {
      title: "Expense Tracker",
      description:
        "An app to monitor personal expenses, categorize spending, and visualize financial data.",
    },

    {
      title: "Quiz App",
      description:
        "An educational tool to create, take, and manage quizzes effectively, enhancing learning and assessment.",
    },
  ];

  return (
    <section className={style.projectSection}>
      <h2 className={style.sectionTitle}>My Projects</h2>
      <div className={style.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <h3 className={style.cardTitle}>{project.title}</h3>
            <p className={style.cardDescription}>{project.description}</p>
            <a href="https://github.com/FiraBro" className={style.cardLink}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
