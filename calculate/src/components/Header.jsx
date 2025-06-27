import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

function Header(props) {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <p>Investment Calculator</p>
    </header>
  );
}

export default Header;
