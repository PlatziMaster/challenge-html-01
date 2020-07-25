import React, { PureComponent } from 'react';

import '../styles/components/Footer.styl';
import instagram from '../../resources/imgs/instagram.svg';
import pinterest from '../../resources/imgs/pinterest.svg';
import twitter from '../../resources/imgs/twitter.svg';
import facebook from '../../resources/imgs/facebook.svg';
import logo2 from '../../resources/imgs/logo2.png';
import URLS from './URLS';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo">
          <a href="/">
            <img className="footer__logo--img" src={logo2} alt="Logo" />
          </a>
          <p>© 2018 Deck</p>
          <p>Component based UI Kit</p>
        </div>

        <div className="footer__social-media">
          <p>Follw us</p>
          <a href="/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="/">
            <img src={pinterest} alt="Pinterest" />
          </a>
          <a href="/">
            <img src={twitter} alt="A" />
          </a>
          <a href="/">
            <img src={facebook} alt="A" />
          </a>
        </div>

        <div className="footer__contact-us">
          <form>
            <label htmlFor="email">
              <input
                className="footer__contact-us--input"
                type="email"
                name="email"
                id="email"
                placeholder="Your E-mail"
              />
              <button className="footer__contact-us--button" type="button">
                Subscribe
              </button>
            </label>
          </form>
        </div>

        <nav className="footer__sections">
          <ul>
            <li>
              <a href={URLS.technology} target="_blank" rel="noreferrer">
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a href={URLS.ideas} target="_blank" rel="noreferrer">
                IDEAS
              </a>
            </li>
            <li>
              <a href={URLS.landership} target="_blank" rel="noreferrer">
                LANDERSHIP
              </a>
            </li>
            <li>
              <a href={URLS.video} target="_blank" rel="noreferrer">
                VIDEO
              </a>
            </li>
            <li>
              <a href={URLS.news} target="_blank" rel="noreferrer">
                NEWS
              </a>
            </li>
            <li>
              <a href={URLS.finance} target="_blank" rel="noreferrer">
                FINANCE
              </a>
            </li>
            <li>
              <a href={URLS.entretainment} target="_blank" rel="noreferrer">
                ENTRETAINMENT
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
