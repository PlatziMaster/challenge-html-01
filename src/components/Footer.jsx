import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <h2>
          Deck
          <span>.</span>
        </h2>
        <p>
          2018 Deck
          <br />
          Component based UI Kit
        </p>
      </div>
      <div className="footer__menu">
        <ul>
          <li className="footer__menu-item">Technology</li>
          <li className="footer__menu-item">Leadership</li>
          <li className="footer__menu-item">News</li>
          <li className="footer__menu-item">Entertainment</li>
          <li className="footer__menu-item">Ideas</li>
          <li className="footer__menu-item">Video</li>
          <li className="footer__menu-item">Finance</li>
        </ul>
      </div>
      <div className="footer__contact">
        <div className="footer__socials">
          <p>Follows us:</p>
          inst pint tweet face
        </div>
        <div className="footer__form">
          <form>
            <input type="email" name="email" placeholder="Your E-mail" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
