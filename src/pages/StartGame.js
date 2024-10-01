import React from "react";
import "./style.css";

function StartGame({ HandleGameStart }) {
  return (
    <div className="start-game">
      <h1>Exploding Kitten</h1>
      <p>Are you ready to play?</p>
      <button className="start-button" onClick={HandleGameStart}>
        Start Game
      </button>
    </div>
  );
}

export default React.memo(StartGame);
