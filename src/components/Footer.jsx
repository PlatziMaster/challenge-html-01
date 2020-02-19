import React from 'react';

const Footer = () => {
  return (
    <div className="Footer__main">
      <div className="Footer__Logo">
        <img src="../../images/logo_black.png" alt="Logo" />
        <p>2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="Footer__Reverse_Menu_Search">
        <div className="Footer__Menu">
          <ul>
            <li>TECHNOLOGY</li>
            <li>IDEAS</li>
            <li>LEADERSHIP</li>
            <li>ENTERTAINMENT</li>
            <li>NEWS</li>
            <li>FINANCE</li>
            <li>VIDEO</li>
          </ul>
        </div>
        <div className="Footer__Newsletter">
          <div className="Footer__Social">
            <span className="Footer__text_icon redes">Follow us:</span>
            <span className="icon-linkedin redes" />
            <span className="icon-github redes" />
            <span className="icon-twitter redes" />
            <span className="icon-facebook redes" />
          </div>
          <div className="Footer__Search">
            <input
              type="text"
              className="Footer__input"
              placeholder="Your E-mail"
            />
            <button type="button" className="Footer__subs">
              SUSCRIBETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
