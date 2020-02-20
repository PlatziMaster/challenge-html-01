import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer className="Footer">
      <h3 className="Footer__item">Leadership video</h3>
      <h3 className="Footer__item">New finance</h3>
      <h3 className="Footer__item">Entertaiment</h3>
      <div className="Footer__item">
        <ul className="Footer__social">
          <li>Follow us:</li>
          <li>&#9776;</li>
          <li>&#9776;</li>
          <li>&#9776;</li>
          <li>&#9776;</li>
        </ul>
        <div className="Footer__subscribe">
          <input type="text" id="inputSubscribe" className="" />
          <button type="button" className="Footer__btn">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
