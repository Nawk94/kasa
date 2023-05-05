import React, { useState } from "react";
import arrowDown from "../assets/arrow_down.png";
import arrowUp from "../assets/arrow_up.png";
import "../styles/Wrap.css";


export default function Wrap(props) {
  // on initialise a false pour indiquer que c'est fermé
  const [Open, setOpen] = useState(false);

  // on ouvre 
  const openWrap = () => {
    setOpen((Open) => !Open);
  };

  return (
    <div className="wraped">
      {/* "show" indique si le contenu est ouvert ou fermée */}
      <div className="show" onClick={openWrap}>
        <h2>{props.label}</h2>
        {!Open ? (
          <img src={arrowDown} alt="Encadré fermé" />
        ) : (
          <img src={arrowUp} alt="Encadré ouvert" />
        )}
      </div>
      {/* Si Open est "true" on affiche le contenu */}
      {Open && <div className="text_content">{props.children}</div>}
    </div>
  );
}
