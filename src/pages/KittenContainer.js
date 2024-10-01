import React, { memo } from "react";
import KittenCard from "./KittenCard";

function KittenContainer({ deckCards, handleCardClick, handleFlip }) {
  return (
    <div className="deckofcards-container">
      {deckCards.map((card) => (
        <KittenCard
          key={card.id}
          img={card.img}
          id={card.id}
          type={card.type}
          flipped={card.flipped}
          HandleClick={handleCardClick}
          handleFlip={handleFlip}
        />
      ))}
    </div>
  );
}

export default memo(KittenContainer);
