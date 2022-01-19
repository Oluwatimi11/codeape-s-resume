import React from "react";

function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Social Media</h2>
              <a href="https://www.instagram.com/code_ape02/">Instagram</a>
              <a href="https://web.facebook.com/samuel.oluwatosin.7583/">Facebook</a>
              <a href="https://www.youtube.com/channel/UC1uzN0uHn7p0lR3jlUS7shw">Youtube</a>
              <a href="https://www.twitter.com/the_Bluehood">Twitter</a>
            </div>
            <div className="footer__link--items">
              <h2>About Us</h2>
              <a href="#about">How it works</a>
              <a href="#about">Testimonials</a>
              <a href="#about">Careers</a>
              <a href="#about">Terms of Service</a>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Contact Us</h2>
              <a href="#about">Contact</a>
              <a href="#about">Support</a>
              <a href="#about">Destinations</a>
            </div>
            <div className="footer__link--items">
              <h2>Videos</h2>
              <a href="/">Submit Video</a>
              <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
            </div>
          </div>
        </div>
        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">
                codeApe
              </a>
            </div>
            <p className="website__rights">© codeApe 2021. All rights reserved</p>
            <div className="social__icons">
              <a href="https://web.facebook.com/samuel.oluwatosin.7583/" className="social__icon--link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/code_ape02/" className="social__icon--link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC1uzN0uHn7p0lR3jlUS7shw" className="social__icon--link">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="www.linkedin.com/in/samuel-oluwatosin-oniyilo-b378101a4" className="social__icon--link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.twitter.com/the_Bluehood" className="social__icon--link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
