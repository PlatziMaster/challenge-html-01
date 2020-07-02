import React from 'react';
import '../styles/components/Footer.styl';
import Items from './Items';

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand--info">
        <h1>Deck</h1>
        <p>© 2018 Deck</p>
        <p>Component based UI kit</p>
      </div>
      <div className="footer--items">
        <Items className="footer--items__list" />
      </div>
      <div className="footer--form">
        <div className="footer--form__social">
          <span>Follow us:</span>
          <span>ins</span>
          <span>pin</span>
          <span>twi</span>
          <span>fac</span>
        </div>
        <div className="footer--form__subscribe">
          <div className="footer--input">
            <input type="text" placeholder="Your E-mail" />
            <button type="button" className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer