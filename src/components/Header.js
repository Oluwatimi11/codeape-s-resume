import React from "react";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__div">
            <img src="img/ape1.jpeg" alt="codeApe" className="navbar__img" />
            <a href="#home" id="navbar__logo">
              codeApe
            </a>
          </div>
          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar__menu">
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
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
