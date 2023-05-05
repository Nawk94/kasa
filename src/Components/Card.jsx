import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  const { img, title } = props; // Destructuration des props pour éviter la répétition
  return (
    <div className="card">
      <img src={img} alt="logement" />
      <h2>{title}</h2>
    </div>
  );
}
