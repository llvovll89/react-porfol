import React from "react";
import "./Project.css";
import Img1 from "../../assets/img/pjImage/project1.png";
import Img2 from "../../assets/img/pjImage/project2.png";
import Img3 from "../../assets/img/pjImage/project3.png";
import Img4 from "../../assets/img/pjImage/project4.png";
import Img5 from "../../assets/img/pjImage/project5.png";
import Img6 from "../../assets/img/pjImage/project6.png";

// 1234 (이미지 + demo만 연결)
const dataArray = [
  {
    id: 1,
    img: Img1,
    title: "Music App(JS)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/musicApp/",
  },
  {
    id: 2,
    img: Img2,
    title: "Typing Test(JS)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/typingApp/",
  },
  {
    id: 3,
    img: Img3,
    title: "Random Animal(JS)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/Random-animal/",
  },
  {
    id: 4,
    img: Img4,
    title: "translator App(JS)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/translatorApp/",
  },
  {
    id: 5,
    img: Img5,
    title: "Memo App(Js)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/musicApp/",
  },
  {
    id: 6,
    img: Img6,
    title: "SpaceInvader Game(Js)",
    github: "https://github.com/llvovll89/musicApp",
    demo: "https://llvovll89.github.io/SpaceInvader-Js/",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>Recent Work</h5>
      <h2>Project</h2>

      <div className="container project-container">
        {dataArray.map(({ id, img, title, github, demo }) => {
          return (
            <artice key={id} className="project-items">
              <div className="project-item-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} target="blank" className="btn btn-primary">
                  Demo
                </a>
              </div>
            </artice>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
