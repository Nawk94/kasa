import React, { useState } from "react";
import arrowDown from "../assets/arrow_down.png";
import arrowUp from "../assets/arrow_up.png";
import "../Styles/Wrap.css";


export default function Wrap(props) {
  // on initialise a false pour indiquer que c'est fermé
  const [isOpen, setIsOpen] = useState(false);

  // on ouvre 
  const openWrap = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="wraped">
      {/* "toggle" indique si le contenu est ouvert ou fermée */}
      <div className="toggle" onClick={openWrap}>
        <h2>{props.label}</h2>
        {!isOpen ? (
          <img src={arrowDown} alt="wrap fermé" />
        ) : (
          <img src={arrowUp} alt="wrap ouvert" />
        )}
      </div>
      {/* Si isOpen est "true" on affiche le contenu */}
      {isOpen && <div className="text_content">{props.children}</div>}
    </div>
  );
}
