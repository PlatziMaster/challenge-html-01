import React from 'react';
import { Link } from 'react-router-dom';
import InitialState from '../inicialState';
import iconFB from '../assets/icons/facebook.png';
import iconIG from '../assets/icons/instagram.png';
import iconPT from '../assets/icons/pinterest.png';
import iconTW from '../assets/icons/twitter.png';

const Footer = () => {
  return (
    <footer>
      <div className="marca">
        <h2 className="marca__title">
          Deck
          <span>.</span>
        </h2>
        <p className="marca__register">
          © 2018 Deck
          <span>Component based UI Kit</span>
        </p>
      </div>
      <div className="SocialMedia">
        <p className="SocialMedia__text">Follow us:</p>
        <img className="SocialMedia__fb" src={iconFB} alt="Facebook icon" />
        <img className="SocialMedia__ig" src={iconIG} alt="Instagram icon" />
        <img className="SocialMedia__pt" src={iconPT} alt="Pinteres icon" />
        <img className="SocialMedia__tw" src={iconTW} alt="Twitter icon" />
      </div>
      <form>
        <input placeholder="Your E-mail" className="input" />
        <button className="btn" type="submit">
          SUSCRIBE
        </button>
      </form>
      <ul>
        {InitialState.tags.map(item => (
          <Link to={item.url} key={item.id}>
            <li>{item.name.toLocaleUpperCase()}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
