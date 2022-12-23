import React from 'react';
import './style.scss';

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <p className="title">Contact info</p>
      <div className="info-container mail-container">
        <i className="far fa-envelope fa-3x" />
        <p>alejandro.a.lopez.cochachi.23@dartmouth.edu</p>
      </div>
      <div className="info-container">
        <i className="fas fa-mobile-alt fa-3x" />
        <p>(603) 277 - 8656</p>
      </div>
      <div className="buttons-container">
        <a className="button" href="https://www.linkedin.com/in/alejandro-a-lopez/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-8x" />
        </a>
        <a className="button" href="https://github.com/AlejandroALopez" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-8x" />
        </a>
      </div>
    </div>
  );
}
