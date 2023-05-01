import React from 'react';
import '../Styles/Banner.css';

// Composant Banner qui affiche une bannière avec une image
// La source de l'image est passée via la props img
export default function Banner(props) {
    return (
        <>
            <div className="banner">
                <img src={props.img} alt="bannière paysage" />
            </div>
        </>
    )
}
