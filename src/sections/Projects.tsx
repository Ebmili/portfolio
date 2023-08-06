import Link from 'next/link';
import { useEffect, useState } from 'react'


const projects = [
  {
    name: "Foundation Website",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["It is a website done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
  {
    name: "Dog Finder App",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["It is a website done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
]

function Projects() {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="experience"
    >
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="container">
        
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <ul className="exp-details-position-company">
                <li className="exp-detail-li">
                <Link href={projects[selected].url} className="link">
                  {projects[selected].name}
                </Link>
                </li>
                <li className="exp-detail-li">
                <Link href={projects[selected].url} className="link">
                  {projects[selected].github}
                </Link>
                </li>
              </ul>
            </h3>
            <ul className="exp-details-list">
              {projects[selected].description.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <ul className="exp-slider">
          {projects.map((projects, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={projects.name}
              >
                <span>{projects.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projects