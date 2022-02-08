import React from 'react';

function Navlink() {
  return (
    <>
         <div className="navbar__toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        <ul className="navbar__menu--inactive">
            <li className="navbar__item">
              <a href="#home" className="navbar__links" id="home-page">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__links" id="about-page">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#services" className="navbar__links" id="services-page">
                Services
              </a>
            </li>
            <li className="navbar__btn">
              <a href="https://discord.gg/p7wT3wYxkm" className="button" id="signup">
                Join Discord
              </a>
            </li>
          </ul>
      </>
    );
}


export default  Navlink;
