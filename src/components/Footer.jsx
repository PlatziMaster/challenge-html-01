import React from 'react';
import Nav2 from './Nav2';
import '../styles/components/Footer.styl';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Deck">
        <figure className="Deck__logoFigure">
          <img className="Deck__logo" src="" alt="" />
        </figure>
        <div className="Deck__copyleft">
          <span className="">© 2018 Deck</span>
          <span>Component based UI Kit</span>
        </div>
      </div>

      <div className="Footer__Social">
        <form action="/subscribe/" className="social__form">
          <input
            className="form__email"
            type="text"
            placeholder="Your E-mail"
            id="email"
          />
          <button className="form__buttom" type="button">
            SUBSCRIBE
          </button>
        </form>
        <div className="Social__network">
          <span className="network__followUs"> Follow us:</span>
          <div className="network__iconsContainer">
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest-p" />
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
          </div>
        </div>
      </div>
      <Nav2 />
    </div>
  );
}

export default Footer;
