import React from "react";
import Tilt from 'react-vanilla-tilt';

function About() {
  return (
    <>
      <div className="main" id="about">
        <div className="main__container">
          {/* <Tilt id="card" options={{ scale: 2, max: 25, speed:400, glare: true, "max-glare": 1,  }}> */}
            <div className="main__img--card">
              <img src="img/oniyilo1.jpg" alt="codeApe" className="main__img" />
              <p className="nom">Oniyilo Samuel Oluwatosin</p>
              {/* <i className="fas fa-layer-group"></i> */}
            </div>
          {/* </Tilt> */}
          <div className="main__content">
            <h1>What do i do?</h1>
            <h2>I build <span className="mobile">Mobile Responsive</span> Websites and WebApps</h2>
            <p>Place a call/drop a message to learn more about my services...</p>
            <div className="main__icons">
              <a href="https://web.facebook.com/samuel.oluwatosin.7583/" className="main__btn" id="icon__btn">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/code_ape02/" className="main__btn" id="icon__btn">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC1uzN0uHn7p0lR3jlUS7shw" className="main__btn" id="icon__btn">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="www.linkedin.com/in/samuel-oluwatosin-oniyilo-b378101a4" className="main__btn" id="icon__btn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.twitter.com/the_Bluehood" className="main__btn" id="icon__btn">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            {/* <button className="main__btn">
              <a href="#">Schedule Call</a>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
