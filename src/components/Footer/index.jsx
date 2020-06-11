import React from 'react';

import '../../styles/components/Footer.css';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';
import FooterLogo from './FooterLogo';

const Footer = () => (
  <div className="footer">
    <FooterLogo />
    <FooterNav />
    <FooterSocial />
  </div>
);

export default Footer;
