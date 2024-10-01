import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logout } from "../Redux/slices/userSlice";
import "./style.css";

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { isUserLogged, userData } = useSelector((state) => state.user);

  const shownav =
    location.pathname !== "/signup" && location.pathname !== "/login";

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const barStyle = {
    backgroundColor: toggle ? "black" : "white",
  };

  return (
    <>
      {shownav && (
        <div className="navbar">
          <nav className="inner-nav">
            <Link to="/">
              {" "}
              <h2 className="brand">Kitten</h2>
            </Link>

            <button
              className={`${toggle ? "nav-btn" : "toggle-btn"}`}
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle Navigation"
            >
              <div
                className="hor-bar"
                style={{
                  ...barStyle,
                  transform: toggle ? "rotate(45deg)" : "rotate(0)",
                  marginTop: toggle ? "10px" : "5px",
                }}
              ></div>
              <div
                className="hor-bar"
                style={{
                  opacity: toggle ? "0" : "1",
                }}
              ></div>
              <div
                className="hor-bar"
                style={{
                  ...barStyle,
                  transform: toggle ? "rotate(-45deg)" : "rotate(0)",
                  marginTop: toggle ? "-18px" : "0px",
                  marginBottom: toggle ? "9px" : "5px",
                }}
              ></div>
            </button>
          </nav>
        </div>
      )}

      <div className={`nav-layout ${toggle ? "show-nav" : "hide-nav"}`}>
        <ul className="nav-links">
          <li className="nav-link-item" onClick={() => setToggle(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link-item" onClick={() => setToggle(false)}>
            <Link to="/game">Play Game</Link>
          </li>
          <li className="nav-link-item" onClick={() => setToggle(false)}>
            <Link to="/leaderboard">Leader Board</Link>
          </li>

          {isUserLogged ? (
            <>
              <li className="nav-link-item" onClick={() => setToggle(false)}>
                <span style={{ color: "black" }}>
                  Welcome, {userData?.name}
                </span>
              </li>
              <li className="nav-link-item" onClick={handleLogout}>
                <span className="Logout"> Logout</span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link-item" onClick={() => setToggle(false)}>
                <Link to="/login">Login</Link>
              </li>
              <li className="nav-link-item" onClick={() => setToggle(false)}>
                <Link to="/signup">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default memo(Navbar);
