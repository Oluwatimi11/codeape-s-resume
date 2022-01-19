import React from "react";

function Services() {
  return (
    <>
      <div className="services" id="services">
        <h1>My Services</h1>
        <div className="services__wrapper">
          <div className="services__card">
            <div className="services__imbBx">
              <img src="img/movie.jpg" alt="movie img"/>
              <h2>MovieApp</h2>
            </div>
            <div className="services__content">
            <p>React Framework & the movie database(tmdb)</p>
            <div className="services__btn">
              <button><a href="https://codeape-movieapp.netlify.app/" className="services__link">Examine</a></button>
            </div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__imbBx">
              <img src="img/red.jpg" alt="counsel img"/>
              <h2>thAncestors</h2>
            </div>
            <div className="services__content">            
              <p>Sass animation css & npm compiler</p>
              <div className="services__btn">
                <button><a href="https://thancestors.com/" className="services__link">Examine</a></button>
              </div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__imbBx">
              <img src="img/tv2.jpg" alt="chat img"/>
              <h2>ChatApp</h2>
            </div>
            <div className="services__content">
              <p>React Framework & chat engine</p>
              <div className="services__btn">
                <button><a href="https://codeape-chatapp.netlify.app/" className="services__link">Examine</a></button>
              </div>
            </div>
          </div>
          <div className="services__card">
            <div className="services__imbBx">
              <img src="img/tv.jpg" alt="Tv img"/>
              <h2>Reality TV</h2>
            </div>
            <div className="services__content">
              <p>Bootstrap, sass animation css, php</p>
              <div className="services__btn">
              <button><a href="https://realitytvregistry.com/" className="services__link">Examine</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
