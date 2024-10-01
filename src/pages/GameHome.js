import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { generateDeck } from "../assets/utils/util";
import { startGame, updateScore } from "../Redux/slices/gameSlice";

import WonGame from "./WonGame";
import StartGame from "./StartGame";
import PlayAgain from "./PlayAgain";
import KittenContainer from "./KittenContainer";
import Modal from "./Modal";
import axios from "axios";

export default function GameHome() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // -----------------------Modal Triggers  ---------------------

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  function GetAlert(msg) {
    setMessage(msg);
    setShowModal(true);
  }

  // ------------------------ Verifying User Logged ------------------
  const { isUserLogged, userData } = useSelector((state) => state.user);
  const gameId = useSelector((state) => state.game.Game.gameId);

  useEffect(() => {
    if (!isUserLogged) {
      navigate("/login");
    }
  }, [isUserLogged, navigate]);

  // --------------------------- Game Status States ----------------------------

  const [gameStarted, setGameStarted] = useState(() => {
    const status = JSON.parse(localStorage.getItem("gameStatus"));
    return status || false;
  });

  const [gameCompleted, setGameCompleted] = useState(() => {
    const status = JSON.parse(localStorage.getItem("gameEnded"));
    return status || false;
  });

  const [win, setWin] = useState(() => {
    return JSON.parse(localStorage.getItem("winState")) || false;
  });

  // ------------------------- Game Cards States -----------------------

  const [deckCards, setDeckCards] = useState(() => {
    const storedDeck = JSON.parse(localStorage.getItem("deckCards"));
    return storedDeck || generateDeck();
  });

  const [defuseCardCount, setDefuseCardCount] = useState(() => {
    return JSON.parse(localStorage.getItem("defuseCardCount")) || 0;
  });

  // Handle the function based on the Drew Card
  function handleCardClick(card) {
    let isBombExploded = false;

    switch (card.type) {
      case "cat":
        GetAlert("You drew a Cat card. You're safe!");
        handleRemoveCard(card.id);
        break;

      case "defuseCat":
        setDefuseCardCount((prev) => prev + 1);
        GetAlert(
          "You drew a Defuse card! This will protect you from one Exploding Kitten."
        );
        handleRemoveCard(card.id);
        break;

      case "shuffle":
        GetAlert(
          "You drew a Shuffle card! The game is restarting with a new deck."
        );
        setDeckCards(generateDeck());
        setDefuseCardCount(0);
        break;

      case "bombCat":
        if (defuseCardCount > 0) {
          GetAlert(
            "You drew an Exploding Kitten! But you used a Defuse card to survive."
          );
          setDefuseCardCount((prev) => prev - 1);
          handleRemoveCard(card.id);
        } else {
          GetAlert(
            "You drew an Exploding Kitten! No Defuse card left. You lost."
          );
          isBombExploded = true;
          setDeckCards([]);
        }
        break;

      default:
        break;
    }

    if (!isBombExploded && deckCards.length === 1) {
      setWin(true);
      HandleGamePlay("win");
    } else if (isBombExploded) {
      HandleGamePlay("lost");
    }
  }

  // function to update game on server
  async function HandleGamePlay(status) {
    setGameCompleted(() => true);
    await axios
      .post("https://explodingkittenserver.onrender.com/game/updatescore/end", {
        action: status,
        gameId: gameId,
        userId: userData.userId,
      })
      .then((data) => {
        console.log("Game result data:", data.data);
      })
      .catch((err) => {
        console.error("Error updating game state:", err);
      });
  }

  // funtion to remove Card
  function handleRemoveCard(id) {
    setDeckCards((prevDeck) => prevDeck.filter((card) => card.id !== id));
  }

  // function to  handle flip state of  Card
  function handleFlip(id) {
    setDeckCards((prevDeck) =>
      prevDeck.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );
  }

  // Funtion to initilaze the game start
  async function HandleGameStart() {
    await axios
      .post("https://explodingkittenserver.onrender.com/game/start", {
        ...userData,
      })
      .then((data) => {
        const { gameId } = data.data;
        dispatch(
          startGame({
            gameId: gameId,
          })
        );
        setWin(false);
        setGameStarted(true);
        setDeckCards(generateDeck());
        setDefuseCardCount(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ------------------------ Updating LocalStorage of States -------------

  useEffect(() => {
    localStorage.setItem("gameEnded", gameCompleted);
  }, [gameCompleted]);

  useEffect(() => {
    localStorage.setItem("gameStatus", gameStarted);
  }, [gameStarted]);

  useEffect(() => {
    localStorage.setItem("winState", win);
  }, [win]);

  useEffect(() => {
    localStorage.setItem("deckCards", JSON.stringify(deckCards));
  }, [deckCards]);

  useEffect(() => {
    localStorage.setItem("defuseCardCount", defuseCardCount);
  }, [defuseCardCount]);

  useEffect(() => {
    return () => {
      if (gameCompleted) {
        localStorage.removeItem("gameStatus");
        localStorage.removeItem("winState");
        localStorage.removeItem("gameEnded");
        localStorage.removeItem("deckCards");
        localStorage.removeItem("defuseCardCount");
      }
    };
  }, [gameCompleted]);

  return (
    <>
      <div className="outer-card-container">
        {gameStarted ? (
          <>
            {deckCards.length > 0 ? (
              <KittenContainer
                deckCards={deckCards}
                handleCardClick={handleCardClick}
                handleFlip={handleFlip}
              />
            ) : win ? (
              <WonGame HandleGameStart={HandleGameStart} />
            ) : (
              <PlayAgain HandleGameStart={HandleGameStart} />
            )}
          </>
        ) : (
          <StartGame HandleGameStart={HandleGameStart} />
        )}
      </div>

      <Modal
        message={message}
        showState={showModal}
        HandleShowState={setShowModal}
      />
    </>
  );
}
