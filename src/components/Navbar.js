import React, { useState } from 'react';
import Navlink from './Navlink';

function Navbar() {

    const [hit, setHit] = useState(false);

    const handleOnHit = () => {
        console.log('Hello Sam')
          setHit(!hit);
      };


  return (
      <>
        <div id="mobile-menu__is-active">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
                <ul className="navbar__active navbar__item">
                    <li >
                    <a href="#home" className="navbar__links" onClick={handleOnHit}>
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#about" className="navbar__links" onClick={handleOnHit}>
                        About
                    </a>
                    </li>
                    <li>
                    <a href="#services" className="navbar__links" onClick={handleOnHit}>
                        Services
                    </a>
                    </li>
                    <li className="navbar__btn">
                    <a href="https://discord.gg/Yz9hhHcEb7" className="button" id="signup">
                        Join Discord
                    </a>
                    </li>
                </ul>
                {hit && <Navlink />}
      </>
  );
}

export default Navbar;
