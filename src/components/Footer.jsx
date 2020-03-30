import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer__info">
        <h1>
          Deck
          <span>.</span>
        </h1>
        <p>© 2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="Footer__nav">
        <a href="/">Technology</a>
        <a href="/">Ideas</a>
        <a href="/">Leadership</a>
        <a href="/">Video</a>
        <a href="/">News</a>
        <a href="/">Finance</a>
        <a href="/">Entertainment</a>
      </div>
      <div className="Footer__social">
        <div className="Footer__social--icons">
          <p>Follow us:</p>
          <a href="/">
            <i className="fa fa-instagram icon" />
          </a>
          <a href="/">
            <i className="fa fa-pinterest-p icon" />
          </a>
          <a href="/">
            <i className="fa fa-twitter icon" />
          </a>
          <a href="/">
            <i className="fa fa-facebook icon" />
          </a>
        </div>
        <div className="Footer__mail">
          <input type="text" placeholder="Your E-mail" />
          <button type="button">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
