import React, { useEffect } from "react";
import Game from "./components/game.jsx";

const App = () => {
  useEffect(() => {
    document.title = "tic-tac-toe";
  }, []);

  return <Game />;
};
export default App;
