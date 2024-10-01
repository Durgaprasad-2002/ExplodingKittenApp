import React, { memo } from "react";
import cardBack from "../assets/images/expkitten.avif";
import "./style.css";

function KittenCard({ img, id, type, HandleClick, flipped, handleFlip }) {
  const handleCardClick = () => {
    handleFlip(id);
    setTimeout(() => HandleClick({ id, type }), 2500);
  };

  return (
    <div className="cardHolder" onClick={handleCardClick}>
      <div className={`card noContentFace ${flipped ? "flippedNoFace" : ""}`}>
        <img src={cardBack} className="img-no-face" alt="Back of card" />
      </div>
      <div className={`card contentFace ${flipped ? "flippedFace" : ""}`}>
        <img src={img} className="img-face" alt="Front of card" />
      </div>
    </div>
  );
}

export default memo(KittenCard);
