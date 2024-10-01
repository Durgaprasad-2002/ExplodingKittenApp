// SignIn.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";

export default function SignIn() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [message, setMessage] = useState("");
  let [disable, setDisable] = useState(false);

  // ------------------------Form Input Handler and States -------------
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function HandleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // funtion to handle Submit
  function HandleSubmit(e) {
    e.preventDefault();
    setDisable(true);

    axios
      .post("https://explodingkittenserver.onrender.com/auth/login", {
        ...formData,
      })
      .then((data) => {
        const { token, user } = data.data;

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }, 4.32e7);

        dispatch(setUser({ userData: user, token }));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Login failed, please try again.");
      })
      .finally(() => {
        setDisable(false);
      });
  }

  return (
    <>
      <div className="Container-login">
        <div className="login-box">
          <h2 className="title-login">Login</h2>

          <form action="post" onSubmit={HandleSubmit}>
            <div className="form-container">
              <label className="label">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                onChange={HandleChange}
                placeholder="user@gmail.com"
                required
              />
            </div>
            <div className="form-container">
              <label className="label">Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                onChange={HandleChange}
                placeholder=""
                required
              />
              <p className="warning-msg">{message}</p>
            </div>
            <div className="form-container">
              <button type="submit" className="submit-btn" disabled={disable}>
                Login
              </button>
            </div>
            <div className="form-container">
              <p className="alternate-msg">
                Don't have an account?{"  "}
                <Link to="/signup" className="links">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
