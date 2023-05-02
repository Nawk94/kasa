import React, { useState } from 'react';
import "../Styles/Lecarousel.css";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";

export default function Carousel({ images }) {
  // On Utilise le hook useState pour stocker l'index de l'image actuelle
  const [CurrentImg, SetCurrentImg] = useState(0);
  
  //si la longueur du tableau est <= 1 les fleches ne sont pas affichées
  if (images.length <= 1) {
    return (
      <div className="carousel">
        <div
          className="carousel2"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      </div>
    );
  }

  const handleLeftArrowClick = () => {
    // Si l'image est la première on réinitialise à la dernière
    if (CurrentImg === 0) {
      SetCurrentImg(images.length - 1);
    } else {
      // Sinon on enleve 1 à l'index de l'image 
      SetCurrentImg(CurrentImg - 1);
    }
  };
  


  const handleRightArrowClick = () => {
    // Si l'image est la dernière on réinitialise à la première
    if (CurrentImg === images.length - 1) {
      SetCurrentImg(0);
    } else {
      // Sinon on ajoute 1 à l'index de l'image 
      SetCurrentImg(CurrentImg + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel2"
        style={{ backgroundImage: `url(${images[CurrentImg]})` }}
      >
        <div className="left" onClick={handleLeftArrowClick}>
          <img src={ArrowLeft} alt="Image Suivante" />
        </div>

        <div className="right" onClick={handleRightArrowClick}>
          <img src={ArrowRight} alt="Image Précédente" />
        </div>
      </div>
    </div>
  );
}
