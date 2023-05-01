import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/CantFind.css";

export default function Error() {
    return(
        <div className="error">
            <div className="number">
                404
            </div>
            <div className="errorstxt">La page que vous demandez n'existe pas.</div>
            <div className="hsh">
                {/* Link redirige vers la page d'accueil */}
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
