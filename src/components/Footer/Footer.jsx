import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../../styles/components/Footer/_footer.styl';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContainer-image">
        <img src="../../../resources/imgs/logoOscuro.png" alt="imagen" />
        <p>
          © 2018 Deck
          <br />
          Component based UI Kit
        </p>
      </div>
      <nav className="footerContainer_nav">
        <ul className="footerContainer_nav-list">
          <li className="element">TECHNOLOGY</li>
          <li className="element">IDEAS</li>
          <li className="element">LEADERSHIP</li>
          <li className="element">VIDEO</li>
          <li className="element">NEWS</li>
          <li className="element">FINANCE</li>
          <li className="element">ENTERTAINMENT</li>
        </ul>
      </nav>
      <div className="footerContainer_contact">
        <nav>
          <ul className="footerContainer_contact-listSocial">
            <li className="items">Follow us:</li>
            <li className="items">
              <InstagramIcon />
            </li>
            <li className="items">
              <PinterestIcon />
            </li>
            <li className="items">
              <TwitterIcon />
            </li>
            <li className="items">
              <FacebookIcon />
            </li>
          </ul>
        </nav>
        <input
          className="footerContainer_contact-formText"
          type="text"
          name="email"
          id="email"
          placeholder="Your E-mail"
        />
        <input
          className="footerContainer_contact-formButton"
          type="button"
          value="SUBSCRIBE"
        />
      </div>
    </footer>
  );
};

export default Footer;
