import React, { useState } from "react";
import arrow_down from "../assets/arrow_down.png";
import arrow_up from "../assets/arrow_up.png";
import "../Styles/Collapsible.css";

// Le composant Collapsible prend une prop "label" et un contenu sous forme d'enfants
export default function Collapsible(props) {
  // on initialise a false pour indiquer que c'est fermé
  const [isOpen, setIsOpen] = useState(false);

  // on ouvre 
  const openCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="collapsible">
      {/* "toggle" indique si le contenu est ouvert ou fermé */}
      <div className="toggle" onClick={openCollapse}>
        <h2>{props.label}</h2>
        {!isOpen ? (
          <img src={arrow_down} alt="Collapse fermé" />
        ) : (
          <img src={arrow_up} alt="Collapse ouvert" />
        )}
      </div>
      {/* Si isOpen true,  on affiche le contenu */}
      {isOpen && <div className="text_content">{props.children}</div>}
    </div>
  );
}
