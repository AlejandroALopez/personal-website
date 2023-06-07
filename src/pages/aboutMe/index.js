import React, { useState, useEffect, useRef } from 'react';
import profileImg from '../../assets/profile.jpg';
import './style.scss';

export default function AboutMe() {
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
    <div className="aboutme-container" id="aboutme"> 
      <img className={ `image fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } alt="profile_img" src={profileImg} ref={ref}/>
      <div className={ `aboutme-info-container fade-in-section ${ isIntersecting ? 'is-visible' : '' }` } ref={ref}>
        <p className="title">About me</p>
        <p className="paragraph">
          I love two things: Having fun, and working on challenging, meaningful projects. Either as a lone wolf developer or a
          team worker, I enjoy transforming ideas and designs into apps and websites using my Full Stack skills.
        </p>
        <p className="paragraph">
          When designers make a beautiful screen, or when partners are excited about a new feature, it is like Christmas for me.
          I open my code editor, play my favorite songs, lose track of time, and think for myself: This is going to be fun.
        </p>
        <div className="point-container">
          <div className="aboutme-point">
            <i className="fas fa-globe-americas fa-3x" />
            <p>Born in Lima, Peru. US Resident</p>
          </div>
          <div className="aboutme-point">
            <i className="fas fa-graduation-cap fa-3x" />
            <p>Computer Science Major, Digital Arts Minor</p>
          </div>
          <div className="aboutme-point">
            <i className="fa fa-university fa-3x" />
            <p>Dartmouth College</p>
          </div>
        </div>
      </div>
    </div>
  );
}
