import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-body">
      <div className="brand-main-desc">
        <div>
          <h1>Welcome to Exploding Kitten! 😸💣</h1>
          <Link
            to="/game"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <button className="get-btn">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle
                  stroke-width="3"
                  stroke="black"
                  r="35.5"
                  cy="37"
                  cx="37"
                ></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>

        <a href="#about" style={{ textDecoration: "none", color: "white" }}>
          <div className="ani-outer">
            <div className="ani-inner">
              <article className="swipe-icon">⇑</article>
            </div>
          </div>
        </a>
      </div>
      <img
        className="exp-cat-img"
        src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_CA/games/switch/e/exploding-kittens-switch/hero"
      />
      <div className="about-game" id="about">
        <h3 className="about-title">About Game</h3>
        <p>
          Get ready for a thrilling game of strategy, luck, and adorable chaos!
          Exploding Kitten is a single-player card game where you must outwit
          the deck and avoid the dreaded Exploding Kitten card. The rules are
          simple but the stakes are high — draw your cards carefully, and use
          your wits to survive.
        </p>
        <ul className="card-types">
          <li className="card-type-ele cat-card">
            <div className="card-icon">😼</div>
            <div className="card-content">
              <h4>Cat Card</h4>
              <p>Safe to draw, but it won’t help you defuse any danger!</p>
            </div>
          </li>
          <li className="card-type-ele defuse-card">
            <div className="card-icon">🙅‍♂️</div>
            <div className="card-content">
              <h4>Defuse Card</h4>
              <p>
                This card is your lifeline! Use it to defuse an Exploding
                Kitten.
              </p>
            </div>
          </li>
          <li className="card-type-ele shuffle-card">
            <div className="card-icon">🔀</div>
            <div className="card-content">
              <h4>Shuffle Card</h4>
              <p>
                Restart the game with a new shuffled deck — your fate is reset!
              </p>
            </div>
          </li>
          <li className="card-type-ele exploding-kitten-card">
            <div className="card-icon">💣</div>
            <div className="card-content">
              <h4>Exploding Kitten Card</h4>
              <p>
                Watch out! If you draw this card and don't have a Defuse card,
                it's game over.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Home);
