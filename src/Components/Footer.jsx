import React from 'react';
import logoFooter from '../assets/logo_kasa_footer.png';
import '../Styles/Footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} alt="logo Kasa" />
      </div>
      <p>@2020 Kasa - All rights reserved</p>
    </div>
  )
}
