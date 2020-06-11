import React from 'react';

const FooterSocial = () => {
  return (
    <div className="footer__social">
      <div className="footer__follow-us">
        <span>Follow us:</span>
        <i className="fa fa-twitter" aria-hidden="true" />
        <i className="fa fa-instagram" aria-hidden="true" />
        <i className="fa fa-github" aria-hidden="true" />
        <i className="fa fa-globe" aria-hidden="true" />
      </div>
      <div className="footer__subscribe">
        <input placeholder="Your E-mail" type="text" />
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
};

export default FooterSocial;
