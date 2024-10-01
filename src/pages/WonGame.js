import React, { memo } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function WonGame({ HandleGameStart }) {
  return (
    <div className="won-game">
      <h1>Congratulations! 🎉</h1>
      <p>You won the game!</p>

      <button className="restart-button" onClick={HandleGameStart}>
        Play Again
      </button>
      <Link to="/leaderboard">
        <button
          className="modal-btn-1 end-game-btn"
          style={{ marginLeft: "10px" }}
        >
          Leader Board
        </button>
      </Link>
    </div>
  );
}

export default memo(WonGame);
