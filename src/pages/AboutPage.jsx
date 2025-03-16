// import React from "react";
// import Navigation from "../Components/Navigation";
// import Footer from "../Components/Footer";
// import style from "../pages/About.module.css";
// import Mytech from "../Components/Mytech";
// import Button from "../Components/Button";

// export default function About() {
//   return (
//     <section className={style.section}>
//       <div className={style.body}>
//         <Button />
//         <div className={style.aboutpage}>
//           <div className={style.imgdetail}>
//             <div className={style.images}>
//               <img
//                 src="/my-image.png"
//                 alt="Background"
//                 className={style.image}
//               />
//             </div>

//             <div className={style.details}>
//               <h2>Please Read Carefully</h2>
//               <h3>
//                 <span>and</span> <br />
//                 Don't Forget To Leave the Comment
//               </h3>
//               <p>
//                 I'm Firagos Jemal, a passionate full-stack developer with a
//                 drive to create innovative and user-friendly web applications.
//                 I'm skilled in building both the front-end and back-end, and I
//                 enjoy bringing ideas to life through clean code and thoughtful
//                 design. My expertise lies in React, JavaScript, Tailwind, and
//                 Node.js. I'm excited to collaborate on projects that push the
//                 boundaries of web development and make a real impact.
//               </p>
//               <p>
//                 Beyond coding, I'm a content creator enthusiast, and I believe
//                 in the power of technology to solve problems and improve lives.
//               </p>

//               <button>Contact Me</button>
//             </div>
//           </div>
//         </div>
//         <Mytech />
//       </div>
//     </section>
//   );
// }

import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import style from "../pages/About.module.css";
import Mytech from "../Components/Mytech";
import Button from "../Components/Button";

export default function About() {
  return (
    <section className={style.section}>
      <div className={style.body}>
        <Button />
        <div className={style.aboutpage}>
          <div className={style.imgdetail}>
            <div className={style.images}>
              <img
                src="/my-image.png"
                alt="Firagos Jemal"
                className={style.image}
              />
            </div>

            <article className={style.details}>
              <h2>Please Read Carefully</h2>
              <h3>
                <span>and</span> <br />
                Don't Forget To Leave the Comment
              </h3>
              <p>
                I'm Firagos Jemal, a passionate full-stack developer with a
                drive to create innovative and user-friendly web applications.
                I'm skilled in building both the front-end and back-end, and I
                enjoy bringing ideas to life through clean code and thoughtful
                design. My expertise lies in React, JavaScript, Tailwind, and
                Node.js. I'm excited to collaborate on projects that push the
                boundaries of web development and make a real impact.
              </p>
              <p>
                Beyond coding, I'm a content creator enthusiast, and I believe
                in the power of technology to solve problems and improve lives.
              </p>

              <button onClick={() => (window.location.href = "/contact")}>
                Contact Me
              </button>
            </article>
          </div>
        </div>
        <Mytech />
      </div>
    </section>
  );
}
