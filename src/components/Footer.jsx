import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => (
  <footer className="footer">
    <div className="footer--container container">
      <div className="footer--container__logo">
        <img src="/resources/imgs/logoFooter.png" alt="Deck." />
        <p>
          © 2020 Deck 
          {' '}
          <br />
          Yoshua and David
        </p>
      </div>
      <div className="footer--container__categories">
        <a href="http://platzi.com">Technology</a>
        <a href="http://platzi.com">Leadership</a>
        <a href="http://platzi.com">News</a>
        <a href="http://platzi.com">Entertainment</a>
        <a href="http://platzi.com">Ideas</a>
        <a href="http://platzi.com">Video</a>
        <a href="http://platzi.com">Finances</a>
      </div>
      <div className="footer--container__social">
        <div className="container--social__follow">
          <p>Follow us:</p>
          <div>
            <img src="/resources/imgs/instagram.png" width="" alt="Instagram" />
            <img src="/resources/imgs/pinterest.png" width="" alt="Pinterest" />
            <img src="/resources/imgs/twitter.png" width="" alt="Twitter" />
            <img src="/resources/imgs/facebook.png" width="" alt="Facebook" />
          </div>
        </div>
        <div className="container--social__input">
          <input
            type="email"
            placeholder="Your E-mail"
            name="uikit"
            id="uikit"
          />
          <input className="button--follow" type="button" value="SUBSCRIBE" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
