import React, { useState } from 'react';
import "../Styles/Lecarousel.css";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

export default function Carousel({ images }) {
  // On Utilise le hook useState pour stocker l'index de l'image actuelle
  const [currImg, setCurrImg] = useState(0);
  
  //si la longueur du tableau est <= 1 les fleches ne sont pas affichées
  if (images.length <= 1) {
    return (
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      </div>
    );
  }

  const handleLeftArrowClick = () => {
    // Si l'image est la première on réinitialise à la dernière
    if (currImg === 0) {
      setCurrImg(images.length - 1);
    } else {
      // Sinon on enleve 1 à l'index de l'image 
      setCurrImg(currImg - 1);
    }
  };
  


  const handleRightArrowClick = () => {
    // Si l'image est la dernière on réinitialise à la première
    if (currImg === images.length - 1) {
      setCurrImg(0);
    } else {
      // Sinon on ajoute 1 à l'index de l'image 
      setCurrImg(currImg + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg]})` }}
      >
        <div className="left" onClick={handleLeftArrowClick}>
          <img src={arrowLeft} alt="Suivant" />
        </div>

        <div className="right" onClick={handleRightArrowClick}>
          <img src={arrowRight} alt="Précédent" />
        </div>
      </div>
    </div>
  );
}
