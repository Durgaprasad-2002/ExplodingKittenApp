import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-body">
      <div className="brand-main-desc">
        <h1>Welcome to Exploding Kitten! 😸💣</h1>
        <Link to="/game">
          {" "}
          <button className="submit-btn">Get Started</button>
        </Link>

        <div className="ani-outer">
          <div className="ani-inner">
            <article className="swipe-icon">⇑</article>
          </div>
        </div>
        <p>To Know More...</p>
      </div>
      <img
        className="exp-cat-img"
        src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_CA/games/switch/e/exploding-kittens-switch/hero"
      />
      <div className="about-game">
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
