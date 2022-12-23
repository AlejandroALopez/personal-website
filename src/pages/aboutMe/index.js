import React from 'react';
import profileImg from '../../assets/profile.jpeg';
import './style.scss';

export default function AboutMe() {
  return (
    <div className="aboutme-container" id="aboutme">
      <img className="image" alt="profile_img" src={profileImg} />
      <div className="aboutme-info-container">
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
            <p>Born in Lima, Peru</p>
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
