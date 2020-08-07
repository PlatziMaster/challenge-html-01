import React from 'react';

import '../styles/components/Footer.styl';

import Logo from './Logo';

const Foorter = () => {
  return (
    <footer className="footer">
      <div className="footer_item">
        <Logo />
        <p>© 2018 Desk</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="footer_item">
        <p>TECHNOLOGY</p>
        <p>IDEAS</p>
      </div>
      <div className="footer_item">
        <p>LEADERSHIP</p>
        <p>VIDEO</p>
      </div>
      <div className="footer_item">
        <p>NEWS</p>
        <p>FINANCE</p>
      </div>
      <div className="footer_item">
        <p>ENTERTAINMENT</p>
      </div>
      <div className="footer_item">
        <div className="icons">
          <span>
            Follow US:
            <ion-icon name="logo-instagram" />
            <ion-icon name="logo-pinterest" />
            <ion-icon name="logo-twitter" />
            <ion-icon name="logo-facebook" />
          </span>
        </div>
        <div>
          <form action="/">
            <input
              className="contact-1"
              type="email"
              name="email"
              placeholder="Your E-mail"
              id=""
            />
            <input
              className="contact-2"
              type="button"
              value="SUBSCRIBE"
              id=""
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Foorter;
