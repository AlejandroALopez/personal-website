import React, { useState, useEffect, useRef } from "react";
import {
  projectsData,
  personalProjectsData,
} from "../../constants/experienceInfo";

import "./style.scss";

export default function Experience() {
  const [project, setProject] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [inPersonalProjectsTab, setInPersonalProjectsTab] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="work-section" id="work">
      {project ? (
        <div className="prj-container">
          <button
            type="button"
            className="prj-back-button"
            onClick={() => setProject(null)}
          >
            <p>&lt; {project.name}</p>
          </button>
          <div className="prj-content-container">
            <img src={project.bigIcon} alt="big icon" />
            <div className="prj-description-container">
              <p className="prj-subtitle">Project Description</p>
              <div className="prj-description">
                {project.text.map((paragraph) => {
                  return <p className="prj-paragraph">{paragraph}</p>;
                })}
              </div>
            </div>
            <div className="separation-line" />
            <div className="prj-side-container">
              <p className="prj-subtitle">Role</p>
              <p className="prj-text">{project.role}</p>
              <p className="prj-subtitle">Timeline</p>
              <p className="prj-text">{project.timeline}</p>
              <p className="prj-subtitle">Technologies</p>
              <p className="prj-text">{project.stack}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fade-in-section ${isIntersecting ? "is-visible" : ""}`}
          ref={ref}
        >
          <div className="projects-header">
            <p className="title">Projects</p>
            <button
              className={`projects-header-button${
                inPersonalProjectsTab ? " button-active" : ""
              }`}
              onClick={() => setInPersonalProjectsTab(true)}
            >
              <p>Personal Projects</p>
            </button>
            <button
              className={`projects-header-button${
                !inPersonalProjectsTab ? " button-active" : ""
              }`}
              onClick={() => setInPersonalProjectsTab(false)}
            >
              <p>Collaborative Projects</p>
            </button>
          </div>
          {inPersonalProjectsTab ? (
            <div className="personal-projects-container">
              <div className="projects-selector-container">
              {[...Array(personalProjectsData.length)].map(
              (value, index) => (
                <button
                  key={index}
                  className={`project-selector ${
                    activeProjectIndex === index ? "selector-active" : ""
                  }`}
                  onClick={() => setActiveProjectIndex(index)}
                />
              )
            )}
              </div>
              <div className="personal-project-container">
                <div className="personal-project-text-container">
                  <div className="personal-project-header">
                    <div>
                      <p className="personal-project-title">
                        {personalProjectsData[activeProjectIndex].title}
                      </p>
                      <p className="personal-project-name">
                        {personalProjectsData[activeProjectIndex].name}
                      </p>
                    </div>
                    <a href={`https://${personalProjectsData[activeProjectIndex].hostedURL}`} target="_blank" rel="noopener noreferrer">
                    <button
                      className="projects-header-button"
                      onClick={() =>
                        console.log(
                          personalProjectsData[activeProjectIndex].hostedURL
                        )
                      }
                    >
                      <p>Visit site</p>
                    </button>
                    </a>
                  </div>
                  <p className="personal-project-description">
                    {personalProjectsData[activeProjectIndex].description}
                  </p>
                  <p className="personal-project-tools">
                    <span className="tools-span">Tools: </span>
                    {personalProjectsData[activeProjectIndex].tools}
                  </p>
                </div>
                <img
                  className="personal-project-image"
                  src={personalProjectsData[activeProjectIndex].image}
                  alt={personalProjectsData[activeProjectIndex].name}
                />
              </div>
            </div>
          ) : (
            <div className="projects-container">
              {projectsData.map((p, index) => {
                return (
                  <div key={p.name} className="row">
                    <div className="project-element">
                      <div className="project-top-container">
                        <img src={p.icon} alt="phone icon" />
                        <div className="project-info-container">
                          <p className="project-info-title">{p.name}</p>
                          <p className="project-info-type">{p.type}</p>
                          <p className="project-info-role">{p.role}</p>
                        </div>
                      </div>
                      <p className="stack-text">
                        <span>Stack:</span> {p.stack}
                      </p>
                      <button
                        type="button"
                        className="read-more-button"
                        onClick={() => setProject(p)}
                      >
                        <p>Read more</p>
                      </button>
                    </div>
                    {index !== Object.keys(projectsData).length - 1 && (
                      <div className="separation-line" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
