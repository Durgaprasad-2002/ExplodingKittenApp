import { lazy, Suspense } from "react";

import Loader from "./pages/Loader";
import LeaderBoard from "./pages/LeaderBoard";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayAgain from "./pages/PlayAgain";

const GameHome = lazy(() => import("./pages/GameHome"));

function App() {
  function HandleGameStart(params) {}
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route
              path="game"
              element={
                <Suspense fallback={<Loader />}>
                  <GameHome />
                </Suspense>
              }
            />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
