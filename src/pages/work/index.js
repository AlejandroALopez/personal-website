import React, { useState } from 'react';
import { projectsData } from '../../constants/experienceInfo';

import './style.scss';

export default function Experience() {
  const [project, setProject] = useState(null);

  return (
    <div className="work-section" id="work">
      {project ? 
          (
            <div className='prj-container'>
              <button type="button" className="prj-back-button" onClick={() => setProject(null)}>
                <p>&lt; {project.name}</p>
              </button>
            </div>
          )
          :
          (
              <div>
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
