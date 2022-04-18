import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../apiCalls";
import Error from "../components/Error/Error";
import {
  initialItems,
  gameArtists,
  attemptResponses,
  winResponses,
  loseResponses,
} from "../data";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const [turnCounter, setTurnCounter] = useState(6);

  const [goalArtist, setGoalArtist] = useState(
    gameArtists[getRandomIndex(gameArtists)]
  );

  const [gameIsActive, setGameIsActive] = useState(false);

  const [gameMessage, setGameMessage] = useState("");

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
