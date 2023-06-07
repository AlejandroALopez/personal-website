import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../../constants/experienceInfo';

import './style.scss';

export default function Experience() {
  const [project, setProject] = useState(null);
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
      {project ? 
          (
            <div className="prj-container">
              <button type="button" className="prj-back-button" onClick={() => setProject(null)}>
                <p>&lt; {project.name}</p>
              </button>
              <div className="prj-content-container">
                <img src={project.bigIcon} alt="big icon" />
                <div className="prj-description-container">
                  <p className="prj-subtitle">Project Description</p>
                  <div className="prj-description">
                    {project.text.map((paragraph) => {
                      return (
                        <p className="prj-paragraph">{paragraph}</p>
                      )
                    })}
                  </div>
                </div>
                <div className='separation-line'/>
                <div className='prj-side-container'>
                  <p className="prj-subtitle">Role</p>
                  <p className="prj-text">{project.role}</p>
                  <p className="prj-subtitle">Timeline</p>
                  <p className="prj-text">{project.timeline}</p>
                  <p className="prj-subtitle">Technologies</p>
                  <p className="prj-text">{project.stack}</p>
                </div>
              </div>
            </div>
          )
          :
          (
              <div className={ `fade-in-section ${ isIntersecting ? 'is-visible' : '' }`} ref={ref}>
                <p className="title">Experience</p>
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
                        <p className="stack-text"><span>Stack:</span> {p.stack}</p>
                        <button type="button" className="read-more-button" onClick={() => setProject(p)}>
                          <p>Read more</p>
                        </button>
                      </div>
                      {(index !== Object.keys(projectsData).length - 1) && (<div className='separation-line'/>) }
                    </div>
                  );
                })}
                </div>
              </div>
          )}
    </div>
  );
}
