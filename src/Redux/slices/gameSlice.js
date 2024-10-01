// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const Game = JSON.parse(localStorage.getItem("game")) || {};

  return {
    Game,
  };
};

const initialState = getInitialState();

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state, action) {
      state.Game = {};
      state.Game.gameId = action.payload.gameId;
      localStorage.removeItem("game");
      localStorage.setItem("game", JSON.stringify(state.Game));
    },
    updateScore(state, action) {
      state.Game.score = action.payload.score;
      localStorage.removeItem("game");
      localStorage.setItem("game", JSON.stringify(state.Game));
    },
  },
});

export const { startGame, updateScore } = gameSlice.actions;
export default gameSlice.reducer;
