import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__brand">
        <div className="footer__logo">
          <h2>Logo</h2> 
          {' '}
          <div className="bullet" />
        </div>
        <small>&copy; 2018 Logo Component based Ui Kit</small>
      </div>
      <div className="footer__item">
        <p>technology</p>
        <p>ideas</p>
      </div>
      <div className="footer__item">
        <p>leadership</p>
        <p>video</p>
      </div>
      <div className="footer__item">
        <p>news</p>
        <p>finance</p>
      </div>
      <div className="footer__item">
        <p>entertainment</p>
      </div>
      <div className="footer__social">
        <div className="footer__icons">
          <p>Follow us: </p>
          <i className="fa fa-instagram" />
          <i className="fa fa-pinterest-p" />
          <i className="fa fa-twitter" />
          <i className="fa fa-facebook" />
        </div>
        <div className="footer__form">
          <input type="text" placeholder="Email" />
          <button type="button">Suscribe</button>
        </div>
      </div>
      <div className="mobile__item">
        <div className="mobile__item-01">
          <p>technology</p>
          <p>ideas</p>
          <p>enternainment</p>
          <p>leadership</p>
        </div>
        <div className="mobile__item-02">
          <p>video</p>
          <p>news</p>
          <p>finance</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
