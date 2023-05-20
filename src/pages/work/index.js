import React, { useState } from 'react';
import PhoneIcon from '../../assets/phone.svg';
import MonitorIcon from '../../assets/monitor.svg';

import './style.scss';

export default function Experience() {
  const [project] = useState(null);

  return (
    <div className="work-section" id="work">
      {project ? 
          (
            <div>
              asd
            </div>
          )
          :
          (
              <div>
                <p className="title">Experience</p>
                <div className="projects-container">
                  <div className="project-element">
                    <div className="project-top-container">
                      <img src={MonitorIcon} alt="phone icon" />
                      <div className="project-info-container">
                        <p className="project-info-title">ConnectUS</p>
                        <p className="project-info-type">Internship</p>
                        <p className="project-info-role">Full Stack Developer</p>
                      </div>
                    </div>
                    <p className="stack-text"><span>Stack:</span> A, B, C</p>
                    <button type="button" className="read-more-button">
                      <p>Read more</p>
                    </button>
                  </div>

                  <div className='separation-line'/>

                  <div className="project-element">
                    <div className="project-top-container">
                      <img src={PhoneIcon} alt="phone icon" />
                      <div className="project-info-container">
                        <p className="project-info-title">ConnectUS</p>
                        <p className="project-info-type">Internship</p>
                        <p className="project-info-role">Full Stack Developer</p>
                      </div>
                    </div>
                    <p className="stack-text"><span>Stack:</span> React Native, Javascript, Sass, Express, Node, MongoDB, AWS S3, MERN stack</p>
                    <button type="button" className="read-more-button">
                      <p>Read more</p>
                    </button>
                  </div>

                  <div className='separation-line'/>

                  <div className="project-element">
                    <div className="project-top-container">
                      <img src={PhoneIcon} alt="phone icon" />
                      <div className="project-info-container">
                        <p className="project-info-title">ConnectUS</p>
                        <p className="project-info-type">Internship</p>
                        <p className="project-info-role">Full Stack Developer</p>
                      </div>
                    </div>
                    <p className="stack-text"><span>Stack:</span> A, B, C</p>
                    <button type="button" className="read-more-button">
                      <p>Read more</p>
                    </button>
                  </div>
                </div>
              </div>
          )}
    </div>
  );
}
