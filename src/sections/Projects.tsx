import { useState } from 'react'

const projects = [
  {
    name: "Foundation Website",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["website done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
  {
    name: "Foundation Website",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
  {
    name: "Foundation Website",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
  {
    name: "Foundation Website",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: ["a website done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
  {
    name: "Dog Finder App",
    role: "React developer",
    url: "https://www.sterczaceuszy.pl/",
    github: "https://github.com/Fundacja-Sterczace-Uszy/website",
    description: [" is a website done with a group of etusiasts. We work together with scrum, we create a website with Next.JS / React / GraphQL. We pay special attention to the RWD, which we develop with the help of styled-component. Also, we do not forget about tests, which we write with Jest and Cypress."],
  },
]


function Projects() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < projects.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0); 
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(projects.length - 1); 
    }
  };

  const currentProject = projects[slideIndex]; 
  
  const visibleProjects = [
    projects[slideIndex],
    projects[(slideIndex + 1) % projects.length],
    projects[(slideIndex + 2) % projects.length],
  ];

  return (
  <div className="experience">
    <div className="container">
      <div className="exp-details">
        <div className="title">
          <h2>My Projects</h2>
        </div>
        <div className="exp-slider">
          <button className="prev-exp-slider-btn" onClick={prevSlide}>
            &lt;
          </button>
          {visibleProjects.map((project, index) => (
            <button
              key={index}
              className={`exp-slider-item ${index === 1 ? 'active' : ''}`}
              onClick={() => setSlideIndex((slideIndex + index - 1 + projects.length) % projects.length)}
            >
              <h3>{project.name}</h3>
            </button>
          ))}
          <button className="next-exp-slider-btn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="exp-details-flex">
    <ul className="exp-details-list">
      {currentProject &&
        currentProject.description.map((description, index) => (
          <li key={index} className="exp-details-list-item">
            {description}
          </li>
        ))}
    </ul>
    <ul className="exp-details-position-company">
      {currentProject && (
        <>
          <li className="exp-detail-li">
            <a href={currentProject.url} className="link">
              <h3 className="title"> Live </h3>
            </a>
          </li>
          <li className="exp-detail-li">
            <a href={currentProject.github} className="link">
              Github
            </a>
          </li>
        </>
      )}
    </ul>
  </div>
       </div>
    </div>
  </div>
);
}

export default Projects;