import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/CantFind.css";

export default function Error() {
    return(
        <div className="error">
            <div className="error_number">
                404
            </div>
            <div className="oups">La page que vous demandez n'existe pas.</div>
            <div className="link_home">
                {/* Link redirige l'utilisateur vers la page d'accueil */}
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
