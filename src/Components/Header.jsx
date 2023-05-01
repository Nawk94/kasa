import * as React from 'react';
import logo from '../assets/logo_kasa.png';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                {/* on affiche le logo */}
                <img src={ logo } alt="logo Kasa" />
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
