import React from 'react';
import logoFooter from '../assets/logo_kasa_footer.png';
import '../Styles/Footer.css';

// Composant fonctionnel Footer
export default function Footer() {
  return (
    // Container du footer
    <div className="footer">
      {/* Logo de Kasa */}
      <div className="logo">
        <img src={logoFooter} alt="logo Kasa" />
      </div>
      {/* Texte des droits d'auteurs */}
      <p>@2020 Kasa - All rights reserved</p>
    </div>
  )
}
