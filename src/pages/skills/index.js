import React, { useState, useEffect, useRef } from 'react';
import { skillsMap, skillsExperiencedMap } from '../../constants/skillsDictionary';

import './style.scss';

export default function Skills() {
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
    <div className="skills-section" id="skills">
      <div className={ `fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>
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
        <p className="title">Other tools I worked with:</p>
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
    </div>
  );
}
