import React from 'react';
import '../styles/components/Footer.styl';
import instagramIcon from '../../resources/imgs/instagram.png';
import pinterestIcon from '../../resources/imgs/pinterest.png';
import twitterIcon from '../../resources/imgs/twitter.png';
import facebookIcon from '../../resources/imgs/facebook.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-logo">
        Deck
        <p>.</p>
        <span className="spanLogo">&copy; 2020 Deck</span>
      </div>
      <div className="Footer-links">
        <div>Technology</div>
        <div>LeaderShip</div>
        <div>News</div>
        <div>Entertaiment</div>
        <div>Ideas</div>
        <div>Videos</div>
        <div>Finance</div>
      </div>
      <div className="Footer-medias">
        <div>
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <div>
          <img src={pinterestIcon} alt="Pinterest" />
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter" />
        </div>
        <div>
          <img src={facebookIcon} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
