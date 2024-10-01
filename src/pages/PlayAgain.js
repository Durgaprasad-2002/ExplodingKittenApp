import React, { memo } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function PlayAgain({ HandleGameStart }) {
  return (
    <div className="play-again-modal">
      <div className="modal-content">
        <h2>Game Over!</h2>
        <p className="p">
          You lost the game. Would you like to try again or end the game?
        </p>
        <div className="button-group">
          <button
            className="modal-btn-1 play-again-btn"
            onClick={HandleGameStart}
          >
            Play Again
          </button>
          <Link to="/leaderboard">
            <button className="modal-btn-1 end-game-btn">Leader Board</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(PlayAgain);
