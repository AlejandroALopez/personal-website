import React from 'react';
import { Link } from 'react-scroll';
import AboutMe from '../aboutMe';
import Skills from '../skills';
import Work from '../work';
import Interests from '../interests';
import Contact from '../contact';
import cv from '../../assets/cv.pdf';
// import { connect } from 'react-redux';
import './style.scss';

// import { fetchConstants } from '../actions/constantsActions';

export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="header-container">
        <div className="header-name">Alejandro Lopez</div>
        <div className="header-navigation">
          <div>
            <Link to="homepage" spy smooth duration={500}>HOME</Link>
          </div>
          <div>
            <Link to="aboutme" spy smooth duration={500}>ABOUT ME</Link>
          </div>
          <div>
            <Link to="skills" spy smooth duration={500}>SKILLS</Link>
          </div>
          <div>
            <Link to="work" spy smooth duration={500}>WORK</Link>
          </div>
          <div>
            <Link to="interests" spy smooth duration={500}>INTERESTS</Link>
          </div>
          <div>
            <Link to="contact" spy smooth duration={500}>CONTACT</Link>
          </div>
        </div>
        <div className="header-dropdown-container">
          <div className="dropdown-line" />
          <div className="dropdown-line" />
          <div className="dropdown-line" />
        </div>
      </div>
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
                Contact me
              </button>
            </Link>
            <a className="hyperlink" href={cv} target="_blank" rel="noreferrer">
              <button type="button" className="intro-button">
                My resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Work />
      <Interests />
      <Contact />
    </div>
  );
}
