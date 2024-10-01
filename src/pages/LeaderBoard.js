import React, { useEffect, useState } from "react";
import LeaderBoardCard from "./LeaderBoardCard";
import Loader from "../pages/Loader";
import "./style.css";
import axios from "axios";

export default function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://explodingkittenserver.onrender.com/game/leaderboard"
        );
        const data = response.data;
        console.log(data.leaderboard);
        setLeaderboard(data.leaderboard);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="leader-board-outer">
      {leaderboard.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className="leaderBoard-container">
          {leaderboard.map((data, key) => (
            <LeaderBoardCard
              key={key}
              rank={key + 1}
              name={data.username}
              lastPlayed={new Date().toLocaleString()} // Convert to a human-readable format
              totalScore={data.totalScore}
            />
          ))}
        </div>
      )}
    </div>
  );
}
