import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        Deck<span>.</span>
        <p>
          {' '}
          © 2018 Deck
          <br />
          Component based UI Kit
        </p>
      </div>
      <div className="footer__nav">
        <ul>
          <li>Tecnology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="footer__social">
        <div className="footer__follow-us">
          <span>Follow us</span>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-pinterest" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        <div className="footer__subscribe">
          <input type="text" placeholder="Your E-mail" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
