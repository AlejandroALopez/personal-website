import React, { useState } from 'react';
import './style.scss';

export default function Skills() {
  const [tab, setTab] = useState('code');

  return (
    <div className="skills-section" id="skills">
      <p className="title">{tab === 'code' ? 'Code Skills' : 'Soft Skills'}</p>
      <div className="tab-container">
        <button type="button" className={tab === 'code' ? 'tab-on' : 'tab-off'} onClick={() => setTab('code')}>
          <p>Code skills</p>
        </button>
        <button type="button" className={tab === 'soft' ? 'tab-on' : 'tab-off'} onClick={() => setTab('soft')}>
          <p>Soft skills</p>
        </button>
      </div>
      {tab === 'code'
        ? (
          <div className="skills-container">
            <div>
              <p className="skill">React Native</p>
              <div className="bar-background">
                <div className="bar" id="p90" />
              </div>
            </div>
            <div>
              <p className="skill">React</p>
              <div className="bar-background">
                <div className="bar" id="p80" />
              </div>
            </div>
            <div>
              <p className="skill">HTML5 (HTML + CSS + JS)</p>
              <div className="bar-background">
                <div className="bar" id="p80" />
              </div>
            </div>
            <div>
              <p className="skill">NodeJS</p>
              <div className="bar-background">
                <div className="bar" id="p70" />
              </div>
            </div>
            <div>
              <p className="skill">Python</p>
              <div className="bar-background">
                <div className="bar" id="p60" />
              </div>
            </div>
            <div>
              <p className="skill">Unity</p>
              <div className="bar-background">
                <div className="bar" id="p50" />
              </div>
            </div>
          </div>
        )
        : (
          <div className="skills-container">
            <div>
              <p className="skill">Communication</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p80" />
              </div>
            </div>
            <div>
              <p className="skill">Teamwork</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p80" />
              </div>
            </div>
            <div>
              <p className="skill">Self-direction</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p70" />
              </div>
            </div>
            <div>
              <p className="skill">Adaptability</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p70" />
              </div>
            </div>
            <div>
              <p className="skill">Problem Solving</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p70" />
              </div>
            </div>
            <div>
              <p className="skill">Leadership</p>
              <div className="bar-background">
                <div className="bar bar-soft" id="p60" />
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
