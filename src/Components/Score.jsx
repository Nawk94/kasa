import React from 'react';

export default function RatingWithStar({rating}) {

    // Tableau des étoiles à afficher
    const stars = [1, 2, 3, 4, 5];

    // Les étoiles pleines
    const redStyle = {
        color: 'var(--corail)', 
    }

    // Les étoiles vides
    const greyStyle = {
        color: 'var(--cleargrey)', 
    }

    return (
        <div>
            {/* Pour chaque étoile, on vérifie si la note est > ou =
            à l'indice, si oui on affiche une étoile pleine sinon
            on affiche une étoile vide. On utilise toString() pour convertir en chaine de caractere pour avoir des key uniques */}
            {stars.map((star) =>
                rating >= star ? (
                    <span key={star.toString()} style={redStyle}>&#9733;</span>
                ) : (
                    <span key={star.toString()} style={greyStyle}>&#9733;</span>
                )
            )}
        </div>
    );
}
