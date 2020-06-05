import React from 'react';
import '../styles/components/Footer.css';

function Footer() {
  return(
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__name"> 
          <div className="Footer__logo">
            <p className="Footer__logo--negro">Deck</p>
            <p className="Footer__logo--rojo">.</p>
          </div>
          <div className="Footer__copyright">
            <p>© 2018 Deck</p>
            <p>Component based UI Kit</p>
          </div>
        </div>
        <ul className="Footer__list">
          <li>Technology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
        <div className="Footer__contact">
          <div className="Footer__social">
            <p>Follow us: </p>
            <a href="/"><img src="../../resources/imgs/instagram-6-32.png" alt="" className="Social__img" /></a>
            <a href="/"><img src="../../resources/imgs/pinterest-4-32.png" alt="" className="Social__img" /></a>
            <a href="/"><img src="../../resources/imgs/twitter-32.png" alt="" className="Social__img" /></a>
            <a href="/"><img src="../../resources/imgs/facebook-32.png" alt="" className="Social__img" /></a>
          </div>
          <div className="Footer__suscribe">
            <input placeholder="Your E-mail" />
            <a href="/">Suscribe</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;