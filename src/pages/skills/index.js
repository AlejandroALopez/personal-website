import React from 'react';
import { skillsMap, skillsExperiencedMap } from '../../constants/skillsDictionary';

import './style.scss';

export default function Skills() {

  return (
    <div className="skills-section" id="skills">
      <p className="title">Tools I am skilled at:</p>
      <div className="skills-container">
        {skillsMap.map((skill) => {
          return (
            <div key={skill.name} className="skill-element">
              <img src={skill.icon} alt={skill.name}/>
            </div>
          );
        })}
      </div>
      <p className="title">Tools I worked with:</p>
      <div className="skills-container">
        {skillsExperiencedMap.map((skill) => {
          return (
            <div key={skill.name} className="skill-element">
              <img src={skill.icon} alt={skill.name}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
