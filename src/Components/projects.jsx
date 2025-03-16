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
      title: "To-Do List",
      description:
        "A simple and intuitive task management app to organize daily activities with add, edit, and delete features.",
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
