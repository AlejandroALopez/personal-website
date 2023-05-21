import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from '../../components/config/particles-config';

import AboutMe from '../aboutMe';
import Skills from '../skills';
import Work from '../work';
// import Interests from '../interests';
import Contact from '../contact';
import cv from '../../assets/cv.pdf';
// import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

export default function LandingPage() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  const ParticlesBackground = () => {
    return (
        <Particles 
            params={particlesConfig}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
          >

        </Particles>
    );
  };

  return (
    <div className="landingPage-container">
      <div className="header-container">
        <div className="header-name">Alejandro Lopez</div>
        <div className="header-navigation">
          <div>
            <Link to="homepage" spy smooth duration={500}>
              <p>HOME</p>
            </Link>
          </div>
          <div>
            <Link to="aboutme" spy smooth duration={500}>
              <p>ABOUT ME</p>
            </Link>
          </div>
          <div>
            <Link to="skills" spy smooth duration={500}>
              <p>SKILLS</p>
            </Link>
          </div>
          <div>
            <Link to="work" spy smooth duration={500}>
              <p>EXPERIENCE</p>
            </Link>
          </div>
          {/* <div>
            <Link to="interests" spy smooth duration={500}>
              <p>INTERESTS</p>
              </Link>
          </div> */}
          <div id="contact-button">
            <Link to="contact" spy smooth duration={500}>
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
        <div className="header-dropdown-container">
          <div className="dropdown-line" />
          <div className="dropdown-line" />
          <div className="dropdown-line" />
        </div>
      </div>
      <ParticlesBackground />
      <div className="homepage" id="homepage">
        <div className="intro-container">
          <p className="intro">
            Hello! I am
            {' '}
            <span>Alejandro Lopez</span>
            {' '}
            and I am a
            {' '}
            <span>Full-Stack Developer</span>
          </p>
          <div className="intro-buttons-container">
            <Link to="contact" spy smooth duration={500}>
              <button type="button" className="intro-button">
                <p>Contact me</p>
              </button>
            </Link>
            <a className="hyperlink" href={cv} target="_blank" rel="noreferrer">
              <button type="button" className="intro-button">
                <p>My resume</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Work />
      {/* <Interests /> */}
      <Contact />
    </div>
  );
}
