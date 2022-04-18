import React, { useState, createContext } from "react";
import { gameArtists } from "../data";
import { getRandom } from "../utils";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [turnCounter, setTurnCounter] = useState(6);

  const [goalArtist, setGoalArtist] = useState(getRandom(gameArtists));

  const [gameIsActive, setGameIsActive] = useState(false);

  const [gameMessage, setGameMessage] = useState("");

  const [gameOver, setGameOver] = useState(false)

  return (
    <GameContext.Provider
      value={{
        turnCounter,
        setTurnCounter,
        goalArtist,
        gameIsActive,
        setGameIsActive,
        gameMessage,
        setGameMessage,
        setGoalArtist,
        gameOver, 
        setGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
