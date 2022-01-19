import React from "react";
import Tilt from "react-vanilla-tilt";

function Signup() {
  return (
    <>
      <div className="mains" id="sign-up">
        <div className="mains__container">
          <div className="main__contents">
            <h1>Join My Team</h1>
            <h2>
              React JS, Vanilla JS, <br /> Sass css, Glasmorphism css,
              Bootstrap4, <br /> Css3, Html5.
            </h2>
            <p>These make my work different...</p>
            <button className="main__btn">
              <a href="https://discord.gg/p7wT3wYxkm">Join Discord</a>
            </button>
          </div>
          <div className="mains__img--container">
            {/* <Tilt
              id="cards"
              options={{ scale: 2, max: 25, speed:400, glare: true, "max-glare": 1 }}
            > */}
              <div className="mains__img--card" id="card-5">
                <div className="mains__img">
                  <img
                    src="img/oniyilo2.jpg"
                    alt="codeApe"
                  />
                </div>
                <div className="mains__info">
                  <div className="mains__name">
                    <h3>
                      Samuel Oniyilo (codeApe)
                    </h3>
                    <p>
                      Web Developer
                    </p>
                  </div>
                  <div className="mains__desc">
                    <table>
                      <tr>
                        <td className="mains__right">
                          Company
                        </td>
                        <td className="mains__right">
                          Null
                        </td>
                      </tr>
                      <tr>
                        <td className="mains__right">
                          Location
                        </td>
                        <td className="mains__right">
                          Lagos, Nigeria
                        </td>
                      </tr>
                      <tr>
                        <td className="mains__right">
                          Job Nature
                        </td>
                        <td className="mains__right">
                          Remote/Hybrid
                        </td>
                      </tr>
                      <tr>
                        <td className="mains__right">
                          Job Status
                        </td>
                        <td className="mains__right">
                          Unemployed
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                {/* <i className="fas fa-users"></i> */}
                <div className="mains__btn">
                  <i class="far fa-bookmark"></i>
                  <button>
                    Full Time
                  </button>
                </div>
              </div>
            {/* </Tilt>
            <Tilt
              id="cards"
              options={{ scale: 2, max: 25, speed:400, glare: true, "max-glare": 1 }}
            > */}
              <div className="mains__img--card-2" id="card-6">
                <p>
                  Tel: +234 806 3519 423
                </p>
                <div id="dark">
                </div>
                <h4>AUTORIZED SIGNATURE-NOT VALID UNLESS SIGNED</h4>
                <div className="mains__bar">
                  <div id="white">
                  </div>
                  <span>
                    197
                  </span>
                </div>
                <div className="mains__end">
                  <div>
                    <p>
                      Use this card to reach out to the codeApe for Job and project offers
                      on all his platforms. Drop a mail, place a call, visit his social media accounts.
                    </p>
                  </div>
                  <div className="mains__div">|</div>
                  <div>
                    <p>
                      Email: masterarcher6321@gmail.com
                      GitHub: https://github.com/Oluwatimi11
                    </p>
                  </div>
                </div>
              </div>
            {/* </Tilt> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
