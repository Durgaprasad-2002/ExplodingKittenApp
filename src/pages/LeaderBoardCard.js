import React, { memo } from "react";
import "./style.css";

function LeaderBoardCard({ rank, name, lastPlayed, totalScore }) {
  return (
    <div className="leader-card">
      <div className="rank">
        <span className="rank-number">#{rank}</span>{" "}
        <span className="name">{name}</span>
      </div>

      <div className="details">
        <strong>Total Score :</strong>{" "}
        {totalScore <= 0 ? (
          <span className="red-text">{totalScore}</span>
        ) : (
          <span className="green-text">{totalScore}</span>
        )}
      </div>
    </div>
  );
}

export default memo(LeaderBoardCard);
