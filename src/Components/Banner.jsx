import React from 'react';
import '../styles/Banner.css';

// La source de l'image passe par la props 
export default function Banner(props) {
    return (
        <>
            <div className="banner">
                <img src={props.img} alt="bannière paysage" />
            </div>
        </>
    )
}
