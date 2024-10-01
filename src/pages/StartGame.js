import React from "react";
import "./style.css";

function StartGame({ HandleGameStart }) {
  return (
    <div className="start-game">
      <h1>Exploding Kitten</h1>
      <p>Click on the card to reveal it!</p>
      <h4>Are you ready to play?</h4>
      <button className="start-button" onClick={HandleGameStart}>
        Start Game
      </button>
    </div>
  );
}

export default React.memo(StartGame);
