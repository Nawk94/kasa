import * as React from 'react';
import logo from '../assets/logo_kasa.png';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

export default function Header() {
    // Utilisation d'un composant fonctionnel pour le header, qui retourne le JSX à afficher
    return (
        <div className="header">
            <div className="logo">
                {/* Affichage du logo en utilisant une balise <img> */}
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
