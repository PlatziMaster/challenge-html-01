import React from 'react';
import '../styles/components/Menu.css';

export default function Header() {
  return (
    <div className="Header__Main">
      <img src="../../images/logo.png" alt="Logo" />
      <div className="Header__Menu">
        <ul>
          <li>TECHNOLOGY</li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
      </div>
      <div className="Header__Responsive_menu">
        <span className="icon-menu" />
      </div>
    </div>
  );
}
