import React from 'react';
import Nav2 from './Nav2';
import '../styles/components/Footer.styl';

function Footer() {
  return (
    <div className="Footer">
      <figure className="Footer__logoFigure">
        <img className="Footer__logo" src="" alt="" />
      </figure>
      <div className="Footer__copyleft">
        <span className="">© 2018 Deck</span>
        <span>Component based UI Kit</span>
        <div className="Footer__spacer"> </div>
        <form action="/subscribe/" className="copyleft__form">
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
        <div className="Footer__spacer"> </div>
        <div className="copyleft__social">
          <span className="social__followUs"> Follow us:</span>
          <div className="social__iconsContainer">
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest-p" />
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
          </div>
        </div>
        <Nav2 />
      </div>
    </div>
  );
}

export default Footer;
