import React from 'react';
import logoFooter from '../assets/logo_footer.png';
import '../styles/Footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} alt="Kasa, agence de location entre particulier" />
      </div>
      <p>@2020 Kasa - All rights reserved</p>
    </div>
  )
}
