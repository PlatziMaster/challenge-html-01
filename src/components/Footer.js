import React from 'react';

import '../styles/components/Footer.css';

// import instagramIcon from './icons/icons8-instagram.svg';
// import pinterestIcon from './icons/icons8-pinterest-p.svg';
// import twitterIcon from './icons/icons8-twitter.svg';
// import facebookIcon from './icons/icons8-facebook-f.svg';

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer responsive-desktop">
          <div className="footer--logo">
            <h2>
              Deck
              <span>.</span>
            </h2>
            <p>© 2020 Deck</p>
            <p>Component based UI Kit</p>
          </div>
          <div className="links">
            <a href="/">Technology</a>
            <a href="/">Ideas</a>
          </div>
          <div className="links">
            <a href="/">Leadership</a>
            <a href="/">Video</a>
          </div>
          <div className="links">
            <a href="/">News</a>
            <a href="/">Finance</a>
          </div>
          <div className="links">
            <a href="/">Entertainment</a>
          </div>
          <div className="social">
            <div className="footer--social-icons">
              <p>Follow us: </p>
              <i className="fab fa-instagram" />
              {' '}
              <i className="fab fa-pinterest-p" />
              {' '}
              <i className="fab fa-twitter" />
              {' '}
              <i className="fab fa-facebook-f" />
              {/* <img src={instagramIcon} alt='instagramIcon' /> */}
              {/* <img src={pinterestIcon} alt='pinterestIcon' /> */}
              {/* <img src={twitterIcon} alt='twitterIcon' /> */}
              {/* <img src={facebookIcon} alt='facebookIcon' /> */}
            </div>
            <form>
              <input type="text" placeholder="Your E-mail" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </footer>
        <footer className="footer responsive-tablet">
          <div>
            <div className="footer--logo">
              <h2>
                Deck
                <span>.</span>
              </h2>
              <p>© 2020 Deck</p>
              <p>Component based UI Kit</p>
            </div>
            <div className="links">
              <a href="/">Technology</a>
              <a href="/">Ideas</a>
              <a href="/">Entertainment</a>
            </div>
            <div className="links">
              <a href="/">Leadership</a>
              <a href="/">Video</a>
            </div>
            <div className="links">
              <a href="/">News</a>
              <a href="/">Finance</a>
            </div>
          </div>
          <div className="social">
            <div>
              <form>
                <input type="text" placeholder="Your E-mail" />
                <button type="submit">Subscribe</button>
              </form>
              <div className="footer--social-icons">
                Follow us: 
                {' '}
                <i className="fab fa-instagram" />
                {' '}
                <i className="fab fa-pinterest-p" />
                {' '}
                <i className="fab fa-twitter" />
                {' '}
                <i className="fab fa-facebook-f" />
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer responsive-phone">
          <div>
            <div className="footer--logo">
              <h2>
                Deck
                <span>.</span>
              </h2>
              <p>© 2020 Deck</p>
              <p>Component based UI Kit</p>
            </div>
            <div className="social">
              <div>
                <form>
                  <input type="text" placeholder="Your E-mail" />
                  <button type="submit">Subscribe</button>
                </form>
                <div className="footer--social-icons">
                  Follow us: 
                  {' '}
                  <i className="fab fa-instagram" />
                  {' '}
                  <i className="fab fa-pinterest-p" />
                  {' '}
                  <i className="fab fa-twitter" />
                  {' '}
                  <i className="fab fa-facebook-f" />
                </div>
              </div>
            </div>
          </div>
          <div className="links--group-phone">
            <div className="links">
              <a href="/">Technology</a>
              <a href="/">Ideas</a>
              <a href="/">Entertainment</a>
              <a href="/">Leadership</a>
            </div>
            <div className="links">
              <a href="/">Video</a>
              <a href="/">News</a>
              <a href="/">Finance</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
