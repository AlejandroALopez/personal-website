import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import eq2Img1 from '../../assets/EQ2/EQ2img1.png';
import eq2Img2 from '../../assets/EQ2/EQ2img2.png';
import eq2Img3 from '../../assets/EQ2/EQ2img3.png';
import bayesEMImg1 from '../../assets/BayesEM/BayesEMimg1.png';
import bayesEMImg2 from '../../assets/BayesEM/BayesEMimg2.png';
import bayesEMImg3 from '../../assets/BayesEM/BayesEMimg3.png';
import connectUSimg1 from '../../assets/ConnectUS/connectUSimg1.png';
import './style.scss';

export default function Work() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === 2 ? 0 : index + 1);
  };

  const currentView = () => {
    switch (index) {
      case 0: // first project: BayesEM
        return (
          <div className={index === 0 ? 'slide active' : 'slide'}>
            <div className="project">
              <div className="text-container">
                <p className="project-title">BayesEM</p>
                <p className="project-description">
                  Mobile app made to assist medical residents on patient diagnoses, allowing them to select an initial confidence probability
                  of the patient having a specific condition (pre-test), followed by a survey of symptoms that impact such probability (post-test).
                </p>
                <p className="project-description">
                  The app was built on React Native and uses a Flask backend connected to a Mongo database. The latest version of the app
                  was recently uploaded to Testflight.
                </p>
              </div>
              <div className="images-container">
                <img src={bayesEMImg1} className="image-eq2" alt="EQ2" />
                <img src={bayesEMImg2} className="image-eq2" alt="EQ2" />
                <img src={bayesEMImg3} className="image-eq2" alt="EQ2" />
              </div>
            </div>
          </div>
        );
      case 1: // first project: ConnectUS
        return (
          <div className={index === 1 ? 'slide active' : 'slide'}>
            <div className="project">
              <div className="text-container">
                <p className="project-title">ConnectUS</p>
                <p className="project-description">
                  A web tool from Llega Inc. which I was able to contribute to as an intern. It helps managers organize
                  all kinds of team dynamics, such as meetings, notes, and prorgee
                </p>
                <p className="project-description">
                  I mainly interacted with the frontend, which is written in React, and was also able to
                  do some tasks in the backend, which was built on Typescript, a tool I was unfamiliar at the time.
                </p>
              </div>
              <div className="images-container">
                <img src={connectUSimg1} className="image-connectus" alt="connectus" />
              </div>
            </div>
          </div>
        );
      case 2: // first project: EQ2
        return (
          <div className={index === 2 ? 'slide active' : 'slide'}>
            <div className="project">
              <div className="text-container">
                <p className="project-title">EQ2</p>
                <p className="project-description">
                  Mobile app to be used by instructors from the Lionheart Foundation to help trauma-impacted
                  youth. Includes features like progress tracking through videos and audio lessons, as well as goals and feelings check-in.
                </p>
                <p className="project-description">
                  The app was built on React Native and uses an ExpressJS backend connected to a Mongo database. It also uses AWS S3 to store
                  audio, video, and images.
                </p>
              </div>
              <div className="images-container">
                <img src={eq2Img1} className="image-eq2" alt="EQ2" />
                <img src={eq2Img2} className="image-eq2" alt="EQ2" />
                <img src={eq2Img3} className="image-eq2" alt="EQ2" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="work-section" id="work">
      <p className="title">Work</p>
      <div className="project-container">
        <FaArrowAltCircleLeft className="arrow" onClick={prevSlide} />
        {currentView()}
        <FaArrowAltCircleRight className="arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}
