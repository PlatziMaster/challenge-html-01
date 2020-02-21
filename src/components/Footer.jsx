import React from 'react';

import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <div className="Footer__logo">
          Deck
          <p>.</p>
        </div>

        <div className="Footer__copyright">
          <p>© 2018 Deck</p>
          <p>Component based UI Kit</p>
        </div>
      </div>
      <div className="Footer__navbar">
        <ul>
          <li>Techology</li>
          <li>Leadership</li>
          <li>News</li>
          <li>Entertainment</li>
          <li>Ideas</li>
          <li>Video</li>
          <li>Finance</li>
        </ul>
      </div>
      <div className="Footer-followContainer">
        <div className="Footer__follow">
          <p>Follow us:</p>
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest" />
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook-f" />
        </div>

        <div>
          <input className="input" type="text" placeholder="Your E-mail" />
          <input className="submit" type="submit" value="SUBSCRIBE" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
