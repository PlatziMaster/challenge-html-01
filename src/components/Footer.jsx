import React from 'react';
import '../styles/components/Footer.styl';

const Header = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <h2>
          Deck
          <span>.</span>
        </h2>
        <p>@ 2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="footer__navigation">
        <a href="/">TECHNOLOGY</a>
        <a href="/">IDEAS</a>
        <a href="/">LEADERSHIP</a>
        <a href="/">VIDEO</a>
        <a href="/">NEWS</a>
        <a href="/">FINANCE</a>
        <a href="/">ENTERTAINMENT</a>
      </div>
      <div className="footer__subscribe">
        <div className="footer__subscribe__social">
          <p>Follow us:</p>
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
          <span className="icon">
            <i className="fab fa-pinterest-p" />
          </span>
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
          <span className="icon">
            <i className="fab fa-facebook-f" />
          </span>
        </div>
        <div className="maillist">
          <input type="text" placeholder="Your E-mail" />
          <button className="footer_button" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
