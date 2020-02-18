import React from 'react';
import Nav from './Nav';
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
        <div> </div>
        <form action="/subscribe/" className="form-email">
          <input type="text" placeholder="Your E-mail" id="email" />
          <button type="button">SUBSCRIBE</button>
        </form>
        <div className="copyleft__social">
          <span className="social__followUs"> Follow us:</span>
          <div className="social__iconsContainer">
            <i className="iconsContainer__fab fa-facebook" />
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Footer;
