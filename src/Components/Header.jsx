import * as React from 'react';
import LogoHeader from '../assets/logo_header.png';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                {/* on affiche le logo */}
                <img src={LogoHeader} alt="Kasa, agence de location entre particulier" />
            </div>
            <nav>
                {/* <NavLink> lie les différentes pages  */}
                <NavLink to="/" className={({isActive}) =>
                    isActive ? "activeLink": ""}>Accueil</NavLink>
                <NavLink to="/About" className={({isActive}) =>
                    isActive ? "activeLink": ""}>A propos</NavLink> 
            </nav>
        </div>
    )
}
