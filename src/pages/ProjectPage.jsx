import React from "react";
import { NavLink } from "react-router-dom";
import style from "../pages/ProjectPage.module.css";
import Button from "../Components/Button";

export default function Project() {
  return (
    <section className={style.section}>
      <div className={style.body}>
        <Button />
        <div className={style.projectCenter}>
          <h1>FiraHub</h1>
          <p>
            FiraHub is a dynamic platform designed to foster collaboration and
            innovation within project management. Here’s a detailed description
            of the project case study:
          </p>
          <div className={style.imageDetail}>
            <h1>
              <NavLink to="https://github.com/FiraBro">TodoMaster</NavLink>
            </h1>
            <p>
              TodoMaster is a productive and intuitive tool designed to organize
              your tasks, enhance your time management skills, and streamline
              your daily routines. Whether you’re a busy professional, a student
              managing assignments, or simply someone looking to stay organized,
              TodoMaster offers a versatile array of features tailored for all
              productivity needs. Create, prioritize, and track your tasks, set
              reminders, and achieve your goals with ease. With its
              user-friendly interface and regular updates, TodoMaster ensures a
              seamless and efficient experience for users of all ages.
            </p>
            <h3>Key Feature</h3>

            <p>
              Task Prioritization Tool - This feature allows users to categorize
              and prioritize tasks based on urgency and importance, providing
              reminders and notifications to ensure timely completion. With its
              customizable interface and seamless integration across devices,
              TodoMaster helps users stay on top of their tasks and maintain a
              productive lifestyle.
            </p>
          </div>

          <div className={style.imageDetail}>
            <h1>
              <NavLink to="https://github.com/FiraBro">
                SmartBudget Web App
              </NavLink>
            </h1>
            <p>
              Description: SmartBudget is a user-friendly budget app designed to
              help you take control of your finances effortlessly. Whether
              you're saving for a big goal, managing monthly expenses, or simply
              trying to track where your money goes, SmartBudget makes it simple
              and intuitive.
            </p>
            <h3>Key Feature</h3>
            <p>
              Expense Tracking: Record your daily expenses and categorize them
              to see where your money is going.
            </p>
            <h3>Why I Choose It</h3>
            <p>
              Why Choose SmartBudget? With its clean interface and powerful
              features, SmartBudget helps you build better financial habits and
              achieve your financial goals with ease. Whether you're a student,
              a professional, or a family manager, SmartBudget is your reliable
              partner for financial success. Start managing your money smarter
              today! 💰
            </p>
          </div>
          <div className={style.imageDetail}>
            <h1>
              <NavLink to="https://github.com/FiraBro">FiraFruit</NavLink>
            </h1>
            <p>
              Firafruit is a vibrant and engaging platform designed to delight
              your senses, enhance your knowledge of fruits, and challenge your
              culinary skills. Whether you’re a food enthusiast, a chef looking
              for inspiration, or simply someone who loves exploring the world
              of fruits, Firafruit offers a diverse array of interactive
              experiences tailored for all interests. Explore various fruit
              categories, test your fruit identification skills, and discover
              new recipes to become a true fruit connoisseur. With its
              user-friendly interface and regular updates, Firafruit ensures a
              fresh and exciting experience for users of all ages.
            </p>
            <h3>Key Feature</h3>

            <p>
              Fruit Identification Tool - This feature allows users to identify
              fruits based on images or descriptions, providing detailed
              information about each fruit, including nutritional facts,
              recipes, and fun trivia. With its user-friendly interface and
              regular updates, Firafruit ensures a fresh and exciting experience
              for users of all ages.
            </p>
          </div>
          <div className={style.imageDetail}>
            <h1>
              <NavLink to="https://github.com/FiraBro">Quiz App</NavLink>
            </h1>
            <p>
              QuizMaster is a fun and engaging app designed to test your
              knowledge, improve your learning, and challenge your mind. Whether
              you’re a trivia enthusiast, preparing for exams, or just looking
              for a way to pass the time, QuizMaster offers a wide range of
              quizzes for everyone.
            </p>
            <h3>Key Feature</h3>
            <p>
              Timed Challenges: Add excitement with timed quizzes that test your
              speed and accuracy.
            </p>
            <p>
              Instant Feedback: Get detailed explanations for each question to
              enhance your learning.
            </p>
            <p>
              User-Friendly Interface: Enjoy a clean and intuitive design for a
              seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
