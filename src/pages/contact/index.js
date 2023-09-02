import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

export default function Contact() {
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
    <div className="contact-container" id="contact">
      <p className={ `title fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>Contact info</p>
      <div className={ `info-container mail-container fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>
        <i className="far fa-envelope fa-3x" />
        <p>alejandro.a.lopez.0907@gmail.com</p>
      </div>
      <div className={ `info-container fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>
        <i className="fas fa-mobile-alt fa-3x" />
        <p>(603) 277 - 8656</p>
      </div>
      <div className={ `buttons-container fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>
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
